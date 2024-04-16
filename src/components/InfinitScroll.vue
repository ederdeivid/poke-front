<script setup lang="ts">
const emit = defineEmits<{ 'on-scroll-end': string[] }>()
const props = defineProps<{ hasNextPage: boolean }>()

const handleScroll = (element: HTMLElement): void => {
  const scrollEnd = element.scrollHeight - element.scrollTop === element.clientHeight;
  showAndHideToTopButton(element);
  if (scrollEnd && props.hasNextPage) return emit('on-scroll-end')
};

const showAndHideToTopButton = (element: HTMLElement) => {
  const goToTopButton: HTMLButtonElement = element.querySelector('.to-top-button') as HTMLButtonElement;
  if (element.scrollTop > 50) return goToTopButton.style.display = 'block'
  goToTopButton.style.display = 'none'
}

const goToTop = (element: HTMLElement): void => {
  element.scrollTop = 0;
}
</script>

<template>
  <div class="infinit-scroll h-[75vh] lg:m-2 overflow-x-auto relative" @scroll="handleScroll($el)">
    <slot name="infinit-scroll-content" />

    <button @click.prevent="goToTop($el)" class="to-top-button hidden bg-blue-500 hover:bg-blue-800 shadow-xl sticky bottom-0 float-end p-2 px-4 mx-4 rounded-full">
      <span class="font-bold text-white">↑</span>
    </button>
  </div>
</template>

<style lang="css" scoped>
</style>