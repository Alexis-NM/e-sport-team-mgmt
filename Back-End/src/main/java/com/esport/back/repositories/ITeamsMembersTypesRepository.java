package com.esport.back.repositories;

import com.esport.back.models.TeamsMembersTypes;
import com.esport.back.models.TeamsMembersTypesId;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Interface pour le dépôt TeamsMembersTypes.
 * Étend CrudRepository pour fournir des opérations CRUD pour les entités TeamsMembersTypes.
 *
 * Cette interface de dépôt est utilisée pour interagir directement avec la couche de base de données,
 * permettant des opérations telles que sauvegarder, trouver, supprimer, etc., sur les entités TeamsMembersTypes.
 * Les paramètres génériques spécifient le type d'entité (TeamsMembersTypes) et son type d'ID (TeamsMembersTypesId).
 */
public interface ITeamsMembersTypesRepository extends CrudRepository<TeamsMembersTypes, TeamsMembersTypesId> {

    /**
     * Obtenir tous les membres par l'ID de l'équipe
     * @param idTeam : ID de l'équipe
     * @return List<TeamsMembersTypes> liste des membres de l'équipe
     */
    @Query("SELECT tmt FROM TeamsMembersTypes tmt WHERE tmt.id.idTeam = :idTeam")
    List<TeamsMembersTypes> findAllByIdTeam(@Param("idTeam") Long idTeam);
}