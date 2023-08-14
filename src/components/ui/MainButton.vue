<template>
    <button :class="['px-5 py-4 outline outline-1 outline-MainBlue rounded-full whitespace-nowrap', {'bg-MainBlue': props.haveBackGround}, {'bg-slate-500 cursor-not-allowed outline-slate-700': props.disabled === true}]"
    :disabled="disabled"
    >
        {{ props.buttonName }}
    </button>
</template>

<script setup>
const props = defineProps({
    buttonName:{Type:String, default: 'Button'},
    haveBackGround:{type: Boolean, default: true},
    disabled:{type: Boolean, default: false}
})

</script>