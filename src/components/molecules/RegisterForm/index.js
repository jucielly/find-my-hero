import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import EmailInput from '../../molecules/EmailInput'
import PasswordInput from '../../molecules/PasswordInput'
import UsernameInput from '../../molecules/UsernameInput'
import { useForm } from 'react-hook-form'



const RegisterForm = ({onSubmit, loading, error}) => {
    const { register, handleSubmit } = useForm();
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <UsernameInput color="defaultWhite" label="name"  register={register} required/>
            <EmailInput color="defaultWhite"  label="email"  register={register} required/>
            <PasswordInput placeholder="senha" color="defaultWhite" label="password"  register={register} required />
            <PasswordInput placeholder="digite a senha novamente" color="defaultWhite"  label="confirmPassword"  register={register} required/>
            {error && <span>{error}</span>}
            <Button type="submit" disabled={loading} >{loading ?  'carregando...': 'cadastrar'}</Button>
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
