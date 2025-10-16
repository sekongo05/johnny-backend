const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app= express();



console.log("DB_USER:", process.env.MYSQLUSER);
console.log("DB_HOST:", process.env.MYSQLHOST);

app.use(cors());


const residenceRoute = require('./routes/residences');
const reservationRoute = require('./routes/reservations')

app.use(express.json()) 

app.use('/residences', residenceRoute);
app.use('/reservations', reservationRoute);
const PORT = process.env.SERVERPORT || 3001;

app.get('/test', (req, res) => {
  res.json({ message: 'Route test OK' });
});


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


