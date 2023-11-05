import styled from 'styled-components';
import AddAlarm from "../../../public/assets/alarme(1).svg";
import AlarmAdded from "../../../public/assets/alarme.svg"; 
import Add from "../../../public/assets/plus.svg";

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

export const AddButton = styled.button`
  width: 28px;
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  background: url(${Add}) no-repeat center center;
`;

export const AlarmAddButton = styled.button`
  width: 28px;
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  background: url(${AddAlarm}) no-repeat center center;
`;

export const AlarmSetButton = styled.button`
  width: 28px;
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  background: url(${AlarmAdded}) no-repeat center center;
`;