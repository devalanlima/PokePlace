<template>
    <div class="w-full  border-t-2 border-MainBlue">
        <ul
            class="w-full flex flex-col md:flex-row items-start gap-5 p-5 max-w-[1440px] mx-auto md:items-center min-h-[230px] ">
            <li class="mx-auto">
                <ul class="flex flex-col gap-5  lg:flex-row justify-center items-center lg:gap-14">
                    <li class="mx-auto">
                        <LogoPokePlace />
                    </li>
                    <div class="h-[110px] w-[1px] bg-MainBlue hidden lg:block"></div>
                    <li class="mx-auto flex flex-col gap-5">
                        <nav class="mx-auto">
                            <RoutersLinks/>
                        </nav>
                        <div class="max-w-[300px] mx-auto order-1">
                            <p class="text-center">©2023 Developed by Alan Lima
                                Lima</p>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="mx-auto">
                <ul class="flex flex-col gap-5 ">
                    <li class="mx-auto lg:ml-0">
                        <nav>
                            <SocialLinks class="flex gap-5" />
                        </nav>
                    </li>
                    <li class="mx-auto">
                        <a href="https://devalanlima.github.io/portfolio"
                            target="_blank">devalanlima.github.io/portfolio</a>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script setup>
import LogoPokePlace from '../icons/LogoPokePlace.vue';
import SocialLinks from '../common/SocialLinks.vue'
import RoutersLinks from './RoutersLinks.vue';
</script>