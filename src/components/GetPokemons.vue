<template>
    <template v-if="dataApi">
        <template v-for="pokemon in dataApi.data" :key="pokemon.id">
            <div class="p-3 rounded-xl flex relative overflow-hidden"
                :class="pokemon.types && pokemon.types.length > 1 ? defineBackGround(pokemon.types)[1] : defineBackGround(pokemon.types)" :id="pokemon.id">
                <div class="z-10 flex flex-col gap-3">
                    <div v-if="pokemon.images.small !== 'https://images.pokemontcg.io/ecard2/67.png'">
                        <CardEffect>
                            <img :src="pokemon.images.small" :alt="pokemon.name">
                        </CardEffect>
                    </div>
                    <div class="w-full h-[1px] bg-SecondaryBlue block"></div>
                    <div class="flex flex-col gap-3 justify-between text-SecondaryBlue font-semibold">
                        <template
                            v-if="Object.prototype.hasOwnProperty.call(pokemon, 'tcgplayer') && Object.prototype.hasOwnProperty.call(pokemon.tcgplayer, 'prices')">
                            <template v-for="key in Object.keys(pokemon.tcgplayer.prices)">
                                <button v-if="key"
                                    class="flex justify-between text-SecondaryBlue text-sm bg-white bg-opacity-50 p-2 rounded-lg hover:bg-opacity-90"
                                    @click="handleModalInfos"
                                    ref="buyButton"
                                    :data-id="pokemon.id"
                                    :data-price="(pokemon.tcgplayer.prices[key].market * 0.00059).toFixed(6)"
                                    >
                                    <p class="pointer-events-none">{{ key.charAt(0).toUpperCase() + key.slice(1).toLowerCase() }}</p>
                                    <p class="pointer-events-none">{{ (pokemon.tcgplayer.prices[key].market * 0.00059).toFixed(6) }} ETH</p>                                    
                                </button>
                            </template>
                        </template>
                        <template v-else>
                            <p>No offers</p>
                        </template>
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
    <MainModal :is-modal-open="openModal" :pokemon-id="pokemonId" :pokemon-card-price="pokemonCardPrice" />
</template>

<script setup>
import axios from "axios";
import { useSearchFilters } from "../stores/SearchFilter";
import { useConditionApi } from "../stores/ConditionApi"
import { ref } from 'vue'
import CardEffect from "./CardEffect.vue";
import MainModal from "./common/MainModal.vue";

const ConditionApi = useConditionApi()
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

const getPokemons = async (page) => {
    try {
        const response = api.get(`/cards?orderBy=${searchFilters.order}&page=${page}`)
        const dataApi = (await response).data
        if (dataApi.data.length !== 0) {
            ConditionApi.hasItens = true
            return dataApi
        } else {
            ConditionApi.hasItens = false
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


const pokemonId = ref('')
const pokemonCardPrice = ref('')
const openModal = ref(false)
const handleModalInfos = ()=>{
    pokemonId.value = event.target.getAttribute('data-id')
    pokemonCardPrice.value = event.target.getAttribute('data-price')
    openModal.value = !openModal.value
}

</script>