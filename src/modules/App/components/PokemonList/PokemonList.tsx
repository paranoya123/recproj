import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { setPage, getPokemons } from '../../../../slices/pokemonSlice'
import Pagination from '../common/Pagination'
import { Link } from 'react-router-dom'
import { Container, Item, Img, Title, Wrapper } from './PokemonList.styles'
import { Loader, ErrorText } from '../common/Styles'

const NUMBER_OF_PAGES = 8

interface ImagesState {
    [key: string]: string
}

const ItemsDisplay: React.FC = () => {
  const dispatch = useAppDispatch()
  const pokemons = useAppSelector((state) => state.pokemon.pokemons)
  const page = useAppSelector((state) => state.pokemon.page)
  const isError = useAppSelector((state) => state.pokemon.isError)
  const isLoading = useAppSelector((state) => state.pokemon.isLoading)
  const [images, setImages] = useState<ImagesState>({} as ImagesState)

  useEffect(() => {
    dispatch(getPokemons(page))
  }, [dispatch, page])

  useEffect(() => {
    pokemons.forEach(async (pokemon) => {
      const id = getId(pokemon.url)
      try {
        const image = await import(`../../../../assets/${id}.png`)
        setImages((prevImages) => ({ ...prevImages, [id as string]: image.default }))
      } catch (error) {
        console.error(`Failed to load image for ${id}`, error)
      }
    });
  }, [pokemons]);

  const updatePage = (page: number) => dispatch(setPage(page))

  const getId = (url: string) => {
    const segments = url.split('/')
    segments.pop()

    return segments.pop()
  }
  
  if (isError) return <ErrorText onClick={() => window.location.reload()}>Something went wrong. Click to reload</ErrorText>

  return (
    <Wrapper>
      {isLoading ? <Loader/> : <Container>
        {!!pokemons?.length && pokemons.map((pokemon, index) => <Item key={index}>
            <Link to={`/${getId(pokemon.url)}`}>
                {images[getId(pokemon.url) as string] && (
                    <Img src={images[getId(pokemon.url) as string]} alt={pokemon.name} />
                )}
                <Title>{pokemon.name}</Title>
            </Link> 
        </Item>)}
      </Container>}
      <Pagination
        currentPage={page}
        numPages={NUMBER_OF_PAGES}
        setPage={updatePage}
        disabled={isLoading}
      />
    </Wrapper>
  )
}

export default ItemsDisplay