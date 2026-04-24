import { Link } from "react-router-dom"

function Navegacion() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand text-warning fw-bold" to="/">
          <i className="bi bi-book-half me-2"></i>
          Biblioteca Personal
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link active" to="/">
            Listado
          </Link>

          <Link className="nav-link" to="/agregar">
            <i className="bi bi-plus-circle me-1"></i>
            Agregar
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navegacion