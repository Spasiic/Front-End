import { useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import CardMusic from "../CardMusic";
import { MusicsContainer } from "../SearchMusic/style";

export default function MyList() {
  const { listWishlist } = useContext(UserContext);

  return (
    <MusicsContainer>
      {listWishlist && listWishlist.map((music, index) => (
        <div key={index}>
          <CardMusic name={music.music_info.name} 
          author={music.music_info.album_info.author_info.name}
          time={music.music_info.duration}
          image={music.music_info.album_info.image}
          musicID={music.music_info.id}
          added={true}
          />
        </div>
      ))}
    </MusicsContainer>
  );
}
