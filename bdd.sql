CREATE DATABASE school_management;

\c school_management

CREATE TABLE Departement (
    IdDepartement SERIAL PRIMARY KEY,
    nomDepartement VARCHAR(50) NOT NULL
);

INSERT INTO Departement (nomDepartement) VALUES ('Systèmes d\'Information'), ('Data Science et Intelligence Artificielle');

CREATE TABLE Enseignant (
    nomEnseignant VARCHAR(30) NOT NULL,
    prenomEnseignant VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL CHECK (email LIKE '%_@__%.__%'),
    NTelephone VARCHAR(10) NOT NULL CHECK (NTelephone LIKE '0_________'),
    grade VARCHAR(30) NOT NULL,
    IdDepartement INT,
    FOREIGN KEY (IdDepartement) REFERENCES Departement(IdDepartement)
);

CREATE TABLE Salle (
    IdSalle SERIAL PRIMARY KEY NOT NULL,
    nomSalle VARCHAR(10) NOT NULL,
    capacite INT CHECK (capacite > 0),
    typeSalle VARCHAR(4) NOT NULL
);
