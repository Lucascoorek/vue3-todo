import { reactive, computed } from "vue";

const state = reactive({
  count: 0,
});

export default function stateCount() {
  return {
    count: computed(() => state.count),
    incrementCount: () => state.count++,
  };
}
