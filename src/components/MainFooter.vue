<template>
    <ul class="w-full flex flex-col items-start gap-5 p-5 border-t-2 border-MainBlue">
        <li>
            <LogoPokePlace />
        </li>
        <li>
            <nav>
                <SocialLinks class="flex gap-5"/>
            </nav>
        </li>
        <li>
            <nav>
                <ul class="flex justify-center gap-5">
                    <li>
                        <RouterLink class="w-full text-start block" to="/">Home</RouterLink>
                    </li>
                    <div class="h-4 w-[2px] bg-MainWhite"></div>
                    <li>
                        <RouterLink class="w-full text-start block" to="/market">Market</RouterLink>
                    </li>
                    <div class="h-4 w-[2px] bg-MainWhite"></div>
                    <li>
                        <RouterLink class="w-full text-start block" to="/about">About</RouterLink>
                    </li>
                </ul>
            </nav>
        </li>
        <li>
            <a href="https://devalanlima.github.io/portfolio" target="_blank">devalanlima.github.io/portfolio</a>
        </li>
        <li>
            <p class="text-center">©2023 Copyright - All rights reserverd - Nintedo - Developed by Alan
            Lima</p>
        </li>
    </ul>
</template>

<script setup>
import LogoPokePlace from './icons/LogoPokePlace.vue';
import SocialLinks from './common/SocialLinks.vue'
</script>