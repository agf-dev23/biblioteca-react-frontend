import axios from "axios"

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080"

export const apiLibros = axios.create({
  baseURL: `${API_BASE_URL}/api/libros`,
})

export const listarLibros = async () => {
  const respuesta = await apiLibros.get("/")
  return respuesta.data
}

export const crearLibro = async (libro) => {
  const respuesta = await apiLibros.post("/", libro)
  return respuesta.data
}

export const obtenerLibroPorId = async (id) => {
  const respuesta = await apiLibros.get(`/${id}`)
  return respuesta.data
}

export const actualizarLibro = async (id, libro) => {
  const respuesta = await apiLibros.put(`/${id}`, libro)
  return respuesta.data
}

export const eliminarLibro = async (id) => {
  const respuesta = await apiLibros.delete(`/${id}`)
  return respuesta.data
}