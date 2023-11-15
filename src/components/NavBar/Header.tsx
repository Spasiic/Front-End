import Logo from "/logo.svg";
import IconList from "../../assets/icons/list.svg";
import IconSearchMusic from "../../assets/icons/search.svg";
import { useState } from "react";
import { FocusButton } from "../Buttons/FocusButton";
import { SelectedFocusButton } from "../Buttons/SelectedFocusButton";
import { Search } from "./Search";
import * as S from "./styled";

export function Header() {
  const [listSelected, setListSelected] = useState(false);
  const [searchMSelected, setSearchMSelected] = useState(false);

  const handleListSelect = () => {
    setListSelected(!listSelected);
    setSearchMSelected(false);
  };

  const handleSearchMSelect = () => {
    setSearchMSelected(!searchMSelected);
    setListSelected(false);
  };

  return (
    <S.HeaderContainer>
      <S.LogoImage
        draggable="false"
        src={Logo}
        height={89}
        width={127}
        alt="Logo MyMusicList"
      />

      <S.Navigation>
        <S.ButtonsContainer>
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
            <SelectedFocusButton
              text="pesquisar músicas"
              img={IconSearchMusic}
            />
          ) : (
            <FocusButton
              text="pesquisar músicas"
              img={IconSearchMusic}
              onClick={handleSearchMSelect}
              selected={searchMSelected}
            />
          )}
        </S.ButtonsContainer>

        <S.SearchSection>
          <Search />
        </S.SearchSection>
      </S.Navigation>
    </S.HeaderContainer>
  );
}
