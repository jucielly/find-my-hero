import React, { useEffect } from 'react';
import Button from '../../atoms/Button'
import LinkButton from '../../atoms/LinkButton'
import { useAuth } from '../../../providers/auth'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import TextField from '../../molecules/TextField'
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object().shape({
    name: yup.string().required('Defina o nome'),
    email: yup.string().email('Email inválido').required('Defina seu email'),
    currentPassword: yup.string().min(8, 'Sua senha deve ter mais de 8 caracteres').required('Digite sua senha atual'),
    password: yup.string().test('min', 'Sua senha deve ter mais de 8 caracteres', (value) => !value || (value && value.length > 7)),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Senhas não conferem')

})


const ProfileForm = ({ onSubmit, loading, error, initialValues }) => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const { logout } = useAuth()

    useEffect(() => {
        if (initialValues) {
            setValue('name', initialValues.name)
            setValue('email', initialValues.email)
        }
    }, [initialValues])

    const handleLogout = () => {
        logout()
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                color="primary"
                placeholder="nome"
                name="name"
                icon={MdPersonOutline}
                error={errors.name?.message}
                {...register("name", { required: true })} />
            <TextField
                type="email"
                color="primary"
                name="email"
                placeholder="email"
                icon={MdMailOutline}
                error={errors.email?.message}
                {...register("email", { required: true })} />
            <TextField
                placeholder="senha atual"
                color="primary"
                name="currentPassword"
                icon={MdLockOutline}
                error={errors.currentPassword?.message}
                {...register("currentPassword", { required: true })} />
            <TextField
                placeholder="nova senha"
                color="primary"
                name="password"
                icon={MdLockOutline}
                error={errors.password?.message}
                {...register("password", { required: true })} />
            <TextField
                placeholder="confirma nova senha"
                color="primary"
                name="confirmPassword"
                icon={MdLockOutline}
                error={errors.confirmPassword?.message}
                {...register("confirmPassword", { required: true })} />
            {error && <span>{error}</span>}
            <Button type="submit" disabled={loading}>{loading ? 'carregando...' : 'salvar'}</Button>
            <LinkButton type='button' onClick={handleLogout}>Sair</LinkButton>
        </Form >
    );
}

export default ProfileForm;


const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;


.input {
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
}

`