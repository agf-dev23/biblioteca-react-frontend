import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { crearLibro } from "../api/libros"

function AgregarLibro() {

  // [NUEVO]
  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [rating, setRating] = useState(1)

  // [NUEVO]
  const navigate = useNavigate()

  // [NUEVO]
  const guardarLibro = async (e) => {
    e.preventDefault()

    try {
      const libro = {
        titulo,
        autor,
        rating: Number(rating),
      }

      await crearLibro(libro)

      alert("Libro agregado correctamente")
      navigate("/")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="container mt-5">

      <h2 className="text-warning text-center">
        <i className="bi bi-book-half me-2"></i>
        Agregar Libro
      </h2>

      <form className="mt-4" onSubmit={guardarLibro}>

        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
          <input
            type="number"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Guardar
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
        </div>

      </form>
    </div>
  )
}

export default AgregarLibro