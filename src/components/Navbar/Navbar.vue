<script setup lang="ts">
import NavLogo from "./NavLogo.vue";
import NavPills from "./NavPills.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";
import type { NavItem } from "./NavPills.vue";

const items: NavItem[] = [
  { label: "Ports", href: "/ports" },
  { label: "Pallete", href: "/pallete" },
];
</script>

<template>
  <nav class="pill-nav-wrapper">
    <div class="pill-nav">
      <NavLogo />
      <NavPills :items="items" />
      <ThemeSwitcher />
    </div>
  </nav>
</template>

<style scoped lang="scss">
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
</style>
