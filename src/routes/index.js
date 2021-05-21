import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginCard from '../components/organisms/LoginCard'
import RegisterCard from '../components/organisms/RegisterCard'
import LoginPage from '../components/pages/LoginPage'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" exact component={LoginCard} />
            <Route path="/register" exact component={RegisterCard} />
            
        </Switch>
    )
}


export default Routes