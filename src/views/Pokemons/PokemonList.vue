<script setup lang="ts">
import Card from '@/components/Card.vue';
import PokemonSearch from './PokemonSearch.vue';

</script>

<template>
  <div>
    <PokemonSearch />

    <div class="flex w-full justify-center">
      <div class="w-full md:w-fill lg:w-1/2 items-center bg-white shadow-lg rounded-sm border border-slate-200 relative mr-2">
        <Card />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>