import React from 'react';
import { Link } from 'react-router-dom'
import HeaderTemplate from '../../templates/HeaderTemplate';
import { MdKeyboardBackspace } from "react-icons/md";
import IconButton from '../../atoms/IconButton'
import EditProfile from '../../organisms/EditProfile'




const Profile = () => {
    return (
        <>
            <HeaderTemplate
                children={<IconButton className="profile-btn">
                    <Link to="/home"><MdKeyboardBackspace className="icon" /></Link>
                </IconButton>}
                navigationOptions={<ul className="list"> <li>MEU PERFIL</li></ul>} />
            <EditProfile  />
        </>
    )
}

export default Profile

    