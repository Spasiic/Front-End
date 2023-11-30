 import { useState } from "react";
import Logo from "/assets/logo.svg";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { validationSchema } from "../../schemas/validationSchema";
import { api } from "../../services/authAPI";

export default function RegisterPage() {
  const [confirmSenha, setConfirmSenha] = useState<string | undefined>(
    undefined,
  );

  const handleConfirmSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmSenha(event.target.value);
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.password === confirmSenha) {
        try {
          const response = await api.registerUser(values);
          if(response.status === 201) {
            navigate('/login');
          }
        } catch (error) {
          console.error("Erro ao registrar o usuário:", error);
        }
      }
    },
  });

  return (
    <S.Container>
      <S.LogoImage src={Logo} width={395} height={291} alt="logo"></S.LogoImage>

      <S.Content>
        <div>
          <S.Title> Faça seu cadastro </S.Title>
          <S.Subtitle>
            Você já tem um cadastro no MyMusicList?
            <Link to="/login">
              <S.RegistrationLink>Login</S.RegistrationLink>
            </Link>
          </S.Subtitle>
        </div>

        <S.Form onSubmit={formik.handleSubmit}>
          <section>
            <S.InputWrapper>
              <S.Input
                placeholder=" "
                name="first_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
              />
              <S.InputLabel>Nome</S.InputLabel>
              <S.Description>
                {" "}
                {formik.touched.first_name && formik.errors.first_name && (
                  <S.Description>{formik.errors.first_name}</S.Description>
                )}
              </S.Description>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                placeholder=" "
                name="last_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              <S.InputLabel>Sobrenome</S.InputLabel>
              <S.Description>
                {formik.touched.last_name && formik.errors.last_name && (
                  <S.Description>{formik.errors.last_name}</S.Description>
                )}
              </S.Description>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                placeholder=" "
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              <S.InputLabel>Nome de usuário</S.InputLabel>
              <S.Description>
                {" "}
                {formik.touched.username && formik.errors.username && (
                  <S.Description>{formik.errors.username}</S.Description>
                )}
              </S.Description>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                placeholder=" "
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <S.InputLabel>Email</S.InputLabel>
              <S.Description>
                {" "}
                {formik.touched.email && formik.errors.email && (
                  <S.Description>{formik.errors.email}</S.Description>
                )}
              </S.Description>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                placeholder=" "
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <S.InputLabel>Senha</S.InputLabel>
              <S.Description>
                {" "}
                {formik.touched.password && formik.errors.password && (
                  <S.Description>{formik.errors.password}</S.Description>
                )}
              </S.Description>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input placeholder=" " onChange={handleConfirmSenha} type="password"/>
              <S.InputLabel>Confirme sua Senha</S.InputLabel>

              {formik.touched.password &&
                formik.values.password !== confirmSenha && (
                  <S.Description>
                    As senhas digitadas precisam ser iguais!
                  </S.Description>
                )}
            </S.InputWrapper>
          </section>

          <S.buttonAuth type="submit">Cadastrar</S.buttonAuth>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}
