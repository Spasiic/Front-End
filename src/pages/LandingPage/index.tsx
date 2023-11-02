import { LandingButton } from "../../components/Buttons/LadingButton";
/* import background from "/assests/background-w-texture.svg";*/
import Logo from "/assets/logo.svg";

import * as S from './style'
import { Text } from "../../components/Elements/text";

export default function LandingPage() {
    return (
        <S.Landin>
            <S.Nav><a href="">Sobre Nós</a></S.Nav>
            <S.Wrapper>
                <img src={Logo} alt="logo"></img>
                <S.Paragraph >
                    Um espaço onde você salvar músicas, artistas, álbuns para ouvir mais tarde,
                    acompanhar suas estatísticas diárias, seus artistas mais escutados,
                    adicionar lembretes pra ouvir músicas e ainda mais, juntamente com seus amigos!
                </S.Paragraph>

                <S.SectionButtons>
                    <Text $size="medium" $weight="regular">Venha explorar esse universo:</Text>
                    <LandingButton text="Cadastre-se Agora" route="register" />
                    <Text>continue explorando</Text>

                    <LandingButton text="Login" route="login" />
                </S.SectionButtons>
            </S.Wrapper>
        </S.Landin>
    );
}