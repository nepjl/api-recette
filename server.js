import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

import connexionDB from './db/database.js';
import userRoutes from './routes/utilisateurRoutes.js';
import recetteRoutes from './routes/recetteRoutes.js';


dotenv.config()

const PORT = process.env.PORT || 9000;

const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

connexionDB()


app.use('/api/acceuil/', (req, res) => {
    res.status(200).send(`Bienvenue sur notre API.`);
});

app.use('/api/users', userRoutes);
app.use('/api/recettes', recetteRoutes);


app.listen(PORT, ()=>{
    console.log(`Le serveur écoute bien sur le port ${PORT}`);
})

