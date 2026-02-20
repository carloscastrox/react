import React from 'react'

export const Footer = () => {
  return (
    <footer className="border-top py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="text-muted small">© 2026 · Carrito de Compras (Maquetación Bootstrap)</span>
        <div className="d-flex align-items-center gap-3">
          <a href="#" className="link-secondary small text-decoration-none"><i className="bi bi-info-circle"></i> Ayuda</a>
          <a href="#" className="link-secondary small text-decoration-none"><i className="bi bi-shield-check"></i> Políticas</a>
        </div>
      </div>
    </footer>
  )
}
