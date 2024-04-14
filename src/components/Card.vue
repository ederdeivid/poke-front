<script setup lang="ts">
// const props = defineProps<{ img: string, name: string, id: number | string, types: string[] }>()
</script>

<template>
  <div class="flex flex-col justify-between w-60 h-72 p-3 border border-cyan-500">
    <div class="flex flex-col">
      <div class="flex justify-center mb-3">
        <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/4.svg" loading="lazy" decoding="async" fetchpriority="high" width="70" />
      </div>

      <div class="font-semibold text-xl text-center mb-4">Pokemon name</div>

      <div class="font-semibold text-center">Código</div>
    </div>

    <div class="flex flex-row justify-center">
      <slot name="card-footer-content" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>