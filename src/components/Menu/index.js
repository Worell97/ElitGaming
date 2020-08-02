import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './menu.css';
import Button from '../button';
// import ButtomLink from './../button/ButtomLink'

function Menu() {
  return (
    <nav className="Menu">
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
