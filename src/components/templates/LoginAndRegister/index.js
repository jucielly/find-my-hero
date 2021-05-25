import React from 'react';
import styled from 'styled-components'
import LogoCard from '../../molecules/LogoCard'




const LoginAndRegister = ({ children, title }) => {


    return (
        <Container>
            <LogoCard />
            <Card>
                <h2>FIND MY HERO</h2>
                {children}
            </Card>

        </Container >
    );
}

export default LoginAndRegister;

const Container = styled.div`
height: 100vh;
display: flex;
align-items: stretch;
background:  ${props => props.theme.colors.terciary};
`

const Card = styled.div`
display: flex;
flex-direction:column;
 align-items: center;
 width: 40%;
 background-color: ${props => props.theme.colors.primary};
 border-radius: 20px 0px 0px 20px;
 box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
 color: #fff;
 h2 {
     letter-spacing: 10px;;
     font-family: 'Marvel';
     font-size: 4em;
     margin: 40px;
 }

`