package com.esport.back.controllers;

import com.esport.back.models.Styles;
import com.esport.back.services.StylesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/styles")
public class StylesController {


    private final StylesService StylesService;

    public StylesController(StylesService StylesService) {
        this.StylesService = StylesService;
    }

    @PostMapping
    public Styles createStyles(@RequestBody Styles Styles) {
        return StylesService.createStyles(Styles);
    }

    @GetMapping
    public List<Styles> getAllStyles() {
        return StylesService.getAllStyles();
    }

    @GetMapping("/{id}")
    public Optional<Styles> getStylesById(@PathVariable Long id) {
        return StylesService.getStylesById(id);
    }

    @PutMapping("/{id}")
    public Styles updateStyles(@PathVariable Long id, @RequestBody Styles Styles) {
        return StylesService.updateStyles(id, Styles);
    }

    @DeleteMapping("/{id}")
    public void deleteStyles(@PathVariable Long id) {
        StylesService.deleteStyles(id);
    }

}
