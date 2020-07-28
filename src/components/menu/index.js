import React from 'react';
import Logo from './../../assets/Logo.png';
import './menu.css'
import Button from './../button/Button'
//import ButtomLink from './../button/ButtomLink'

function Menu() {
    return (
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="Elit Gaming edition" />
            </a>
            <Button as="a" lassName="ButtonLink" href="/">
                New Game
            </Button>
        </nav>
    );
}

export default Menu;