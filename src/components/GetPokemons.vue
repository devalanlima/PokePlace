<template>
    <template v-for="pokemon in dataApi.data" :key="pokemon.id">
        <div v-if="pokemon.images.small !== 'https://images.pokemontcg.io/ecard2/67.png'"  >
            <img :src="pokemon.images.small" alt="">
        </div>
    </template>
</template>

<script setup>
import axios from "axios";
import { useSearchFilters } from "../stores/SearchFilter";

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
    currentPage:{Type: Number, default: 1}
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
</script>