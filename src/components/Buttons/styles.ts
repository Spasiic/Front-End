import styled from 'styled-components';

// Filter Button

export const CustomButtonFilter = styled.button`
  display: flex;
  align-items: center;
  gap: .3rem;
  text-align: center;
  padding: 0.25rem;
  background-color: gray;
  border-radius: 9999px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0.25rem;
`;

export const Text = styled.p`
  color: white;
  font-weight: 500;
  font-size: 16px;
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
  
  @media (min-width: 768px) {
    font-size: 100%;
  }

  .purple{
    background-color: red;
  }

  .black{
    background-color: blue;
  }
`;

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

  &:hover {
    background-color: gray;
  }

  a{
    text-decoration: none;
  }
`;

// Selected Buttom

export const CustomButtonSelected = styled.button`
  height: 3rem;
  display: flex;
  gap: 0.5rem;
  text-align: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: purple;
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