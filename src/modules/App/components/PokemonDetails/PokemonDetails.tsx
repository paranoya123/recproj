import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { getPokemonDetails } from '../../../../slices/pokemonSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { Loader, ErrorText } from '../common/Styles'
import { Title, Wrapper, Header, Container, Img, DescriptionRow, DescriptionWrapper } from './PokemonDetails.styles'

const PokemonDetails: React.FC = () => {
  const dispatch = useAppDispatch()
  const pokemonDetails = useAppSelector((state) => state.pokemon.pokemonDetails)
  const isError = useAppSelector((state) => state.pokemon.isError)
  const isLoading = useAppSelector((state) => state.pokemon.isLoading)
  const { pokemonId } = useParams()
  const [image, setImage] = useState('')
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(getPokemonDetails(pokemonId || ''))
    const getImage = async () => {
      const image = await import(`../../../../assets/${pokemonId}.png`)
      setImage(image.default)
    }
    getImage()
    
  }, [dispatch, pokemonId])

  if (isLoading) return <Loader/>
  if (isError) return <ErrorText onClick={() => window.location.reload()}>Something went wrong. Click to reload</ErrorText>

  return (
    <Wrapper>
      <Header>
        <span onClick={() => navigate('/')}>Home</span> / {pokemonDetails?.name}
      </Header>
      {pokemonDetails?.name && (
        <Container>
          <Img src={image} alt={pokemonDetails.name} />
          <DescriptionWrapper>
            <Title>{pokemonDetails.name}</Title>
            <table>
              <DescriptionRow><td>Types</td><td>{pokemonDetails.types}</td></DescriptionRow>
              <DescriptionRow><td>Weight</td><td>{pokemonDetails.weight}</td></DescriptionRow>
              <DescriptionRow><td>Height</td><td>{pokemonDetails.height}</td></DescriptionRow>
              <DescriptionRow><td>HP</td><td>{pokemonDetails.stats.hp}</td></DescriptionRow>
              <DescriptionRow><td>Attack</td><td>{pokemonDetails.stats.attack}</td></DescriptionRow>
              <DescriptionRow><td>Defense</td><td>{pokemonDetails.stats.defense}</td></DescriptionRow>
            </table>
          </DescriptionWrapper>
        </Container>
      )}
    </Wrapper>
  )
}

export default PokemonDetails
