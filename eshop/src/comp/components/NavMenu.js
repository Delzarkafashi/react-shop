import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Bredcrumbs.js';
import './NavMenu.css';


const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const closeMenuOnClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('.nav-menu-container')) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('click', closeMenuOnClickOutside);

        return () => {
            window.removeEventListener('click', closeMenuOnClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className="nav-menu-container">
            <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/shop" className="link">Shop</Link></li>
                    <li><Link to="/cart" className="link">Cart</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                </ul>
                <Breadcrumbs />
            </div>
        </div>
    );
};

export default NavMenu;
