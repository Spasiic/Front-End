import Clock from "p/alarme(2).svg";
import Image from "next/image";
import Seta from "p/seta.svg";
import Close from "p/close.svg";
import Calendar from "p/calendário.svg";
import albumPhoto1 from "p/testalbum1.jpg";
import { useState } from "react";

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
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

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
        }
    }

    return (
        <div className="bg-black-gray w-[557px] h-[455px] rounded-xl grid justify-items-center relative">
            {/* top div */}
            <div className="flex items-center justify-between w-[550px] px-4">
                <div className="flex justify-between w-[245px]">
                    <Image src={Clock} width={24} height={24} alt="ícone relógio"></Image>
                    <h2 className="text-[20px] font-semibold uppercase">Programar Alarme</h2>
                </div>
                <Image src={Close} width={26} height={26} alt="ícone para fechar"></Image>
            </div>

            {/* music, album or artist photo + title */}
            <div className="flex h-[85px] w-[190px] justify-between">
                <Image src={albumPhoto1} width={85} height={85} alt="cover" draggable="false"></Image>
                <div className="grid items-center content-center">
                    <h4 className="text-[14px] font-normal ">Take Me Out</h4>
                    <h4 className="text-[14px] font-normal ">Franz Ferdinand</h4>
                </div>
            </div>

            {/* general hour div */}
            <div className="flex items-center justify-between w-[300px]">

                <h3 className="text-[20px] font-medium uppercase">Hora</h3>

                {/* numbers and pointers div */}
                <div className="flex items-center justify-between w-[140px]">

                    <div className="grid justify-items-center">
                        <button onClick={increaseHour}><Image src={Seta} width={26} height={26} alt="seta para aumentar a numeração" /></button>
                        <h2 className="text-[44px] w-[60px] flex justify-center">{countHour.toString().padStart(2, '0')}</h2>
                        <button onClick={decreaseHour}><Image src={Seta} width={26} height={26} alt="seta para diminuir a numeração" className="rotate-180" /></button>
                    </div>

                    <h2 className="text-[44px]">:</h2>

                    <div className="grid justify-items-center">
                        <button onClick={increaseMin}><Image src={Seta} width={26} height={26} alt="seta para aumentar a numeração" /></button>
                        <h2 className="text-[44px] w-[60px] flex justify-center">{countMin.toString().padStart(2, '0')}</h2>
                        <button onClick={decreaseMin}><Image src={Seta} width={26} height={26} alt="seta para diminuir a numeração" className="rotate-180" /></button>
                    </div>

                </div>

            </div>

            {/* date div */}

            <div className="flex items-center justify-between w-[300px]">
                <h3 className="text-[20px] font-medium uppercase">Data</h3>

                <div className="flex items-center justify-center relative w-[130px]">
                    <input type="date" className="bg-black outline-none" onChange={(e) => setSelectedDate(e.target.value)}></input>
                    <Image src={Calendar} width={16} height={16} alt="calendarIcon" className="absolute right-0"></Image>

                </div>

            </div>
            {/* button div */}
            <div className="flex items-center justify-end pr-5 w-[557px]">
                <button className="bg-white text-black font-bold rounded-2xl w-[159px] h-[46px] uppercase" onClick={Send}>Confirmar</button>
            </div>

            {DateError && (
                <p className="absolute bottom-[1rem] left-[1.25rem] text-[0.8rem] font-semibold text-purple">Por favor insira uma data válida.</p>
            )}
        </div>
    )
}