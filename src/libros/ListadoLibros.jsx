import { useEffect, useState } from "react"
import { listarLibros, eliminarLibro } from "../api/libros"
import { Link } from "react-router-dom"

function ListadoLibros() {

  const [libros, setLibros] = useState([])

  useEffect(() => {
    cargarLibros()
  }, [])

  const cargarLibros = async () => {
    const data = await listarLibros()
    setLibros(data)
  }

  // [NUEVO]
  const eliminarRegistro = async (id) => {
    const confirmar = confirm("¿Seguro que deseas eliminar este libro?")

    if (!confirmar) return

    try {
      await eliminarLibro(id)
      cargarLibros() // refrescar lista
    } catch (error) {
      alert("Error al eliminar el libro")
    }
  }

  return (
    <div className="container mt-5">

      <h2 className="text-warning text-center">
        <i className="bi bi-book-half me-2"></i>
        Listado de Libros
      </h2>

      <div className="table-responsive mt-4">
        <table className="table table-bordered table-hover text-center">

          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Rating</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {libros.map((libro) => (
              <tr key={libro.id}>
                <td>{libro.id}</td>
                <td>{libro.titulo}</td>
                <td>{libro.autor}</td>
                <td>{libro.rating}</td>
                <td className="d-flex justify-content-center gap-2">

                  <Link
                    to={`/editar/${libro.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="bi bi-pencil-square me-1"></i>
                    Editar
                  </Link>

                  <button
                    onClick={() => eliminarRegistro(libro.id)}
                    className="btn btn-danger btn-sm"
                  >
                    <i className="bi bi-trash me-1"></i>
                    Eliminar
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  )
}

export default ListadoLibros