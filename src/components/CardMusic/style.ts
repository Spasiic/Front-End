import styled from 'styled-components';

export const AlbumCard = styled.div`
  width: 31.188rem;
  height: 9.313rem;
  background-color: #333;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .2rem;
`;

export const AlbumImage = styled.img`
  height: 121px;
  width: 121px;
  border-radius: 4px;
  margin: 0 .5rem; 
`;

export const AlbumInfo = styled.div`
  height: auto;
  width: 282px;
  display: grid;
  align-items: center;

  h3 {
    font-weight: 200;
  }
`;

export const ActionGridContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: end;
  margin-right: 4px;
  height: 121px;
`;

export const ActionItemContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 11px;
  width: 7px;
`;


export const Controls = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: max-content;
  margin-right: 1rem; 

  h3{
    font-weight: 300;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  width: 3.688rem;
  height: 0.875rem;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  img {
    height: 14px;
    width: 14px;
  }
`;