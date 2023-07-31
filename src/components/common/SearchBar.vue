<template>
    <div class="w-full relative">
        <input class="outline outline-2 outline-MainBlue p-3 rounded-full w-full pl-14 bg-[#10182A80]" placeholder="Ex.: Pikachu"
            type="text" id="search-bar" v-model="searchFilters.name">
        <label class="absolute left-0 top-0" for="search-bar">
            <IconSearch />
        </label>
    </div>
</template>

<script setup>
import IconSearch from '../icons/IconSearch.vue';
import { useSearchFilters } from '../../stores/SearchFilter';

const searchFilters = useSearchFilters()
</script>
