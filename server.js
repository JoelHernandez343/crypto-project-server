const express = require('express');
const bodyParser = require('body-parser');

const { Y, keyGeneration } = require('./crypto/crypto');

const router = express.Router();
const app = express();

const { n, d } = keyGeneration();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/public', (req, res) => {
  console.log('Pedido n, enviando n...');

  res.send(JSON.stringify({ publicKey: n.toString('16') }));
});

router.post('/key', (req, res) => {
  console.log('Pedido y:');

  let x = BigInt(`0x${req.body.x}`);
  let y = Y(x, n, d).toString('16');

  console.log('Enviando y...');

  res.send(JSON.stringify({ y }));
});

app.use('/', router);

app.listen(4000, () =>
  console.log(`Server app listeging at http://localhost:${4000}`)
);
