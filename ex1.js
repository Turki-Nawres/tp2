const express = require('express');
const app = express();


app.use((req, res, next) => {
  const now = new Date();
  console.log(`[${now.toISOString()}] ${req.method} ${req.path}`);
  next(); 
});


app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'application!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
