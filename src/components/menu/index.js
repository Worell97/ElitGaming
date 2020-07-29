import React from './node_modules/react';
import Logo from './../../assets/Logo.png';
import './menu.css';
import Button from '../button/Button';
import { Link } from './node_modules/react-router-dom'
//import ButtomLink from './../button/ButtomLink'

function Menu() {
    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="Elit Gaming edition" />
            </Link>
            <Button className="ButtonLink" to="/cadastro/video">
                New Game
            </Button>
        </nav>
    );
}

export default Menu;