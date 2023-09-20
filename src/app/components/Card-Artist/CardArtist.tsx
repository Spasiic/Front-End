import { StaticImageData } from "next/image";

type infoArtist ={
    name: string,
    artist: string
}

export function CardArtist({name,artist}: infoArtist){
    return(
        <div className="flex flex-col w-[max-content] text-center gap-2">
            <div className="bg-purple w-[115px] h-[115px] rounded-full" 
             style={{backgroundImage: `url(${artist})`,backgroundSize: "cover",backgroundPosition: "center"}}></div>
            <h1 className="uppercase font-medium text-description tracking-wide">{name}</h1>
        </div>
    )
}