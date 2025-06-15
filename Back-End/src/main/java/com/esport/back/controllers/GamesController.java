package com.esport.back.controllers;

import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.List;

import com.esport.back.models.Games;
import com.esport.back.services.GamesService;



@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/games")
public class GamesController {


    private final GamesService GamesService;

    public GamesController(GamesService GamesService) {
        this.GamesService = GamesService;
    }

    @PostMapping
    public Games createGames(@RequestBody Games Games) {
        return GamesService.createGames(Games);
    }

    @GetMapping
    public List<Games> getAllGames() {
        return GamesService.getAllGames();
    }

    @GetMapping("/{id}")
    public Optional<Games> getGamesById(@PathVariable Long id) {
        return GamesService.getGamesById(id);
    }

    @PutMapping("/{id}")
    public Games updateGames(@PathVariable Long id, @RequestBody Games Games) {
        return GamesService.updateGames(id, Games);
    }

    @DeleteMapping("/{id}")
    public void deleteGames(@PathVariable Long id) {
        GamesService.deleteGames(id);
    }

}
