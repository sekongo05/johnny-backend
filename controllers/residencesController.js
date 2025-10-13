const db= require('../models/db')
exports.getResidences =(req,res)=>{
    db.query('SELECT * FROM residence', (err, resultat)=>{
      if(err){
            return res.status(500).json({error:'Erreur serveur'})
      }
      res.json(resultat)
    })

    
}


/* 
  const residences =[
            {
                  id: 1,
                  img: 'Images/v1.jpg',
                  nom: 'Résidence Nova',
                  commune : 'Plateau',
                  prix: '150000',
                  La Résidence Nova allie design contemporain et confort absolu. Chaque appartement est équipé de la fibre optique, d’un mobilier épuré et d’une cuisine ouverte sur le salon. Idéale pour les professionnels en déplacement ou les couples en quête de modernité.
            },
            {
                  id: 2,
                  img: 'Images/v4.jpg',
                  nom: 'Résidence Assinie Bleu',
                  commune : 'Assinie',
                  prix: '150000',
                   À quelques pas de la plage, la Résidence Assinie Bleu vous plonge dans une ambiance tropicale. Piscine privée, hamac sous les palmiers, chambres ventilées et vue sur l’océan : le luxe discret d’un séjour balnéaire.
            },
            {
                  id: 3,
                  img: 'Images/v5.jpg',
                  nom: 'Résidence Ébène',
                  prix: '130000',
                  commune : 'Cocody',
                  description: 'Nichée dans un quartier calme de Cocody, la Résidence Ébène offre un cadre verdoyant et apaisant. Avec ses 3 chambres climatisées, son jardin privé et son mobilier en bois noble, elle séduit les amateurs de raffinement et de sérénité.'
            },
             {
                  id: 4,
                  img: 'Images/v3.jpg',
                  nom: 'Résidence Connect',
                  commune: 'Cocody',
                  prix: '110.000',
                  description: 'Pensée pour les séjours professionnels, la Résidence Connect propose des studios fonctionnels avec espace de travail, Wi-Fi haut débit, service de conciergerie et accès rapide aux zones d’affaires. Un confort discret, une efficacité maximale'
            },
            {
                  id: 5,
                  img: 'Images/residence.jpg',
                  commune: 'Yopognon',
                  nom: 'Résidence Yop Sunset',
                  prix: '60000',
                  description: 'Ambiance jeune et dynamique, studio cosy, terrasse ensoleillée et proximité des transports.'
            },
            {
                  id: 6,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Abatta Vue',
                  commune: 'Cocody',
                  prix: '100000',
                  description: 'Immersion nature, vue sur les mangroves, déco minimaliste et silence absolu.'
            },
            {
                  id: 7,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Laguna Pearl',
                  commune: 'Assinie',
                  prix: '75000',
                  description: 'Située au bord de la lagune, avec ponton privé, bar lounge et chambres aux tons marins.'
            },
            {
                  id: 8,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Palmeraie Luxe',
                  commune: 'Cocody',
                  prix: '110000',
                  description: 'Architecture coloniale revisitée, patio central, fontaine, et chambres décorées avec art local.'
            },
            {
                  id: 9,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Koumassi Horizon',
                  commune: 'Koumassi',
                  prix: '60000',
                  description: 'Studios fonctionnels avec vue sur les toits, ambiance jeune, proche des commerces.'
            },
      
            {
                  id: 10,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Les Orchidées',
                  commune: 'Cocody',
                  prix: '120000',
                  description: 'Située dans un quartier résidentiel, elle offre un jardin fleuri, des chambres spacieuses et une ambiance paisible. Idéale pour les familles.'
            },
      
            {
                  id: 11,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Bellevue',
                  commune: 'Plateau',
                  prix: '150000',
                  description: 'Vue imprenable sur la lagune, appartements lumineux, sécurité renforcée et accès direct aux zones d’affaires.'
            },
            {
                  id: 12,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Le Jardin',
                  commune: 'Yopougon',
                  prix: '50000',
                  description: 'Espaces verts, aire de jeux, et appartements bien agencés. Parfaite pour les jeunes couples ou les familles.'
            },
            {
                  id: 13,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Les Alizés',
                  commune: 'Koumassi',
                  prix: '70000',
                  description: 'Résidence ventilée avec balcons, proche des écoles et transports. Ambiance conviviale et prix abordables.'
            },
            {
                  id: 14,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Les Étoiles',
                  commune: 'Abobo',
                  prix: '65000',
                  description: 'Studios bien agencés, ambiance conviviale, décoration minimaliste et accès facile aux transports. Parfaite pour les jeunes actifs ou les étudiants à la recherche d’un cadre simple et fonctionnel.'
            },
            {
                  id: 15,
                  img: 'Images/residence.jpg',
                  nom: 'Résidence Le Marigot',
                  commune: 'Port-Bouët',
                  prix: '75000',
                  'description': 'À deux pas de l’aéroport, cette résidence propose des studios modernes avec cuisine équipée, climatisation, et accès rapide à la plage. Parfaite pour les voyageurs ou les week-ends balnéaires'
            },
            {
                  id: 16,
                   img: 'Images/residence.jpg',
                  nom: 'Résidence Ivoire Nord',
                  commune: 'Abobo',
                  prix: '60000',
                  description: 'Appartements sécurisés avec climatisation, cuisine équipée, et balcon privé. Située à proximité des axes routiers, elle combine accessibilité et confort urbain.'
            },
                    {
                id: 17,
                img: 'Images/residence.jpg',
                nom: 'Résidence Ébène Sud',
                commune: 'Yopougon',
                prix: '75000',
                description: 'Studios modernes avec accès sécurisé, cuisine ouverte, et espace vert commun. Idéal pour jeunes actifs recherchant confort et proximité des commerces.'
                },
                {
                id: 18,
                img: 'Images/residence.jpg',
                nom: 'Résidence Cocody Prestige',
                commune: 'Cocody',
                prix: '120000',
                description: 'Appartements haut standing avec ascenseur, parking privé, et sécurité 24h/24. À deux pas des écoles internationales et des centres commerciaux.'
                },
                {
                id: 19,
                img: 'Images/residence.jpg',
                nom: 'Résidence Riviera Zen',
                commune: 'Riviera',
                prix: '95000',
                description: 'Logements spacieux avec jardin privatif, salle de sport, et espace coworking. Parfait pour familles ou télétravailleurs en quête de sérénité.'
                },
                {
                id: 20,
                img: 'Images/residence.jpg',
                nom: 'Résidence Marcory Horizon',
                commune: 'Marcory',
                prix: '85000',
                description: 'Appartements lumineux avec terrasse, cuisine américaine, et accès rapide au Plateau. Un équilibre entre vie urbaine et confort résidentiel.'
                }

    ]
    res.json(residences)  






*/
