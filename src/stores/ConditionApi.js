import { ref } from "vue";
import { defineStore } from "pinia";

export const useConditionApi = defineStore("condition", () => {
  const hasItens = ref(true);
  return { hasItens };
});
