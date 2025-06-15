package com.esport.back.repositories;

import com.esport.back.models.Styles;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface pour des opérations CRUD génériques sur un dépôt pour un type {@link Styles}.
 *
 * Cette interface étend {@link CrudRepository}, exploitant Spring Data pour faciliter les opérations CRUD
 * pour les entités {@link Styles}. Elle fournit les opérations fondamentales pour accéder et manipuler
 * les entités de style dans la base de données, incluant les opérations pour sauvegarder, supprimer et interroger les enregistrements de style.
 */
public interface IStylesRepository extends CrudRepository<Styles, Long> {
}