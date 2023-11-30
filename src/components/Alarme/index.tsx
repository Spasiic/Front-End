import { AlarmeWrapper, MusicInfos, SectionAlarme } from "./style";
import clock from "/assets/clock.svg";


export default function Alarme({name,author,image}) {

  const imageAlbum = `https://www.mymusiclist.com.br${image}`

  return (
    <AlarmeWrapper>
        <SectionAlarme>
            <img src={clock} alt="" className="clock"/>

            <MusicInfos>
                <img src={imageAlbum} alt="" />
                <div>
                    <h1>{name}</h1>
                    <p>{author}</p>
                </div>
            </MusicInfos>
        </SectionAlarme>
    </AlarmeWrapper>
  );
}
