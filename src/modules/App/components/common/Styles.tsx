import styled, { keyframes } from 'styled-components';

// Keyframes for the loader animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  border: 5px solid rgba(255, 255, 255, 0.2);
  border-top: 5px solid blue;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const ErrorText = styled.div`
  color: red;
  font-size: 24px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
`