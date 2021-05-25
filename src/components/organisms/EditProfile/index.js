import React from 'react';
import styled from 'styled-components';
import { MdPersonOutline } from "react-icons/md";
import EditProfileContainer from '../../../containers/EditProfile'



const EditProfile = () => {
    return (
        <>
            <Container>
                <MdPersonOutline className="icon" />
            </Container>
            <EditProfileContainer />
        </>
    )
}

export default EditProfile

const Container = styled.div`
width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 
 
.icon {
    height: 90px;
    width: 90px;
}

`