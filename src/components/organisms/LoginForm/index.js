import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../providers/auth'
import TextField from '../../molecules/TextField'
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { useHistory } from 'react-router-dom'
import Loader from '../../atoms/Loader'
import Alert from '../../molecules/Alert'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Digite seu email'),
    password: yup.string().required('Digite sua senha').test('min', 'Sua senha deve ter mais de 8 caracteres', (value) => !value || (value && value.length > 7)),


})



const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const { login, error, loading } = useAuth()
    const [alert, setAlert] = useState(false)
    const { location, replace } = useHistory()

    const handleAlertClose = () => setAlert(false)
    const accountCreated = location.state?.accountCreated
    console.log('oi', accountCreated)
    useEffect(() => {
        if (accountCreated) {
            setAlert(true)
            replace('/', null)
        }
    }, [accountCreated])


    const onSubmit = data => login(data.email, data.password)
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
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
                icon={MdLockOutline}
                type="password"
                error={errors.password?.message}
                {...register("password", { required: true })} />
            {error && <span>{error}</span>}
            <Button type="submit" disabled={loading}>{loading ? <Loader /> : 'login'}</Button>
            <Alert open={alert} color='success' timeout={4000} message="Usuário criado com sucesso" onClose={handleAlertClose} />
        </Form>


    );
}

export default LoginForm;


const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
