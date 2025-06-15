package com.esport.back.controllers;

import com.esport.back.models.Types;
import com.esport.back.services.TypesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/types")
public class TypesController {


    private final TypesService TypesService;

    public TypesController(TypesService TypesService) {
        this.TypesService = TypesService;
    }

    @PostMapping
    public Types createTypes(@RequestBody Types Types) {
        return TypesService.createTypes(Types);
    }

    @GetMapping
    public List<Types> getAllTypes() {
        return TypesService.getAllTypes();
    }

    @GetMapping("/{id}")
    public Optional<Types> getTypesById(@PathVariable Long id) {
        return TypesService.getTypesById(id);
    }

    @PutMapping("/{id}")
    public Types updateTypes(@PathVariable Long id, @RequestBody Types Types) {
        return TypesService.updateTypes(id, Types);
    }

    @DeleteMapping("/{id}")
    public void deleteTypes(@PathVariable Long id) {
        TypesService.deleteTypes(id);
    }

}
