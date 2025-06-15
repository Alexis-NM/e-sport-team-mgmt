package com.esport.back.services;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.lang.NonNull;

import java.util.Optional;
import java.util.List;

import com.esport.back.models.Games;
import com.esport.back.repositories.IGamesRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Classe de service pour la gestion des jeux.
 *
 * Cette classe fournit des méthodes pour effectuer des opérations CRUD sur les jeux, en utilisant le {@link IGamesRepository}.
 * Elle inclut des fonctionnalités pour créer, récupérer (un seul ou tous), mettre à jour et supprimer des jeux.
 */
@Service
public class GamesService {

    static final Logger LOG = LoggerFactory.getLogger(Games.class);

    private final IGamesRepository GamesRepository;

    /**
     * Construit un nouveau GamesService avec le dépôt de jeux spécifié.
     *
     * @param GamesRepository le dépôt de jeux utilisé pour les opérations en base de données
     */
    public GamesService(IGamesRepository GamesRepository) {
        this.GamesRepository = GamesRepository;
    }

    /**
     * Crée une nouvelle entrée de jeu dans la base de données.
     *
     * @param Games l'entité de jeu à sauvegarder
     * @return l'entité de jeu sauvegardée
     */
    @Transactional
    public Games createGames(@NonNull Games Games) {
        return this.GamesRepository.save(Games);
    }

    /**
     * Récupère toutes les entrées de jeux de la base de données.
     *
     * @return une liste de toutes les entités de jeux
     */
    @Transactional(readOnly = true)
    public List<Games> getAllGames() {
        return (List<Games>)this.GamesRepository.findAll();
    }

    /**
     * Récupère un jeu par son ID.
     *
     * @param id l'ID du jeu à récupérer
     * @return un Optional contenant le jeu trouvé ou vide si non trouvé
     */
    @Transactional(readOnly = true)
    public Optional<Games> getGamesById(@NonNull Long id) {
        return this.GamesRepository.findById(id);
    }

    /**
     * Met à jour une entrée de jeu existante dans la base de données.
     *
     * @param id l'ID du jeu à mettre à jour
     * @param updatedGames la nouvelle entité de jeu à sauvegarder
     * @return l'entité de jeu mise à jour
     * @throws RuntimeException si l'ID du jeu ne correspond pas à l'ID du jeu mis à jour ou si le jeu ne peut être trouvé
     */
    @Transactional
    public Games updateGames(@NonNull Long id, @NonNull Games updatedGames) {
        if (!id.equals(updatedGames.getIdGame())) {
            throw new RuntimeException("Changer l'id n'est pas autorisé !");
        }

        Optional<Games> optionalGames = this.GamesRepository.findById(updatedGames.getIdGame());
        if (optionalGames.isPresent()) {
            return this.GamesRepository.save(updatedGames);
        } else {
            throw new RuntimeException("Jeu non trouvé avec l'id " + updatedGames.getIdGame());
        }
    }

    /**
     * Supprime une entrée de jeu de la base de données par son ID.
     *
     * @param id l'ID du jeu à supprimer
     * @throws RuntimeException si le jeu ne peut être trouvé
     */
    @Transactional
    public void deleteGames(@NonNull Long id) {
        Optional<Games> optionalGames = this.GamesRepository.findById(id);
        if (optionalGames.isPresent()) {
            this.GamesRepository.deleteById(id);
        } else {
            throw new RuntimeException("Jeu non trouvé avec l'id " + id);
        }
    }
}