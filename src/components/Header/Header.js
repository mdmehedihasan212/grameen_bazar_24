import React from 'react';
import './Header.css';
import logo from '../../images/grameenbazar24.jpg';
import { NavLink } from 'react-router-dom';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <section className='header-container'>
                <div className="logo-input">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    {/* <div className="input">
                        <InputGroup className="m-3 w-252">
                            <FormControl placeholder="Search for products( fruite, egg, milk, etc... )"
                            />
                            <Button>
                                Button
                            </Button>
                        </InputGroup>
                    </div> */}
                </div>
                <nav className='navigate'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? "red" : "blue"}>Home</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => isActive ? "red" : "blue"}>Contact</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) => isActive ? "red" : "blue"}>About</NavLink>
                    <NavLink to={'/sing-in'} className={({ isActive }) => isActive ? "red" : "blue"}>Sing in</NavLink>
                </nav>
            </section>
        </div>
    );
};

export default Header;