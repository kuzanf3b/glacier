<script setup lang="ts">

</script>

<template>
  <nav>
    <div class="navbar">
      <div class="navbar-start">
        <a href="/" class="icon"><img src="../assets/svg/ice.svg" alt="ice"></a>
        <a href="/" class="navbar-item">Glacier</a>
      </div>
      <div class="navbar-end">
        <a href="/pallete" class="navbar-item">Pallete</a>
        <input type="text" placeholder="Search" class="navbar-item search" />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "../assets/scss/variables" as *;
@use "../assets/scss/mixins" as *;

.navbar {
  @include flex-between;
  padding: $spacing-md;
}

.navbar-start,
.navbar-end {
  @include flex-center;
  padding: 0 $spacing-md;
}

.icon {
  @include flex-center;

  img {
    width: 24px;
  }
}

.navbar-item {
  text-decoration: none;
  margin: 0 $spacing-sm;
  color: var(--color-text);
}

.navbar-start {
  &:active {
    box-shadow: 0 0 0 2px var(--color-petal);
    border-radius: $radius-md;
  }

  .navbar-item {
    border-radius: $radius-md;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
  }
}

.navbar-end {
  .navbar-item {
    border-radius: $radius-md;
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    font-weight: $font-weight-semibold;

    &:hover {
      background-color: var(--color-surface);
    }
  }

  .search {
    font-weight: $font-weight-regular;
    width: 110px;
    padding: $spacing-sm;
    border: 1px solid var(--color-muted);
    border-radius: $radius-md;
    background-color: var(--color-overlay);
    color: var(--color-text);

    &::placeholder {
      color: var(--color-text);
    }
  }
}
</style>
