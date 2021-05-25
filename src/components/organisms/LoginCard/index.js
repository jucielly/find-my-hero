import React from 'react';
import LoginForm from '../LoginForm'
import { Link } from 'react-router-dom'
import LoginAndRegister from '../../templates/LoginAndRegister'


const LoginCard = () => {
    return (
        <LoginAndRegister>
            <LoginForm btnName="Login" />
            <span>Não tem Conta? <Link to="/register">registre-se</Link></span>
        </LoginAndRegister>



    );
}

export default LoginCard;