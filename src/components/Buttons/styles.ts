import styled from 'styled-components';

// Filter Button

export const CustomButtonFilter = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-align: center;
  padding: 0.25rem;
  background-color: ${(props) => props.theme.colors.gray}; 
  border-radius: 9999px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0.25rem;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.white}; 
  font-weight: ${(props) => props.theme.weights.semibold};
  font-size: ${(props) => props.theme.sizes.medium};
  margin-right: 0.5rem;
`;

// Focus Button

export const CustomButtonFocus = styled.button`
  height: 3rem;
  display: flex;
  gap: 0.5rem;
  text-align: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  font-size: 0.75rem;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 100%;
  }

  &.purple {
    background-color: ${(props) => props.theme.colors.purple}; 
  }

  &.black {
    background-color: ${(props) => props.theme.colors.black}; 
  };

  &:hover {
    background-color: ${(props) => props.theme.colors.purple}; 
  }
`

export const IconFC = styled.img`
  width: 32px;
  height: 32px;
  background-color: transparent;
`;

export const TextFC = styled.p`
  text-transform: capitalize;
  background-color: transparent;
`;

// Landing Button

export const CustomButtonLanding = styled.button`
  background-color: #515151;
  width: max-content;
  height: auto;
  padding: 1rem 2rem;
  border-radius: 9999px;
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray}; 
  }

  a {
    text-decoration: none;
  };
`

// Selected Buttom

export const CustomButtonSelected = styled.button`
  height: 3rem;
  display: flex;
  gap: 0.5rem;
  text-align: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.purple};
  font-size: 0.75rem;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 100%;
  }
`;

export const IconS = styled.img`
  width: 32px;
  height: 32px;
`;

export const TextS = styled.p`
  text-transform: capitalize;
`;
