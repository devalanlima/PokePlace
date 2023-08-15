<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/common/NavBar.vue';
import MainFooter from './components/common/MainFooter.vue';
</script>

<template>
  <header>
    <NavBar class="z-50" />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <MainFooter />
  </footer>
</template>
