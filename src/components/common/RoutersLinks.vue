<template>
    <ul class="flex gap-9">
        
        <li>
            <RouterLink class="w-full text-start block" to="/"
                :class="['inline-flex justify-start relative hover:after:w-full after:h-[2px] after:bg-white after:block after:absolute after:-bottom-[2px] after:rounded-full after:transition-all', { 'after:w-full': route.name === 'home', 'after:w-0': route.name !== 'home' }]">
                Home</RouterLink>
        </li>
        <li>
            <RouterLink class="w-full text-start block" to="/market"
                :class="['inline-flex justify-start relative hover:after:w-full after:h-[2px] after:bg-white after:block after:absolute after:-bottom-[2px] after:rounded-full after:transition-all', { 'after:w-full': route.name === 'market', 'after:w-0': route.name !== 'market' }]">
                Market</RouterLink>
        </li>
        <li>
            <RouterLink class="w-full text-start block" to="/about"
                :class="['inline-flex justify-start relative hover:after:w-full after:h-[2px] after:bg-white after:block after:absolute after:-bottom-[2px] after:rounded-full after:transition-all', { 'after:w-full': route.name === 'about', 'after:w-0': route.name !== 'about' }]">
                About</RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
const route = useRoute()
</script>