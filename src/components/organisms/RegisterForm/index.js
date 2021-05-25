import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import TextField from '../../molecules/TextField'
import Loader from '../../atoms/Loader'
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object().shape({
    name: yup.string().required('Defina o nome').min(2,'min de 2 letras no nome'),
    email: yup.string().email('Email inválido').required('Defina seu email'),
    password: yup.string().required('Digite sua senha').test('min', 'Sua senha deve ter mais de 8 caracteres', (value) => !value || (value && value.length > 7)),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem').required('Digite a senha novamente')

})



const RegisterForm = ({ onSubmit, loading, error }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    });
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                color="defaultWhite"
                placeholder="nome"
                name="name"
                icon={MdPersonOutline}
                error={errors.name?.message}
                {...register("name", { required: true })} />
            <TextField
                type="email"
                color="defaultWhite" name="email"
                placeholder="email"
                icon={MdMailOutline}
                error={errors.email?.message}
                {...register("email", { required: true })} />
            <TextField
                placeholder="senha"
                color="defaultWhite"
                name="password"
                type="password"
                icon={MdLockOutline}
                error={errors.password?.message}
                {...register("password", { required: true })} />
            <TextField
                placeholder="confirme a senha"
                color="defaultWhite"
                name="confirmPassword"
                icon={MdLockOutline}
                type="password"
                error={errors.confirmPassword?.message}
                {...register("confirmPassword", { required: true })} />

            {error && <span>{error}</span>}
            <Button type="submit" disabled={loading} >{loading ? <Loader/> : 'cadastrar'}</Button>
        </Form>


    );
}

export default RegisterForm;


const Form = styled.form`
width: 175%;
display: flex;
flex-direction: column;
align-items: center;
`
