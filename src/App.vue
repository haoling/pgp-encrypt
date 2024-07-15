<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="app-container">
    <Navbar />
    <textarea></textarea>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
}
</style>