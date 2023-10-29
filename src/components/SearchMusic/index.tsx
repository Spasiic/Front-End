import { useEffect, useState } from "react";
/* import Albums from "../Albums";
import { CardArtist } from "../Card-Artist/CardArtist"; */


export default function SearchMusic() {
    const [searchWord, setSearchWord] = useState();

    useEffect(() =>{console.log(setSearchWord)},[])

    return (
        <>
            <h3>Resultados para {searchWord} na biblioteca musical.</h3>
{/* 
            <div>
                <h1 className="font-semibold text-subtitle">Artistas</h1>
                <div>
                    <CardArtist name="teste" artist="teste" />
                </div>
            </div>

            <div>
                <h1 className="font-semibold text-subtitle">Músicas</h1>
                <div>
                    a
                </div>
            </div>

            <div>
                <h1 className="font-semibold text-subtitle">Álbuns</h1>
                <Albums />
            </div> */}
        </>
    )
}