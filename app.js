const express = require('express');
const cors = require('cors');
const app= express();




app.use(cors());
const residenceRoute = require('./routes/residences');
app.use(express.json())
app.use('/residences', residenceRoute);

const PORT = process.env.PORT || 3001;

app.get('/', (req, res ) => {
    res.send('Johnny House Backend est lancé !!')
});

app.listen(PORT, () => {
    console.log(`serveur lancé sur http://localhost:${PORT}`);
});



