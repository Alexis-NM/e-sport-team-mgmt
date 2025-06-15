package com.esport.back.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Classe représentant un membre d'une équipe dans le système. Elle contient des informations sur les membres
 * comme leur pays, prénom, nom, surnom, photo, et rôle au sein de l'équipe.
 */
@Getter
@Setter
@Entity
@Table(name = "members")
public class Members {

	/**
	 * Identifiant unique du membre.
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idMember;

	/**
	 * Pays d'origine du membre. Ce champ est obligatoire et ne peut pas dépasser 50 caractères.
	 */
	@Column(name = "country", length = 50, nullable = false)
	private String country;

	/**
	 * Prénom du membre. Ce champ est obligatoire et ne peut pas dépasser 50 caractères.
	 */
	@Column(name = "firstname", length = 50, nullable = false)
	private String firstname;

	/**
	 * Nom de famille du membre. Ce champ est obligatoire et ne peut pas dépasser 50 caractères.
	 */
	@Column(name = "lastname", length = 50, nullable = false)
	private String lastname;

	/**
	 * Surnom du membre. Ce champ est obligatoire et ne peut pas dépasser 50 caractères.
	 */
	@Column(name = "nickname", length = 50, nullable = false)
	private String nickname;

	/**
	 * Chemin d'accès à la photo du membre. Ce champ est obligatoire et ne peut pas dépasser 250 caractères.
	 */
	@Column(name = "photo", length = 250, nullable = false)
	private String photo;

	/**
	 * Rôle du membre au sein de l'équipe. Ce champ est obligatoire et ne peut pas dépasser 50 caractères.
	 */
	@Column(name = "role", length = 50, nullable = false)
	private String role;
}