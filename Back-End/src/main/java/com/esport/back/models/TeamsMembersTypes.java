package com.esport.back.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

/**
 * Représente l'association entre les équipes, les membres et leurs types au sein du système.
 * Cette entité est utilisée pour lier un membre à une équipe avec un rôle ou type spécifique.
 */
@Getter
@Setter
@Entity
@Table(name = "teams_members_types")
public class TeamsMembersTypes {

	/**
	 * ID composite pour l'association, combinant l'ID de l'équipe, l'ID du membre et l'ID du type.
	 */
	@EmbeddedId
	private TeamsMembersTypesId id;

	/**
	 * Le type du membre de l'équipe. Ceci est une relation plusieurs-à-un car de nombreux membres de l'équipe
	 * peuvent partager le même type.
	 */
	@ManyToOne
	@JoinColumn(name = "id_type", referencedColumnName = "idType")
	private Types type;

	/**
	 * L'équipe associée au membre de l'équipe. Ceci est une relation plusieurs-à-un car de nombreux membres de l'équipe
	 * peuvent appartenir à la même équipe.
	 */
	@ManyToOne
	@MapsId("idTeam")
	@JoinColumn(name = "id_team", referencedColumnName = "idTeam")
	private Teams team;

	/**
	 * Le membre associé à l'équipe. Ceci est une relation plusieurs-à-un car un membre
	 * peut appartenir à plusieurs équipes avec différents types.
	 */
	@ManyToOne
	@MapsId("idMember")
	@JoinColumn(name = "id_member", referencedColumnName = "idMember")
	private Members member;
}