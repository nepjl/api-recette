import { recupererToutesRecettes,recupererRecetteParId, ajouterRecette as ajouterRecetteModel, mettreAJourRecette, supprimerRecette} from '../models/recette.js';

// Récupérer toutes les recettes
export const getAllRecettes = async (req, res) => {
    try {
        const recettes = await recupererToutesRecettes();
        res.status(200).json(recettes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer une recette par ID
export const getRecetteById = async (req, res) => {
    const { id } = req.params;
    try {
        const recette = await recupererRecetteParId(id);
        if (!recette) {
            return res.status(404).json({ message: 'Recette non trouvée' });
        }
        res.status(200).json(recette);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter une nouvelle recette
export const createRecette = async (req, res) => {
    const { image, titre, description, ingredients, etapes, categorie } = req.body;
    const utilisateur_id = req.user.id; // Utilisateur connecté

    try {
        const nouvelleRecette = await ajouterRecetteModel(image, titre, description, ingredients, etapes, categorie, utilisateur_id);
        res.status(201).json(nouvelleRecette);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour une recette par ID
export const updateRecette = async (req, res) => {
    const { id } = req.params;
    const { image, titre, description, ingredients, etapes, categorie } = req.body;

    try {
        const updated = await mettreAJourRecette(id, image, titre, description, ingredients, etapes, categorie);
        if (!updated) {
            return res.status(404).json({ message: 'Recette non trouvée' });
        }
        res.status(200).json({ message: 'Recette mise à jour avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une recette par ID
export const deleteRecette = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await supprimerRecette(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Recette non trouvée' });
        }
        res.status(200).json({ message: 'Recette supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
