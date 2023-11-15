import styled from "styled-components";
import Clock from "../../assets/icons/clock.svg";
import Seta from "../../assets/icons/arrow.svg";
import Close from "../../assets/icons/close.svg";
import Calendar from "../../assets/icons/calendar.svg";

export const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blur};
`;

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

  div {
    display: flex;
    justify-content: space-between;
    width: 245px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;

export const MusicInfo = styled.div`
  display: flex;
  height: 85px;
  width: 244px;
  justify-content: space-around;
`;

export const AlbumPhoto = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 4px;
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

export const MusicTitle = styled.h4`
  font-size: ${(props) => props.theme.font.sizes.small};
  font-weight: ${(props) => props.theme.font.weights.medium};
`;

export const ArtistName = styled.h4`
  font-size: ${(props) => props.theme.font.sizes.xxSmall};
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
  justify-items: center;
`;

export const NumberButton = styled.button`
  width: auto;
  height: auto;
  cursor: pointer;
`;

export const NumberText = styled.h2`
  font-size: ${(props) => props.theme.font.sizes.xLarge};
  width: 60px;
  display: flex;
  justify-content: center;
  font-weight: ${(props) => props.theme.font.weights.semibold};
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

  &::-webkit-calendar-picker-indicator {
    filter: invert(100%);
    cursor: pointer;
  }
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
  margin: 0.4rem 0.8rem;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: 1rem;
  left: 1.25rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: purple;
`;

export const CalendarIcon = styled.button`
  position: absolute;
  right: 7px;
  width: 23px;
  height: 25px;
  cursor: pointer;
  background-color: transparent;
  background: url(${Calendar}) no-repeat center center;
`;

export const ClockIcon = styled.img`
  width: 28px;
  height: 26px;
  background-color: transparent;
  border: none;
  outline: none;
  background: url(${Clock}) no-repeat center center;
`;

export const CloseButton = styled.button`
  width: 11px;
  height: 13px;
  cursor: pointer;
  background-color: transparent;
  background: url(${Close}) no-repeat center center;
`;

export const IncreaseArrow = styled.button`
  width: 32px;
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${Seta});
  background-repeat: no-repeat;
  background-position: center center;
`;

export const DecreaseArrow = styled.button`
  width: 32px;
  height: 28px;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${Seta});
  background-repeat: no-repeat;
  background-position: center center;
  transform: rotate(180deg);
`;
