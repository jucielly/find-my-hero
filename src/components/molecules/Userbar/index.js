import React from 'react'
import styled from 'styled-components'
import Navbar from '../../atoms/Navbar'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'
import { MdPersonOutline } from "react-icons/md";
import IconButton from '../../atoms/IconButton'


const Userbar = () => {

    return (
        <Container>
            <Logo />
            <IconButton className="profile-btn">
                <Link  to="/profile"><MdPersonOutline className="icon" /></Link>
            </IconButton>
        </Container >


    );
}

export default Userbar;



const Container = styled(Navbar)`
 display: flex;
 position: relative;

 .profile-btn {
     position: absolute;
     right:0;
     margin: 0 25px 20px 25px;
 }


 .icon {
    color: ${props => props.theme.colors.defaultWhite};
    width: 60px;
    margin: 5px;
    height: 60px;
 }
 `