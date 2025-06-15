package com.esport.back.services;

import com.esport.back.models.Members;
import com.esport.back.repositories.IMembersRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Classe de service pour la gestion des membres.
 * Fournit des fonctionnalités pour créer, récupérer, mettre à jour et supprimer des membres.
 */
@Service
public class MembersService {

    static final Logger LOG = LoggerFactory.getLogger(Members.class);

    private final IMembersRepository membersRepository;

    /**
     * Constructeur de MembersService.
     * @param membersRepository Le dépôt utilisé pour les opérations sur l'entité Members.
     */
    public MembersService(IMembersRepository membersRepository) {
        this.membersRepository = membersRepository;
    }

    /**
     * Crée un nouveau membre.
     * @param members L'entité membre à sauvegarder.
     * @return L'entité membre sauvegardée.
     */
    @Transactional
    public Members createMembers(@NonNull Members members) {
        return this.membersRepository.save(members);
    }

    /**
     * Récupère tous les membres.
     * @return Une liste de toutes les entités membres.
     */
    @Transactional(readOnly = true)
    public List<Members> getAllMembers() {
        return (List<Members>)this.membersRepository.findAll();
    }

    /**
     * Récupère un membre par son ID.
     * @param id L'ID du membre à récupérer.
     * @return Un Optional contenant le membre si trouvé, ou vide autrement.
     */
    @Transactional(readOnly = true)
    public Optional<Members> getMembersById(@NonNull Long id) {
        return this.membersRepository.findById(id);
    }

    /**
     * Met à jour un membre.
     * @param id L'ID du membre à mettre à jour.
     * @param updatedMembers La nouvelle entité membre à mettre à jour.
     * @return L'entité membre mise à jour.
     * @throws RuntimeException si l'ID du membre ne correspond pas à l'ID du membre mis à jour ou si le membre n'existe pas.
     */
    @Transactional
    public Members updateMembers(@NonNull Long id, @NonNull Members updatedMembers) {
        if (!id.equals(updatedMembers.getIdMember())) {
            throw new RuntimeException("Changer l'id n'est pas autorisé !");
        }

        Optional<Members> optionalMembers = this.membersRepository.findById(updatedMembers.getIdMember());
        if (optionalMembers.isPresent()) {
            return this.membersRepository.save(updatedMembers);
        } else {
            throw new RuntimeException("Membre non trouvé avec l'id " + updatedMembers.getIdMember());
        }
    }

    /**
     * Supprime un membre par son ID.
     * @param id L'ID du membre à supprimer.
     * @throws RuntimeException si le membre n'existe pas.
     */
    @Transactional
    public void deleteMembers(@NonNull Long id) {
        Optional<Members> optionalMembers = this.membersRepository.findById(id);
        if (optionalMembers.isPresent()) {
            this.membersRepository.deleteById(id);
        } else {
            throw new RuntimeException("Membre non trouvé avec l'id " + id);
        }
    }
}