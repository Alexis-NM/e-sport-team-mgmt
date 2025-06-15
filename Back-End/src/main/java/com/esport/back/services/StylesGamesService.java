package com.esport.back.services;

import com.esport.back.models.StylesGames;
import com.esport.back.models.StylesGamesId;
import com.esport.back.repositories.IStylesGamesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Classe de service pour la gestion des relations entre styles et jeux.
 *
 * Cette classe fournit des méthodes pour effectuer des opérations CRUD sur les entités StylesGames, en utilisant le {@link IStylesGamesRepository}.
 * Elle inclut des fonctionnalités pour créer, récupérer (un seul ou tous), mettre à jour, et supprimer des entités StylesGames.
 */
@Service
public class StylesGamesService {

    static final Logger LOG = LoggerFactory.getLogger(StylesGamesService.class);

    private final IStylesGamesRepository repository;

    /**
     * Construit un nouveau StylesGamesService avec le dépôt StylesGames spécifié.
     *
     * @param repository le dépôt StylesGames utilisé pour les opérations de base de données
     */
    public StylesGamesService(IStylesGamesRepository repository) {
        this.repository = repository;
    }

    /**
     * Crée une nouvelle entité StylesGames dans la base de données.
     *
     * @param entity l'entité StylesGames à sauvegarder
     * @return l'entité StylesGames sauvegardée
     */
    @Transactional
    public StylesGames createStylesGames(@NonNull StylesGames entity) {
        return this.repository.save(entity);
    }

    /**
     * Récupère toutes les entités StylesGames de la base de données.
     *
     * @return une liste de toutes les entités StylesGames
     */
    @Transactional(readOnly = true)
    public List<StylesGames> getAllStylesGames() {
        return (List<StylesGames>) this.repository.findAll();
    }

    /**
     * Récupère une entité StylesGames par son ID composite.
     *
     * @param id l'ID composite de StylesGames à récupérer
     * @return un Optional contenant l'entité StylesGames trouvée ou vide si non trouvée
     */
    @Transactional(readOnly = true)
    public Optional<StylesGames> getStylesGamesById(@NonNull StylesGamesId id) {
        return this.repository.findById(id);
    }

    /**
     * Met à jour une entité StylesGames existante dans la base de données.
     *
     * @param id l'ID composite de StylesGames à mettre à jour
     * @param updatedEntity la nouvelle entité StylesGames à sauvegarder
     * @return l'entité StylesGames mise à jour
     * @throws RuntimeException si l'ID composite ne correspond pas à l'ID de l'entité mise à jour ou si l'entité StylesGames ne peut être trouvée
     */
    @Transactional
    public StylesGames updateStylesGames(@NonNull StylesGamesId id, @NonNull StylesGames updatedEntity) {
        if (!id.equals(updatedEntity.getId())) {
            throw new RuntimeException("Changer l'id n'est pas autorisé !");
        }

        Optional<StylesGames> optionalEntity = this.repository.findById(id);
        if (optionalEntity.isPresent()) {
            return this.repository.save(updatedEntity);
        } else {
            throw new RuntimeException("StylesGames non trouvé avec l'id " + id);
        }
    }

    /**
     * Supprime une entité StylesGames de la base de données par son ID composite.
     *
     * @param id l'ID composite de StylesGames à supprimer
     * @throws RuntimeException si l'entité StylesGames ne peut être trouvée
     */
    @Transactional
    public void deleteStylesGames(@NonNull StylesGamesId id) {
        Optional<StylesGames> optionalEntity = this.repository.findById(id);
        if (optionalEntity.isPresent()) {
            this.repository.deleteById(id);
        } else {
            throw new RuntimeException("StylesGames non trouvé avec l'id " + id);
        }
    }
}