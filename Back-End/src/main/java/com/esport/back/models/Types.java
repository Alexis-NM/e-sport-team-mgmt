package com.esport.back.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Classe représentant un type d'événement ou de catégorie dans le système.
 * Elle contient des informations sur les différents types pouvant être assignés à d'autres entités.
 */
@Getter
@Setter
@Entity
@Table(name = "types")
public class Types {

	/**
	 * Identifiant unique du type.
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idType;

	/**
	 * Nom du type. Ce champ est obligatoire et ne peut pas dépasser 50 caractères.
	 */
	@Column(name = "type_name", length = 50, nullable = false)
	private String typeName;
}