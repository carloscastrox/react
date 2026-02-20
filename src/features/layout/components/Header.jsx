import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4"> 
        {/*style={{ backgroundColor: 'navy', color: 'white' }} */}
        <div className="container">

          <NavLink className="navbar-brand" to="/">
            <h1 className="h4 mb-0">Carrito de Compras</h1>
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles">Artículos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/props">Props</NavLink>
              </li>
            </ul>
            <form className="d-flex ms-lg-4 mt-3 mt-lg-0" role="search">
              <div className="input-group">
                <input type="search" id="search" className="form-control" placeholder="Buscar productos..." />
                <button type="submit" className="btn btn-primary"><i className="bi bi-search"></i> Buscar
                </button>
              </div>
            </form>
          </div>

        </div>
      </nav>
    </header>
  )
}