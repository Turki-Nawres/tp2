const express = require('express');
const app = express();


app.use(express.json());


const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (age !== undefined && age < 0) {
    const error = new Error("L'âge ne peut pas être négatif.");
    error.status = 400;
    return next(error); 
  }
  next();
};


app.post('/validate-age', validateAge, (req, res) => {
  res.send('Âge validé avec succès.');
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
