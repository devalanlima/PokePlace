<template>
    <button :class="['px-5 py-4 outline outline-1 outline-MainBlue rounded-full whitespace-nowrap', {'bg-MainBlue': props.haveBackGround}]"
    >{{ props.buttonName }}</button>
</template>

<script setup>
const props = defineProps({
    buttonName:{Type:String, default: 'Button'},
    haveBackGround:{type: Boolean, default: true}
})

</script>