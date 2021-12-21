const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')
const app = express();
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then( () => console.log("Connexion à la base de données."))
.catch( (err) => console.log(err));

app.use(express.json());
app.use("/api/users", userRoute);

const port = 8000;
app.listen(port, () => {
    console.log("Démarrage du serveur.")
})
