import React from 'react';
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import UsernameInput from '../../molecules/UsernameInput'
import EmailInput from '../../molecules/EmailInput'
import PasswordInput from '../../molecules/PasswordInput'




const LoginPage = () => {
    return (
        <>
            <Button>LOGIN</Button>
            <Input placeholder="Email" />
            <UsernameInput />
            <EmailInput />
            <PasswordInput />
        </>
    )
}

export default LoginPage;