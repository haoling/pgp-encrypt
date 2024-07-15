<script setup lang="ts">
import { ref, watch } from 'vue';
import { debounce } from 'lodash';

const query = ref("");
watch(query, debounce((_value) => {
  // searchQuery.value = value;
}, 500))
</script>

<template>
  <input type="text" class="form-control" placeholder="Recipients" v-model="query">
</template>

<style scoped></style>