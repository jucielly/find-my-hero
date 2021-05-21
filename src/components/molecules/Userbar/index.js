import React from 'react'
import styled from 'styled-components'
import Navbar from '../../atoms/Navbar'
import { Link } from 'react-router-dom'
import Logo from '../../atoms/Logo'
import { MdPersonOutline } from "react-icons/md";


const Userbar = () => {

    return (
        <Navbar>
            <Container>
                <div className="logo">
                    <Logo />
                </div>
                <Link className="link" to="/user"><MdPersonOutline className="icon" /></Link>
            </Container >
        </Navbar>

    );
}

export default Userbar;



const Container = styled.div`
 display: flex;

 .link{
     color: #fff
 }

 .icon {
    color: ${props => props.theme.colors.defaultWhite};
    width: 60px;
    margin: 5px;
    height: 60px;
 }
 `