import backgroundImg from "../../../public/assets/background-w-texture.svg";
import styled from "styled-components";

export const Container = styled.div`
  background: url(${backgroundImg});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;

export const LogoImage = styled.img`
  max-width: max-content;
  max-height: 40vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 75%;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;
`;

export const Subtitle = styled.h1`
  font-weight: 200;
  font-size: 1rem;
`;

export const RegistrationLink = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  padding: 0.2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;

  section {
    width: 50vw;
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-top: 1.2rem;
  position: relative;
`;

export const Input = styled.input`
  width: 24vw;
  background-color: transparent;
  outline: none;
  border: none;

  border-bottom: 1px solid white;
`;

export const InputLabel = styled.label`
  font-size: 0.8rem;
  position: absolute;
  left: 0;
`;

export const Description = styled.span`
  font-size: 0.6rem;
  text-align: end;
  color: red;
`;
