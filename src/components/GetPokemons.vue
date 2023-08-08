<template>
    <template v-for="pokemon in dataApi.data" :key="pokemon.id">
        <div class="p-3 rounded-xl flex relative overflow-hidden"
        :class="pokemon.types.length > 1 ? defineBackGround(pokemon.types)[1] : defineBackGround(pokemon.types)"
        >
            <div class="z-10 flex flex-col gap-3">
                <div v-if="pokemon.images.small !== 'https://images.pokemontcg.io/ecard2/67.png'">
                    <CardEffect>
                        <img :src="pokemon.images.small" :alt="pokemon.name">
                    </CardEffect>
                </div>
                <div class="w-full h-[1px] bg-SecondaryBlue block"></div>
                <div class="flex justify-between text-SecondaryBlue font-semibold">
                    <p>0.000054 ETH</p>
                    <p>234 of 540</p>
                </div>
            </div>
            <div class="absolute w-[240%] h-[240%] top-0 left-0 rotate-45" :class="defineBackGround(pokemon.types)[0]"></div>
        </div>
    </template>
</template>

<script setup>
import axios from "axios";
import { useSearchFilters } from "../stores/SearchFilter";
import CardEffect from "./CardEffect.vue";

const searchFilters = useSearchFilters()

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    Headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY
    },
    params: {
        pageSize: `${searchFilters.pageSize}`,
        q: `
        name:"${searchFilters.name}*"
        subtypes:"${searchFilters.subtype}"
        supertype:"${searchFilters.supertype}"
        rarity:"${searchFilters.rarity}"
        ${searchFilters.pokemonType}
        `,
    }
})

const props = defineProps({
    currentPage: { Type: Number, default: 1 }
})

const getPokemons = async (page) => {
    try {
        const response = api.get(`/cards?orderBy=${searchFilters.order}&page=${page}`)
        const dataApi = (await response).data
        return dataApi
    } catch (error) {
        console.log(error);
    }
}

const dataApi = await getPokemons(props.currentPage)

const defineBackGround = (pokemonType) => {
    let tempBg = []
        pokemonType.forEach(element => {
        switch (element) {
            case 'Water':
                tempBg.unshift('bg-WaterBlue')
                break;
            case 'Lightning':
                tempBg.unshift('bg-LightningYellow')
                break;
            case 'Psychic':
                tempBg.unshift('bg-PsychicPurple')
                break;
            case 'Fighting':
                tempBg.unshift('bg-FightingBronw')
                break;
            case 'Darkness':
                tempBg.unshift('bg-DarknessBlue')
                break;
            case 'Dragon':
                tempBg.unshift('bg-DragonYellow')
                break;
            case 'Colorless':
                tempBg.unshift('bg-ColorlessWhite')
                break;
            case 'Fire':
                tempBg.unshift('bg-FireRed')
                break;
            case 'Grass':
                tempBg.unshift('bg-GrassGreen')
                break;
            case 'Metal':
                tempBg.unshift('bg-MetalGray')
                break;
            case 'Fairy':
                tempBg.unshift('bg-FairyPink')
                break;
            default:
                break;
        }
    }); 
    return tempBg
}
</script>