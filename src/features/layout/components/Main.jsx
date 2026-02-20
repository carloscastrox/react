import React from 'react'

export const Main = () => {
  return (
   <main className="container py-5">
      <div className="row g-4">
        
        <section className="col-12 col-lg-8">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h5 mb-0">Productos</h2>
            <div className="text-muted small" id="productsCount">Mostrando 4 productos</div>
          </div>
          
          <div className="row g-4" id="productsGrid">
            
            <div className="col-12 col-sm-6">
              <div className="card h-100 shadow-sm">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop" className="card-img-top product-img" alt="Producto 1" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <p className="card-title mb-1">Auriculares Bluetooth</p>
                    <span className="badge text-bg-success">En stock</span>
                  </div>
                  <p className="card-text text-muted small mb-2">Categoría: Audio</p>
                  <p className="fw-semibold mb-0">COP $159.900</p>
                </div>
                <div className="card-footer bg-white">
                  <button type="button" className="btn btn-outline-secondary btn-sm" title="Editar">
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  <button type="button" className="btn btn-outline-danger btn-sm" title="Eliminar">
                    <i className="bi bi-trash3"></i> Eliminar
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-sm-6">
              <div className="card h-100 shadow-sm">
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" className="card-img-top product-img" alt="Producto 2" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <p className="card-title mb-1">Teclado Mecánico</p>
                    <span className="badge text-bg-warning text-dark">Pocas unidades</span>
                  </div>
                  <p className="card-text text-muted small mb-2">Categoría: Periféricos</p>
                  <p className="fw-semibold mb-0">COP $249.000</p>
                </div>
                <div className="card-footer bg-white">
                  <button type="button" className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash3"></i> Eliminar
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="card h-100 shadow-sm">
                <img src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop" className="card-img-top product-img" alt="Producto 5" />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <p className="card-title mb-1">Mouse Inalámbrico</p>
                    <span className="badge text-bg-success">En stock</span>
                  </div>
                  <p className="card-text text-muted small mb-2">Categoría: Periféricos</p>
                  <p className="fw-semibold mb-0">COP $49.900</p>
                </div>
                <div className="card-footer bg-white">
                  <button type="button" className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash3"></i> Eliminar
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="card h-100 shadow-sm">
                <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" className="card-img-top product-img" alt="Producto 6"/>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <p className="card-title mb-1">SSD 1TB</p>
                    <span className="badge text-bg-warning text-dark">Pocas unidades</span>
                  </div>
                  <p className="card-text text-muted small mb-2">Categoría: Almacenamiento</p>
                  <p className="fw-semibold mb-0">COP $399.000</p>
                </div>
                <div className="card-footer bg-white">
                  <button type="button" className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-pencil-square"></i> Editar
                  </button>
                  <button type="button" className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash3"></i> Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="col-12 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h2 className="h6 mb-0"><i className="bi bi-plus-circle"></i> Agregar producto</h2>
            </div>
            <div className="card-body">
              <form id="productForm" noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre del producto</label>
                  <input type="text" id="name" className="form-control" placeholder="Ej: Auriculares Bluetooth" required autoComplete="off"/>
                  <div className="form-text">Nombre visible en la tarjeta.</div>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="price" className="form-label">Precio (COP)</label>
                    <input type="number" id="price" className="form-control" min="0" step="100" placeholder="159900" required />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input type="number" id="stock" className="form-control" min="0" step="1" placeholder="10" required />
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <label htmlFor="category" className="form-label">Categoría</label>
                  <select id="category" defaultValue="0" className="form-select" required>
                    <option value="0" disabled>Selecciona una categoría</option>
                    <option>Audio</option>
                    <option>Periféricos</option>
                    <option>Wearables</option>
                    <option>Fotografía</option>
                    <option>Almacenamiento</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">URL de imagen</label>
                  <input type="url" id="imageUrl" className="form-control" placeholder="https://..." />
                  <div className="form-text">Opcional. Si no se define, usa una imagen por defecto.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descripción</label>
                  <textarea id="description" className="form-control" rows="3" placeholder="Detalles del producto..."></textarea>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success">
                    <i className="bi bi-cart-plus"></i> Agregar al catálogo
                  </button>
                  <button type="reset" className="btn btn-outline-secondary">
                    <i className="bi bi-eraser"></i> Limpiar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}