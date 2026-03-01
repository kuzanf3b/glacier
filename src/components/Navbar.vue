<script setup lang="ts">
import { gsap } from "gsap";
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";
import iceLogo from "../assets/svg/ice.svg";

type NavItem = {
  label: string;
  href: string;
};

const items: NavItem[] = [
  { label: "Ports", href: "/ports" },
  { label: "Pallete", href: "/pallete" },
];

const ease = "power3.easeOut";

// ── Theme switcher ──────────────────────────────────────
const themes = ["zero", "mist", "peak"] as const;
const currentTheme = ref<string>("zero");
const showThemeMenu = ref(false);

const setTheme = (theme: string) => {
  currentTheme.value = theme;
  document.documentElement.setAttribute("data-theme", theme);
  showThemeMenu.value = false;
  localStorage.setItem("glacier-theme", theme);
};

const toggleThemeMenu = () => {
  showThemeMenu.value = !showThemeMenu.value;
};

const themeButtonRef = useTemplateRef<HTMLButtonElement>("themeButtonRef");
const themeMenuRef = useTemplateRef<HTMLDivElement>("themeMenuRef");

const handleClickOutside = (e: MouseEvent) => {
  if (
    showThemeMenu.value &&
    themeButtonRef.value &&
    themeMenuRef.value &&
    !themeButtonRef.value.contains(e.target as Node) &&
    !themeMenuRef.value.contains(e.target as Node)
  ) {
    showThemeMenu.value = false;
  }
};

// ── GSAP refs & animation ───────────────────────────────
const circleRefs = ref<Array<HTMLSpanElement | null>>(
  new Array(items.length).fill(null),
);
const tlRefs = ref<Array<gsap.core.Timeline | null>>(
  new Array(items.length).fill(null),
);
const activeTweenRefs = ref<Array<gsap.core.Tween | null>>(
  new Array(items.length).fill(null),
);
const logoImgRef = useTemplateRef<HTMLImageElement>("logoImgRef");
const logoTweenRef = ref<gsap.core.Tween | null>(null);
const logoRef = useTemplateRef<HTMLElement>("logoRef");
const navItemsRef = useTemplateRef<HTMLDivElement>("navItemsRef");

