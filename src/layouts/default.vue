<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <div class="flex h-screen antialiased bg-[#f1f5f9] overflow-hidden">

    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar />

      <main class="grow">
        <div class="p-4 w-full mx-auto px-4 md:px-12 xl:px-52">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>