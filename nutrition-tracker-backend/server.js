const express = require('express');
const connectDatabase = require('./config/db');
const app = express();

connectDatabase();

app.get('/', (req, res) => res.send('You hit the API Root'));

app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
