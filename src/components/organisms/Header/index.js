import React from 'react';
import styled from 'styled-components'
import HeaderTemplate from '../../templates/HeaderTemplate'
import { Link } from 'react-router-dom'
import { MdPersonOutline } from "react-icons/md";
import IconButton from '../../atoms/IconButton'






const Header = ({ navigationOptions }) => {
    return (
        <Container>
            <HeaderTemplate children={
                <IconButton className="profile-btn">
                    <Link to="/profile"><MdPersonOutline className="icon" /></Link>
                </IconButton>} 
            navigationOptions={navigationOptions} />
        </Container>


    )

}

export default Header

const Container = styled.div`
display:flex;
flex-direction: column;

.search {
align-self: flex-end;
}
`