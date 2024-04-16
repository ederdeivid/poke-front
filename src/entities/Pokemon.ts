import { PokemonAbilitiesFormatted, TypesEnum } from '@/types/PokemonApiRequestTypes';

export default class PokemonEntity {
  
  constructor (public id: number, public name: string, public types: TypesEnum[], abilities?: PokemonAbilitiesFormatted[]) {
  }
}