import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import LoginAndRegister from '../../templates/LoginAndRegister';

const LoginCard = () => (
  <LoginAndRegister>
    <LoginForm btnName="Login" />
    <span>
      Não tem Conta? <Link to="/register">registre-se</Link>
    </span>
  </LoginAndRegister>
);

export default LoginCard;
