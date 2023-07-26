<template>
    <div class="min-h-screen">
        <div class="flex justify-between w-full fixed p-5">
            <SelectInput class="self-start"  button-name="Types">
                <PokemonTypesOptions/>
            </SelectInput>
            <SelectInput  class="self-start" button-name="Filter & Sort By">
                <FilterSortOption/>
            </SelectInput>
        </div>
    </div>
</template>

<script setup>
import PokemonTypesOptions from '../components/PokemonTypesOptions.vue';
import SelectInput from '../components/ui/SelectInput.vue';
import FilterSortOption from '../components/FilterSortOptions.vue'
</script>