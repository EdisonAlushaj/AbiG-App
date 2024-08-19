import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css'; 
import Logo from '../assets/Logo-transparent.png'

const Footer = () => {
    return (
        <footer className="text-white py-4" style={{backgroundColor: '#3b5d4f'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Logo} alt="Logo" className="mb-2" />
                        <p style={{color: '#FAF9F6'}}>Dreamy LLC. Creative control components for Adobe Experience Design</p>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end align-items-center">
                        <NavLink className="mx-3" to="/app/home" style={{color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>Home</NavLink>
                        <NavLink className="mx-2" to="/app/about" style={{color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>About Us</NavLink>
                        <NavLink className="mx-2" to="#" style={{color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>Services</NavLink>
                        <NavLink className="mx-2" to="/app/contact" style={{color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>Contact Us</NavLink>
                    </div>
                </div>
                <hr />
                <div className="row mt-3">
                    <div className="col text-center">
                        <p className="mb-0">&copy; 2016 Dreamy LLC. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;