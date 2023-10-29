import AddAlarm from "/assets/alarme(1).svg";
import PlayIcon from "/assets/play.svg";
import albumPhoto1 from "/assets/testalbum1.jpg";
import albumPhoto2 from "/assets/testalbum2.jpg";
import albumPhoto3 from "/assets/testalbum3.jpg";
import albumPhoto4 from "/assets/testalbum4.jpg";
import albumPhoto5 from "/assets/testalbum5.jpg";
import albumPhoto6 from "/assets/testalbum6.jpg";
import { useState } from "react";

import * as S from './style'

export default function Albums() {
    const albumPhotos = [albumPhoto1, albumPhoto2, albumPhoto3, albumPhoto4, albumPhoto5, albumPhoto6];
    const [showAlarm, setShowAlarm] = useState(false);
    const [albumLink, setAlbumLink] = useState("");

    function alarmAdd() {
        setShowAlarm(true);
        console.log(showAlarm,setAlbumLink)
    }

    return (
        <S.AlbumGrid>
            {albumPhotos.map((albumPhoto, index) => (
                <S.AlbumItem key={index}>
                    <S.ThumbnailWrapper>
                        <S.IconBackground>
                            <S.AddAlarmIcon src={AddAlarm} height={12} width={14} onClick={alarmAdd} alt="ícone de adicionar alarme"></S.AddAlarmIcon>
                            <S.PlayIconLink href={albumLink}><img src={PlayIcon} height={12} width={13} alt="ícone de ouvir"></img></S.PlayIconLink>
                        </S.IconBackground>
                        <S.AlbumPhoto src={albumPhoto} alt="foto do àlbum" />
                    </S.ThumbnailWrapper>
                    <S.AlbumTitle>Lungs</S.AlbumTitle>
                    <S.AlbumArtist>Florence + the Machine</S.AlbumArtist>
                </S.AlbumItem>
            ))}
        </S.AlbumGrid>
    )
}