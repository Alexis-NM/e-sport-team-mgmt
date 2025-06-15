-- ------------------------------------------------------------------------------------------------
-- Suppression de la base de données existante
-- ------------------------------------------------------------------------------------------------

DROP DATABASE IF EXISTS `esport`;

-- ------------------------------------------------------------------------------------------------
-- Suppression des utilisateurs existants
-- ------------------------------------------------------------------------------------------------

DROP USER IF EXISTS 'dbuser_esport'@'%';
DROP USER IF EXISTS 'dbuser_esport'@'localhost';

-- ------------------------------------------------------------------------------------------------
-- Creation base de donnees
-- ------------------------------------------------------------------------------------------------

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema esport
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `esport` DEFAULT CHARACTER SET utf8 ;
USE `esport` ;

-- ------------------------------------------------------------------------------------------------
-- Suppression des tables existantes
-- ------------------------------------------------------------------------------------------------

DROP TABLE IF EXISTS teams_members_types;
DROP TABLE IF EXISTS styles_games;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS styles;
DROP TABLE IF EXISTS types;

#------------------------------------------------------------
# Table: game
#------------------------------------------------------------

CREATE TABLE games(
                     id_game   Int  Auto_increment  NOT NULL ,
                     bannerimg Varchar (250) NOT NULL ,
                     img       Varchar (250) NOT NULL ,
                     name      Varchar (50) NOT NULL ,
                     pegi      Int NOT NULL ,
                     year      Year NOT NULL,
                     CONSTRAINT games_PK PRIMARY KEY (id_game)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: team
#------------------------------------------------------------

CREATE TABLE teams(
                     id_team    Int  Auto_increment  NOT NULL ,
                     team_name  Varchar (50) NOT NULL ,
                     logo       Varchar (250) NOT NULL ,
                     maxplayers Int NOT NULL ,
                     id_game    Int,
                     CONSTRAINT teams_PK PRIMARY KEY (id_team),
                     CONSTRAINT teams_games_FK FOREIGN KEY (id_game) REFERENCES games(id_game)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: styles
#------------------------------------------------------------

CREATE TABLE styles(
                       id_style Int  Auto_increment  NOT NULL ,
                       style_name    Varchar (50) NOT NULL,
                       CONSTRAINT styles_PK PRIMARY KEY (id_style)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: member
#------------------------------------------------------------

CREATE TABLE members(
                       id_member Int  Auto_increment  NOT NULL ,
                       country   Varchar (50) NOT NULL ,
                       firstname Varchar (50) NOT NULL ,
                       lastname  Varchar (50) NOT NULL ,
                       nickname  Varchar (50) NOT NULL ,
                       photo     Varchar (250) NOT NULL ,
                       role      Varchar (50) NOT NULL,
                       CONSTRAINT members_PK PRIMARY KEY (id_member)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: type
#------------------------------------------------------------

CREATE TABLE types(
                     id_type Int  Auto_increment  NOT NULL ,
                     type_name    Varchar (50) NOT NULL,
                     CONSTRAINT types_PK PRIMARY KEY (id_type)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: team_member_type
#------------------------------------------------------------

CREATE TABLE teams_members_types(
                                id_team   Int NOT NULL ,
                                id_member   Int NOT NULL ,
                                id_type Int NOT NULL,
                                 CONSTRAINT teams_members_types_PK PRIMARY KEY (id_team, id_member),
                                 CONSTRAINT teams_members_types_types_FK FOREIGN KEY (id_type) REFERENCES types(id_type),
                                 CONSTRAINT teams_members_types_teams_FK FOREIGN KEY (id_team) REFERENCES teams(id_team),
                                 CONSTRAINT teams_members_types_members_FK FOREIGN KEY (id_member) REFERENCES members(id_member)
)ENGINE=InnoDB;

#------------------------------------------------------------
# Table: style_game
#------------------------------------------------------------

CREATE TABLE styles_games(
                             id_game Int NOT NULL ,
                             id_style  Int NOT NULL,
                           CONSTRAINT styles_games_PK PRIMARY KEY (id_style, id_game),
                           CONSTRAINT styles_games_styles_FK FOREIGN KEY (id_style) REFERENCES styles(id_style),
                           CONSTRAINT styles_games_games_FK FOREIGN KEY (id_game) REFERENCES games(id_game)
)ENGINE=InnoDB;

-- ------------------------------------------------------------------------------------------------
-- Creation compte utilisateur (2 comptes selon provenance)
-- ------------------------------------------------------------------------------------------------
-- Cree le user
CREATE OR REPLACE USER 'dbuser_esport'@'%' IDENTIFIED BY 'dbuser_esport';

-- Droits pour le user sur la base de donnees
GRANT SELECT,INSERT,UPDATE,DELETE,EXECUTE ON esport.* TO 'dbuser_esport'@'%';

-- Cree le user sur localhost
CREATE USER 'dbuser_esport'@'localhost' IDENTIFIED BY 'dbuser_esport';

-- Droits pour le user sur la base de donnees
GRANT SELECT,INSERT,UPDATE,DELETE,EXECUTE ON esport.* TO 'dbuser_esport'@'localhost';

-- ------------------------------------------------------------------------------------------------

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;