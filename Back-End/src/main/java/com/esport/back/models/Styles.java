package com.esport.back.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Représente l'entité de style dans la base de données.
 * Cette classe est utilisée pour modéliser la table des styles, contenant des informations sur différents styles.
 */
@Getter
@Setter
@Entity
@Table(name = "styles")
public class Styles {

    /**
     * L'identifiant unique pour chaque style.
     * Il est généré automatiquement.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStyle;

    /**
     * Le nom du style.
     * Il est limité à 50 caractères et ne peut pas être nul.
     */
    @Column(name = "style_name", length = 50, nullable = false)
    private String styleName;
}