import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/productos">Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark"><i className="bi bi-person-circle"></i> Iniciar Sesion</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2"><i className="bi bi-box-arrow-in-right"></i> Registrarse</NavLink>
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

