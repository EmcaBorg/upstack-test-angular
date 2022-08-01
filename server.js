const express = require('express')

const app = express();

const fs = require('fs');

var cors = require('cors')

app.use(cors());

const port = 3001;

app.get('/links', function (req, res) {

  let rawdata = fs.readFileSync('./src/assets/links.json');

  let employees = JSON.parse(rawdata);

  res.send(employees);
});

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);

});

