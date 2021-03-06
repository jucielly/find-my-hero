import React from 'react';
import { Link } from 'react-router-dom';

const NavigationOptions = () => (
  <ul className="list">
    <li>
      <Link className="link" to="/home">
        personagens
      </Link>
    </li>
    <li>
      <Link className="link" to="/comics">
        quadrinhos
      </Link>
    </li>
    <li>
      <Link className="link" to="/favoritedsCharacters">
        personagens favoritos
      </Link>
    </li>
    <li>
      <Link className="link" to="/favoritedsComics">
        quadrinhos favoritos
      </Link>
    </li>
  </ul>
);

export default NavigationOptions;
