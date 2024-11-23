

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

const connexionDB = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Connexion à la base de données réussie');
        return connection;
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error.message);
        process.exit(1);
    }
};

export default connexionDB;







