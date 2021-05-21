import React from 'react';
import RegisterForm from '../../molecules/RegisterForm'
import { Link } from 'react-router-dom'
import LoginAndRegister from '../../templates/LoginAndRegister'


const RegisterCard = () => {
    return (

        <LoginAndRegister>
            <RegisterForm btnName="Registrar" />
            <span>Já tem uma conta? <Link to="/login">login</Link></span>
        </LoginAndRegister>



    );
}

export default RegisterCard;