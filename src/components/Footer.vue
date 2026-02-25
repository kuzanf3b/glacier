<script setup lang="ts">

</script>

<template>
  <footer>
    <p>Copyright &copy; 2024 Glacier</p>
    <a class="icon" href="https://github.com/kuzanf3b/glacier.git"><img src="../assets/svg/github.svg" alt="github"></a>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

footer {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
}

footer p {
  margin-left: 80px;
  color: #E0E0ED;
  font-size: 0.9rem;
  font-weight: 600;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon img {
  width: 24px;
  margin-right: 80px;
}
</style>
