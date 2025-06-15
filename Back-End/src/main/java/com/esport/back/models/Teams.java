package com.esport.back.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Classe représentant une équipe dans le système. Elle contient des informations sur les équipes
 * comme leur nom, logo, le nombre maximum de joueurs, et le jeu auquel l'équipe est associée.
 */
@Getter
@Setter
@Entity
@Table(name = "teams")
public class Teams {

	/**
	 * Identifiant unique de l'équipe.
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTeam;

	/**
	 * Nom de l'équipe. Ce champ est obligatoire et ne peut pas dépasser 50 caractères.
	 */
	@Column(name = "team_name", length = 50, nullable = false)
	private String teamName;

	/**
	 * Chemin d'accès au logo de l'équipe. Ce champ est obligatoire et ne peut pas dépasser 250 caractères.
	 */
	@Column(name = "logo", length = 250, nullable = false)
	private String logo;

	/**
	 * Nombre maximum de joueurs que l'équipe peut avoir. Ce champ est obligatoire.
	 */
	@Column(name = "maxplayers", nullable = false)
	private int maxPlayers;

	/**
	 * Le jeu auquel l'équipe est associée. Il s'agit d'une relation plusieurs-à-un entre les équipes et les jeux.
	 */
	@ManyToOne
	@JoinColumn(name = "id_game", referencedColumnName = "idGame")
	private Games game;
}