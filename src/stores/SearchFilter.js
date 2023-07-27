import { ref } from "vue";
import { defineStore } from "pinia";

export const useSearchFilters = defineStore("filters", () => {
  const order = ref("name");
  const name = ref("");
  const subtype = ref("*");
  const supertype = ref("Pokémon");
  const rarity = ref("*");
  const pokemonType = ref("");
  const pageSize = ref(20);

  return { order, name, subtype, supertype, rarity, pokemonType, pageSize };
});
