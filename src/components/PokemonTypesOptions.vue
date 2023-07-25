<template>
    <template v-for="pokeType in pokemonTypes" :key="pokeType">
        <li class="cursor-pointer">
            <input class="sr-only peer" type="checkbox" :value="pokeType.elementType" :id="pokeType.elementType"
                v-model="checkedTypes">
            <label :for="pokeType.elementType"
                :class="['rounded-full cursor-pointer text-MainWhite bg-SecondaryBlue font-semibold px-4 py-3 grid place-items-center peer-checked:text-SecondaryBlue peer-checked:outline peer-checked:outline-2 peer-checked:outline-SecondaryBlue', `${pokeType.colorType}`]">
                {{ pokeType.elementType }}
            </label>
        </li>
    </template>
</template>

<script setup>
import { ref } from 'vue';

const checkedTypes = ref([])

const pokemonTypes = ref({
    pokeType0: { elementType: 'All', colorType: 'peer-checked:bg-MainWhite' },
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
</script>