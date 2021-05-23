import React from 'react';
import styled from 'styled-components';
import ProfileForm from '../../molecules/ProfileForm'
import { MdPersonOutline } from "react-icons/md";



const EditProfile = ({ user }) => {
    return (
        <>
            <Container>
                <MdPersonOutline className="icon" />
                <p>Olá, {user} </p>
            </Container>
            <ProfileForm />
        </>
    )
}

export default EditProfile

const Container = styled.div`
width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 
 
.icon {
    height: 90px;
    width: 90px;
}

`