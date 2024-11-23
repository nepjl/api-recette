import connexionDB from '../db/database.js';

// Créer un nouvel utilisateur
export const creerUtilisateur = async (nom, prenom, pseudo, email, mot_de_passe) => {
    const connection = await connexionDB();
    try {
        const [result] = await connection.execute(
            'INSERT INTO utilisateur (nom, prenom, pseudo, email, mot_de_passe) VALUES (?, ?, ?, ?, ?)',
            [nom, prenom, pseudo, email, mot_de_passe]
        );
        return { id: result.insertId, pseudo };
    } catch (error) {
        throw new Error('Erreur lors de la création de l\'utilisateur : ' + error.message);
    } finally {
        await connection.end();
    }
};

// Récupérer un utilisateur par email
export const trouverUtilisateurParEmail = async (email) => {
    const connection = await connexionDB();
    try {
        const [rows] = await connection.execute('SELECT * FROM utilisateur WHERE email = ?', [email]);
        return rows[0]; // Retourne le premier utilisateur trouvé
    } catch (error) {
        throw new Error('Erreur lors de la recherche de l\'utilisateur : ' + error.message);
    } finally {
        await connection.end();
    }
};

// Récupérer un utilisateur par ID
export const trouverUtilisateurParId = async (id) => {
    const connection = await connexionDB();
    try {
        const [rows] = await connection.execute('SELECT * FROM utilisateur WHERE id = ?', [id]);
        return rows[0]; // Retourne le premier utilisateur trouvé
    } catch (error) {
        throw new Error('Erreur lors de la recherche de l\'utilisateur : ' + error.message);
    } finally {
        await connection.end();
    }
};
