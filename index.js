const express = require('express');

const PORT = 3000;


const musicRouter = require('./routes/music');

const app = express();

app.use('/music', musicRouter);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}!`);
})