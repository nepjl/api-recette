import { 
    creerUtilisateur, 
    trouverUtilisateurParEmail, 
    trouverUtilisateurParId 
} from '../models/utilisateur.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Enregistrement d'un nouvel utilisateur
export const registerUser = async (req, res) => {
    const { nom, prenom, pseudo, email, mot_de_passe } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
        const utilisateur = await creerUtilisateur(nom, prenom, pseudo, email, hashedPassword);
        res.status(201).json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Connexion d'un utilisateur
export const loginUser = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    try {
        const utilisateur = await trouverUtilisateurParEmail(email);
        if (!utilisateur || !(await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe))) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        const token = jwt.sign({ id: utilisateur.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Récupérer le profil d'un utilisateur
export const getUserProfile = async (req, res) => {
    const { id } = req.user;

    try {
        const utilisateur = await trouverUtilisateurParId(id);
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.status(200).json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
