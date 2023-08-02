<template>
    <div class="relative min-w-max bg-MainBlue rounded-3xl overflow-hidden font-semibold" ref="target">
        <button class="bg-MainBlue w-full py-2 px-4 rounded-full" @click="openMenu">
            <div class="text-start gap-2 flex items-center whitespace-nowrap">
                {{ props.buttonName }}
                <div :class="['min-w-max', { 'rotate-180': isMenuOpen }]">
                    <IconTriangle />
                </div>
            </div>
        </button>
        <nav v-show="isMenuOpen" class="bg-MainBlue w-full">
            <KeepAlive>
                <slot></slot>
            </KeepAlive>
        </nav>
    </div>
</template>
<script setup>
import IconTriangle from '../icons/IconTriangle.vue';
import { ref } from 'vue';

const props = defineProps({
    buttonName: { type: String, default: 'Button' }
})

const isMenuOpen = ref(false)

const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

import { onClickOutside } from '@vueuse/core'
const target = ref(null)

onClickOutside(target, () => {
    if (isMenuOpen.value) {
        isMenuOpen.value = false
    }
})

</script>
