import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPokemons, fetchPokemonDetails } from '../api/pockemonApi'
import { ApiError, PokemonListEntry, PokemonDisplayDetails } from '../types/types'

export const getPokemons = createAsyncThunk('pokemon/getPokemons', async (page: number, { rejectWithValue }) => {
  try {
    return await fetchPokemons(page)
  } catch (error) {
    console.error((error as ApiError).response.data)

    return rejectWithValue((error as ApiError).response.data)
  }
})

export const getPokemonDetails = createAsyncThunk('pokemon/getPokemonDetails', async (id: string, { rejectWithValue }) => {
  try {
    return await fetchPokemonDetails(id)
  } catch (error) {
    console.error((error as ApiError).response.data)

    return rejectWithValue((error as ApiError).response.data)
  }
})

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { 
      pokemons: [] as Array<PokemonListEntry>,
      isLoading: false,
      isError: false,
      pokemonDetails: {} as PokemonDisplayDetails,
      page: 1,
    },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      state.isLoading = false
      state.pokemons = action.payload.results
    })
    builder.addCase(getPokemons.rejected, (state) => {
      state.isLoading = false
      state.isError = true
      state.pokemons = []
    })
    builder.addCase(getPokemonDetails.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      state.isLoading = false
      state.pokemonDetails = {
        name: action.payload.name,
        types: action.payload.types.map((typeEntry) => typeEntry.type.name).join(', '),
        weight: action.payload.weight,
        height: action.payload.height,
        stats: {
          hp: action.payload.stats.find(stat => stat.stat.name === 'hp')?.base_stat,
          attack: action.payload.stats.find(stat => stat.stat.name === 'attack')?.base_stat,
          defense: action.payload.stats.find(stat => stat.stat.name === 'defense')?.base_stat,
        }
      }
    })
    builder.addCase(getPokemonDetails.rejected, (state) => {
      state.isLoading = false
      state.isError = true
      state.pokemons = []
    })
  },
})

export const { setPage } = pokemonSlice.actions

export default pokemonSlice.reducer