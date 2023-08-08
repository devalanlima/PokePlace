<template>
    <div class="flip-card h-fit w-fit cursor-pointer relative" @mousemove="mouseMoveFunction"
        @mouseenter="mouseEnterFunction" @mouseleave="mouseLeaveFunction">
        <div class="pointer-events-none transition-transform duration-300 ease-out relative rounded-xl overflow-hidden"
            :style="flipCardInner">
            <div class="absolute w-[70%] h-[80%] bg-white rounded-full top-1/2 left-1/2 mix-blend-overlay blur-2xl opacity-40"
                :style="shine"></div>
            <img class="absolute object-cover h-full mix-blend-overlay opacity-30 scale-125" src="/grain.webp" alt="">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const centerCordX = ref(0)
const centerCordY = ref(0)
const elementWidth = ref(0)
const elementHeight = ref(0)
const mouseEnterFunction = (event) => {
    clearTimeout(timeoutReset)
    const $hoverCard = event.target;
    elementWidth.value = $hoverCard.getBoundingClientRect().width
    elementHeight.value = $hoverCard.getBoundingClientRect().height
    centerCordX.value = $hoverCard.getBoundingClientRect().x + (elementWidth.value / 2);
    centerCordY.value = $hoverCard.getBoundingClientRect().y + (elementHeight.value / 2);
}

const mouseX = ref(0)
const mouseY = ref(0)
const mouseMoveFunction = (event) => {
    const $mouseX = event.clientX
    mouseX.value = $mouseX
    const $mouseY = event.clientY
    mouseY.value = $mouseY
}

const flipCardInner = computed(() => {
    const effectIntensity = 35
    let rotateCordsX = ((centerCordY.value - mouseY.value) / elementHeight.value) * effectIntensity
    let rotateCordsY = (centerCordX.value - mouseX.value) / elementWidth.value * - effectIntensity
    return {
        transform: `rotateY(${rotateCordsY}deg) rotateX(${rotateCordsX}deg)`,
        transformStyle: 'preserve-3d'
    }
})

const shine = computed(() => {
    let translateCordsY = `calc(-50% + ${centerCordY.value - mouseY.value}px)`
    let translateCordsX = `calc(-50% + ${centerCordX.value - mouseX.value}px)`
    return {
        transform: `translateY(${translateCordsY}) translateX(${translateCordsX})`,
    }
})

let timeoutReset
const mouseLeaveFunction = () => {
    timeoutReset = setTimeout(() => {
        centerCordX.value = 0
        centerCordY.value = 0
        mouseX.value = 0
        mouseY.value = 0
    }, 500);
}
</script>

<style scoped>
.flip-card {
    perspective: 1000px;
}
</style>