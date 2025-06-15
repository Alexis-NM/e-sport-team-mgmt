package com.esport.back.models;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

/**
 * Représente l'entité jeu dans la base de données.
 * Cette classe est utilisée pour modéliser la table des jeux, contenant des informations sur différents jeux.
 */
@Getter
@Setter
@Entity
@Table(name = "games")
public class Games {
    /**
     * L'identifiant unique pour chaque jeu.
     * Il est généré automatiquement.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idGame;

    /**
     * L'URL de l'image de bannière du jeu.
     * Elle est limitée à 250 caractères et ne peut pas être nulle.
     */
    @Column(name = "bannerimg", length = 250, nullable = false)
    private String bannerimg;

    /**
     * L'URL de l'image du jeu.
     * Elle est limitée à 250 caractères et ne peut pas être nulle.
     */
    @Column(name = "img", length = 250, nullable = false)
    private String img;

    /**
     * Le nom du jeu.
     * Il est limité à 50 caractères et ne peut pas être nul.
     */
    @Column(name = "name", length = 50, nullable = false)
    private String name;

    /**
     * La classification PEGI (Pan European Game Information) du jeu.
     * Indique l'âge minimum recommandé pour jouer au jeu.
     */
    @Column(name = "pegi", nullable = false)
    private int pegi;

    /**
     * L'année de sortie du jeu.
     * Stockée au format "dd/MM/yyyy".
     */
    @Column(name = "year", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private LocalDate year;
}