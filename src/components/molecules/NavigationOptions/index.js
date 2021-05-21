import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Navbar from '../../atoms/Navbar'


const NavigationOptions = () => {

    return (
        <Navbar>
            <Nav>
                <ul className="list">
                    <li><Link className="link" to="/characters">PERSONAGENS</Link></li>
                    <li><Link className="link" to="/comics">QUADRINHOS</Link></li>
                    <li><Link className="link" to="/likeds">MEUS FAVORITOS</Link></li>
                </ul>
            </Nav>
        </Navbar>


    );
}

export default NavigationOptions;


const Nav = styled.nav`
.list {
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
`