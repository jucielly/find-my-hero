import React from 'react';
import styled from 'styled-components';
import { MdPersonOutline } from 'react-icons/md';
import EditProfileContainer from '../../../containers/EditProfile';

const EditProfile = () => (
  <>
    <Container>
      <MdPersonOutline className="person" />
      <EditProfileContainer />
    </Container>
  </>
);

export default EditProfile;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .person {
    height: 90px;
    width: 90px;
  }
`;
