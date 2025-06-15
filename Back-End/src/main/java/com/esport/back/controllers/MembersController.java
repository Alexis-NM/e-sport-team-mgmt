package com.esport.back.controllers;

import com.esport.back.models.Members;
import com.esport.back.services.MembersService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
@RequestMapping("/api/members")
public class MembersController {


    private final MembersService MembersService;

    public MembersController(MembersService MembersService) {
        this.MembersService = MembersService;
    }

    @PostMapping
    public Members createMembers(@RequestBody Members Members) {
        return MembersService.createMembers(Members);
    }

    @GetMapping
    public List<Members> getAllMembers() {
        return MembersService.getAllMembers();
    }

    @GetMapping("/{id}")
    public Optional<Members> getMembersById(@PathVariable Long id) {
        return MembersService.getMembersById(id);
    }

    @PutMapping("/{id}")
    public Members updateMembers(@PathVariable Long id, @RequestBody Members Members) {
        return MembersService.updateMembers(id, Members);
    }

    @DeleteMapping("/{id}")
    public void deleteMembers(@PathVariable Long id) {
        MembersService.deleteMembers(id);
    }

}
