package com.esport.back.services;

import com.esport.back.models.Types;
import com.esport.back.repositories.ITypesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Classe de service pour la gestion des types.
 * Fournit des fonctionnalités pour créer, récupérer, mettre à jour et supprimer des types.
 */
@Service
public class TypesService {

    static final Logger LOG = LoggerFactory.getLogger(Types.class);

    private final ITypesRepository typesRepository;

    /**
     * Constructeur de TypesService.
     * @param typesRepository Le dépôt utilisé pour les opérations sur l'entité Types.
     */
    public TypesService(ITypesRepository typesRepository) {
        this.typesRepository = typesRepository;
    }

    /**
     * Crée un nouveau type.
     * @param types L'entité type à sauvegarder.
     * @return L'entité type sauvegardée.
     */
    @Transactional
    public Types createTypes(@NonNull Types types) {
        return this.typesRepository.save(types);
    }

    /**
     * Récupère tous les types.
     * @return Une liste de toutes les entités types.
     */
    @Transactional(readOnly = true)
    public List<Types> getAllTypes() {
        return (List<Types>)this.typesRepository.findAll();
    }

    /**
     * Récupère un type par son ID.
     * @param id L'ID du type à récupérer.
     * @return Un Optional contenant le type si trouvé, ou vide autrement.
     */
    @Transactional(readOnly = true)
    public Optional<Types> getTypesById(@NonNull Long id) {
        return this.typesRepository.findById(id);
    }

    /**
     * Met à jour un type.
     * @param id L'ID du type à mettre à jour.
     * @param updatedTypes La nouvelle entité type à mettre à jour.
     * @return L'entité type mise à jour.
     * @throws RuntimeException si l'ID du type ne correspond pas à l'ID du type mis à jour ou si le type n'existe pas.
     */
    @Transactional
    public Types updateTypes(@NonNull Long id, @NonNull Types updatedTypes) {
        if (!id.equals(updatedTypes.getIdType())) {
            throw new RuntimeException("Changer l'id n'est pas autorisé !");
        }

        Optional<Types> optionalTypes = this.typesRepository.findById(updatedTypes.getIdType());
        if (optionalTypes.isPresent()) {
            return this.typesRepository.save(updatedTypes);
        } else {
            throw new RuntimeException("Type non trouvé avec l'id " + updatedTypes.getIdType());
        }
    }

    /**
     * Supprime un type par son ID.
     * @param id L'ID du type à supprimer.
     * @throws RuntimeException si le type n'existe pas.
     */
    @Transactional
    public void deleteTypes(@NonNull Long id) {
        Optional<Types> optionalTypes = this.typesRepository.findById(id);
        if (optionalTypes.isPresent()) {
            this.typesRepository.deleteById(id);
        } else {
            throw new RuntimeException("Type non trouvé avec l'id " + id);
        }
    }
}