package com.esport.back.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Représente l'association entre les styles et les jeux dans la base de données.
 * Cette classe est utilisée pour modéliser la table styles_games, qui établit une relation plusieurs-à-plusieurs
 * entre les styles et les jeux en tenant leurs clés étrangères composées.
 */
@Getter
@Setter
@Entity
@Table(name = "styles_games")
public class StylesGames {

    /**
     * La clé composite pour cette association, combinant les identifiants du style et du jeu.
     */
    @EmbeddedId
    private StylesGamesId id;

    /**
     * La partie jeu de cette association.
     * Elle est mappée par l'identifiant du jeu.
     */
    @ManyToOne
    @MapsId("idGame")
    @JoinColumn(name = "id_game", referencedColumnName = "idGame")
    private Games game;

    /**
     * La partie style de cette association.
     * Elle est mappée par l'identifiant du style.
     */
    @ManyToOne
    @MapsId("idStyle")
    @JoinColumn(name = "id_style", referencedColumnName = "idStyle")
    private Styles style;
}