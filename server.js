const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./userRoutes');


dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

// catch-all 404
app.use((req, res) => res.status(404).send('Not Found'));

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
);
