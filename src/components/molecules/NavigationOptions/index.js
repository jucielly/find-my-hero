import React from 'react'
import { Link } from 'react-router-dom'



const NavigationOptions = () => {

    return (

        <ul className="list">
            <li><Link className="link" to="/characters">PERSONAGENS</Link></li>
            <li><Link className="link" to="/comics">QUADRINHOS</Link></li>
            <li><Link className="link" to="/likeds">MEUS FAVORITOS</Link></li>
        </ul>

    );
}

export default NavigationOptions;


