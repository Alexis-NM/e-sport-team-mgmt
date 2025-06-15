package com.esport.back.services;

import com.esport.back.models.Styles;
import com.esport.back.repositories.IStylesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Classe de service pour la gestion des styles.
 *
 * Cette classe fournit des méthodes pour effectuer des opérations CRUD sur les entités Styles, en utilisant le {@link IStylesRepository}.
 * Elle inclut des fonctionnalités pour créer, récupérer (un seul ou tous), mettre à jour, et supprimer des entités Styles.
 */
@Service
public class StylesService {

    static final Logger LOG = LoggerFactory.getLogger(Styles.class);

    private final IStylesRepository StylesRepository;

    /**
     * Construit un nouveau StylesService avec le dépôt Styles spécifié.
     *
     * @param StylesRepository le dépôt Styles utilisé pour les opérations de base de données
     */
    public StylesService(IStylesRepository StylesRepository) {
        this.StylesRepository = StylesRepository;
    }

    /**
     * Crée une nouvelle entité Styles dans la base de données.
     *
     * @param Styles l'entité Styles à sauvegarder
     * @return l'entité Styles sauvegardée
     */
    @Transactional
    public Styles createStyles(@NonNull Styles Styles) {
        return this.StylesRepository.save(Styles);
    }

    /**
     * Récupère toutes les entités Styles de la base de données.
     *
     * @return une liste de toutes les entités Styles
     */
    @Transactional(readOnly = true)
    public List<Styles> getAllStyles() {
        return (List<Styles>)this.StylesRepository.findAll();
    }

    /**
     * Récupère une entité Styles par son ID.
     *
     * @param id l'ID de l'entité Styles à récupérer
     * @return un Optional contenant l'entité Styles trouvée ou vide si non trouvée
     */
    @Transactional(readOnly = true)
    public Optional<Styles> getStylesById(@NonNull Long id) {
        return this.StylesRepository.findById(id);
    }

    /**
     * Met à jour une entité Styles existante dans la base de données.
     *
     * @param id l'ID de l'entité Styles à mettre à jour
     * @param updatedStyles la nouvelle entité Styles à sauvegarder
     * @return l'entité Styles mise à jour
     * @throws RuntimeException si l'ID de Styles ne correspond pas à l'ID de l'entité mise à jour ou si l'entité Styles ne peut être trouvée
     */
    @Transactional
    public Styles updateStyles(@NonNull Long id, @NonNull Styles updatedStyles) {
        if (!id.equals(updatedStyles.getIdStyle())) {
            throw new RuntimeException("Changer l'id n'est pas autorisé !");
        }

        Optional<Styles> optionalStyles = this.StylesRepository.findById(updatedStyles.getIdStyle());
        if (optionalStyles.isPresent()) {
            return this.StylesRepository.save(updatedStyles);
        } else {
            throw new RuntimeException("Styles non trouvé avec l'id " + updatedStyles.getIdStyle());
        }
    }

    /**
     * Supprime une entité Styles de la base de données par son ID.
     *
     * @param id l'ID de l'entité Styles à supprimer
     * @throws RuntimeException si l'entité Styles ne peut être trouvée
     */
    @Transactional
    public void deleteStyles(@NonNull Long id) {
        Optional<Styles> optionalStyles = this.StylesRepository.findById(id);
        if (optionalStyles.isPresent()) {
            this.StylesRepository.deleteById(id);
        } else {
            throw new RuntimeException("Styles non trouvé avec l'id " + id);
        }
    }
}