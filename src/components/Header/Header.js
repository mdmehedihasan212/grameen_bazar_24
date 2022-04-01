import React from 'react';
import './Header.css';
import logo from '../../images/grameenbazar24.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <section className='header-container'>
                <div className="logo-input">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="input">
                        <input type="search" name="" id="" />
                    </div>
                </div>
                <nav className='navigate'>
                    <NavLink to={'/home'} className={({ isActive }) => isActive ? "red" : "blue"}>Home</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => isActive ? "red" : "blue"}>Contact</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? "red" : "blue"}>About</NavLink>
                </nav>
            </section>
        </div>
    );
};

export default Header;