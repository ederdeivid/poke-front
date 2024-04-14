export interface ISearchByLimit {
  limit: number;
  offset: number;
}

export interface PokemonsDAO {
  count: number;
  next: string | null;
  previous: string | null;
  result: PokemonsDAOResult[];
}

export interface PokemonsDAOResult {
  name: string;
  url: string;
}

export interface PokemonDetailsDAO {
  id: number;
  name: string;
  abilities: PokemonAbilitiesDAO[]
  types: []
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
  }
}

export enum PokemonTypes {
  normal = 1,
}