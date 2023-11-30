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
  display: flex;
`;

export const RegistrationLink = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  padding: 0.2rem;

  transition: .5s;

  &:hover{
    color: #515151;
  }
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
  width: 40vw; 
  position: relative;
  padding: 15px 0 0;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #9b9b9b; 
  outline: 0;
  font-size: 1rem;
  color: #fff; 
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  padding:.2rem;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1rem;
    cursor: text;
    top: 10px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: .8rem;
      color: #515151;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 100;
    border-width: 2px;
    border-image: linear-gradient(to right, #515151, #9b9b9b); 
    border-image-slice: 1;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: .8rem;
  color: #9b9b9b; 
`;

export const Description = styled.span`
  display: flex;
  justify-content: flex-end;
  padding: .2rem 0;
  font-size: 0.75rem;
  color: red;
  cursor: default;
  user-select: none;
`;

export const buttonAuth = styled.button`
 background-color: #515151;
 padding: .8rem;
 border-radius: 99999px;
 width: 15vw;

 font-size: 1rem;
 text-transform: uppercase;
 font-weight: 600;

 cursor: pointer;
 transition: .5s;

 &:hover{
  transform: scale(1.1);
 }
`