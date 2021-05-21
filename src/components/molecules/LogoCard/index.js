import React from 'react';
import styled from 'styled-components';
import AvangersLogo from '../../atoms/AvangersLogo'
import MarvelLogo from '../../atoms/MarvelLogo';

const LogoCard = () => {
    return (
        <Container>
            <MarvelLogo />
            <AvangersLogo />
        </Container>
    );
}

export default LogoCard;


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
 width:60%;
`