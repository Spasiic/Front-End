import albumPhoto from "/assets/testalbum4.jpg";
import adicionarMusica from "/assets/plus.svg";
import alarmeAtivo from "/assets/alarme.svg";
import adicionarAlarme from "/assets/alarme(1).svg";
import escutado from "/assets/check.svg";
import spotify from "/assets/spotify.svg";
import deezer from "/assets/deezer.svg";
import soundCloud from "/assets/soundCloud.svg";
import { useEffect, useState } from "react";

import * as S from './style'

/* interface CardMusicProps {
    album: string;
    artist: string;
}
 */
const CardMusic= () => {

    const [isMusicAdded, setIsAdded] = useState(false);
    const [isAlarmSet, setIsAlarmSet] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() =>(
        console.log(setIsAdded,setIsAlarmSet,setIsDone)
    ),[])

    return (
        <S.AlbumCard>

            <S.AlbumImage src={albumPhoto} height={121} width={121} alt="foto do àlbum" className="rounded-[4px] mx-4"></S.AlbumImage>
            <S.AlbumInfo className="h-auto w-[282px] grid items-center content-center">
                <h3 className="text-description font-light">In Bloom</h3>
                <h3 className="text-description font-light"> NECKDEEP </h3>
            </S.AlbumInfo>

            <S.ActionGridContainer className="grid justify-items-center items-end mr-4 h-[121px]">

                <S.Controls className="grid items-center justify-items-center h-11 w-7">
                    {isMusicAdded ? (
                        <>
                            {isDone ? (
                                <img src={escutado} height={28} width={28} alt="done icon" />
                            ) : (
                                <img src={isAlarmSet ? alarmeAtivo : adicionarAlarme} height={28} width={28} alt="alarm or plus icon" />
                            )}
                        </>
                    ) : (
                        <img src={adicionarMusica} height={28} width={28} alt="done icon" />
                    )}
                    <h3 className="text-description font-light">3:14</h3>
                </S.Controls>

                <S.SocialIcons className="flex w-[3.688rem] h-[0.875] justify-between">
                    <a href=""><img src={spotify} height={14} width={14} alt="Spotify Icon" /></a>
                    <a href=""><img src={deezer} height={14} width={14} alt="Deezer Icon" /></a>
                    <a href=""><img src={soundCloud} height={14} width={14} alt="SoundCloud Icon" /></a>
                </S.SocialIcons>

            </S.ActionGridContainer>

        </S.AlbumCard> 
    );
};

export default CardMusic;