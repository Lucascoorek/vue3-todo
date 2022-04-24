<template>
  <div @click="deleteThisTask">
    <IconClose class="close" />
  </div>
</template>

<script setup lang="ts">
import IconClose from "./icons/IconClose.vue";
import { deleteTask } from "../store/delete-task";
import { loadTasks } from "../store/fetch-tasks";
const props = defineProps({
  taskId: { type: Number, required: true },
});

const { callDeleteTask } = deleteTask();
const { load } = loadTasks();

const deleteThisTask = () => {
  const isConfirmed = confirm("Do you want to delete this task?");
  if (isConfirmed) {
    console.log(props.taskId);
    callDeleteTask(props.taskId);
    load();
  }
};
</script>

<style scoped>
.close {
  cursor: pointer;
}
</style>
