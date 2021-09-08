import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Erreur 404</h3>
            <NavLink exact to="/">
                <i className="fas fa-home"></i>
                <span> Accueil </span>
            </NavLink>
        </div>
    );
};

export default NotFound;