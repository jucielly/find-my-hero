import React from 'react';
import RegisterForm from '../../molecules/RegisterForm'
import { Link } from 'react-router-dom'
import NoteAppTemplate from '../../templates/NoteAppTemplate'


const RegisterCard = () => {
    return (

        <NoteAppTemplate>
            <RegisterForm btnName="Registrar" />
            <span>Já tem uma conta? <Link to="/login">login</Link></span>
        </NoteAppTemplate>



    );
}

export default RegisterCard;