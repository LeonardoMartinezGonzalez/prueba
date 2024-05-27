import express from 'express';
import { getAllCategorias } from '../controllers/CategoriaController.js';

const router = express.Router()

// Crear las rutas para Clientes
router.get('/', getAllCategorias)


export default router;