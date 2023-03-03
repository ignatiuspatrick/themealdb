<template>
  <nav>
    <div class="navbar-wrapper">
      <router-link to="/" class="navbar-link">Home</router-link>
    </div>
  </nav>
</template>

<style>
nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
}

.navbar-link {
  font-size: 20px;
  text-decoration: none;
  color: #fff;
}

.navbar-logo {
  width: 50px;
  height: 50px;
}
</style>
