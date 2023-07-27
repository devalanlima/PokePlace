<template>
    <div v-for="pokemon in dataApi.data" :key="pokemon.id">
        <img :src="pokemon.images.small" alt="">
    </div>
</template>

<script setup>

import { ref } from 'vue';

import axios from "axios";


const props = defineProps({
    order: { type: String, default: 'name' },
    pageSize: { type: Number, default: 10, required: true },
    currentPage: { type: Number, default: 1, required: true },
    name: { type: String, default: '', required: true },
    subtype: { type: String, default: '*', required: true },
    supertype: { type: String, default: 'Pokémon', required: true },
    rarity: { type: String, default: '*', required: true },
    type: { type: String, default: '', required: true },
    hp: { type: String, default: '', required: true },
    imageSize: { type: String, default: 'small' },
    havePrice: { type: Boolean, default: true }
})

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    Headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY
    },
    params: {
        pageSize: `${props.pageSize}`,
        q: `
        name:"${props.name}*"
        subtypes:"${props.subtype}"
        supertype:"${props.supertype}"
        rarity:"${props.rarity}"
        ${props.type}
        ${props.hp}
        `,
    }
})

const getPokemons = async (page) => {
    try {
        const response = api.get(`/cards?orderBy=${props.order}&page=${page}`)
        const dataApi = (await response).data
        return dataApi
    } catch (error) {
        console.log(error);
    }
}

const dataApi = await getPokemons(props.currentPage)
/* https://api.pokemontcg.io/v2/cards?orderBy=name&pageSize=25&page=1&q=%0A++++++++name:%22*%22%0A++++++++subtypes:%22*%22%0A++++++++supertype:%22Pok%C3%A9mon%22%0A++++++++rarity:%22*%22%0A++++++++%0A++++++++%0A++++++++ */

/*https://api.pokemontcg.io/v2/cards?orderBy=name&page=undefined&pageSize=10&q=%0A++++++++name:%22*%22%0A++++++++subtypes:%22*%22%0A++++++++supertype:%22Pok%C3%A9mon%22%0A++++++++rarity:%22*%22%0A++++++++%0A++++++++%0A++++++++ */
</script>