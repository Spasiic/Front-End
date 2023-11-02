import styled from 'styled-components';

export const AlarmContainer = styled.div`
  background-color: #333;
  width: 557px;
  height: 455px;
  border-radius: 20px;
  display: grid;
  justify-items: center;
  position: relative;
`;

export const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  padding: 0 1rem;

  div{
    display: flex;
    justify-content: space-between;
    width: 245px;
  }
`;

export const ClockIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;

export const CloseIcon = styled.img`
  width: 26px;
  height: 26px;
`;

export const MusicInfo = styled.div`
  display: flex;
  height: 85px;
  width: 190px;
  justify-content: space-between;
`;

export const AlbumPhoto = styled.img`
  width: 85px;
  height: 85px;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

export const MusicTitle = styled.h4`
  font-size: 14px;
  font-weight: normal;
`;

export const ArtistName = styled.h4`
  font-size: 14px;
  font-weight: normal;
`;

export const ContainerHour = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

export const Heading = styled.h3`
  font-size: 20px;
  font-weight: medium;
  text-transform: uppercase;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
`;

export const NumberContainer = styled.div`
  display: grid;
  place-content: center;
`;

export const NumberButton = styled.button`
  cursor: pointer;

  img {
    width: 26px;
    height: 26px;
  }
`;

export const NumberText = styled.h2`
  font-size: 44px;
  width: 60px;
  display: flex;
  justify-content: center;
  font-weight: 400;
`;

export const Colon = styled.h2`
  font-size: 44px;
`;

export const DateDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

export const TitleDate = styled.h3`
  font-size: 20px;
  font-weight: medium;
  text-transform: uppercase;
`;

export const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 130px;
`;

export const DateInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
`;

export const CalendarIcon = styled.img`
  position: absolute;
  right: 7px;
  width: 16px;
  height: 16px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;
  width: 557px;
`;

export const ConfirmButton = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 1rem;
  width: 159px;
  height: 46px;
  text-transform: uppercase;
  margin: .4rem .8rem;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 1rem;
  left: 1.25rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: purple;
`;
