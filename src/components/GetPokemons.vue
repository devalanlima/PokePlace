<template>
    <template v-if="dataApi">
        <template v-for="pokemon in dataApi.data" :key="pokemon.id">
            <div class="p-3 rounded-xl flex relative overflow-hidden"
                :class="pokemon.types && pokemon.types.length > 1 ? defineBackGround(pokemon.types)[1] : defineBackGround(pokemon.types)">
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
                <div class="absolute w-[240%] h-[240%] top-0 left-0 rotate-45"
                    :class="pokemon.types ? defineBackGround(pokemon.types)[0] : 'bg-MainWhite'">
                </div>
            </div>
        </template>
    </template>
    <template v-else>
        <div class="flex flex-col justify-center text-center gap-5 max-w-[310px]">
            <img src="/No_Matches.png" alt="magnifying glass with abstract symbols">
            <p class="text-3xl text-MainBlue font-bold">No more cards matches your filter</p>
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
        ${searchFilters.supertype === "Pokémon" ? searchFilters.pokemonType.join(" ") : searchFilters.pokemonType}
        `,
    }
})

const props = defineProps({
    currentPage: { Type: Number, default: 1 }
})

const emit = defineEmits(['update:hasItens',])

const getPokemons = async (page) => {
    try {
        const response = api.get(`/cards?orderBy=${searchFilters.order}&page=${page}`)
        const dataApi = (await response).data
        if (dataApi.data.length !== 0) {
            emit('update:hasItens', true)
            return dataApi
        } else{
            emit('update:hasItens', false)
            return false
        }
    } catch (error) {
        console.log(error);
    }
}

const dataApi = await getPokemons(props.currentPage)

const defineBackGround = (pokemonType) => {
    let tempBg = []
    if (pokemonType && pokemonType.length > 0) {
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
                    tempBg.unshift('bg-MainWhite')
                    break;
            }
        });
    } else {
        tempBg.unshift('bg-MainWhite')
    }
    return tempBg
}

</script>