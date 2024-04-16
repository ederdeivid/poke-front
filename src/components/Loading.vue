<script setup lang="ts">
import svgLoading from '@/assets/loading.svg'

const props = defineProps<{ isLoading: boolean; }>();
</script>

<template>
  <div v-if="props.isLoading" class="loading-component">
    <img :src="svgLoading" width="96" />
  </div>
</template>

<style lang="css" scoped>
.loading-component {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>