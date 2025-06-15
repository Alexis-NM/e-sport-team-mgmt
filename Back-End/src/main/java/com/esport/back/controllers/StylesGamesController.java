package com.esport.back.controllers;

import com.esport.back.models.StylesGames;
import com.esport.back.models.StylesGamesId;
import com.esport.back.services.StylesGamesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/StylesGames")
public class StylesGamesController {

    private final StylesGamesService service;

    public StylesGamesController(StylesGamesService service) {
        this.service = service;
    }

    @PostMapping
    public StylesGames createStylesGames(@RequestBody StylesGames entity) {
        return service.createStylesGames(entity);
    }

    @GetMapping
    public List<StylesGames> getAllStylesGames() {
        return service.getAllStylesGames();
    }

    @GetMapping("/{idGame}/{idStyle}")
    public Optional<StylesGames> getStylesGamesById(@PathVariable Long idGame, @PathVariable Long idStyle) {
        StylesGamesId id = new StylesGamesId();
        id.setIdGame(idGame);
        id.setIdStyle(idStyle);
        return service.getStylesGamesById(id);
    }

    @PutMapping("/{idGame}/{idStyle}")
    public StylesGames updateStylesGames(@PathVariable Long idGame, @PathVariable Long idStyle, @RequestBody StylesGames entity) {
        StylesGamesId id = new StylesGamesId();
        id.setIdGame(idGame);
        id.setIdStyle(idStyle);
        return service.updateStylesGames(id, entity);
    }

    @DeleteMapping("/{idGame}/{idStyle}")
    public void deleteStylesGames(@PathVariable Long idGame, @PathVariable Long idStyle) {
        StylesGamesId id = new StylesGamesId();
        id.setIdGame(idGame);
        id.setIdStyle(idStyle);
        service.deleteStylesGames(id);
    }
}