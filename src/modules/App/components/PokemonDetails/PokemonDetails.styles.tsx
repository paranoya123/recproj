import styled from 'styled-components'

export const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  margin-bottom: 10px;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Img = styled.img`
  height: 256px;
  width: 256px;
  border: 2px solid black;

  @media (max-width: 768px) {
    height: 40vh;
    width: 40vh;
  }
`

export const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin: 16px 0;
`

export const DescriptionRow = styled.tr`
    font-size: 14px;
    text-align: center;
`

export const Wrapper = styled.div`
    padding: 16px;
`

export const DescriptionWrapper = styled.div`
    padding: 0 16px;

    table td{
      text-align: left;
    }

    table td:nth-child(2n) {
      text-align: right;
    }

  
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0px;

      table {
        width: 100%;
      }
    }
`