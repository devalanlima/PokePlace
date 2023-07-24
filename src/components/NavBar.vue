<template>
    <nav class="h-20 w-full border-b-2 border-MainBlue px-5">
        <ul class="flex justify-between items-center h-full">
            <li class="grid place-items-center">
                <button title="Open Menu" class="z-20" @click="openMenu">
                    <IconMenu />
                </button>
                <teleport to="body" v-if="isMenuOpen">
                    <ul class="absolute left-0 top-0 mt-20 bg-SecondaryBlue w-[188px] border-r-2 border-b-2 border-MainBlue flex flex-col gap-5 text-2xl p-5">
                        <li>
                            <button class="w-full text-start block font-semibold" title="Login">Login</button>
                        </li>
                        <hr class="border-b-[2px] border-0 rounded-full">
                        <li>
                            <RouterLink class="w-full text-start block" to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="w-full text-start block"  to="/market">Market</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="w-full text-start block"  to="/about">About</RouterLink>
                        </li>
                    </ul>
                </teleport>
            </li>
            <li class="grid place-items-center">
                <LogoPokePlace />
            </li>
            <li class="grid place-items-center">
                <button title="Connect Wallet">
                    <IconWallet />
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import LogoPokePlace from './icons/LogoPokePlace.vue';
import IconMenu from './icons/IconMenu.vue';
import IconWallet from './icons/IconWallet.vue';

import { ref } from 'vue'

const isMenuOpen = ref(false)

const openMenu = ()=>{
    isMenuOpen.value = !isMenuOpen.value
}

</script>