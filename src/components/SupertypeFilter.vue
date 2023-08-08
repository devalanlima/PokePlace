<template>
    <nav>
        <SelectInput button-name="Supertype" class="w-full">
            <ul class="w-full">
                <li v-for="supertype in allSuperTypes" :key="supertype">
                    <input class="peer sr-only" name="selectSupertype" type="radio" :id="`SuperTypeFilter${supertype}`" :value="supertype" v-model="searchFilters.supertype">
                    <label  class="hover:bg-blue-900 bg-opacity-25 w-full block px-5 py-3 peer-checked:bg-blue-950 cursor-pointer" :for="`SuperTypeFilter${supertype}`">{{ supertype }}</label>
                </li>
            </ul>
        </SelectInput>
    </nav>
</template>

<script setup>
import SelectInput from './ui/SelectInput.vue';
import { useSearchFilters } from '../stores/SearchFilter';

const searchFilters = useSearchFilters()
import { ref} from 'vue'

const allSuperTypes = ref([
    "Energy",
    "Pokémon",
    "Trainer"
])
</script>