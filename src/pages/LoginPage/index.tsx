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
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};

    if (!formData.username.trim()) {
      errors.username = "Por favor, preencha o campo de usuário";
    }
    if (!formData.password.trim()) {
      errors.password = "Por favor, preencha o campo de senha";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      try {
        if (!userContext) {
          return <div>Carregando...</div>;
        }
        await userContext.loginUser(formData);
      } catch (error) {
        console.error(error);
      }
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
            {formErrors.username && <S.Description>{formErrors.username}</S.Description>}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Input placeholder=" " type="password" value={formData.password || ''} name="password"  onChange={(e) => handleInputChange(e)}/>
            <S.InputLabel>Senha</S.InputLabel>
            {formErrors.password && <S.Description>{formErrors.password}</S.Description>}
          </S.InputWrapper>
          <S.buttonAuth onClick={(e) => handleSubmit(e)}>entrar</S.buttonAuth>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
