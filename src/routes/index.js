import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import LoginCard from '../components/organisms/LoginCard'
import RegisterCard from '../components/organisms/RegisterCard'
import ListCharacters from '../containers/ListCharacters'
import ListComics from '../containers/ListComics'
import LoginPage from '../components/pages/LoginPage'
import Profile from '../components/pages/Profile'
import CharacterInfo from '../components/pages/CharacterInfo'
import ComicInfo from '../components/pages/ComicInfo'



const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" exact component={LoginCard} />
            <Route path="/register" exact component={RegisterCard} />
            <PrivateRoute path="/home" exact component={ListCharacters} />
            <PrivateRoute path="/comics" exact component={ListComics} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/character" exact component={CharacterInfo} />
            <PrivateRoute path="/comic" exact component={ComicInfo} />
        </Switch>
    )
}


export default Routes