<template>
  <div v-if="!loading">
    <h2 style="text-align: center">Tasks</h2>
    <TaskDetail :task="task" v-for="task in tasks" :key="task.id" />
  </div>
  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { loadTasks } from "../store/fetch-tasks";
import { onMounted } from "vue";
import TaskDetail from "./TaskDetail.vue";

const { load, loading, tasks } = loadTasks();

onMounted(() => {
  load();
});
</script>

<style scoped></style>
