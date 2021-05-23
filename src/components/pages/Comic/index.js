import React from 'react';
import HomeTemplate from '../../templates/HomeTemplate'
import styled from 'styled-components';
import NavigationOptions from '../../molecules/NavigationOptions'


const Comic = () => {
    return (
        <>
            <HomeTemplate navigationOptions={<NavigationOptions />} />
            <Container>
           <div>oi</div>

            </Container>

        </>
    )
}

export default Comic


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`