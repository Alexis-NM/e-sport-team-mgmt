package com.esport.back.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.lang.NonNull;

import java.util.Optional;
import java.util.List;

import com.esport.back.models.Teams;
import com.esport.back.repositories.ITeamsRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Classe de service pour la gestion des équipes.
 * Fournit des fonctionnalités pour créer, récupérer, mettre à jour et supprimer des équipes.
 */
@Service
public class TeamsService {

    static final Logger LOG = LoggerFactory.getLogger(Teams.class);

    private final ITeamsRepository teamsRepository;

    /**
     * Constructeur de TeamsService.
     * @param teamsRepository Le dépôt utilisé pour les opérations sur l'entité Teams.
     */
    public TeamsService(ITeamsRepository teamsRepository) {
        this.teamsRepository = teamsRepository;
    }

    /**
     * Crée une nouvelle équipe.
     * @param teams L'entité équipe à sauvegarder.
     * @return L'entité équipe sauvegardée.
     */
    @Transactional
    public Teams createTeams(@NonNull Teams teams) {
        return this.teamsRepository.save(teams);
    }

    /**
     * Récupère toutes les équipes.
     * @return Une liste de toutes les entités équipes.
     */
    @Transactional(readOnly = true)
    public List<Teams> getAllTeams() {
        return (List<Teams>)this.teamsRepository.findAll();
    }

    /**
     * Récupère une équipe par son ID.
     * @param id L'ID de l'équipe à récupérer.
     * @return Un Optional contenant l'équipe si trouvée, ou vide autrement.
     */
    @Transactional(readOnly = true)
    public Optional<Teams> getTeamsById(@NonNull Long id) {
        return this.teamsRepository.findById(id);
    }

    /**
     * Met à jour une équipe.
     * @param id L'ID de l'équipe à mettre à jour.
     * @param updatedTeams La nouvelle entité équipe à mettre à jour.
     * @return L'entité équipe mise à jour.
     * @throws RuntimeException si l'ID de l'équipe ne correspond pas à l'ID de l'équipe mise à jour ou si l'équipe n'existe pas.
     */
    @Transactional
    public Teams updateTeams(@NonNull Long id, @NonNull Teams updatedTeams) {
        if (!id.equals(updatedTeams.getIdTeam())) {
            throw new RuntimeException("Changer l'id n'est pas autorisé !");
        }

        Optional<Teams> optionalTeams = this.teamsRepository.findById(updatedTeams.getIdTeam());
        if (optionalTeams.isPresent()) {
            return this.teamsRepository.save(updatedTeams);
        } else {
            throw new RuntimeException("Équipe non trouvée avec l'id " + updatedTeams.getIdTeam());
        }
    }

    /**
     * Supprime une équipe par son ID.
     * @param id L'ID de l'équipe à supprimer.
     * @throws RuntimeException si l'équipe n'existe pas.
     */
    @Transactional
    public void deleteTeams(@NonNull Long id) {
        Optional<Teams> optionalTeams = this.teamsRepository.findById(id);
        if (optionalTeams.isPresent()) {
            this.teamsRepository.deleteById(id);
        } else {
            throw new RuntimeException("Équipe non trouvée avec l'id " + id);
        }
    }
}