const layout = () => {
  circleRefs.value.forEach((circle, index) => {
    if (!circle?.parentElement) return;

    const pill = circle.parentElement as HTMLElement;
    const rect = pill.getBoundingClientRect();
    const { width: w, height: h } = rect;
    const R = ((w * w) / 4 + h * h) / (2 * h);
    const D = Math.ceil(2 * R) + 2;
    const delta =
      Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
    const originY = D - delta;

    circle.style.width = `${D}px`;
    circle.style.height = `${D}px`;
    circle.style.bottom = `-${delta}px`;

    gsap.set(circle, {
      xPercent: -50,
      scale: 0,
      transformOrigin: `50% ${originY}px`,
    });

    const label = pill.querySelector<HTMLElement>(".pill-label");
    const hoverLabel = pill.querySelector<HTMLElement>(".pill-label-hover");

    if (label) gsap.set(label, { y: 0 });
    if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

    tlRefs.value[index]?.kill();
    const tl = gsap.timeline({ paused: true });

    tl.to(
      circle,
      { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
      0,
    );

    if (label) {
      tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0);
    }

    if (hoverLabel) {
      gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
      tl.to(
        hoverLabel,
        { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
        0,
      );
    }

    tlRefs.value[index] = tl;
  });
};

const handleEnter = (i: number) => {
  const tl = tlRefs.value[i];
  if (!tl) return;
  activeTweenRefs.value[i]?.kill();
  activeTweenRefs.value[i] = tl.tweenTo(tl.duration(), {
    duration: 0.3,
    ease,
    overwrite: "auto",
  });
};

const handleLeave = (i: number) => {
  const tl = tlRefs.value[i];
  if (!tl) return;
  activeTweenRefs.value[i]?.kill();
  activeTweenRefs.value[i] = tl.tweenTo(0, {
    duration: 0.2,
    ease,
    overwrite: "auto",
  });
};

const handleLogoEnter = () => {
  const img = logoImgRef.value;
  if (!img) return;
  logoTweenRef.value?.kill();
  gsap.set(img, { rotate: 0 });
  logoTweenRef.value = gsap.to(img, {
    rotate: 360,
    duration: 0.4,
    ease,
    overwrite: "auto",
  });
};

const setCircleRef = (el: HTMLSpanElement | null, index: number) => {
  if (circleRefs.value.length > index) {
    circleRefs.value[index] = el;
  }
};

onMounted(() => {
  // Restore saved theme
  const saved = localStorage.getItem("glacier-theme");
  if (saved && themes.includes(saved as (typeof themes)[number])) {
    setTheme(saved);
  }

  layout();
  window.addEventListener("resize", layout);
  document.addEventListener("click", handleClickOutside);

  if (document.fonts) {
    document.fonts.ready.then(layout).catch(() => {});
  }

  // Initial load animation
  const logo = logoRef.value;
  const navItems = navItemsRef.value;

  if (logo) {
    gsap.set(logo, { scale: 0 });
    gsap.to(logo, { scale: 1, duration: 0.6, ease });
  }

  if (navItems) {
    gsap.set(navItems, { width: 0, overflow: "hidden" });
    gsap.to(navItems, { width: "auto", duration: 0.6, ease });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", layout);
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <nav class="pill-nav-wrapper">
    <div class="pill-nav">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="logo-link"
        ref="logoRef"
        aria-label="Home"
        @mouseenter="handleLogoEnter"
      >
        <img :src="iceLogo" alt="Glacier" ref="logoImgRef" class="logo-img" />
      </RouterLink>

      <!-- Nav Items -->
      <div class="nav-items" ref="navItemsRef">
        <ul role="menubar" class="nav-list">
          <li
            v-for="(item, i) in items"
            :key="item.href"
            role="none"
            class="nav-list-item"
          >
            <RouterLink
              :to="item.href"
              class="pill-item"
              @mouseenter="handleEnter(i)"
              @mouseleave="handleLeave(i)"
            >
              <span
                class="hover-circle"
                aria-hidden="true"
                :ref="(el) => setCircleRef(el as HTMLSpanElement, i)"
              />
              <span class="label-stack">
                <span class="pill-label">{{ item.label }}</span>
                <span class="pill-label-hover" aria-hidden="true">
                  {{ item.label }}
                </span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Theme Switcher -->
      <div class="theme-switcher">
        <button
          ref="themeButtonRef"
          class="theme-button"
          aria-label="Change color scheme"
          @click="toggleThemeMenu"
        >
          <span class="theme-dot" />
        </button>

        <Transition name="theme-fade">
          <div v-if="showThemeMenu" ref="themeMenuRef" class="theme-menu">
            <button
              v-for="theme in themes"
              :key="theme"
              class="theme-option"
              :class="{ active: currentTheme === theme }"
              @click="setTheme(theme)"
            >
              <span class="theme-preview" :class="`theme-preview--${theme}`" />
              <span class="theme-name">{{ theme }}</span>
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
/* Wrapper */
.pill-nav-wrapper {
  position: fixed;
  top: $spacing-md;
  left: 0;
  right: 0;
  z-index: $z-sticky;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.pill-nav {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  pointer-events: auto;
}

/* Logo */
.logo-link {
  @include flex-center;
  width: 42px;
  height: 42px;
  border-radius: $radius-pill;
  background-color: var(--color-surface);
  overflow: hidden;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  display: block;
  width: 20px;
  height: 20px;
  object-fit: contain;
}

/* Nav Items Container */
.nav-items {
  display: flex;
  align-items: center;
  height: 42px;
  background-color: var(--color-surface);
  border-radius: $radius-pill;
}

.nav-list {
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 3px;
  height: 100%;
  list-style: none;
  gap: 3px;
}

.nav-list-item {
  display: flex;
  height: 100%;
}

/* Pill Item */
.pill-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding: 0 18px;
  border-radius: $radius-pill;
  overflow: hidden;
  background-color: var(--color-overlay);
  color: var(--color-text);
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  line-height: 0;
  letter-spacing: 0.2px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
}

/* Hover circle */
.hover-circle {
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 1;
  border-radius: $radius-pill;
  background-color: var(--color-cyanide);
  pointer-events: none;
  will-change: transform;
}

/* Label stack */
.label-stack {
  display: inline-block;
  position: relative;
  z-index: 2;
  line-height: 1;
}

.pill-label {
  display: inline-block;
  position: relative;
  z-index: 2;
  line-height: 1;
  will-change: transform;
}

.pill-label-hover {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  color: var(--color-base);
  will-change: transform, opacity;
}

/* Theme Switcher */
.theme-switcher {
  position: relative;
}

.theme-button {
  @include flex-center;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: $radius-pill;
  background-color: var(--color-surface);
  cursor: pointer;
  transition: background-color $transition-fast;

  &:hover {
    background-color: var(--color-overlay);
  }
}

.theme-dot {
  width: 16px;
  height: 16px;
  border-radius: $radius-pill;
  background: linear-gradient(
    135deg,
    var(--color-cyanide),
    var(--color-petal),
    var(--color-lilac)
  );
}

.theme-menu {
  position: absolute;
  top: calc(100% + #{$spacing-sm});
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 4px;
  min-width: 140px;
  border-radius: $radius-lg;
  background-color: var(--color-surface);
  box-shadow: $shadow-lg;
}

.theme-option {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: $radius-md;
  background: transparent;
  color: var(--color-text);
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color $transition-fast;

  &:hover {
    background-color: var(--color-overlay);
  }

  &.active {
    background-color: var(--color-highlight-med);
  }
}

.theme-preview {
  width: 16px;
  height: 16px;
  border-radius: $radius-pill;
  border: 2px solid var(--color-muted);

  &--zero {
    background-color: #13131c;
  }

  &--mist {
    background-color: #1a1b26;
  }

  &--peak {
    background-color: #ffffff;
  }
}

.theme-name {
  line-height: 1;
}

/* Transition */
.theme-fade-enter-active,
.theme-fade-leave-active {
  transition:
    opacity $transition-fast,
    transform $transition-fast;
}

.theme-fade-enter-from,
.theme-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
