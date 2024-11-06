import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
            <a href="index.html" className="navbar-brand ps-5 me-0">
                <h1 className="text-white m-0">S.G M&C</h1>
            </a>
            <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to={"/inicio"} href="index.html" className="nav-item nav-link active">Inicio</Link>
                    <a href="#nosotros" className="nav-item nav-link">Sobre Nosotros</a>
                    <a href="#mision" className="nav-item nav-link">Mision</a>
                    <a href="#vision" className="nav-item nav-link">Vision</a>
                    <a href="#servicios" className="nav-item nav-link">Servicios</a>
                    <a href="#contactos" className="nav-item nav-link">Contactos</a>
                    <a href="#valor" className="nav-item nav-link">Valor</a>
                </div>
            </div>
        </nav>

    )
}

export default Header