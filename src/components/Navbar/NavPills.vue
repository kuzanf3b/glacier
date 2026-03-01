<script setup lang="ts">
import { gsap } from "gsap";
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";

export type NavItem = {
  label: string;
  href: string;
};

interface Props {
  items: NavItem[];
  ease?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ease: "power3.easeOut",
});

const circleRefs = ref<Array<HTMLSpanElement | null>>(
  new Array(props.items.length).fill(null),
);
const tlRefs = ref<Array<gsap.core.Timeline | null>>(
  new Array(props.items.length).fill(null),
);
const activeTweenRefs = ref<Array<gsap.core.Tween | null>>(
  new Array(props.items.length).fill(null),
);
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
      {
        scale: 1.2,
        xPercent: -50,
        duration: 2,
        ease: props.ease,
        overwrite: "auto",
      },
      0,
    );

    if (label) {
      tl.to(
        label,
        { y: -(h + 8), duration: 2, ease: props.ease, overwrite: "auto" },
        0,
      );
    }

    if (hoverLabel) {
      gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
      tl.to(
        hoverLabel,
        { y: 0, opacity: 1, duration: 2, ease: props.ease, overwrite: "auto" },
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
    ease: props.ease,
    overwrite: "auto",
  });
};

const handleLeave = (i: number) => {
  const tl = tlRefs.value[i];
  if (!tl) return;
  activeTweenRefs.value[i]?.kill();
  activeTweenRefs.value[i] = tl.tweenTo(0, {
    duration: 0.2,
    ease: props.ease,
    overwrite: "auto",
  });
};

const setCircleRef = (el: HTMLSpanElement | null, index: number) => {
  if (circleRefs.value.length > index) {
    circleRefs.value[index] = el;
  }
};

onMounted(() => {
  layout();
  window.addEventListener("resize", layout);

  if (document.fonts) {
    document.fonts.ready.then(layout).catch(() => {});
  }

  const navItems = navItemsRef.value;
  if (navItems) {
    gsap.set(navItems, { width: 0, overflow: "hidden" });
    gsap.to(navItems, { width: "auto", duration: 0.6, ease: props.ease });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", layout);
});
</script>

<template>
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
</template>

<style scoped lang="scss">
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
</style>
