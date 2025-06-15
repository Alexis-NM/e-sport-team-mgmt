package com.esport.back.repositories;

import com.esport.back.models.Teams;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface pour des opérations CRUD génériques sur un dépôt pour un type {@link Teams}.
 *
 * Cette interface étend {@link CrudRepository}, exploitant Spring Data pour faciliter les opérations CRUD
 * pour les entités {@link Teams}. Elle fournit les opérations fondamentales pour accéder et manipuler
 * les entités d'équipes dans la base de données, incluant les opérations pour sauvegarder, supprimer, et interroger les enregistrements d'équipe.
 */
public interface ITeamsRepository extends CrudRepository<Teams, Long> {
}