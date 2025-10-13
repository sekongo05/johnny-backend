const mysql= require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2005',
    database: 'johnny_house'
});

db.connect((err)=>{
    if(err){
        console.log('Erreur de connexion a Mysql : ', err.message);
        return;
    }
    console.log("connecté a la base de donnée johnny house")
})

module.exports =db