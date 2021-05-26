import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdPersonOutline } from 'react-icons/md';
import HeaderTemplate from '../../templates/HeaderTemplate';
import IconButton from '../../atoms/IconButton';

const Header = ({ navigationOptions }) => (
  <Container>
    <HeaderTemplate navigationOptions={navigationOptions}>
      <IconButton className="profile-btn">
        <Link to="/profile">
          <MdPersonOutline className="icon" />
        </Link>
      </IconButton>
    </HeaderTemplate>
  </Container>
);

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  .search {
    align-self: flex-end;
  }
`;
