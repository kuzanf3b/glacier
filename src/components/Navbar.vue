<script setup lang="ts">

</script>

<template>
  <nav>
    <div class="navbar">
      <div class="navbar-start">
        <a href="/" class="navbar-item">Glacier</a>
      </div>
      <div class="navbar-end">
        <a href="/pallete" class="navbar-item">Pallete</a>
        <p class="navbar-item">|</p>
        <input type="text" placeholder="Search" class="navbar-item search" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.navbar-start,
.navbar-end {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-item {
  text-decoration: none;
  margin: 0 1rem;
  color: #D8E4ED;
}

.navbar-start .navbar-item {
  font-size: 1.2rem;
  font-weight: bold;
}

.navbar-end .navbar-item {
  font-size: 1rem;
  font-weight: 600;
}

.navbar-end .search {
  font-weight: 400;
  width: 110px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #1A1A27;
  color: #D8E4ED;
}

.navbar-end .search::placeholder {
  color: #D8E4ED;
}
</style>
