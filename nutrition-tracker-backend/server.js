const express = require('express');
const connectDatabase = require('./config/db');
const app = express();

connectDatabase();

app.get('/', (req, res) => res.send('Backend Running oioioi'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
