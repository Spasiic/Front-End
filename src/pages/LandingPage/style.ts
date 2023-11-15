import styled from "styled-components";

import background from "../../assets/shapes_and_images/background-w-texture.svg";

export const Landin = styled.nav`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  gap: 0.3rem;

  img {
    min-height: 12.8rem;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 0.65rem;
  }
`;

export const Nav = styled.nav`
  text-transform: uppercase;
  margin: 0.3rem;
  width: 84px;

  a {
    font-size: 0.85rem;
    text-decoration: none;
  }

  position: relative;
  cursor: pointer;
  transition: border-bottom 0.3s ease-in-out;

  &:before {
    content: " ";
    position: absolute;
    width: 0%;
    height: 1px;
    bottom: 0;
    left: 0;
    background: white;
    transition: width 0.5s ease-in-out;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

export const Paragraph = styled.p`
  margin: 1rem;

  font-size: 1rem;
  max-width: 41rem;
  height: 91px;
  text-align: justify;

  @media (max-width: 798px) {
    width: 80vw;
    height: auto;

    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const SectionButtons = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.3rem;
`;
