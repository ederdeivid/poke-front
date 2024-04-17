export interface ISearchByLimit {
  limit: number;
  offset: number;
}

export interface PokemonsDAO {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonsDAOResult[];
}

export interface PokemonsDAOResult {
  name: string;
  url: string;
}

export interface PokemonDetailsDAO {
  id: number;
  name: string;
  abilities: PokemonAbilitiesDAO[]
  types: PokemonTypesDAO[]
}

export interface PokemonAbilitiesDAO {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonTypesDAO {
  type: {
    name: string;
    url: string;
  }
}

export interface PokemonAbilitiesFormatted {
  name: string;
  id: number;
}

export interface AbilityDetails {
  name: string;
  description: string;
}

export interface AbilityRequestDetails {
  id: number;
  name: string;
  effect_entries: EffectEntries
}

export interface EffectEntries {
  effect: string;
  language: {
    name: string;
  };
  short_effect: string;
}

export enum TypesEnum {
  NORMAL = 'normal',
  FLYING = 'flying',
  POISON = 'poison',
  GROUND = 'ground',
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  FAIRY = 'fairy'
}