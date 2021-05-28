const express = require('express');
const app = express();
const port = 1986;
// const database = require('./database/index.js');
// const cors = require('cors');

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

