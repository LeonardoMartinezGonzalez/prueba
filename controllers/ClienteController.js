
import ClienteModel from "../models/ClientesModel.js";


// Métodos CRUD --> Crear, Consultar, Actualizar y Eliminar

// Mostrar todos los Clientes
export const getAllClientes = async (req, res) => {
    try {
        const clientes = await ClienteModel.findAll()
        res.json( clientes )
    } catch (error) {
        res.json( { message: error.message })
    }
}


// Mostrar UN Cliente
export const getCliente = async (req,res) => {
    try {
        const cliente = await ClienteModel.findOne( { where: { id: req.params.id} } )
        res.json( cliente )
    } catch (error) {
        res.json( { message: error.message })
    }
}

// Crear un Cliente
export const createCliente = async (req,res) => {
    try {
        await ClienteModel.create(req.body)
        res.json( {message: 'Registro creado correctamente'} )
    } catch (error) {
        res.json( { message: error.message })
    }
}


// Actualizar un Cliente
export const updateCliente = async (req,res) => {
    try {
        await ClienteModel.update( req.body, { where : { id: req.params.id } } )
        res.json( {message: 'Registro creado correctamente'} )
    } catch (error) {
        res.json( { message: error.message })
    }
}

// Eliminar un Cliente
export const deleteCliente = async(req,res) =>{
    try {
        await ClienteModel.destroy( { where : { id: req.params.id }} )
        res.json( {message: 'Registro eliminado correctamente'} )
    } catch (error) {
        res.json( { message: error.message })
    }
}

// Validar un cliente
export const loginCliente = (req,res) => {
    try {
        res.json( { message: 'Validando cliente' })
    } catch (error) {
        res.json( { message: error.message })
    }
}