<template>
    <SelectInput button-name="Types" class="m-10">
        <PokemonTypesOptions/>
    </SelectInput>  
    <SelectInput button-name="Filter & Sort By">

    </SelectInput> 
</template>

<script setup>
import PokemonTypesOptions from '../components/PokemonTypesOptions.vue';
import SelectInput from '../components/ui/SelectInput.vue';

</script>