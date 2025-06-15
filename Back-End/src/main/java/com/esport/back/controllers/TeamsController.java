package com.esport.back.controllers;

import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.List;

import com.esport.back.models.Teams;
import com.esport.back.services.TeamsService;



@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/teams")
public class TeamsController {


    private final TeamsService TeamsService;

    public TeamsController(TeamsService TeamsService) {
        this.TeamsService = TeamsService;
    }

    @PostMapping
    public Teams createTeams(@RequestBody Teams Teams) {
        return TeamsService.createTeams(Teams);
    }

    @GetMapping
    public List<Teams> getAllTeams() {
        return TeamsService.getAllTeams();
    }

    @GetMapping("/{id}")
    public Optional<Teams> getTeamsById(@PathVariable Long id) {
        return TeamsService.getTeamsById(id);
    }

    @PutMapping("/{id}")
    public Teams updateTeams(@PathVariable Long id, @RequestBody Teams Teams) {
        return TeamsService.updateTeams(id, Teams);
    }

    @DeleteMapping("/{id}")
    public void deleteTeams(@PathVariable Long id) {
        TeamsService.deleteTeams(id);
    }

}
