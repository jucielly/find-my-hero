import React from 'react';
import styled from 'styled-components'
import Search from '../../molecules/Search';
import Header from '../../organisms/Header'



const HomeTemplate = ({ children, navigationOptions }) => {
    return (
        <Container>
            <Header navigationOptions={navigationOptions}/>
            <Search className="search" />
            {children}
        </Container>


    )
}

export default HomeTemplate


const Container = styled.div``