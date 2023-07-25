<template>
    <div class="relative w-fit bg-MainBlue rounded-3xl">
        <button title="Select Card Type" class="bg-MainBlue px-4 w-full py-3 rounded-full grid place-items-center"
            @click="openMenu">
            <div class="px-0">
                {{ props.buttonName }}
                <IconTriangle class="inline" />
            </div>
        </button>
        <nav v-if="isMenuOpen" class="bg-MainBlue rounded-3xl">
            <ul class="flex flex-col gap-5 p-5">
                <slot></slot>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import IconTriangle from '../icons/IconTriangle.vue';
import { ref } from 'vue';

const props = defineProps({
    buttonName:{type:String, default:'Button'}
})

const isMenuOpen = ref(false)

const openMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>
