import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { actualizarLibro, obtenerLibroPorId } from "../api/libros"

function EditarLibro() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [titulo, setTitulo] = useState("")
  const [autor, setAutor] = useState("")
  const [rating, setRating] = useState(1)

  useEffect(() => {
    cargarLibro()
  }, [])

  // [EXISTENTE]
  const cargarLibro = async () => {
    try {
      const libro = await obtenerLibroPorId(id)
      setTitulo(libro.titulo)
      setAutor(libro.autor)
      setRating(libro.rating)
    } catch (error) {
      alert("Error al cargar el libro")
    }
  }

  // [NUEVO]
  const guardarCambios = async (e) => {
    e.preventDefault()

    try {
      const libro = {
        titulo,
        autor,
        rating: Number(rating),
      }

      await actualizarLibro(id, libro)

      alert("Libro actualizado correctamente")
      navigate("/")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="container mt-5">

      <h2 className="text-warning text-center">
        <i className="bi bi-pencil-square me-2"></i>
        Editar Libro
      </h2>

      <form className="mt-4" onSubmit={guardarCambios}>

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
            Guardar Cambios
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

export default EditarLibro