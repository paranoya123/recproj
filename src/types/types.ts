export type PokemonListApiResponse = {
    count: number
    next?: string
    previous?: string
    results: Array<PokemonListEntry>
}

export type PokemonListEntry = {
    name: string
    url: string
}

export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Array<{
      is_hidden: boolean;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }>;
    forms: Array<{
      name: string;
      url: string;
    }>;
    game_indices: Array<{
      game_index: number;
      version: {
        name: string;
        url: string;
      };
    }>;
    held_items: Array<{
      item: {
        name: string;
        url: string;
      };
      version_details: Array<{
        rarity: number;
        version: {
          name: string;
          url: string;
        };
      }>;
    }>;
    moves: Array<{
      move: {
        name: string;
        url: string;
      };
      version_group_details: Array<{
        level_learned_at: number;
        version_group: {
          name: string;
          url: string;
        };
        move_learn_method: {
          name: string;
          url: string;
        };
      }>;
    }>;
    species: {
      name: string;
      url: string;
    };
    sprites: {
      front_default: string | null;
      front_shiny: string | null;
      back_default: string | null;
      back_shiny: string | null;
    };
    stats: Array<{
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }>;
    types: Array<{
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }>;
  };

  export type PokemonDisplayDetails = {
    name: string;
    types: string;
    weight: number;
    height: number;
    stats: {
      hp?: number;
      attack?: number;
      defense?: number;
    }
  };


 export interface ApiError {
    response: {
      data: string
    };
  }
  