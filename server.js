const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/public', (req, res) =>
  res.send(JSON.stringify({ publicKey: 'LLAVEJJFOISDJFOIJDFLISDIJFOID' }))
);

router.post('/key', (req, res) => {
  console.log(req.body);

  res.send(JSON.stringify({ y: 'LLAVEJJFOISDJFOIJDFLISDIJFOID' }));
});

app.use('/', router);

app.listen(4000, () =>
  console.log(`Server app listeging at http://localhost:${4000}`)
);
