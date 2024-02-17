import { Pokemon, PokemonListApiResponse } from '../types/types'

//Chaching data to be compliant with fair use policy

export async function fetchPokemons(page = 1): Promise<PokemonListApiResponse>{
    let limit = 20
    const offset = (page - 1) * limit

    if (offset + limit > 151){
        limit = 11
    }
    
    const cacheKey = `pokemons-page-${page}`

    const cachedData = localStorage.getItem(cacheKey)
    if (cachedData) {
        return JSON.parse(cachedData)
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    const data = await response.json()


    localStorage.setItem(cacheKey, JSON.stringify(data))

    return data
}

export async function fetchPokemonDetails(id: string): Promise<Pokemon>{
    const cacheKey = `pokemon-details-${id}`

    const cachedData = localStorage.getItem(cacheKey)
    if (cachedData) {
        return JSON.parse(cachedData)
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()

    localStorage.setItem(cacheKey, JSON.stringify(data))

    return data
}