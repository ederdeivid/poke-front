import { Mock } from 'vitest'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import PokemonSearch from '@/views/Pokemons/PokemonSearch.vue';

const pokemonsMock = {
  searchByLimit: vi.fn()
}
describe('Pokemon search view test', () => {
  test('Should call pokemon services when component mount', () => {
    const wrapper: VueWrapper<PokemonSearchInstanceType> = mountComponent(pokemonsMock);
    expect(pokemonsMock.searchByLimit).toBeCalledTimes(1);
  })
})

type PokemonSearchInstanceType = InstanceType<typeof PokemonSearch>;

const mountComponent = (provideMock?: { searchByLimit: Mock<any, any> }): VueWrapper<PokemonSearchInstanceType> => {
  return shallowMount(PokemonSearch, {
    global: {
      provide: {
        services: {
          pokemons: provideMock
        }
      }
    }
  })
}