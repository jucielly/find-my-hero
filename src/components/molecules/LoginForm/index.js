import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import EmailInput from '../../molecules/EmailInput'
import PasswordInput from '../../molecules/PasswordInput'



const LoginForm = () => {
    return (
        <>
            <Form>
                <EmailInput color="defaultWhite"/>
                <PasswordInput placeholder="senha" color="defaultWhite"/>
                <Button type="submit">LOGIN</Button>
            </Form>

        </>
    );
}

export default LoginForm;


const Form = styled.form`
width: 175%;
display: flex;
flex-direction: column;
align-items: center;
`
