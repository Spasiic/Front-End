import Image from "next/image";
import AddAlarm from "p/alarme(1).svg";
import PlayIcon from "p/play.svg";
import albumPhoto1 from "p/testalbum1.jpg";
import albumPhoto2 from "p/testalbum2.jpg";
import albumPhoto3 from "p/testalbum3.jpg";
import albumPhoto4 from "p/testalbum4.jpg";
import albumPhoto5 from "p/testalbum5.jpg";
import albumPhoto6 from "p/testalbum6.jpg";
import { useState } from "react";

export default function Albums() {
    const albumPhotos = [albumPhoto1, albumPhoto2, albumPhoto3, albumPhoto4, albumPhoto5, albumPhoto6];
    const [showAlarm, setShowAlarm] = useState(false);
    const [albumLink, setAlbumLink] = useState("");

    function alarmAdd() {
        setShowAlarm(true);
    }

    return (
        <div className="grid grid-cols-2 items-center w-[267px] h-[477px] bg-black-gray rounded-md">
            {albumPhotos.map((albumPhoto, index) => (
                <div key={index} className="grid justify-items-center">
                    <div className="flex w-fit h-[100px]">
                        <div className="w-[21px] h-[40px] bg-[#292929] rounded-tl-md rounded-br-md grid items-center justify-items-center absolute">
                            <Image src={AddAlarm} height={12} width={14} onClick={alarmAdd} className="cursor-pointer" alt="ícone de adicionar alarme"></Image>
                            <a href={albumLink}><Image src={PlayIcon} height={12} width={13} alt="ícone de ouvir"></Image></a>
                            {/* <Image src={Rectangle} height={40} width={21} alt="rectangle"></Image> */}
                        </div>
                        <Image src={albumPhoto} width={105} alt="foto do àlbum" className="rounded-md" />
                    </div>
                    <h3 className="text-[14px] font-normal ">Lungs</h3>
                    <h4 className="text-[10px] font-light">Florence + the Machine</h4>
                </div>
            ))}
        </div>
    );
};