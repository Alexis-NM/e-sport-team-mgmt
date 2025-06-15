package com.esport.back.repositories;

import com.esport.back.models.Members;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface pour les opérations CRUD sur un dépôt pour le type {@link Members}.
 * Cette interface étend {@link CrudRepository}, fournissant des opérations CRUD génériques
 * pour la gestion des entités {@link Members}.
 */
public interface IMembersRepository extends CrudRepository<Members, Long> {
}