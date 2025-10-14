const db= require('../models/db')




exports.postReservation  = (req ,res) =>{
    const {nom, prenom,email,nom_residence,date_debut, date_fin} =req.body /* req.body recupère les donnée envoyée via le formulaire grace a express.json() */
    
   
    const verifClient = `SELECT id FROM client WHERE email = ? `;
    const verifResidence = `SELECT id FROM residence WHERE nom_residence = ?`;
    const insertClient = `INSERT INTO client (nom , prenom ,email) VALUES (?,?,?)`;
    const reservation = `INSERT INTO reservation (id_client, id_residence, date_debut,date_fin) VALUES (?,?,?,?)`;
    function handleClient(id_client){

        db.query(verifResidence, [nom_residence], (err, resResidence)=>{
            if(err) return res.status(500).json({err: 'Erreur lors de la véfication de la résidence'})
            if(resResidence.length>0)  {
                const id_residence = resResidence[0].id
               
                db.query(reservation, [id_client,id_residence,date_debut,date_fin], (err, resReserv)=>{
                    if(err) return res.status(500).json({error: 'Echec de la réservation'})
                    return res.status(200).json({message: 'reservation réussi !!'})
               })

               }else{
                   return res.status(404).json({message: 'residence introuvable'})
               }
            
        })
    

        
    }
        
            /* verifie si le client existe deja */
             db.query(verifClient, [email], (err, resClient) =>{
                 if(err) return res.status(500).json({error: 'Erreur lors de la verification du client '})
                    
                        let id_client;
                     if(resClient.length >0) {
                         id_client = resClient[0].id         
                         
                         handleClient(id_client);
                     }  
                         
     
                      else {
                             db.query(insertClient ,[nom,prenom,email], (err, resultClient) =>{
                                 if(err) return res.status(500).json({error: 'Erreur lors de l\'enregistrement'})
                                 id_client = resultClient.insertId
                                handleClient(id_client)
     
                             })
                         }
                         
                     
                });  
         }
    
    
        

