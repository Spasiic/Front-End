import styled from 'styled-components';
import close from "../../../public/assets/close.svg";
// Search

export const SearchContainer = styled.div`
  display: flex;
  width: 35rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  background: ${(props) => props.theme.colors.gray};
`;

export const SearchInput = styled.input`
  width: 32rem;
  height: 2.5rem;
  padding-left: 0.5rem;
  background: transparent;
  color: ${(props) => props.theme.colors.lightGray}; 
  border: none;
  border-radius: 1.25rem;
  font-size: ${(props) => props.theme.font.sizes.xxSmall};
  outline: none;

  &::placeholder {
    font-size: ${(props) => props.theme.font.sizes.xxSmall}; 
    @media (min-width: 768px) {
      font-size: 100%;
    }
  }
  
  &:not(:placeholder-shown),
  &:focus {
    background: transparent;
    color: ${(props) => props.theme.colors.white};
  }

   &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background: url(${close}) no-repeat center center;
    cursor: pointer;
  }
`;

export const SearchButton = styled.button`
  margin-left: 0.6rem;
  display: flex;
  align-items: center;
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