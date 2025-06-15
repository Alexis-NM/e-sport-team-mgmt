package com.esport.back.repositories;

import com.esport.back.models.StylesGames;
import com.esport.back.models.StylesGamesId;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface pour des opérations CRUD génériques sur un dépôt pour un type {@link StylesGames}.
 *
 * Cette interface étend {@link CrudRepository}, exploitant Spring Data pour faciliter les opérations CRUD
 * pour les entités {@link StylesGames}. Elle gère spécifiquement l'association entre les styles et les jeux,
 * représentée par l'entité {@link StylesGames}. La clé composite {@link StylesGamesId} est utilisée pour identifier
 * des associations uniques, permettant d'effectuer des opérations telles que trouver, sauvegarder et supprimer sur les relations styles-jeux.
 */
public interface IStylesGamesRepository extends CrudRepository<StylesGames, StylesGamesId> {
}