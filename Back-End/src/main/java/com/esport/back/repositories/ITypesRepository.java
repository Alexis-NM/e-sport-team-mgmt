package com.esport.back.repositories;

import com.esport.back.models.Types;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface pour les opérations CRUD sur un dépôt pour l'entité {@link Types}.
 * Cette interface étend {@link CrudRepository}, fournissant des opérations CRUD génériques
 * pour la gestion des entités {@link Types}. Elle permet les opérations de base telles que
 * la création, la lecture, la mise à jour et la suppression des instances de {@link Types}.
 */
public interface ITypesRepository extends CrudRepository<Types, Long> {
}