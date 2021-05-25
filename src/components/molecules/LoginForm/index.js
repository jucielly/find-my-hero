import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import EmailInput from '../../molecules/EmailInput'
import PasswordInput from '../../molecules/PasswordInput'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../providers/auth'



const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth()


    const onSubmit = data => login(data.email, data.password)
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput color="defaultWhite" label="email" register={register} required />
            <PasswordInput placeholder="senha" color="defaultWhite" label="password" register={register} required />
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
