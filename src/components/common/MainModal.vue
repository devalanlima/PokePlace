<template>
    <Teleport to="body">
        <div v-if="isModalOpen"
            class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-[#050505] p-5 rounded-2xl flex flex-col gap-4 justify-center max-h-screen overflow-y-auto">
            <div class="select-none min-h-[412px]">
                <div v-if="cardIsLoading" class="w-[300px]">
                    <div class="w-full h-[412px] bg-slate-500 animate-pulse block rounded-xl -z-10">
                    </div>
                </div>
                <div v-else class="w-[300px]">
                    <CardEffect>
                        <img :src="pokemonImage" :alt="pokemonName">
                    </CardEffect>
                </div>
            </div>
            <div class="flex justify-between w-full">
                <p>Transaction Fees</p>
                <div class="flex flex-col">
                    <p>0.000023 ETH</p>
                    <p class="text-xs text-right">{{( 0.000023 * 1667.75).toFixed(2) }} €</p>
                </div>
            </div>
            <div class="flex justify-between w-full">
                <p>Price</p>
                <div class="flex flex-col">
                    <p>{{ props.pokemonCardPrice }} ETH</p>
                    <p class="text-xs text-right">{{ ((Number(props.pokemonCardPrice)) * 1667.75).toFixed(2) }} €</p>
                </div>
            </div>
            <button @click="isModalOpen = false" class="flex justify-between w-full bg-white text-black p-4 rounded-xl hover:bg-opacity-90">
                <p>Buy now</p>
                <div class="flex gap-2">
                    <p>{{ (Number(props.pokemonCardPrice) + 0.000023).toFixed(6) }} ETH</p>
                    <IconETH />
                </div>
            </button>
            <button @click="isModalOpen = false">Cancel</button>
        </div>
    </Teleport>
</template>

<script setup>
import IconETH from '../icons/IconETH.vue';
import axios from "axios";
import { ref, watch } from 'vue'
import CardEffect from '../CardEffect.vue';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    Headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY
    },
})

const isModalOpen = ref(false)
const props = defineProps({
    pokemonId: { Type: String, default: 'ex13-2' },
    pokemonCardPrice: { Type: String, default: '0.000000' },
    isModalOpen: { Type: Boolean, default: false}
})

watch(()=>props.isModalOpen, async ()=>{
    await getPokemons()
    isModalOpen.value = !isModalOpen.value
})

const pokemonName = ref('')
const pokemonImage = ref('')
const getPokemons = async () => {
    try {
        const response = api.get(`/cards/${props.pokemonId}`)
        const dataApi = (await response).data
        pokemonImage.value = dataApi.data.images.large
        pokemonName.value = dataApi.data.name
        cardIsLoading.value = false
        return dataApi
    } catch (error) {
        console.log(error);
    }
}

const cardIsLoading = ref(true)

</script>