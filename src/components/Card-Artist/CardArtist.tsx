import * as S from './style'

type infoArtist ={
    name: string,
    artist: string
}

export function CardArtist({name,artist}: infoArtist){
    return(
        <S.ArtistInfoContainer className="flex flex-col w-[max-content] text-center gap-2">
            <S.ArtistImage className="bg-purple w-[115px] h-[115px] rounded-full" 
             style={{backgroundImage: `url(${artist})`}}></S.ArtistImage>
            <S.ArtistName className="uppercase font-medium text-description tracking-wide">{name}</S.ArtistName>
        </S.ArtistInfoContainer>
    )
}