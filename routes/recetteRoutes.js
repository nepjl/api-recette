import express from 'express';
import { 
    getAllRecettes, 
    getRecetteById, 
    createRecette, // Utilisez le nouveau nom ici
    updateRecette,  // Mettez à jour le nom ici également
    deleteRecette 
} from '../controllers/recetteControllers.js';
import { authentication } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllRecettes);
router.get('/:id', getRecetteById);
router.post('/', authentication, createRecette); // Changement ici
router.put('/:id', authentication, updateRecette); // Changement ici
router.delete('/:id', authentication, deleteRecette);

export default router;
