const assert = require('assert');
const { multiplicar } = require('./app.js');

console.log('Probando la multiplicación...');

try {
  assert.strictEqual(multiplicar(5, 4), 20);
  console.log('Prueba superada: 5 x 4 es 20.');
  process.exit(0);
} catch (error) {
  console.error('La prueba falló:', error);
  process.exit(1);
}