import axios from "axios"

// URL base del backend.
// En Vercel viene desde VITE_API_URL.
// En local usa localhost.
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080"

// Creamos Axios apuntando siempre a la ruta de libros
export const apiLibros = axios.create({
  baseURL: `${API_BASE_URL}/api/libros`,
})

// Listar libros
export const listarLibros = async () => {
  const respuesta = await apiLibros.get("/")
  return respuesta.data
}

// Crear libro
export const crearLibro = async (libro) => {
  if (!libro.titulo || !libro.autor) {
    throw new Error("Título y Autor son obligatorios")
  }

  if (libro.rating < 1 || libro.rating > 5) {
    throw new Error("El rating debe estar entre 1 y 5")
  }

  const respuesta = await apiLibros.post("/", libro)
  return respuesta.data
}

// Obtener libro por ID
export const obtenerLibroPorId = async (id) => {
  const respuesta = await apiLibros.get(`/${id}`)
  return respuesta.data
}

// Actualizar libro
export const actualizarLibro = async (id, libro) => {
  if (!libro.titulo || !libro.autor) {
    throw new Error("Título y Autor son obligatorios")
  }

  if (libro.rating < 1 || libro.rating > 5) {
    throw new Error("El rating debe estar entre 1 y 5")
  }

  const respuesta = await apiLibros.put(`/${id}`, libro)
  return respuesta.data
}

// Eliminar libro
export const eliminarLibro = async (id) => {
  const respuesta = await apiLibros.delete(`/${id}`)
  return respuesta.data
}