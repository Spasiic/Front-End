import Image from "next/image";
import albumPhoto from "p/testalbum4.jpg";
import adicionarMusica from "p/plus.svg";
import alarmeAtivo from "p/alarme.svg";
import adicionarAlarme from "p/alarme(1).svg";
import escutado from "p/check.svg";
import spotify from "p/spotify.svg";
import deezer from "p/deezer.svg";
import soundCloud from "p/soundCloud.svg";
import { useState } from "react";



interface CardMusicProps {
    album: string;
    artist: string;
}

const CardMusic: React.FC<CardMusicProps> = ({ album, artist }) => {

    const [isMusicAdded, setIsAdded] = useState(false);
    const [isAlarmSet, setIsAlarmSet] = useState(false);
    const [isDone, setIsDone] = useState(false);

    return (
        <div className="w-[31.188rem] h-[9.313rem] bg-black-gray rounded-[10px] flex content-center items-center justify-between">

            <Image src={albumPhoto} height={121} width={121} alt="foto do àlbum" className="rounded-[4px] mx-4"></Image>
            <div className="h-auto w-[282px] grid items-center content-center">
                <h3 className="text-description font-light">In Bloom</h3>
                <h3 className="text-description font-light"> NECKDEEP </h3>
            </div>

            <div className="grid justify-items-center items-end mr-4 h-[121px]">

                <div className="grid items-center justify-items-center h-11 w-7">
                    {isMusicAdded ? (
                        <>
                            {isDone ? (
                                <Image src={escutado} height={28} width={28} alt="done icon" />
                            ) : (
                                <Image src={isAlarmSet ? alarmeAtivo : adicionarAlarme} height={28} width={28} alt="alarm or plus icon" />
                            )}
                        </>
                    ) : (
                        <Image src={adicionarMusica} height={28} width={28} alt="done icon" />
                    )}
                    <h3 className="text-description font-light">3:14</h3>
                </div>

                <div className="flex w-[3.688rem] h-[0.875] justify-between">
                    <a href=""><Image src={spotify} height={14} width={14} alt="Spotify Icon" /></a>
                    <a href=""><Image src={deezer} height={14} width={14} alt="Deezer Icon" /></a>
                    <a href=""><Image src={soundCloud} height={14} width={14} alt="SoundCloud Icon" /></a>
                </div>

            </div>

        </div>
    );
};

export default CardMusic;