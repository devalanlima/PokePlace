<template>
    <section class="flex flex-col sm:flex-row gap-5 p-5 justify-between max-w-[1440px] mx-auto md:my-20">
        <div class="flex flex-col gap-5 max-w-[350px] mx-auto text-lg lg:max-w-[540px] lg:text-2xl lg:gap-10 xl:text-3xl xl:max-w-[664px]">
            <h1 class="font-bold m-0 leading-tight">Buy, Sell an Trade hundreds NFT Pokémon Cards</h1>
            <p class="text-justify text-[90%]">
                A non-fungible token (NFT) is a unique digital identifier that cannot be copied, substituted, or subdivided,
                that is recorded in a blockchain, and that is used to certify ownership and authenticity.
            </p>
            <ul class="flex w-full justify-between">
                <li class="text-center">
                    <p class="font-bold text-[150%]">950M</p>
                    <p class="text-[80%]">Total Volum</p>
                </li>
                <li class="text-center">
                    <p class="font-bold text-[150%]">800+</p>
                    <p class="text-[80%]">Asset Number</p>
                </li>
                <li class="text-center">
                    <p class="font-bold text-[150%]">120k</p>
                    <p class="text-[80%]">Daily Trades</p>
                </li>
            </ul>
        </div>
        <CardEffect class="max-w-[340px] sm:max-w-[265px] lg:max-w-[325px] xl:max-w-[370px] mx-auto">
            <img src="https://images.pokemontcg.io/swsh3/20_hires.png" alt="">
        </CardEffect>
    </section>
</template>

<script setup>
import CardEffect from './CardEffect.vue';


</script>