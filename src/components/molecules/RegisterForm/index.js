import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import EmailInput from '../../molecules/EmailInput'
import PasswordInput from '../../molecules/PasswordInput'
import UsernameInput from '../../molecules/UsernameInput'



const RegisterForm = () => {
    return (
        <>
            <Form>
                <UsernameInput/>
                <EmailInput />
                <PasswordInput />
                <PasswordInput placeholder="digite a senha novamente"/>
                <Button type="submit">CADASTRAR</Button>
            </Form>

        </>
    );
}

export default RegisterForm;


const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
