<script setup lang="ts">
const props = defineProps<{ name: string, id: number | string; width?: string; height?: string; }>();
</script>

<template>
  <div class="flex flex-col justify-between p-3 bg-white shadow-lg rounded-md cursor-pointer border hover:border-black/20">
    <div class="flex flex-col">
      <div class="flex justify-center mb-3">
        <div class="w-[96px] h-[96px]">
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`" id="pokemon-image" loading="lazy" decoding="async"
            fetchpriority="high" width="96" />
        </div>
      </div>

      <div class="font-semibold text-xl text-center mb-4">
        <span id="pokemon-name">{{ props.name }}</span>
      </div>

      <div class="font-semibold text-center">
        <span id="pokemon-id">Cod: {{ props.id }}</span>
      </div>
    </div>

    <div class="mb-2">
      <slot name="card-footer-content" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>