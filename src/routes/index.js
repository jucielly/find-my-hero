import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginCard from '../components/organisms/LoginCard';
import RegisterCard from '../components/organisms/RegisterCard';
import ListCharacters from '../containers/ListCharacters';
import ListComics from '../containers/ListComics';
import Comic from '../containers/Comic';
import Character from '../containers/Character';
import FavoritesCharacters from '../containers/UserFavoritesCharacters';
import FavoritesComic from '../containers/UserFavoritesComics';
import LoginPage from '../components/pages/LoginPage';
import Profile from '../components/pages/Profile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/login" exact component={LoginCard} />
    <Route path="/register" exact component={RegisterCard} />
    <PrivateRoute path="/home" exact component={ListCharacters} />
    <PrivateRoute path="/comics" exact component={ListComics} />
    <PrivateRoute path="/profile" exact component={Profile} />
    <PrivateRoute path="/character/:id" exact component={Character} />
    <PrivateRoute path="/comic/:id" exact component={Comic} />
    <PrivateRoute
      path="/favoritedsCharacters"
      exact
      component={FavoritesCharacters}
    />
    <PrivateRoute path="/favoritedsComics" exact component={FavoritesComic} />
  </Switch>
);

export default Routes;
