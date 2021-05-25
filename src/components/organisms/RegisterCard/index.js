import React from 'react';
import RegisterForm from '../RegisterForm'
import { Link } from 'react-router-dom'
import LoginAndRegister from '../../templates/LoginAndRegister'
import RegisterFormContainer from '../../../containers/RegisterForm'


const RegisterCard = () => {
    return (

        <LoginAndRegister>
            <RegisterFormContainer  />
            <span>Já tem uma conta? <Link to="/login">login</Link></span>
        </LoginAndRegister>



    );
}

export default RegisterCard;