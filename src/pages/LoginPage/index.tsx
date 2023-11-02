/* import { LandingButton } from "../../components/Buttons/LadingButton"; */
import Logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

import * as S from './style'
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function LoginPage() {

    const { setAuth } = useContext(UserContext);

    return (
        <S.Container>
            <S.LogoImage src={Logo} width={395} height={291} alt="logo"></S.LogoImage>

            <S.Content>
                <div>
                    <S.Title> Login </S.Title>
                    <S.Subtitle>
                        Você é novo no MyMusicList?
                        <Link to='/register'><S.RegistrationLink>Cadastrar</S.RegistrationLink></Link>
                    </S.Subtitle>
                </div>


                <S.Form>
                    <S.InputWrapper>
                        <S.Input placeholder=" " type="text" />
                        <S.InputLabel >Username</S.InputLabel>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <S.Input placeholder=" " />
                        <S.InputLabel >Senha</S.InputLabel>
                    </S.InputWrapper>

                    {/*                     <LandingButton route="/" text="Entrar" /> */}
                    <S.but onClick={() => setAuth(true)}>entrar</S.but>
                </S.Form>

            </S.Content>
        </S.Container>
    );
}