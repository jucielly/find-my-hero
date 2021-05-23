import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginCard from '../components/organisms/LoginCard'
import RegisterCard from '../components/organisms/RegisterCard'
import Home from '../components/pages/Home'
import LoginPage from '../components/pages/LoginPage'
import Profile from '../components/pages/Profile'


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" exact component={LoginCard} />
            <Route path="/register" exact component={RegisterCard} />
            <Route path="/home" exact component={Home} />
            <Route path="/profile" exact component={Profile} />


        </Switch>
    )
}


export default Routes