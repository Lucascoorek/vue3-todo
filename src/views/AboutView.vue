<script setup lang="ts">
import stateCount from "../store/count";
const { count, incrementCount } = stateCount();
</script>

<template>
  <div class="container">
    <h1>This is an about page</h1>
    <p>Count from state is: {{ count }}</p>
    <button @click="incrementCount">Add to count</button>
  </div>
</template>

<style></style>
