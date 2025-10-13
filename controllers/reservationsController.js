const db= require('../models/db')

exports.postReservation  = (req ,res) =>{
    const {nom, prenom, email, residence,date_debut, data_fin} =req.body /* req.body recupère les donnée envoyée via le formulaire grace a express.json() */
    const sql = `INSERT INTO reservation (nom, prenom, email, residence,date_debut, data_fin) 
                VALUES(?, ?, ?, ?, ? ,?)`; /*  les ? permettent d'éviter les injections sql */
        
       db.query(sql, [nom, prenom, email, residence,date_debut, data_fin], (err ,resultat) =>{
        if(err) return res.status(500).json({error: err.message });
        res.status(200).json({message: 'Réservation enregistrée  avec succès.'})
       }) ;
/* db.query() permet d'executer une requête sql */
}
