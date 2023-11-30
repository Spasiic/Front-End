import Logo from "/assets/logo.svg";
import IconList from "/assets/lista.svg";
import IconSearchMusic from "/assets/pesquisamusica.svg";
import IconLogout from "/assets/logout.svg";
import { useContext } from "react";
import { FocusButton } from "../Buttons/FocusButton";
import { SelectedFocusButton } from "../Buttons/SelectedFocusButton";
import * as S from "./styled";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/authAPI";

export function Header() {
  const { wishlist, setWishlist,setAuth } = useContext(UserContext);

  const handleSetWishlist = (value) => {
    if (wishlist !== value) {
      setWishlist(value);
    }
  };

  async function logoutUser(){
    const response = api.logoutUser()
    if((await response).status == 200){
      localStorage.clear();
      setAuth(false)
    }
  }


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
          {wishlist ? (
            <SelectedFocusButton text="minha lista" img={IconList} />
          ) : (
            <FocusButton
              text="minha lista"
              img={IconList}
              onClick={() => handleSetWishlist(true)}
              selected={wishlist}
            />
          )}

          {!wishlist ? (
            <SelectedFocusButton
              text="pesquisar músicas"
              img={IconSearchMusic}
            />
          ) : (
            <FocusButton
              text="pesquisar músicas"
              img={IconSearchMusic}
              onClick={() => handleSetWishlist(false)}
              selected={!wishlist}
            />
          )}
           <button onClick={logoutUser} className="icon"><img src={IconLogout} alt="" /></button>
        </S.ButtonsContainer>

        <S.SearchSection>{/* Seu componente de Search aqui */}</S.SearchSection>
      </S.Navigation>
    </S.HeaderContainer>
  );
}
