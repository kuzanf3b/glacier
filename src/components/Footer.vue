<script setup lang="ts">

</script>

<template>
  <footer>
    <p>Copyright &copy; 2024 Glacier</p>
    <a class="icon" href="https://github.com/kuzanf3b/glacier.git"><img src="../assets/svg/github.svg"
        alt="github"></a>
  </footer> 
</template>

<style scoped lang="scss">

footer {
  @include flex-between;
  height: 5vh;
  margin: 0 $spacing-4xl;

  p {
    color: var(--color-subtle);
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
