import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../components/pages/LoginPage'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
        </Switch>
    )
}


export default Routes