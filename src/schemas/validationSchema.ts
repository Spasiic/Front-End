import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    name: Yup.string().required('Seu nome é obrigatório!'),
    lastname: Yup.string().required('Seu sobrenome é obrigatório!'),
    username: Yup.string().min(2,'Nome de usuário de ter pelo menos 2 carcters').required('Seu username é obrigatório!'),
    email: Yup.string().email('Seu email é inválido!').required('Seu email é obrigatório!'),
    password: Yup.string().min(8,'A sua senha deve possuir pelo menos 8 caracteres!').required('Sua senha é obrigatória!')
})