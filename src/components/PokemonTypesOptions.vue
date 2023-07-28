<template>
    <ul class="flex flex-col gap-5 p-5 pt-0">
        <li class="cursor-pointer" @click="selectAll">
            <input class="sr-only peer" type="checkbox" id="All"
                :checked="isAllChecked" value="All" >
            <label
                :class="['rounded-full cursor-pointer text-MainWhite bg-SecondaryBlue font-semibold px-4 py-3 grid place-items-center peer-checked:text-SecondaryBlue peer-checked:bg-MainWhite']">
                All
            </label>
        </li>
        <template v-for="pokeType in pokemonTypes" :key="pokeType">
            <li class="cursor-pointer">
                <input class="sr-only peer" type="checkbox" :value="pokeType.elementType" :id="pokeType.elementType"
                    v-model="checkedTypes">
                <label :for="pokeType.elementType" :key="checkedTypes"
                    :class="['rounded-full cursor-pointer text-SecondaryBlue font-semibold px-4 py-3 grid place-items-center peer-checked:text-MainWhite peer-checked:bg-SecondaryBlue peer-checked:outline-0 outline outline-1 outline-MainWhite', pokeType.colorType]">
                    {{ pokeType.elementType }}
                </label>
            </li>
        </template>
    </ul>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useSearchFilters } from '../stores/SearchFilter';

const searchFilters = useSearchFilters()

const allPokemonTypes = ref([
    "Colorless",
    "Darkness",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Grass",
    "Lightning",
    "Metal",
    "Psychic",
    "Water"
])
const checkedTypes = ref(allPokemonTypes.value)

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


const isAllChecked = ref(true)
const selectAll = ()=>{
    isAllChecked.value = true
    checkedTypes.value = allPokemonTypes.value
}
watch(checkedTypes, () => {
    let tempTypes = ''
    if (checkedTypes.value.length === 11) {
        isAllChecked.value = true
        checkedTypes.value = allPokemonTypes.value
        tempTypes = "types:*"
    } else {
        isAllChecked.value = false
        checkedTypes.value.forEach(type => {
            tempTypes = ` -types:${type} ` + tempTypes
        })
    }
    searchFilters.pokemonType = tempTypes
})
</script>