<script setup lang="ts">
const props = defineProps<{ name: string, id: number | string }>()
</script>

<template>
  <div class="flex flex-col justify-between w-60 h-72 p-3 border border-cyan-500">
    <div class="flex flex-col">
      <div class="flex justify-center mb-3">
        <img id="pokemon-image" :src="`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`" loading="lazy" decoding="async" fetchpriority="high" width="70" />
      </div>

      <div class="font-semibold text-xl text-center mb-4">
        <span id="pokemon-name">{{ props.name }}</span>
      </div>

      <div class="font-semibold text-center">
        <span id="pokemon-id">Cod: {{ props.id }}</span>
      </div>
    </div>

    <div class="flex flex-row justify-center">
      <slot name="card-footer-content" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>