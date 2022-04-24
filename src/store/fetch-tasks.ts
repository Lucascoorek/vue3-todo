import { computed } from "vue";
import State from "./store";
import type Task from "./models/Task";

const { loading, tasks } = State;

async function fetchApiTasks() {
  const response = await fetch("api/tasks");
  return await response.json();
}

export function loadTasks() {
  async function load() {
    loading.value = true;
    tasks.value = await fetchApiTasks();
    loading.value = false;
  }
  return {
    loading: computed<boolean>(() => loading.value),
    tasks: computed<Task[]>(() => tasks.value),
    load,
  };
}
