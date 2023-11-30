import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import CardMusic from "../CardMusic";
import { MusicsContainer } from "./style";

export default function SearchMusic() {
  const { listMusics } = useContext(UserContext);


  return (
    <MusicsContainer>
      {listMusics && listMusics.map((music, index) => (
        <div key={index}>
          <CardMusic name={music.name} 
          author={music.album_info.author_info.name}
          time={music.duration}
          image={music.album_info.image}
          musicID={music.id}
          added={false}
          />
        </div>
      ))}
    </MusicsContainer>
  );
}
