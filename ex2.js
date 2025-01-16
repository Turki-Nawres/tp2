const express = require('express');
const app = express();


app.use(express.json());


const validateUsernamePassword = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Username et password sont requis.');
  }
  next();
};


app.post('/login', validateUsernamePassword, (req, res) => {
  res.send('Connexion réussie!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
