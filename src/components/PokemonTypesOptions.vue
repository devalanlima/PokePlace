<template>
    <ul class="flex flex-col gap-5 max-h-[50vh] overflow-y-auto ">
        <li>
            <input class="peer hidden" type="checkbox" :id="`pokemonTypesOptionComponentAll`"
                v-model="isAllTypesCheckeds">
            <label
                class="peer-checked:bg-MainWhite py-2 px-4 block rounded-full cursor-pointer text-center text-MainWhite peer-checked:text-SecondaryBlue font-semibold bg-SecondaryBlue outline outline-1 outline-MainWhite"
                :for="`pokemonTypesOptionComponentAll`"> All</label>
        </li>
        <template v-for="(pokemonType) in pokemonTypes" :key="`pokemonTypesOptionComponent${pokemonType.elementType}`">
            <li class="w-full">
                <input class="peer hidden" type="checkbox" :id="`pokemonTypesOptionComponent${pokemonType.elementType}`"
                    :value="pokemonType.elementType" v-model="checkedTypes">

                <label
                    :class="`${pokemonType.colorType} py-2 px-4 rounded-full block text-center peer-checked:text-SecondaryBlue font-semibold bg-SecondaryBlue cursor-pointer outline outline-1 outline-MainWhite`"
                    :for="`pokemonTypesOptionComponent${pokemonType.elementType}`">
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
const isAllTypesCheckeds = ref(true)

const pokemonTypes = ref({
    pokeType1: { elementType: 'Water', colorType: 'peer-checked:bg-WaterBlue' },
    pokeType2: { elementType: 'Lightning', colorType: 'peer-checked:bg-LightningYellow' },
    pokeType3: { elementType: 'Psychic', colorType: 'peer-checked:bg-PsychicPurple' },
    pokeType4: { elementType: 'Fighting', colorType: 'peer-checked:bg-FightingBronw' },
    pokeType5: { elementType: 'Darkness', colorType: 'peer-checked:bg-DarknessBlue' },
    pokeType6: { elementType: 'Dragon', colorType: 'peer-checked:bg-DragonYellow' },
    pokeType7: { elementType: 'Colorless', colorType: 'peer-checked:bg-ColorlessWhite' },
    pokeType8: { elementType: 'Fire', colorType: 'peer-checked:bg-FireRed' },
    pokeType9: { elementType: 'Grass', colorType: 'peer-checked:bg-GrassGreen' },
    pokeType10: { elementType: 'Metal', colorType: 'peer-checked:bg-MetalGray' },
    pokeType11: { elementType: 'Fairy', colorType: 'peer-checked:bg-FairyPink' },
})

watch(isAllTypesCheckeds,()=>{
    if (isAllTypesCheckeds.value) {
        checkedTypes.value = allPokemonTypes.value
    }else{
        let firstSelectedType = ''
        allPokemonTypes.value.forEach(element => {
            if(!checkedTypes.value.includes(element)){
                firstSelectedType = element
            } 
        })
        checkedTypes.value = [firstSelectedType]
    }
})


watch(checkedTypes, () => {
    let tempTypes = ''
    if (checkedTypes.value.length === 11) {
        isAllTypesCheckeds.value = true
    } else {
        allPokemonTypes.value.forEach(element =>{
            if(!checkedTypes.value.includes(element)){
                tempTypes = ` -types:${element} ` + tempTypes
            } 
        })
        isAllTypesCheckeds.value = false        
    }
    searchFilters.pokemonType = tempTypes
})

</script> 
