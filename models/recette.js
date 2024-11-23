import connexionDB from '../db/database.js';

// Ajouter une nouvelle recette
export const ajouterRecette = async (image, titre, description, ingredients, etapes, categorie, utilisateur_id) => {
    const connection = await connexionDB();
    try {
        const [result] = await connection.execute(
            'INSERT INTO recette (image, titre, description, ingredients, etapes, categorie, utilisateur_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [image, titre, description, ingredients, etapes, categorie, utilisateur_id]
        );
        return { id: result.insertId, titre };
    } catch (error) {
        throw new Error('Erreur lors de l\'ajout de la recette : ' + error.message);
    } finally {
        await connection.end();
    }
};

// Récupérer toutes les recettes
export const recupererToutesRecettes = async () => {
    const connection = await connexionDB();
    try {
        const [rows] = await connection.execute('SELECT * FROM recette');
        return rows; // Retourne toutes les recettes
    } catch (error) {
        throw new Error('Erreur lors de la récupération des recettes : ' + error.message);
    } finally {
        await connection.end();
    }
};

// Récupérer une recette par ID
export const recupererRecetteParId = async (id) => {
    const connection = await connexionDB();
    try {
        const [rows] = await connection.execute('SELECT * FROM recette WHERE id = ?', [id]);
        return rows[0]; // Retourne la recette trouvée
    } catch (error) {
        throw new Error('Erreur lors de la récupération de la recette : ' + error.message);
    } finally {
        await connection.end();
    }
};

// Mettre à jour une recette par ID
export const mettreAJourRecette = async (id, image, titre, description, ingredients, etapes, categorie) => {
    const connection = await connexionDB();
    try {
        const [result] = await connection.execute(
            'UPDATE recette SET image = ?, titre = ?, description = ?, ingredients = ?, etapes = ?, categorie = ? WHERE id = ?',
            [image, titre, description, ingredients, etapes, categorie, id]
        );
        return result.affectedRows > 0; // Retourne true si la recette a été mise à jour
    } catch (error) {
        throw new Error('Erreur lors de la mise à jour de la recette : ' + error.message);
    } finally {
        await connection.end();
    }
};

// Supprimer une recette par ID
export const supprimerRecette = async (id) => {
    const connection = await connexionDB();
    try {
        const [result] = await connection.execute('DELETE FROM recette WHERE id = ?', [id]);
        return result.affectedRows > 0; // Retourne true si la recette a été supprimée
    } catch (error) {
        throw new Error('Erreur lors de la suppression de la recette : ' + error.message);
    } finally {
        await connection.end();
    }
};
