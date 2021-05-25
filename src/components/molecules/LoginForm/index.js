import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../providers/auth'
import TextField from '../../molecules/TextField'
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";





const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { login, loginError, loginLoading } = useAuth()


    const onSubmit = data => login(data.email, data.password)
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                type="email"
                color="defaultWhite" name="email"
                placeholder="email"
                icon={MdMailOutline}
                required
                {...register("email", { required: true })} />
            <TextField
                placeholder="senha"
                color="defaultWhite"
                name="password"
                icon={MdLockOutline}
                required
                {...register("password", { required: true })} />
            <Button type="submit">LOGIN</Button>
        </Form>


    );
}

export default LoginForm;


const Form = styled.form`
width: 175%;
display: flex;
flex-direction: column;
align-items: center;
`
