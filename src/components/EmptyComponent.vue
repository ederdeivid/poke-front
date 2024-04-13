<script setup lang="ts">
import { EmptyComponentProps } from '@/types/EmpyComponent'
import EmptyImage from '@/assets/empty.svg'

const props = withDefaults(defineProps<EmptyComponentProps>(), {
  emptyMessage: 'Nenhum registro encontrado',
  width: '150'
})
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <img :width="props.width" :style="props.style" :src="EmptyImage" />
    <span id="emptyMessage text-gray-400">{{ props.emptyMessage }}</span>
  </div>
</template>

<style lang="css" scoped>
</style>