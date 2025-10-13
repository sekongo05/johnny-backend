const express = require('express');
const cors = require('cors');
require('dotenv').config
const app= express();




app.use(cors());
const residenceRoute = require('./routes/residences');
const reservationRoute = require('./routes/reservations')

app.use(express.json()) 

app.use('/residences', residenceRoute);
app.use('/reservations', reservationRoute)
const PORT = process.env.PORT || 3001;

app.get('/', (req, res ) => {
    res.send('Johnny House Backend est lancé !!')
});

app.listen(PORT, () => {
    console.log(`serveur lancé sur http://localhost:${PORT}`);
});
/* 











app.get('/residences', (req,res)=>{
        
    const residences = [
        {
            "non" : "coucou",
            "prenon" : "detz"
        }
    
    ];
    res.json(residences)

    })
*/


