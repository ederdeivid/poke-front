<script setup lang="ts">
import Badge from '@/components/Badge.vue';
import Card from '@/components/Card.vue';
import Loading from '@/components/Loading.vue';
import PokemonEntity from '@/entities/Pokemon';
import Services from '@/services/Services';
import { usePokemonListStore } from '@/stores/UsePokemonListStore';
import { AbilityRequestDetails, EffectEntries } from '@/types/PokemonApiRequestTypes';
import SearchPokemonByNameUseCase from '@/usecases/SearchPokemonByName.usecase';
import SearchPokemonSkillsUseCase from '@/usecases/SearchPokemonSkills.usecase';
import { ComputedRef, computed, inject, onMounted, ref } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';

const services: Services = inject('services') as Services;
const route: RouteLocationNormalizedLoaded = useRoute();
const pokemonStore = usePokemonListStore();
const skillsList = ref<AbilityRequestDetails[]>([]);
const pokemon = ref<PokemonEntity>(new PokemonEntity(0, '', [], []));
const isLoading = ref<boolean>(false);

onMounted(() => checkIfStoreOrRouteParamsHasValues());

const checkIfStoreOrRouteParamsHasValues = () => {
  isLoading.value = true;
  if (pokemonStore.getPokemonList.length) {
    pokemon.value = getSelectedPokemonFromStore.value;
    pokemonSkillSearch();
    return;
  }
  return searchPokemonsThenSearchSkill();
};

const pokemonSkillSearch = async (selectedPokemon: PokemonEntity = getSelectedPokemonFromStore.value) => {
  const searchPokemonSkills: SearchPokemonSkillsUseCase = new SearchPokemonSkillsUseCase(services);
  skillsList.value = await searchPokemonSkills.execute(selectedPokemon.abilities);
  isLoading.value = false;
};

const getSelectedPokemonFromStore: ComputedRef<PokemonEntity> = computed(() => pokemonStore.getPokemonList.find(pokemon => pokemon.id === Number(route.params.idOrName)) as PokemonEntity);

const searchPokemonsThenSearchSkill = async (): Promise<void> => {
  const pokemonIdOrName: number | string = getPokemonIdFromRouteParams.value;
  const searchPokemonByName: SearchPokemonByNameUseCase = new SearchPokemonByNameUseCase(services);
  pokemon.value = await searchPokemonByName.execute(pokemonIdOrName);
  pokemonSkillSearch(pokemon.value);
};

const getPokemonIdFromRouteParams: ComputedRef<number | string> = computed(() => route.params.idOrName as number | string)
</script>

<template>
  <div>
    <div class="w-full lg:w-7/12 flex flex-row mx-auto mb-4">
      <RouterLink to="/pokemons" class="text-blue-500 font-semibold hover:font-bold">Voltar</RouterLink>
    </div>

    <div class="flex flex-col mx-auto items-center w-full lg:w-7/12">
      <div class="w-full mb-8">
        <Card :name="pokemon.name" :id="pokemon.id" class="h-72">
          <template #card-footer-content>
            <Badge :types="pokemon.types" />
          </template>
        </Card>
      </div>

      <div class="w-full px-4 bg-white border shadow-md rounded-md">
        <div class="flex justify-center">
          <span class="font-semibold text-xl py-3">Habilidades</span>
        </div>

        <div class="py-3">
          <div v-for="(skill, index) in skillsList" :key="index">
            <p class="border-t py-4 text-gray-700">
              <span class="font-semibold uppercase">
                {{ skill.name }}:
              </span>
              <span>
                {{ (skill.effect_entries as EffectEntries).short_effect }}
              </span>
            </p>
          </div>
        </div>
      </div>

      <Loading :is-loading="isLoading" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>