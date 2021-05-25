import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import TextField from '../../molecules/TextField'
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";




const RegisterForm = ({ onSubmit, loading, error }) => {
    const { register, handleSubmit } = useForm();
    return (

        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                color="defaultWhite"
                placeholder="nome"
                name="name"
                icon={MdPersonOutline}
                required
                {...register("name", { required: true })} />
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
            <TextField
                placeholder="confirme a senha"
                color="defaultWhite"
                name="confirmPassword"
                icon={MdLockOutline}
                required
                {...register("confirmPassword", { required: true })} />

            {error && <span>{error}</span>}
            <Button type="submit" disabled={loading} >{loading ? 'carregando...' : 'cadastrar'}</Button>
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
