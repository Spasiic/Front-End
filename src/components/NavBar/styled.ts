import styled from 'styled-components';

// Search

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  border: none;
  width: 19.9rem;
  background: #ccc;
  height: 2.5rem;
  border-radius: 1.25rem;
  font-size: 1rem;
  outline: none;
  color: #fff;
  padding-left: 2.4em;
  padding-right: 0.4rem;
  font-style: italic;
  opacity: 0.75;
  &::placeholder {
    font-size: 0.75rem;
    @media (min-width: 768px) {
      font-size: 100%;
    }
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  left: 0;
  top: 0.75rem;
  margin-left: 0.6rem;
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;

  background-color: transparent;
`;

// Header

export const HeaderContainer = styled.header`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoImage = styled.img`
  height: 89px;
  width: 127px;
  margin-bottom: 2px;

`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  gap: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SearchSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;