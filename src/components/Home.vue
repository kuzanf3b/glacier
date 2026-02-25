<script setup lang="ts">

</script>

<template>
  <div class="home">
    <h1>Warmer Ice</h1>
    <p>Glacier is a color palette generator that helps you create beautiful color schemes for your projects.</p>
    <a href="/pallete" class="btn">Discover →</a>
  </div>
</template>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.home {
  margin: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  height: 80vh;
}

.home h1 {
  width: 200px;
  font-size: 5rem;
  color: #E0E0ED;
  margin-bottom: 1rem;
}

.home p {
  width: 600px;
  font-size: 1.5rem;
  color: #8E8EAF;
  margin-bottom: 2rem;
}

.home a {
  font-weight: 600;
  color: #E0E0ED;
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: #1A1A27;
  border-radius: 26px;
}

.home a:hover {
  background-color: #232333;
  transition: all 0.3s ease;
}
</style>
