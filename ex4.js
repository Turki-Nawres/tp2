const express = require('express');
const app = express();


app.use(express.json());


const validateProductData = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Le champ "name" est requis et doit être une chaîne de caractères non vide.' });
  }

  if (price === undefined || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Le champ "price" est requis et doit être un nombre positif.' });
  }

  next();
};


app.post('/add-product', validateProductData, (req, res) => {
  const { name, price } = req.body;
  res.json({
    message: 'Produit ajouté avec succès.',
    product: { name, price },
  });
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Une erreur est survenue.' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
