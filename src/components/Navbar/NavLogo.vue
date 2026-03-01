<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, ref, useTemplateRef } from "vue";
import iceLogo from "../../assets/svg/ice.svg";

interface Props {
  ease?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ease: "power3.easeOut",
});

const logoImgRef = useTemplateRef<HTMLImageElement>("logoImgRef");
const logoRef = useTemplateRef<HTMLElement>("logoRef");
const logoTweenRef = ref<gsap.core.Tween | null>(null);

const handleLogoEnter = () => {
  const img = logoImgRef.value;
  if (!img) return;
  logoTweenRef.value?.kill();
  gsap.set(img, { rotate: 0 });
  logoTweenRef.value = gsap.to(img, {
    rotate: 360,
    duration: 0.4,
    ease: props.ease,
    overwrite: "auto",
  });
};

onMounted(() => {
  const logo = logoRef.value;
  if (logo) {
    gsap.set(logo, { scale: 0 });
    gsap.to(logo, { scale: 1, duration: 0.6, ease: props.ease });
  }
});
</script>

<template>
  <RouterLink
    to="/"
    class="logo-link"
    ref="logoRef"
    aria-label="Home"
    @mouseenter="handleLogoEnter"
  >
    <img :src="iceLogo" alt="Glacier" ref="logoImgRef" class="logo-img" />
  </RouterLink>
</template>

<style scoped lang="scss">
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
</style>
