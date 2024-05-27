
import CategoriaModel from "../models/CategoriaModel.js"


// Métodos CRUD --> Crear, Consultar, Actualizar y Eliminar

// Mostrar todas las categorias
export const getAllCategorias= async (req, res) => {
    try {
        const categorias = await CategoriaModel.findAll()
        res.json( categorias )
    } catch (error) {
        res.json( { message: error.message })
    }
}
