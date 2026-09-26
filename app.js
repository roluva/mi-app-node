const express = require('express');
const app = express();
const port = 3000;

const multiplicar = (a, b) => a * b;

app.get('/', (req, res) => {
  res.send(`El resultado de 5 x 4 es: ${multiplicar(5, 4)}`);
});

module.exports = { app, multiplicar };

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
  });
}