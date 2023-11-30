import styled, { keyframes } from "styled-components";

const shakeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px) rotate(-5deg);
  }
  50% {
    transform: translateX(5px) rotate(5deg);
  }
  75% {
    transform: translateX(-5px) rotate(-5deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
`;

export const AlarmeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blur};
`

export const SectionAlarme = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-around;

  .clock{
    width: 12rem;
    animation: ${shakeAnimation} 0.5s ease infinite;
  }
`

export const MusicInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`