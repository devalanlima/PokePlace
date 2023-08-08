<template>
    <nav>
        <SelectInput button-name="Subtypes" class="w-full">
            <ul class="w-full max-h-[128px] overflow-y-auto rounded-b-3xl">
                <li>
                    <input class="peer sr-only" name="selectsubtype" type="radio" id="AllSubtypes" value="*"
                        v-model="searchFilters.subtype">
                    <label
                        class="hover:bg-blue-900 bg-opacity-25 w-full block px-5 py-3 peer-checked:bg-blue-950 cursor-pointer max-w-[148px]"
                        for="AllSubtypes">All</label>
                </li>
                <li v-for="subtype in allSubtypes" :key="subtype">
                    <input class="peer sr-only" name="selectsubtype" type="radio" :id="`SubTypeFilter${subtype}`" :value="subtype"
                        v-model="searchFilters.subtype">
                    <label
                        class="hover:bg-blue-900 bg-opacity-25 w-full block px-5 py-3 peer-checked:bg-blue-950 cursor-pointer max-w-[148px]"
                        :for="`SubTypeFilter${subtype}`">{{ subtype }}</label>
                </li>
            </ul>
        </SelectInput>
    </nav>
</template>

<script setup>
import SelectInput from './ui/SelectInput.vue';
import { useSearchFilters } from '../stores/SearchFilter';

const searchFilters = useSearchFilters()
import { computed } from 'vue'

const allSubtypes = computed(() => {
    switch (searchFilters.supertype) {
        case 'Pokémon':
            return [
                "BREAK",
                "Baby",
                "Basic",
                "EX",
                "GX",
                "LEGEND",
                "Level-Up",
                "MEGA",
                "Restored",
                "Stage 1",
                "Stage 2",
                "TAG TEAM",
                "V",
                "VMAX"
            ]
            break;
        case 'Trainer':
            return [
                "Goldenrod Game Corner",
                "Item",
                "Pokémon Tool",
                "Pokémon Tool F",
                "Rapid Strike",
                "Rocket's Secret Machine",
                "Single Strike",
                "Stadium",
                "Supporter",
                "Technical Machine",
            ]
            break;

        case 'Energy':
            return [
                "Basic",
                "Rapid Strike",
                "Single Strike",
                "Special"
            ]
            break;
        default:
            break;
    }
})
</script>