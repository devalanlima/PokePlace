<template>
    <div class="relative bg-MainBlue rounded-3xl overflow-hidden">
        <button class="bg-MainBlue px-4 w-full py-3 rounded-full" @click="openMenu">
            <div class="text-start flex items-center gap-2">
                {{ props.buttonName }}
                <IconTriangle :class="['mx-auto mr-0', { 'rotate-180': isMenuOpen }]" />
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
</script>
