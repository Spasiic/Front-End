import styled from 'styled-components';

export const ArtistInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  text-align: center;
  gap: 0.5rem;
`;

export const ArtistImage = styled.div`
  background-color: purple;
  width: 115px;
  height: 115px;
  border-radius: 9999px;
  background-size: cover;
  background-position: center;
`;

export const ArtistName = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.05em;
`;