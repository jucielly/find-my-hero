import React from 'react';
import NavigationOptions from '../../molecules/NavigationOptions'
import Search from '../../molecules/Search';
import Userbar from '../../molecules/Userbar'



const HomeTemplate = ({ children }) => {
    return (
        <>
            <Userbar />
            <NavigationOptions />
            <Search className="search" />
            {children}
        </>
    )
}

export default HomeTemplate