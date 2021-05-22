import React from 'react';
import styled from 'styled-components'
import NavigationOptions from '../../molecules/NavigationOptions'
import Search from '../../molecules/Search';
import Userbar from '../../molecules/Userbar'



const HomeTemplate = ({ children }) => {
    return (
        <Container>
            <Userbar />
            <NavigationOptions />
            <Search className="search" />
            {children}
        </Container>


    )
}

export default HomeTemplate


const Container = styled.div`
display:flex;
flex-direction: column;

.search {
align-self: flex-end;
}
`