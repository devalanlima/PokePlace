<template>
    <nav class="p-5">
        <p>Filter By:</p>
        <ul>
            <li>
                <SelectInput button-name="Supertype">
                    <ul class="flex flex-col absolute bg-MainBlue z-10 w-full max-h-[100px] overflow-y-auto">
                        <li v-for="item in 3" :key="item" class="text-sm hover:bg-[#00000080] px-2 py-1 pl-5">Pokémon</li>
                    </ul>
                </SelectInput>
            </li>
        </ul>
        <div class="w-full h-[2px] bg-MainWhite my-5"></div>
        <p>Sort By:</p>
        <ul>
            <li>A-Z</li>
            <li>Z-A</li>
            <li>Price</li>
        </ul>
    </nav>
</template>

<script setup>
import SelectInput from './ui/SelectInput.vue';

</script>