import React from 'react'
import { StyledButton, Container, MiddleButton, TextSeparator } from './Pagination.styles'

type PaginationProps = {
    currentPage: number
    numPages: number
    setPage: (page: number) => void
    disabled: boolean
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, numPages, setPage, disabled }) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages

  const handleFirstPage = () => {
    if(isFirstPage || disabled){
      return
    }

    setPage(1)
  }

  const handlePreviousPage = () => {
    if(isFirstPage || disabled){
      return
    }

    setPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if(isLastPage || disabled){
      return
    }

    setPage(currentPage + 1)
  }

  const handleLastPage = () => {
    if(isLastPage || disabled){
      return
    }

    setPage(numPages)
  }

  return (
    <Container>
      <StyledButton onClick={handlePreviousPage} disabled={isFirstPage || disabled}>
        {'<'}
      </StyledButton>
      <StyledButton onClick={handleFirstPage} disabled={isFirstPage || disabled}>
        1
      </StyledButton>
      <TextSeparator>...</TextSeparator>
      <MiddleButton disabled={false}>
        {currentPage}
      </MiddleButton>
      <TextSeparator>...</TextSeparator>
      <StyledButton onClick={handleLastPage} disabled={isLastPage || disabled}>
        8
      </StyledButton>
      <StyledButton onClick={handleNextPage} disabled={isLastPage || disabled}>
        {'>'}
      </StyledButton>
    </Container>
  )
}

export default Pagination