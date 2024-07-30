const express = require('express');
const globalRouter = require('./routes/index.cjs');

const PORT = 5000;

const app = express();

// .put() - update character completely

app.use(express.json());
app.use('/rest_api', globalRouter);
app.get('/', (req, res) => res.send('root'));

app.listen(PORT, () => console.log(`listening to port ${PORT}...`));
