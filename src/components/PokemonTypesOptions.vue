<template>
    <ul class="flex flex-col gap-5 max-h-[50vh] overflow-y-auto ">
        <li>
            <input class="peer hidden" type="checkbox" :id="`PokemonTypesOptionsAll`" v-model="isAllTypesCheckeds">
            <label
                class="peer-checked:bg-MainWhite py-2 px-4 block rounded-full cursor-pointer text-center text-MainWhite font-semibold bg-SecondaryBlue peer-checked:text-SecondaryBlue outline outline-1 outline-MainWhite"
                :for="`PokemonTypesOptionsAll`"> All</label>
        </li>
        <template v-for="(pokemonType) in pokemonTypes" :key="`PokemonTypesOptions${pokemonType.elementType}`">
            <li class="w-full">
                <input class="peer hidden" type="checkbox" :id="`PokemonTypesOptions${pokemonType.elementType}`"
                    :value="`-types:${pokemonType.elementType}`" v-model="checkedTypes">

                <label
                    :class="`${pokemonType.colorType} py-2 px-4 rounded-full block text-center text-SecondaryBlue peer-checked:text-MainWhite font-semibold peer-checked:bg-SecondaryBlue cursor-pointer outline outline-1 outline-MainWhite`"
                    :for="`PokemonTypesOptions${pokemonType.elementType}`">
                    {{ pokemonType.elementType }}
                </label>
            </li>
        </template>
    </ul>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useSearchFilters } from '../stores/SearchFilter';

const searchFilters = useSearchFilters()
const checkedTypes = ref(searchFilters.pokemonType)

const allSelected = ref([
    "-types:Water",
    "-types:Lightning",
    "-types:Psychic",
    "-types:Fighting",
    "-types:Darkness",
    "-types:Dragon",
    "-types:Colorless",
    "-types:Fire",
    "-types:Grass",
    "-types:Metal",
    "-types:Fairy"
])

watch(checkedTypes, () => {
    let tempCheckedTypes = []
    allSelected.value = [
        "-types:Water",
        "-types:Lightning",
        "-types:Psychic",
        "-types:Fighting",
        "-types:Darkness",
        "-types:Dragon",
        "-types:Colorless",
        "-types:Fire",
        "-types:Grass",
        "-types:Metal",
        "-types:Fairy"
    ]
    if (searchFilters.pokemonType.length === 0 && isAllTypesCheckeds.value === true) {
        tempCheckedTypes = checkedTypes.value
        allSelected.value.forEach((element, index) => {
            if (element === tempCheckedTypes[0] && tempCheckedTypes.length > 0) {
                allSelected.value.splice(index, 1)
                checkedTypes.value = allSelected.value
                searchFilters.pokemonType = checkedTypes.value
                isAllTypesCheckeds.value = false
            }
        });
    } else {
        searchFilters.pokemonType = checkedTypes.value
    }
})

const isAllTypesCheckeds = ref(true)
watch(() => isAllTypesCheckeds.value, () => {
    if (isAllTypesCheckeds.value) {
        checkedTypes.value = []
    } else {
        checkedTypes.value = allSelected.value
    }
})

const pokemonTypes = ref({
    pokeType1: { elementType: 'Water', colorType: 'bg-WaterBlue' },
    pokeType2: { elementType: 'Lightning', colorType: 'bg-LightningYellow' },
    pokeType3: { elementType: 'Psychic', colorType: 'bg-PsychicPurple' },
    pokeType4: { elementType: 'Fighting', colorType: 'bg-FightingBronw' },
    pokeType5: { elementType: 'Darkness', colorType: 'bg-DarknessBlue' },
    pokeType6: { elementType: 'Dragon', colorType: 'bg-DragonYellow' },
    pokeType7: { elementType: 'Colorless', colorType: 'bg-ColorlessWhite' },
    pokeType8: { elementType: 'Fire', colorType: 'bg-FireRed' },
    pokeType9: { elementType: 'Grass', colorType: 'bg-GrassGreen' },
    pokeType10: { elementType: 'Metal', colorType: 'bg-MetalGray' },
    pokeType11: { elementType: 'Fairy', colorType: 'bg-FairyPink' },
})

</script> 
