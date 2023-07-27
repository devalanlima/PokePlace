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
/* https://api.pokemontcg.io/v2/cards?orderBy=name&pageSize=25&page=1&q=%0A++++++++name:%22*%22%0A++++++++subtypes:%22*%22%0A++++++++supertype:%22Pok%C3%A9mon%22%0A++++++++rarity:%22*%22%0A++++++++types:%22Water%22+types:%22Fire%22+%0A++++++++%0A++++++++ */

/* https://api.pokemontcg.io/v2/cards?orderBy=name&page=1&pageSize=20&q=%0A++++++++name:%22*%22%0A++++++++subtypes:%22*%22%0A++++++++supertype:%22Pok%C3%A9mon%22%0A++++++++rarity:%22*%22%0A++++++++Grass,+Fire%0A++++++++ */

</script>