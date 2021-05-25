import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import TextField from '../../molecules/TextField'
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";




const ProfileForm = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                color="primary"
                placeholder="nome"
                name="name"
                icon={MdPersonOutline}
                required
                {...register("name", { required: true })} />
            <TextField
                type="email"
                color="primary" 
                name="email"
                placeholder="email"
                icon={MdMailOutline}
                required
                {...register("email", { required: true })} />
            <TextField
                placeholder="senha antiga"
                color="primary"
                name="oldPassword"
                icon={MdLockOutline}
                required
                {...register("password", { required: true })} />
            <TextField
                placeholder="nova antiga"
                color="primary"
                name="oldPassword"
                icon={MdLockOutline}
                required
                {...register("password", { required: true })} />
            <TextField
                placeholder="confirma nova senha"
                color="primary"
                name="confirmPassword"
                icon={MdLockOutline}
                required
                {...register("confirmPassword", { required: true })} />

            <Button type="submit">LOGIN</Button>
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