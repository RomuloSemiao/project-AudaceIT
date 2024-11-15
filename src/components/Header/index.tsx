import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/AudaceIT_logo.png"
import style from "./style.module.css"

const Header: React.FC = () => {
  return (
    <header className={style["headerContainer"]}>
      <Link to="/"> 
        <img src={Logo} alt="AudaceIT Logo" />
      </Link>
      <nav className={style["headerContainer__navigation"]}>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link className={style["headerContainer__navigation-contact"]} to="/contato">Contato</Link>
      </nav>
    </header>
  );
};

export default Header;
