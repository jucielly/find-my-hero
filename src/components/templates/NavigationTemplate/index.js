import React from 'react';
import styled from 'styled-components'
import Header from '../../organisms/Header'



const NavigationTemplate = ({ children, navigationOptions }) => {
    return (
        <Container>
            <Header navigationOptions={navigationOptions}/>
            {children}
        </Container>


    )
}

export default NavigationTemplate


const Container = styled.div`

`