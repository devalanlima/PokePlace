<template>
    <div class="w-full relative">
        <input class="bg-transparent outline outline-2 outline-MainBlue p-3 rounded-full w-full pl-14" placeholder="Ex.: Pikachu"
            type="text" name="" id="search-bar">
        <label class="absolute left-0 top-0" for="search-bar">
            <IconSearch class=" -ml-[1px]" />
        </label>
    </div>
</template>

<script setup>
import IconSearch from '../icons/IconSearch.vue';

</script>
