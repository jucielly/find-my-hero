import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import HeaderTemplate from '../../templates/HeaderTemplate';
import IconButton from '../../atoms/IconButton';
import EditProfile from '../../organisms/EditProfile';

const Profile = () => (
  <>
    <HeaderTemplate
      navigationOptions={
        <ul className="list">
          {' '}
          <li>MEU PERFIL</li>
        </ul>
      }
    >
      <IconButton className="profile-btn">
        <Link to="/home">
          <MdKeyboardBackspace className="icon" />
        </Link>
      </IconButton>
    </HeaderTemplate>
    <EditProfile />
  </>
);

export default Profile;
