import React from 'react';
import { Link } from 'react-router-dom';
import LoginAndRegister from '../../templates/LoginAndRegister';
import RegisterFormContainer from '../../../containers/RegisterForm';

const RegisterCard = () => (
  <LoginAndRegister>
    <RegisterFormContainer />
    <span>
      Já tem uma conta? <Link to="/login">login</Link>
    </span>
  </LoginAndRegister>
);

export default RegisterCard;
