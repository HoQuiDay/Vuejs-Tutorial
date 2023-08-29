<template>
  <div class="topnav">
    <router-link to="/">Home</router-link>
    <router-link to="form">Form</router-link>
    <router-link to="game">Game</router-link>
    <router-link to="about">About</router-link>
  </div>
</template>
<script setup></script>

<style>
.topnav {
  background-color: #333;
  width: 100%;
  height: 50px;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
