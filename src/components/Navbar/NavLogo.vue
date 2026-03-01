<script setup lang="ts">
import { gsap } from "gsap";
import { onMounted, ref, useTemplateRef } from "vue";
import iceLogo from "../../assets/svg/ice.svg";

const ease = "power3.easeOut";
const logoImgRef = useTemplateRef<HTMLImageElement>("logoImgRef");
const logoTweenRef = ref<gsap.core.Tween | null>(null);

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

onMounted(() => {
  const img = logoImgRef.value;
  if (img) {
    gsap.set(img, { scale: 0 });
    gsap.to(img, { scale: 1, duration: 0.6, ease });
  }
});
</script>

<template>
  <RouterLink
    to="/"
    class="logo-link"
    aria-label="Home"
    @mouseenter="handleLogoEnter"
  >
    <img :src="iceLogo" alt="Glacier" ref="logoImgRef" class="logo-img" />
    <span class="logo-text">Glacier</span>
  </RouterLink>
</template>

<style scoped lang="scss">
.logo-link {
  @include flex-center;
  gap: $spacing-sm;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  display: block;
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.logo-text {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: var(--color-text);
  white-space: nowrap;
}
</style>
