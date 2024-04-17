<script setup lang="ts">
import Card from '@/components/Card.vue';
import PokemonSearch from './PokemonSearch.vue';
import { usePokemonListStore } from '@/stores/UsePokemonListStore';
import Badge from '@/components/Badge.vue';
import InfinitScroll from '@/components/InfinitScroll.vue';
import { ComputedRef, Ref, computed, ref } from 'vue';
import { ISearchByLimit } from '@/types/PokemonApiRequestTypes';
import Loading from '@/components/Loading.vue';
import EmptyComponent from '@/components/EmptyComponent.vue';
import { useRouter } from 'vue-router';

const pokeSearchParams: Ref<ISearchByLimit> = ref({ limit: 24, offset: 0 });
const isLoading: Ref<boolean> = ref(false);
const router = useRouter()

const pokemonStore = usePokemonListStore();

const goToNextPage = () => {
  if (isPokemonsListEmpty.value) return pokeSearchParams.value.offset = 0;
  pokeSearchParams.value.offset += pokeSearchParams.value.limit;
};

const isPokemonsListEmpty: ComputedRef<boolean> = computed(() => Boolean(!pokemonStore.getPokemonList.length))

const handleLoadingState = (loadingState: boolean = true) => {
  isLoading.value = loadingState;
};

const showPokemonDetails = (pokemonId: number) => {
  router.push({ name: 'Details', params: { idOrName: pokemonId } })
}

const sumOfLimitAndOffset = (): number => pokeSearchParams.value.limit + pokeSearchParams.value.offset;

const hasNextPage: ComputedRef<boolean> = computed(() => sumOfLimitAndOffset() < pokemonStore.getRowsNumber);
</script>

<template>
  <div>
    <PokemonSearch :limit="pokeSearchParams.limit" :offset="pokeSearchParams.offset" @is-loading="(loadingState) => handleLoadingState(loadingState)" />

    <div class="flex w-full justify-center">
      <div class="w-full lg:w-11/12 items-center rounded-sm relative">

        <InfinitScroll :has-next-page="hasNextPage" @on-scroll-end="goToNextPage">
          <template #infinit-scroll-content>
            <EmptyComponent v-if="isPokemonsListEmpty && !isLoading" />

            <div v-else class="pokemon-list-grid gap-3">
              <Card v-for="(pokemon, idx) in pokemonStore.getPokemonList" :key="idx" :name="pokemon.name" :id="pokemon.id" @click.prevent="showPokemonDetails(pokemon.id)"
                class="w-52 h-72">
                <template #card-footer-content>
                  <Badge :types="pokemon.types" />
                </template>
              </Card>
            </div>
          </template>
        </InfinitScroll>
        <Loading :is-loading="isLoading" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.pokemon-list-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
}
</style>