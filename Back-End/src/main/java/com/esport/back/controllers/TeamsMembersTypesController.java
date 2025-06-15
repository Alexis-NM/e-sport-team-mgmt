package com.esport.back.controllers;

import com.esport.back.models.TeamsMembersTypes;
import com.esport.back.models.TeamsMembersTypesId;
import com.esport.back.services.TeamsMembersTypesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/teamsMembersTypes")
public class TeamsMembersTypesController {

    private final TeamsMembersTypesService service;

    public TeamsMembersTypesController(TeamsMembersTypesService service) {
        this.service = service;
    }

    @PostMapping
    public TeamsMembersTypes createTeamsMembersTypes(@RequestBody TeamsMembersTypes entity) {
        return service.createTeamsMembersTypes(entity);
    }

    @GetMapping
    public List<TeamsMembersTypes> getAllTeamsMembersTypes() {
        return service.getAllTeamsMembersTypes();
    }

    @GetMapping("/{idTeam}/{idMember}")
    public Optional<TeamsMembersTypes> getTeamsMembersTypesById(@PathVariable Long idTeam, @PathVariable Long idMember) {
        TeamsMembersTypesId id = new TeamsMembersTypesId();
        id.setIdTeam(idTeam);
        id.setIdMember(idMember);
        return service.getTeamsMembersTypesById(id);
    }

    @GetMapping("/team/{idTeam}")
    public List<TeamsMembersTypes> getTeamsMembersTypesByIdTeam(@PathVariable Long idTeam) {
        return service.getTeamsMembersTypesByIdTeam(idTeam);
    }

    @PutMapping("/{idTeam}/{idMember}")
    public TeamsMembersTypes updateTeamsMembersTypes(@PathVariable Long idTeam, @PathVariable Long idMember, @RequestBody TeamsMembersTypes entity) {
        TeamsMembersTypesId id = new TeamsMembersTypesId();
        id.setIdTeam(idTeam);
        id.setIdMember(idMember);
        return service.updateTeamsMembersTypes(id, entity);
    }

    @DeleteMapping("/{idTeam}/{idMember}")
    public void deleteTeamsMembersTypes(@PathVariable Long idTeam, @PathVariable Long idMember) {
        TeamsMembersTypesId id = new TeamsMembersTypesId();
        id.setIdTeam(idTeam);
        id.setIdMember(idMember);
        service.deleteTeamsMembersTypes(id);
    }
}