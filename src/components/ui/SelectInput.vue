<template>
    <div class="relative w-fit bg-MainBlue rounded-3xl">
        <button title="Select Card Type" class="bg-MainBlue px-4 w-full py-3 rounded-full grid place-items-center"
            @click="openMenu">
            <div class="px-0">
                {{ props.buttonName }}
                <IconTriangle :class="['inline', {'rotate-180': isMenuOpen}]" />
            </div>
        </button>
        <nav v-show="isMenuOpen" class="bg-MainBlue rounded-3xl absolute pt-5 mt-2 max-h-[66vh] overflow-y-auto">
            <slot></slot>
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
