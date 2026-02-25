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
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon img {
  width: 24px;
}

.navbar-item {
  text-decoration: none;
  margin: 0 0.5rem;
  color: #E0E0ED;
}

.navbar-start:active {
  box-shadow: 0 0 0 2px #F5C2E7;
  border-radius: 6px;
}

.navbar-start .navbar-item,
.icon {
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
}

.navbar-end .navbar-item {
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.navbar-end .navbar-item:hover {
  background-color: #1A1A27;
}

.navbar-end .search {
  font-weight: 400;
  width: 110px;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: #232333;
  color: #E0E0ED;
  border: solid 1px #5B5B7E;
}

.navbar-end .search::placeholder {
  color: #E0E0ED;
}
</style>
