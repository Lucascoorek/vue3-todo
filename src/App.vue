<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/add-task">Add task</RouterLink>
      <RouterLink to="/list">All tasks</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
a,
.green {
  text-decoration: none;
  color: var(--vt-c-green-light);
  transition: 0.4s;
}
@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
</style>
