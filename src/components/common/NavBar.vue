<template>
    <nav class="h-20 w-full border-b-2 border-MainBlue px-5">
        <ul class="flex justify-between items-center h-full gap-5 max-w-[1440px] mx-auto">
            <li class="grid place-items-center lg:order-3">
                <div class="lg:hidden">
                    <button title="Open Menu" class="z-20" @click="openMenu">
                        <IconMenu />
                    </button>
                    <teleport to="body" v-if="isMenuOpen" ref="target">
                        <nav>
                            <ul
                                class="absolute left-0 top-0 mt-20 bg-SecondaryBlue w-[188px] border-r-2 border-b-2 border-MainBlue flex flex-col gap-5 text-2xl p-5">
                                <li>
                                    <button class="w-full text-start block font-semibold" title="Login">Login</button>
                                </li>
                                <hr class="border-b-[2px] border-0 rounded-full">
                                <li>
                                    <RouterLink class="w-full text-start block" to="/">Home</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="w-full text-start block" to="/market">Market</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="w-full text-start block" to="/about">About</RouterLink>
                                </li>
                            </ul>
                        </nav>
                    </teleport>
                </div>
                <div class="hidden lg:block">
                    <nav>
                        <RoutersLinks/>
                    </nav>
                </div>
            </li>
            <li class="grid place-items-center lg:order-1">
                <LogoPokePlace />
            </li>
            <li class="hidden md:block lg:order-2 grow max-w-[400px] min-w-[200px]">
                <SearchBar />
            </li>
            <li class="flex gap-3 lg:order-5">
                <button class="lg:hidden" title="Connect Wallet">
                    <IconWallet />
                </button>
                <MainButton button-name="Login" :have-back-ground="false" class="hidden lg:block" />
                <MainButton button-name="Connect Wallet" class="hidden lg:block" title="Connect Wallet" />
            </li>
        </ul>
    </nav>
</template>

<script setup>
import LogoPokePlace from '../icons/LogoPokePlace.vue';
import IconMenu from '../icons/IconMenu.vue';
import IconWallet from '../icons/IconWallet.vue';

import { ref } from 'vue'

const isMenuOpen = ref(false)

const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}


import { onClickOutside } from '@vueuse/core'
import SearchBar from '../common/SearchBar.vue';
import MainButton from '../ui/MainButton.vue';
import RoutersLinks from './RoutersLinks.vue';
const target = ref(null)

onClickOutside(target, () => {
    if (isMenuOpen.value) {
        isMenuOpen.value = false
    }
})

</script>