import Logo from "/assets/logo.svg";
import { Link } from "react-router-dom";

import * as S from "./style";
import { useState } from "react";
import { LoginType } from "../../types/LoginType";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";


export default function LoginPage() {
  const userContext = useContext(UserContext);

  const [formData, setFormData] = useState<LoginType>({ username: "",password: ""})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (!userContext) {
      return <div>Carregando...</div>; 
    }
    e.preventDefault()
    try {
      await userContext.loginUser(formData);
    } catch (error) {
      console.error("Erro no login: ", error);
    }
  };

  return (
    <S.Container>
      <S.LogoImage src={Logo} width={395} height={291} alt="logo"></S.LogoImage>

      <S.Content>
        <div>
          <S.Title> Login </S.Title>
          <S.Subtitle>
            Você é novo no MyMusicList?
            <Link to="/register">
              <S.RegistrationLink>Cadastrar</S.RegistrationLink>
            </Link>
          </S.Subtitle>
        </div>

        <S.Form>
          <S.InputWrapper>
            <S.Input placeholder=" " type="text" value={formData.username || ''} name="username" onChange={(e) => handleInputChange(e)}/>
            <S.InputLabel>Username</S.InputLabel>
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Input placeholder=" " type="text" value={formData.password || ''} name="password"  onChange={(e) => handleInputChange(e)}/>
            <S.InputLabel>Senha</S.InputLabel>
          </S.InputWrapper>
          <S.but onClick={(e) => handleSubmit(e)}>entrar</S.but>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
