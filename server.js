const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  console.log(path.join(__dirname, 'dist'));
  res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});


app.listen(PORT, () => { console.log('listening on port: ', PORT, '.'); });
