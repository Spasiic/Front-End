import Logo from '/assets/logo.svg';
import IconList from '/assets/lista.svg';
import IconSearchMusic from '/assets/pesquisamusica.svg';
import { useState } from "react";
import { FocusButton } from "../Buttons/FocusButton";
import { SelectedFocusButton } from "../Buttons/SelectedFocusButton";
import { Search } from "./Search";
import * as S from './styled'

export function Header() {
    const [listSelected, setListSelected] = useState(false);
    const [searchMSelected, setSearchMSelected] = useState(false);

    const handleListSelect = () => {
        setListSelected(!listSelected);
        setSearchMSelected(false);
    }

    const handleSearchMSelect = () => {
        setSearchMSelected(!searchMSelected);
        setListSelected(false);
    }

    return (
        <S.HeaderContainer className="m-4 flex flex-col md:flex-row justify-between items-center overflow-y-hidden">
            <S.LogoImage draggable="false" src={Logo} height={89} width={127} alt="Logo MyMusicList" className="mb-2 hidden lg:block" />

            <S.Navigation className="flex flex-col-reverse md:flex-row gap-4">
                <S.ButtonsContainer className="flex gap-2">
                    {listSelected ? (
                        <SelectedFocusButton text="minha lista" img={IconList} />
                    ) : (
                        <FocusButton
                            text="minha lista"
                            img={IconList}
                            onClick={handleListSelect}
                            selected={listSelected}
                        />
                    )}

                    {searchMSelected ? (
                        <SelectedFocusButton text="pesquisar músicas" img={IconSearchMusic} />
                    ) : (
                        <FocusButton
                            text="pesquisar músicas"
                            img={IconSearchMusic}
                            onClick={handleSearchMSelect}
                            selected={searchMSelected}
                        />

                    )}

                </S.ButtonsContainer>

                <S.SearchSection className="flex flex-row gap-2">
                    <Search />
                </S.SearchSection>
            </S.Navigation>
        </S.HeaderContainer>
    )
}
