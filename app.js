const express = require('express');

const app= express();

const PORT = 3001;

app.get('/', (req, res ) => {
    res.send('Johnny House Backend est lancé !!')
});

app.listen(PORT, () => {
    console.log(`serveur lancé sur https://localhost:${PORT}`);
});

