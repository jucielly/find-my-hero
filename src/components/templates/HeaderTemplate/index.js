import React from 'react';
import styled from 'styled-components'
import Navbar from './../../atoms/Navbar'
import Logo from '../../atoms/Logo'




const HeaderTemplate = ({ children, navigationOptions }) => {
    return (
        <Container>
            <Navbar className="top-bar">
                <Logo />
                {children}
            </Navbar>
            <Navbar>
                <nav className="nav">{navigationOptions}</nav>
            </Navbar>
        </Container>


    )
}

export default HeaderTemplate


const Container = styled.div`
display:flex;
flex-direction: column;

.top-bar {
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
}

.nav {
    .list {
        font-size: 17px;;
color: #fff;
display: flex;
align-items: center;

li{
    padding: 10px 40px 10px 40px;
}
}

.link{
    color: #fff;
    font-weight: bold;
}
}

`