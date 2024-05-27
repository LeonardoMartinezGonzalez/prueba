import express from 'express';
import { createCliente, deleteCliente, getAllClientes, getCliente, loginCliente, updateCliente } from '../controllers/ClienteController.js';

const router = express.Router()

// Crear las rutas para Clientes
router.get('/', getAllClientes)
router.get('/:id', getCliente)
router.post('/', createCliente)
router.put('/:id', updateCliente)
router.delete('/:id', deleteCliente)

// Crear la ruta para el login
router.get('/usuarios/login', loginCliente) // http://localhost:3000/api/clientesusuarios/login

export default router;