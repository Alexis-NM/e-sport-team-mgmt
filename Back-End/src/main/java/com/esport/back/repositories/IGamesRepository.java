package com.esport.back.repositories;

import com.esport.back.models.Games;
import org.springframework.data.repository.CrudRepository;

/**
 * Interface pour des opérations CRUD génériques sur un dépôt pour un type {@link Games}.
 *
 * Cette interface étend {@link CrudRepository} fourni par Spring Data,
 * pour gérer les opérations CRUD pour les entités {@link Games}. Utiliser l'abstraction de dépôt de Spring Data
 * permet une réduction significative du code standard nécessaire pour implémenter des couches d'accès aux données
 * pour divers magasins de persistance.
 */
public interface IGamesRepository extends CrudRepository<Games, Long> {
}