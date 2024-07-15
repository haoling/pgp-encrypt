<script setup lang="ts">
import Search from './Search.vue';
// import RequestStatusIcon from './RequestStatusIcon.vue';

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
    <div class="container-fluid">
      <div class="input-group mb-3">
        <span class="input-group-text">
          <!-- <RequestStatusIcon :status-container="fileListAll" /> -->
        </span>
        <Search />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  max-height: 10vh; /* 任意の高さに設定 */
  overflow-y: auto;
}
</style>