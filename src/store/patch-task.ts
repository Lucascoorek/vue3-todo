import State from "./store";
import type Task from "./models/Task";

const { loading } = State;

async function patchApiTask(id: Task["id"], update: Task) {
  const response = await fetch(`api/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  });
  return await response.json();
}

export function patchTask() {
  async function callPatchTask(id: Task["id"], update: Task) {
    loading.value = true;
    await patchApiTask(id, update);
    loading.value = false;
  }
  return {
    callPatchTask,
  };
}
