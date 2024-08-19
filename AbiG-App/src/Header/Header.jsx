import { useEffect } from "react";
import AppRoutes from "../AppRoutes";
import { NavLink } from "react-router-dom";
import Logo from '../assets/Logo-transparent.png'

function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center" style={{ width: '100%', height: '100px', zIndex: '2', position: 'absolute' }}>
                <div className="container-fluid d-flex" style={{ width: '75%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <NavLink className="navbar-brand" to="/app/home" style={{  }}>
                        <img src={Logo} alt="Logo" style={{width: '3.5em', height: '3.5em'}} />
                    </NavLink>
                    <div className="collapse navbar-collapse justify-content-end" style={{marginRight: ''}}>
                        <ul className="navbar-nav gap-5 align-items-center" style={{fontSize: '1.4em'}}>
                            <li className="nav-item" ><NavLink to="/app/home" style={{ color: '#19282F', textDecoration: 'none' }}><b>Home</b></NavLink></li>
                            <li className="nav-item"><NavLink to="/app/about" style={{ color: '#19282F', textDecoration: 'none' }}><b>About Us</b></NavLink></li>
                            <li className="nav-item"><NavLink to="#" style={{ color: '#19282F', textDecoration: 'none' }}><b>Services</b></NavLink></li>
                            <li className="nav-item"><NavLink to="/app/contact" style={{ color: '#19282F', textDecoration: 'none' }}><b>Contact Us</b></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header