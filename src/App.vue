<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/common/NavBar.vue';
import MainFooter from './components/common/MainFooter.vue';
</script>

<template>
  <NavBar/>
  <main>
    <RouterView />
  </main>
  <MainFooter/>
</template>
