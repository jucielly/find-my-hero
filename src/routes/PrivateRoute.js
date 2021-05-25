import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../providers/auth'


const PrivateRoute = ({ component: Component, ...props }) => {
    const { loggedIn } = useAuth()
    console.log('loged', loggedIn)
    return (
        <Route {...props} render={() => loggedIn ? <Component /> : <Redirect to="/" />} />

    )
}

export default PrivateRoute;