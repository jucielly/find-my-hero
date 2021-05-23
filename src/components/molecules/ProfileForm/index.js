import React from 'react';
import Button from '../../atoms/Button'
import styled from 'styled-components'
import EmailInput from '../../molecules/EmailInput'
import PasswordInput from '../../molecules/PasswordInput'
import UsernameInput from '../../molecules/UsernameInput';



const ProfileForm = () => {
    return (
            <Form>
                <UsernameInput/>
                <EmailInput />
                <PasswordInput placeholder='senha antiga' className="input"/>
                <PasswordInput placeholder='nova senha' />
                <PasswordInput placeholder='confirme nova senha' />
                <Button type="submit">LOGIN</Button>
            </Form>
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