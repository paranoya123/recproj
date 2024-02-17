import styled from 'styled-components'

export const StyledButton = styled.div<{disabled: boolean}>`
  width: 32px;
  height: 32px;
  box-shadow: 2px 2px 0px 0px #00000099;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  cursor: pointer;
  ${({disabled}) => disabled && `opacity: 0.5;`}
`

export const MiddleButton = styled(StyledButton)`
  background-color: black;
  color: white;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export const TextSeparator = styled.div`
  width: 11px;
  margin-right: 10px;
  align-self: flex-end;
`
