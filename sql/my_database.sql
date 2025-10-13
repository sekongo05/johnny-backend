CREATE DATABASE johnny_house;

CREATE TABLE clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  telephone VARCHAR(20),
  adresse TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE residences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  adresse TEXT NOT NULL,
  ville VARCHAR(50),
  pays VARCHAR(50),
  prix INT NOT NULL,
  disponible BOOLEAN DEFAULT true,
  description TEXT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT NOT NULL,
  residence_id INT NOT NULL,
  date_debut DATE NOT NULL,
   email VARCHAR(100) UNIQUE NOT NULL,
  statut VARCHAR(50) DEFAULT 'en attente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (residence_id) REFERENCES residences(id),
  FOREIGN KEY (email) REFERENCES client(id)
);
