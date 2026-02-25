<script setup lang="ts">

</script>

<template>
  <footer>
    <p>Copyright &copy; 2024 Glacier</p>
    <a class="icon" href="https://github.com/kuzanf3b/glacier.git"><img src="../assets/svg/github.svg" alt="github"></a>
  </footer>
</template>

<style scoped lang="scss">
@use "../assets/scss/variables" as *;
@use "../assets/scss/mixins" as *;

footer {
  @include flex-between;
  height: 5vh;

  p {
    margin-left: $sidebar-width;
    color: var(--color-text);
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
  }
}

.icon {
  @include flex-center;

  img {
    width: 24px;
    margin-right: $sidebar-width;
  }
}
</style>
