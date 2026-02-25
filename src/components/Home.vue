<script setup lang="ts">

</script>

<template>
  <div class="home">
    <h1>Warmer Ice</h1>
    <p>Glacier is a color palette generator that helps you create beautiful color schemes for your projects.</p>
    <a href="/pallete" class="btn">Discover →</a>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/variables" as *;

.home {
  margin: 0 $sidebar-width;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 80vh;

  h1 {
    width: 400px;
    font-size: $font-size-4xl;
    color: var(--color-text);
    margin-bottom: $spacing-md;
  }

  p {
    width: 600px;
    font-size: $font-size-xl;
    color: var(--color-subtle);
    margin-bottom: $spacing-xl;
  }

  a {
    font-weight: $font-weight-semibold;
    color: var(--color-text);
    text-decoration: none;
    padding: $spacing-md $spacing-xl;
    background-color: var(--color-surface);
    border-radius: $radius-xl;
    transition: background-color $transition-base;

    &:hover {
      background-color: var(--color-overlay);
    }
  }
}
</style>
