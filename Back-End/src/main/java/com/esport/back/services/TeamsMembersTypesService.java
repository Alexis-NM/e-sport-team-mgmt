package com.esport.back.services;

import com.esport.back.models.TeamsMembersTypes;
import com.esport.back.models.TeamsMembersTypesId;
import com.esport.back.repositories.ITeamsMembersTypesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TeamsMembersTypesService {

    static final Logger LOG = LoggerFactory.getLogger(TeamsMembersTypesService.class);

    private final ITeamsMembersTypesRepository repository;

    /**
     * Construit un nouveau service TeamsMembersTypes avec le dépôt spécifié.
     * @param repository Le dépôt utilisé pour les opérations sur les entités TeamsMembersTypes.
     */
    public TeamsMembersTypesService(ITeamsMembersTypesRepository repository) {
        this.repository = repository;
    }

    /**
     * Crée une nouvelle entité TeamsMembersTypes dans la base de données.
     * @param entity L'entité TeamsMembersTypes à créer.
     * @return L'entité TeamsMembersTypes sauvegardée.
     */
    @Transactional
    public TeamsMembersTypes createTeamsMembersTypes(@NonNull TeamsMembersTypes entity) {
        return this.repository.save(entity);
    }

    /**
     * Récupère toutes les entités TeamsMembersTypes de la base de données.
     * @return Une liste des entités TeamsMembersTypes.
     */
    @Transactional(readOnly = true)
    public List<TeamsMembersTypes> getAllTeamsMembersTypes() {
        return (List<TeamsMembersTypes>) this.repository.findAll();
    }

    /**
     * Récupère une entité TeamsMembersTypes par son ID composite.
     * @param id L'ID composite de l'entité TeamsMembersTypes.
     * @return Un Optional contenant l'entité TeamsMembersTypes si trouvée, ou vide autrement.
     */
    @Transactional(readOnly = true)
    public Optional<TeamsMembersTypes> getTeamsMembersTypesById(@NonNull TeamsMembersTypesId id) {
        return this.repository.findById(id);
    }

    /**
     * Récupère toutes les entités TeamsMembersTypes associées à une équipe par l'ID de l'équipe.
     * @param idTeam L'ID de l'équipe.
     * @return Une liste des entités TeamsMembersTypes associées à l'équipe.
     */
    @Transactional(readOnly = true)
    public List<TeamsMembersTypes> getTeamsMembersTypesByIdTeam(@NonNull Long idTeam) {
        return this.repository.findAllByIdTeam(idTeam);
    }

    /**
     * Met à jour une entité TeamsMembersTypes existante dans la base de données.
     * L'ID de l'entité ne peut pas être changé.
     * @param id L'ID de l'entité TeamsMembersTypes à mettre à jour.
     * @param updatedEntity L'entité TeamsMembersTypes mise à jour.
     * @return L'entité TeamsMembersTypes mise à jour.
     * @throws RuntimeException si l'ID ne correspond pas à l'ID de l'entité mise à jour ou si l'entité n'existe pas.
     */
    @Transactional
    public TeamsMembersTypes updateTeamsMembersTypes(@NonNull TeamsMembersTypesId id, @NonNull TeamsMembersTypes updatedEntity) {
        if (!id.equals(updatedEntity.getId())) {
            throw new RuntimeException("Changer l'id n'est pas autorisé !");
        }

        Optional<TeamsMembersTypes> optionalEntity = this.repository.findById(id);
        if (optionalEntity.isPresent()) {
            return this.repository.save(updatedEntity);
        } else {
            throw new RuntimeException("TeamsMembersTypes non trouvé avec l'id " + id);
        }
    }

    /**
     * Supprime une entité TeamsMembersTypes de la base de données par son ID.
     * @param id L'ID de l'entité TeamsMembersTypes à supprimer.
     * @throws RuntimeException si l'entité n'existe pas.
     */
    @Transactional
    public void deleteTeamsMembersTypes(@NonNull TeamsMembersTypesId id) {
        Optional<TeamsMembersTypes> optionalEntity = this.repository.findById(id);
        if (optionalEntity.isPresent()) {
            this.repository.deleteById(id);
        } else {
            throw new RuntimeException("TeamsMembersTypes non trouvé avec l'id " + id);
        }
    }
}