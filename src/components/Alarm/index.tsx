import Clock from "/assets/alarme(2).svg";
import Seta from "/assets/seta.svg";
import Close from "/assets/close.svg";
import Calendar from "/assets/calendário.svg";
import albumPhoto1 from "/assets/testalbum1.jpg";
import { useState } from "react";

// Style

import * as S from './style';

// interface close {
//     onClick: () => void;
// }

export default function Alarm() {
    const [countHour, setCountHour] = useState("00");
    const [countMin, setCountMin] = useState("02");
    const [selectedDate, setSelectedDate] = useState("");
    const [DateError, setDateError] = useState(false);
    const currentDate = Date.now();

    function formatDate(date: number) {
        const d = new Date(date)
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate()
        const year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }


    const increaseHour = () => {
        setCountHour((prevHour) => {
            const newHour = parseInt(prevHour) + 1;
            return newHour > 23 ? "00" : newHour.toString().padStart(2, '0');
        });
    }

    const decreaseHour = () => {
        setCountHour((prevHour) => {
            const newHour = parseInt(prevHour) - 1;
            return newHour < 0 ? "23" : newHour.toString().padStart(2, '0');
        });
    }

    const increaseMin = () => {
        setCountMin((prevMin) => {
            const newMin = parseInt(prevMin) + 1;
            return newMin > 59 ? "00" : newMin.toString().padStart(2, '0');
        });
    }

    const decreaseMin = () => {
        setCountMin((prevMin) => {
            const newMin = parseInt(prevMin) - 1;
            return newMin < 0 ? "59" : newMin.toString().padStart(2, '0');
        });
    }


    function Send() {
        const formatedCurrentDate = formatDate(currentDate).toString();

        if (selectedDate < formatedCurrentDate) {
            setDateError(true);
        } else {
            setDateError(false);
            const DateAlarm = `${selectedDate}T${countHour}:${countMin}:00Z`;
            console.log(DateAlarm)
        }
    }

    return (
        <S.AlarmContainer>
            {/* top div */}
            <S.TopDiv>
                <div>
                    <S.ClockIcon src={Clock} alt="ícone relógio"></S.ClockIcon>
                    <S.Title className="text-[20px] font-semibold uppercase">Programar Alarme</S.Title>
                </div>
                <S.CloseIcon src={Close} alt="ícone para fechar"></S.CloseIcon>
            </S.TopDiv>

            {/* music, album or artist photo + title */}
            <S.MusicInfo>
                <S.AlbumPhoto src={albumPhoto1} alt="cover" draggable="false"></S.AlbumPhoto>
                <S.InfoGrid>
                    <S.MusicTitle className="text-[14px] font-normal ">Take Me Out</S.MusicTitle>
                    <S.ArtistName className="text-[14px] font-normal ">Franz Ferdinand</S.ArtistName>
                </S.InfoGrid>
            </S.MusicInfo>

            {/* general hour div */}
            <S.ContainerHour>

                <S.Heading className="text-[20px] font-medium uppercase">Hora</S.Heading>

                {/* numbers and pointers div */}
                <S.SubContainer>

                    <S.NumberContainer>
                        <S.NumberButton onClick={increaseHour}><img src={Seta} width={26} height={26} alt="seta para aumentar a numeração" /></S.NumberButton>
                        <S.NumberText >{countHour.toString().padStart(2, '0')}</S.NumberText>
                        <S.NumberButton onClick={decreaseHour}><img src={Seta} width={26} height={26} alt="seta para diminuir a numeração" className="rotate"/></S.NumberButton>
                    </S.NumberContainer>

                    <S.Colon className="text-[44px]">:</S.Colon>

                    <S.NumberContainer>
                        <S.NumberButton onClick={increaseMin}><img src={Seta} width={26} height={26} alt="seta para aumentar a numeração" /></S.NumberButton>
                        <S.NumberText>{countMin.toString().padStart(2, '0')}</S.NumberText>
                        <S.NumberButton onClick={decreaseMin}><img src={Seta} width={26} height={26} alt="seta para diminuir a numeração" className="rotate" /></S.NumberButton>
                    </S.NumberContainer>
                </S.SubContainer>
            </S.ContainerHour>

            {/* date div */}

            <S.DateDiv>
                <S.TitleDate>Data</S.TitleDate>

                <S.DateInputContainer>
                    <S.DateInput type="date"  onChange={(e) => setSelectedDate(e.target.value)}></S.DateInput>
                    <S.CalendarIcon src={Calendar}  alt="calendarIcon" className="absolute right-0"></S.CalendarIcon>
                </S.DateInputContainer>

            </S.DateDiv>
            {/* button div */}
            <S.ContainerButton >
                <S.ConfirmButton onClick={Send}>Confirmar</S.ConfirmButton>
            </S.ContainerButton>

            {DateError && (
                <S.ErrorMessage>Por favor insira uma data válida.</S.ErrorMessage>
            )}
        </S.AlarmContainer>
    )
}