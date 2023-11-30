import albumPhoto from "/assets/testalbum4.jpg";
import clock from "/assets/clock.svg";
import spotify from "/assets/spotify.svg";
import deezer from "/assets/deezer.svg";
import soundCloud from "/assets/soundCloud.svg";
import { useContext, useEffect, useState } from "react";

import * as S from "./style";
import { Text } from "../Elements/text";
import Alarm from "../AlarmPopUp";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/authAPI";

const CardMusic = ({name,author,time,image,musicID,added}) => {
    const { user } = useContext(UserContext);

    const [alarmPopUp, setAlarmPopUp] = useState(false);
    const [musicAdd, setMusicAdd] = useState(false);

    const formattedTime = time ? time.slice(0, 5) : '';

    async function addMusicList(musicID,userID){
        const response = await api.addMusic(userID,musicID)
        if(response.status == 201){
            setMusicAdd(true)
        }
    }

    useEffect(() => {
        setAlarmPopUp(false)    
    }, [])

    const imageAlbum = `https://www.mymusiclist.com.br${image}`

    return (
        <>
            {alarmPopUp ? (
                <Alarm musicID={musicID} image={imageAlbum} name={name} author={author} onClose={() => setAlarmPopUp(false)}></Alarm>
            ) : (
                <S.AlbumCard>
                    <S.AlbumImage
                        src={imageAlbum}
                        height={121}
                        width={121}
                        alt="foto do àlbum"
                        draggable="false"
                    ></S.AlbumImage>
                    <S.AlbumInfo>
                        <Text $size="small" $weight="regular" color="white">
                            {name}
                        </Text>
                        <Text $size="small" $weight="regular" color="white">
                            {" "}
                            {author}{" "}
                        </Text>
                    </S.AlbumInfo>

                    <S.ActionGridContainer>
                        <S.Controls >
                        {added ? 
                            <S.Clock onClick={() => setAlarmPopUp(true)}/> 
                            : musicAdd ? <S.CheckButton onClick={() => console.log(musicAdd)}></S.CheckButton> : <S.AddButton  className={musicAdd ? "rotate" : ""} onClick={() => addMusicList(musicID,user.user_id)}></S.AddButton>}
                            <Text $size="xSmall" $weight="regular">
                                {formattedTime}
                            </Text>
                        </S.Controls>

                        <S.SocialIcons >
                            <a href="">
                                <img src={spotify} height={14} width={14} alt="Spotify Icon" />
                            </a>
                            <a href="">
                                <img src={deezer} height={14} width={14} alt="Deezer Icon" />
                            </a>
                            <a href="">
                                <img
                                    src={soundCloud}
                                    height={14}
                                    width={14}
                                    alt="SoundCloud Icon"
                                />
                            </a>
                        </S.SocialIcons>
                    </S.ActionGridContainer>
                </S.AlbumCard>
            )}
        </>
    );
};

export default CardMusic;
