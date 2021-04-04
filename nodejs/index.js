const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('OK');
});

app.get('/rate', (req, res) => {
  res.send({ rate: 10 });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
