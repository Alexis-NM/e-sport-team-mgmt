package com.esport.back.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * Représente la clé composite pour l'association StylesGames.
 * Cette classe est marquée comme intégrable, ce qui signifie qu'elle peut être intégrée dans d'autres entités.
 * Elle implémente Serializable pour permettre à la clé d'être sérialisée.
 */
@Getter
@Setter
@Embeddable
public class StylesGamesId implements Serializable {

    /**
     * L'ID de la partie jeu de l'association.
     * Ce champ est mappé à la colonne "id_game" dans la base de données.
     */
    @Column(name = "id_game")
    private Long idGame;

    /**
     * L'ID de la partie style de l'association.
     * Ce champ est mappé à la colonne "id_style" dans la base de données.
     */
    @Column(name = "id_style")
    private Long idStyle;
}