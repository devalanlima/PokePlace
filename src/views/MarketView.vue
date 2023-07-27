<template>
    <div class="min-h-screen flex flex-col">
        <div class="flex flex-col p-5 gap-5 sticky top-0 w-full">
            <SearchBar/>
            <div class="flex justify-between w-full">
                <SelectInput class="self-start min-w-[145px]" button-name="Types">
                    <PokemonTypesOptions />
                </SelectInput>
                <SelectInput class="self-start" button-name="Filter & Sort By">
                    <FilterSortOption />
                </SelectInput>
            </div>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] place-items-center gap-10 p-10" :key="storeUpdate">
            <Suspense v-for="(item, index) in loadMoreItems" :key="item">
                <template #default>
                    <GetPokemons :current-page="index + 1" />
                </template>
                <template #fallback>
                    <template v-for="loadItem in 30" :key="loadItem" >
                        <div :id="loadItem" class="w-[245px] h-[342px] bg-slate-500 animate-pulse block rounded-xl -z-10"></div>
                    </template>
                </template>
            </Suspense>
        </div>
        <button class="self-center border-2 p-5" @click="loadMore">Load More</button>
    </div>
</template>

<script setup>
import PokemonTypesOptions from '../components/PokemonTypesOptions.vue';
import SelectInput from '../components/ui/SelectInput.vue';
import FilterSortOption from '../components/FilterSortOptions.vue'
import GetPokemons from '../components/GetPokemons.vue'

import { ref, watch } from 'vue'
import SearchBar from '../components/common/SearchBar.vue';
const loadMoreItems = ref([1]);

function loadMore() {
    loadMoreItems.value.push(loadMoreItems.value.length + 1);
}

import { useSearchFilters } from '../stores/SearchFilter';

const searchFilters = useSearchFilters()

const storeUpdate = ref(false)
let timeoutReset
watch(searchFilters, ()=>{
    clearTimeout(timeoutReset)
    timeoutReset = setTimeout(() => {
        storeUpdate.value = !storeUpdate.value
    }, 500);
})
</script>