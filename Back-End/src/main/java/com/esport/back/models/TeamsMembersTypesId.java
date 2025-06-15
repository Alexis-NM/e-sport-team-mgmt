package com.esport.back.models;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

/**
 * Classe intégrable pour représenter la clé composite de l'entité TeamsMembersTypes.
 * Cette classe est utilisée pour définir la clé primaire composite pour l'association entre les équipes, les membres et les types.
 */
@Getter
@Setter
@Embeddable
public class TeamsMembersTypesId implements Serializable {

	/**
	 * L'ID de l'équipe. Cette colonne fait partie de la clé composite.
	 */
	@Column(name = "id_team")
	private Long idTeam;

	/**
	 * L'ID du membre. Cette colonne fait partie de la clé composite.
	 */
	@Column(name = "id_member")
	private Long idMember;
}