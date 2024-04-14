import Card from '@/components/Card.vue';
import { VueWrapper, shallowMount } from '@vue/test-utils';

describe('Card component tests', () => {
  test('Should render all fields correctly when props are properly setted', () => {
    const wrapper: VueWrapper<CardInstanceType> = mountComponent({ id: 4, name: 'Charmander' });
    const pokemonName: string = wrapper.find('#pokemon-name').text();
    const pokemonId: string = wrapper.find('#pokemon-id').text();
    expect(pokemonName).toBe('Charmander')
    expect(pokemonId).toEqual('Cod: 4')
  })
})

interface ComponentProps {
  name: string;
  id: string | number;
}

type CardInstanceType = InstanceType<typeof Card>

const mountComponent = (props: ComponentProps): VueWrapper<CardInstanceType> => {
  return shallowMount(Card,  {
    props: {
      ...props
    }
  })
}