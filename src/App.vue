<template>
  <div>
    <Comments />
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Comments from './components/Comments.vue'
import { useProvideCommentsStore } from './useCommentsStore';
useProvideCommentsStore()

</script>
