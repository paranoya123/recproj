import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
  min-height: 85vh;
  overflow: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-height: inherit;
  }
`

export const Item = styled.div`
  width: 210px;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin: 12px;
  padding: 10px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin: 8px;
    height: 160px;
  }
`

export const Img = styled.img`
  height: 10vh;
  width: 10vh;

  @media (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`

export const Title = styled.div`
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-align: center;
`

export const Wrapper = styled.div`
    padding: 16px;
`