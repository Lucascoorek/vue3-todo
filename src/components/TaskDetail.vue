<template>
  <div
    class="task"
    :class="{ done: props.task.done }"
    @dblclick="patchThisTask"
  >
    <div>
      <p :style="[props.task.important ? { color: 'red' } : null]">
        {{ props.task.description }} {{ props.task.important ? "!" : "" }}
      </p>
    </div>
    <div>
      <DeleteTask :taskId="props.task.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type Task from "@/store/models/Task";
import { patchTask } from "../store/patch-task";
import { loadTasks } from "../store/fetch-tasks";
import DeleteTask from "./DeleteTask.vue";

interface Props {
  task: Task;
}

const props = defineProps<Props>();
const { callPatchTask } = patchTask();
const { load } = loadTasks();

const patchThisTask = () => {
  const isConfirmed = confirm("Do you want to update this task?");
  if (isConfirmed) {
    const update: Task = {
      ...props.task,
      done: !props.task.done,
    };
    console.log(update);
    callPatchTask(props.task.id, update);
    load();
  }
};
</script>

<style scoped>
.task {
  border: 3px solid var(--vt-c-white-mute);
  padding: 20px;
  margin: 10px 0;
  min-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.done {
  border: 5px dotted var(--vt-c-green-light);
}
</style>
