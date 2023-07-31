<template>
    <nav>
        <SelectInput button-name="Rarities" class="w-full">
            <ul class="w-full max-h-[128px] overflow-y-auto rounded-b-3xl">
                <li>
                    <input class="peer sr-only" name="selectrarity" type="radio" id="allRarities" value="*"
                        v-model="searchFilters.rarity">
                    <label
                        class="hover:bg-blue-900 bg-opacity-25 w-full block px-5 py-3 peer-checked:bg-blue-950 cursor-pointer max-w-[148px]"
                        for="allRarities">All</label>
                </li>
                <li v-for="rarity in allRarities" :key="rarity">
                    <input class="peer sr-only" name="selectrarity" type="radio" :id="rarity" :value="rarity"
                        v-model="searchFilters.rarity">
                    <label
                        class="hover:bg-blue-900 bg-opacity-25 w-full block px-5 py-3 peer-checked:bg-blue-950 cursor-pointer max-w-[148px]"
                        :for="rarity">{{ rarity }}</label>
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
const allRarities = computed(() => {
    switch (searchFilters.supertype) {
        case 'Pokémon':
            return [
                "Common",
                "Uncommon",
                "Rare",
                "Rare Holo",
                "Rare Holo EX",
                "Rare Ultra",
                "Rare Holo GX",
                "Rare Holo LV.X",
                "Rare Prime",
                "Rare Holo V",
                "Rare BREAK",
                "Rare Holo VMAX",
                "Rare Rainbow",
                "Rare Shiny",
                "Rare Shining",
                "Amazing Rare",
                "Rare Secret",
                "Rare Shiny GX",
                "Rare Holo Star",
                "LEGEND",
                "Promo"
            ]
            break;
        case 'Trainer':
            return [
                "Common",
                "Uncommon",
                "Rare",
                "Rare Holo",
                "Rare Ultra",
                "Rare Rainbow",
                "Rare Secret",
                "Rare ACE",
                "Promo"
            ]
            break;

        case 'Energy':
            return [
                "Common",
                "Uncommon",
                "Rare",
                "Rare Holo",
                "Rare Ultra",
                "Rare Secret"
            ]
            break;
        default:
            break;
    }
})

</script>