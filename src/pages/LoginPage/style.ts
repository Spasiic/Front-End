import backgroundImg from "../../assets/shapes_and_images/background-w-texture.svg";
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

export const RegistrationLink = styled.a`
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  padding: 0.2rem;
`;

export const Form = styled.form`
  width: max-content;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  position: relative;
`;

export const Input = styled.input`
  width: 35vw;
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

export const Description = styled.h3`
  font-size: 0.6rem;
  text-align: end;
  color: red;
`;

export const but = styled.button`
  width: 100%;
  background-color: red;
  z-index: 9;
`;
