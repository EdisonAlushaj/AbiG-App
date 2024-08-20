import React from 'react';
import { NavLink } from "react-router-dom";
import './Footer.css';
import Logo from '../assets/Logo-transparent.png'

const Footer = () => {
    return (
        <footer className="text-white py-4" style={{ backgroundColor: '#3b5d4f' }}>
            <div className="container">
                <div className="d-flex flex-row" style={{ widht: '100%', justifyContent: 'space-between', alignContent: 'center' }}>
                    <div className="col-md-4">
                        <img src={Logo} alt="Logo" className="mb-2" />
                        <p style={{ color: '#FAF9F6', margin: '0' }}>Shpedicion Ndërkombëtar</p>
                        <p style={{ color: '#FAF9F6', margin: '0' }}>International Spedition </p>
                        <p style={{ color: '#FAF9F6', margin: '0' }}>QYSHK-Pejë, Republika e Kosovës</p>
                    </div>
                    <div  className="col-md-8 d-flex flex-column gap-3 justify-content-center align-items-start" style={{ width: '15em' }}>
                        <p className="mx-2" style={{ color: '#FAF9F6', margin: '0' }}>Mobil         00383(0)49 117 999</p>
                        <p className="mx-2" style={{ color: '#FAF9F6', margin: '0' }}>Mobil         00383(0)49 200 092</p>
                        <p className="mx-2" style={{ color: '#FAF9F6', margin: '0' }}>e-mail:       info@abi-g.com</p>
                    </div>
                    <div className="col-md-8 d-flex flex-column gap-3 justify-content-center align-items-end" style={{ width: '15em' }}>
                        <NavLink className="mx-2" to="/app/home" style={{ color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>Home</NavLink>
                        <NavLink className="mx-2" to="/app/about" style={{ color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>About Us</NavLink>
                        <NavLink className="mx-2" to="#" style={{ color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>Services</NavLink>
                        <NavLink className="mx-2" to="/app/contact" style={{ color: '#FAF9F6', textDecoration: 'none', fontSize: '1.2em' }}>Contact Us</NavLink>
                    </div>
                </div>
                <hr />
                <div className="row mt-3">
                    <div className="col text-center">
                        <p className="mb-0">&copy; 2024 ABI-G Sh.p.k. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;