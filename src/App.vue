<script setup lang="ts">
import Default from '@/layouts/default.vue';
</script>

<template>
  <Default>
    <router-view v-slot="{ Component }">
      <KeepAlive exclude="PokemonDetails">
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </Default>
</template>

<style scoped></style>
