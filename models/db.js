const mysql= require('mysql2')
require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.MYSQLHOST || "maglev.proxy.rlwy.net",
    user: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD || "tiXWUFOSglXBfTkUJajrngsgNxwDpaSM",
    database: process.env.MYSQLDATABASE || "railway",
    port: process.env.MYSQLPORT || 20162

});

db.connect((err)=>{
    if(err){
        console.log('Erreur de connexion a Mysql : ', err.message);
        console.log('Variables chargées :', process.env.MYSQLHOST, process.env.MYSQLDATABASE , process.env.MYSQLUSER);

        return;
    }
    console.log("connecté a railway")
})

module.exports =db