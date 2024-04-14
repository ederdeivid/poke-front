<script setup lang="ts">
import Services from '@/services/Services';
import { onMounted, inject } from 'vue';

const services: Services = inject('services') as Services;

const searchPokemons = async () => {
  const data = await services.pokemons.searchByLimit({ limit: 24, offset: 0 })
  console.log(data)
}

onMounted(() => searchPokemons())
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <div class="w-full mb-12">
      <div class="flex flex-col items-center gap-2 mb-3">
        <input type="search" class="w-full md:w-5/6 lg:w-5/6 form-input" placeholder="Pesquise por nome ou id do pokemon">
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>