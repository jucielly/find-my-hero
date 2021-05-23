import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import HeaderTemplate from '../../templates/HeaderTemplate';
import { MdKeyboardBackspace } from "react-icons/md";
import IconButton from '../../atoms/IconButton'
import ProfileForm from '../../molecules/ProfileForm'



const Profile = () => {
    return (
        <>
            <HeaderTemplate
                children={<IconButton className="profile-btn">
                    <Link to="/home"><MdKeyboardBackspace className="icon" /></Link>
                </IconButton>}
                navigationOptions={<ul className="list"> <li>MEU PERFIL</li></ul>} />
            <Container>
                <ProfileForm />
            </Container>
        </>
    )
}

export default Profile

const Container = styled.div`
`