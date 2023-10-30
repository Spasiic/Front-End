import IconPesquisa from '/assets/pesquisa.svg'
import * as S from './styled'

export function Search() {
    return (
        <S.SearchContainer>
            <S.SearchInput className="w-[19.9rem] bg-gray h-10 rounded-full text-sm focus:outline-none text-branco pl-10 pr-2 placeholder:italic placeholder:opacity-75 appearance-none placeholder:text-[0.75rem] md:placeholder:text-[100%]"
                type="search" name="search" placeholder="pesquisar música, artista ou letras" />
            <S.SearchButton type="submit" className="absolute left-0 top-3 ml-[0.6rem]">
                <S.SearchIcon src={IconPesquisa} width={20} height={20} alt="Ícone de configuração" />
            </S.SearchButton>
        </S.SearchContainer>
    )
}