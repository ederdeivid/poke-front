<script setup lang="ts">
import { onMounted, watch, inject, Ref, ref } from 'vue';
import SearchPokemonUseCase from '@/usecases/SearchPokemon.usecase';
import { usePokemonListStore } from '@/stores/UsePokemonListStore';
import Services from '@/services/Services';
import SearchPokemonByNameUseCase from '@/usecases/SearchPokemonByName.usecase';

const services: Services = inject('services') as Services;

const emit = defineEmits<{ isLoading: boolean[]; }>();

const props = withDefaults(defineProps<{ limit?: number; offset?: number; }>(), {
  limit: 24,
  offset: 0
});

const fts: Ref<string> = ref('');

const pokemonStore = usePokemonListStore();

const searchPokemons = async (offset?: number): Promise<void> => {
  try {
    emit('isLoading', true);
    const searchPokemonUseCase = new SearchPokemonUseCase(services);
    const data = await searchPokemonUseCase.execute({ limit: props.limit, offset: offset ?? props.offset });
    if (props.offset === 0 || offset === 0) return pokemonStore.setPokemon(data);
    pokemonStore.addPokemons(data);
  } finally {
    emit('isLoading', false);
  }
};

const onSearchByNameOrId = async () => {
  try {
    emit('isLoading', true);
    pokemonStore.setPokemon([]);
    if (!fts.value) return searchPokemons(0);
    const searchPokemonByNameUseCase = new SearchPokemonByNameUseCase(services);
    const data = await searchPokemonByNameUseCase.execute(fts.value);
    pokemonStore.setPokemon([data]);
  } catch (error) {
    pokemonStore.setPokemon([]);
  } finally {
    emit('isLoading', false);
  }
};

onMounted(() => searchPokemons());
watch(() => props, () => searchPokemons(), { deep: true });
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <div class="w-full mb-12">
      <div class="flex flex-col items-center gap-2 mb-3">
        <input v-model="fts" @keyup.enter.prevent="onSearchByNameOrId" type="search" class="w-full lg:w-11/12 xl:w-11/12 form-input"
          placeholder="Pesquise por nome ou id do pokemon">
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>