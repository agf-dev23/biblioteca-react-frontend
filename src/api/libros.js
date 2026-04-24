import axios from "axios"

const urlBase = "http://localhost:8080/api/libros"

export const apiLibros = axios.create({
  baseURL: urlBase,
})

// [EXISTENTE]
export const listarLibros = async () => {
  const respuesta = await apiLibros.get("/")
  return respuesta.data
}

// [EXISTENTE]
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

// [EXISTENTE]
export const obtenerLibroPorId = async (id) => {
  const respuesta = await apiLibros.get(`/${id}`)
  return respuesta.data
}

// [EXISTENTE]
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

// [NUEVO]
export const eliminarLibro = async (id) => {
  const respuesta = await apiLibros.delete(`/${id}`)
  return respuesta.data
}