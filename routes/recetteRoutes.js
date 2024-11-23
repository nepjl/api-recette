import express from 'express';
import { getAllRecettes, getRecetteById, createRecette, updateRecette, deleteRecette } from '../controllers/recetteControllers.js';
import { authentication } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllRecettes);
router.get('/:id', getRecetteById);
router.post('/', authentication, createRecette); // Changement ici
router.put('/:id', authentication, updateRecette); // Changement ici
router.delete('/:id', authentication, deleteRecette);

export default router;
