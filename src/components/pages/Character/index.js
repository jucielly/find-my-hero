import React from 'react';
import HomeTemplate from '../../templates/HomeTemplate'
import styled from 'styled-components';
import NavigationOptions from '../../molecules/NavigationOptions'


const Character = () => {
    return (
        <>
            <HomeTemplate navigationOptions={<NavigationOptions />} />
            <Container>
    

            </Container>

        </>
    )
}

export default Character


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`