<script setup lang="ts">
import { TypesEnum } from '@/types/PokemonApiRequestTypes';

const props = defineProps<{ types: TypesEnum[]; }>();

const pokemonTypesClassMap: Record<TypesEnum, string> = {
  [TypesEnum.NORMAL]: 'bg-normal',
  [TypesEnum.FLYING]: 'bg-flying',
  [TypesEnum.POISON]: 'bg-poison',
  [TypesEnum.GROUND]: 'bg-ground',
  [TypesEnum.FIRE]: 'bg-fire',
  [TypesEnum.WATER]: 'bg-water',
  [TypesEnum.GRASS]: 'bg-grass',
  [TypesEnum.ELECTRIC]: 'bg-electric',
  [TypesEnum.FAIRY]: 'bg-fairy',
};

const getBgColorByPokemonType = (pokemonType: TypesEnum): string => {
  return pokemonTypesClassMap[pokemonType] || 'bg-default';
};
</script>

<template>
  <div class="flex flex-row justify-center gap-2">
    <div v-for="(type, idx) in props.types" :class="getBgColorByPokemonType(type)" :key="idx" class="text-white text-sm font-semibold px-4 py-1 uppercase rounded-full">
      {{ type }}
    </div>
  </div>
</template>

<style lang="css" scoped></style>