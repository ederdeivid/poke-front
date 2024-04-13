<script setup lang="ts">
const goHome = () => { };
</script>

<template>
  <span class="logo" @click.prevent="goHome">
    <span>P</span>
    <span>o</span>
    <span>k</span>
    <span>e</span>
    <span>A</span>
    <span>p</span>
    <span>p</span>
  </span>
</template>

<style lang="css" scoped>
.logo span:nth-child(1) {
  color: #4285f4;
}

.logo span:nth-child(2) {
  color: #ea4335;
}

.logo span:nth-child(3) {
  color: #fbbc05;
}

.logo span:nth-child(4) {
  color: #34a853;
}

.logo span:nth-child(5) {
  color: #4285f4;
}

.logo span:nth-child(6) {
  color: #4285f4;
}

.logo span:nth-child(7) {
  color: #ea4335;
}

.logo span {
  font-family: 'GoogleFont-bItalic';
  font-size: x-large;
  cursor: pointer;
}
</style>