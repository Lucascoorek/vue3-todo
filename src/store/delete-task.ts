import State from "./store";
import type Task from "./models/Task";

const { loading } = State;

async function deleteApiTask(id: Task["id"]) {
  const response = await fetch(`api/tasks/${id}`, {
    method: "DELETE",
  });
  return await response.json();
}

export function deleteTask() {
  async function callDeleteTask(id: Task["id"]) {
    loading.value = true;
    await deleteApiTask(id);
    loading.value = false;
  }
  return {
    callDeleteTask,
  };
}
