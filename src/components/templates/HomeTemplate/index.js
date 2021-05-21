import React from 'react';

import NavigationOptions from '../../molecules/NavigationOptions'
import Userbar from '../../molecules/Userbar'



const HomeTemplate = ({ children }) => {
    return (
        <>
            <Userbar />
            <NavigationOptions />
            {children}

        </>
    )
}

export default HomeTemplate