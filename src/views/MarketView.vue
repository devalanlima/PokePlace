<template>
    <div class="min-h-screen flex flex-col px-5 justify-between mx-auto">
        <div class="min-h-screen w-full flex max-w-[1440px] flex-col pb-10 justify-between mx-auto">
            <div class="flex flex-col gap-5 sticky top-0 w-full mx-auto py-4 z-50">
                <SearchBar class="md:hidden mx-auto" />
                <div class="relative">
                    <div class="flex justify-between w-full absolute align-middle">
                        <SelectInput v-if="searchFilters.supertype === 'Pokémon' && width < 1460"
                            class="my-2 min-w-[150px] mx-auto ml-0 lg:ml-auto lg:mr-0" button-name="Types">
                            <PokemonTypesOptions class="p-4" />
                        </SelectInput>
                        <PokemonTypesOptions v-else-if="searchFilters.supertype === 'Pokémon'" class="md:flex-row w-full max-w-max mr-5 h-fit py-2 px-1" />
                        <SelectInput class="self-start mx-auto mr-0 mt-1 p-1" button-name="Filter & Sort By">
                            <nav>
                                <ul>
                                    <li>
                                        <SupertypeFilter />
                                    </li>
                                    <li>
                                        <SubtypeFilter />
                                    </li>
                                    <li>
                                        <RaritiesFilter />
                                    </li>
                                </ul>
                            </nav>
                        </SelectInput>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] place-items-center gap-10 p-10 pt-14"
                :key="storeUpdate">
                <Suspense v-for="(item, index) in loadMoreItems" :key="item">
                    <template #default>
                        <GetPokemons :current-page="index + 1" />
                    </template>
                    <template #fallback>
                        <template v-for="loadItem in 30" :key="loadItem">
                            <div class="p-3 rounded-xl flex relative overflow-hidden bg-MainWhite"
                                :id="loadItem">
                                <div class="z-10 flex flex-col gap-3">
                                    <div class="w-[245px] h-[342px] bg-slate-500 animate-pulse block rounded-xl -z-10">
                                    </div>
                                    <div class="w-full h-[1px] bg-SecondaryBlue block"></div>
                                    <div class="flex justify-between text-SecondaryBlue font-semibold">
                                        <p>0.000000 ETH</p>
                                        <p>000 of 000</p>
                                    </div>
                                </div>
                                <div class="absolute w-[240%] h-[240%] top-0 left-0 rotate-45 bg-MainWhite"></div>
                            </div>
                        </template>
                    </template>
                </Suspense>
            </div>
            <MainButton class="self-center p-5" @click="loadMore" button-name="Load More" />
        </div>
    </div>
</template>

<script setup>
import PokemonTypesOptions from '../components/PokemonTypesOptions.vue';
import SelectInput from '../components/ui/SelectInput.vue';
import SupertypeFilter from '../components/SupertypeFilter.vue'
import SubtypeFilter from '../components/SubtypeFilter.vue'
import GetPokemons from '../components/GetPokemons.vue'

import { ref, watch } from 'vue'
import SearchBar from '../components/common/SearchBar.vue';
const loadMoreItems = ref([1]);

function loadMore() {
    loadMoreItems.value.push(loadMoreItems.value.length + 1);
}

import { useSearchFilters } from '../stores/SearchFilter';
import RaritiesFilter from '../components/RaritiesFilter.vue';
import MainButton from '../components/ui/MainButton.vue';

const searchFilters = useSearchFilters()

const storeUpdate = ref(false)
let timeoutReset
watch(searchFilters, () => {
    clearTimeout(timeoutReset)
    timeoutReset = setTimeout(() => {
        storeUpdate.value = !storeUpdate.value
        loadMoreItems.value = [1]
    }, 500);
})

watch(() => searchFilters.supertype, () => {
    searchFilters.subtype = "*";
    searchFilters.rarity = "*";
    searchFilters.pokemonType = [];
})

import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

</script>