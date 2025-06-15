import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { Team } from "../models/team";
import { AbstractApi } from "./abstractapi";
import { Game } from "../models/game";
import { TeamMembersService } from "./team-members.service";

@Injectable({
  providedIn: "root",
})
export class TeamsService extends AbstractApi<Team> {
  base_service = "/teams";

  constructor(
    http: HttpClient,
    private teamMembersService: TeamMembersService
  ) {
    super(http);
  }

  /**
   * Récupère toutes les équipes avec leurs joueurs et membres du personnel.
   * @returns Un Observable qui émet un tableau d'objets Team.
   */
  getAllTeams(): Observable<Team[]> {
    return this.getAll().pipe(
      mergeMap((teams: Team[]) =>
        forkJoin(
          teams.map((team) =>
            this.teamMembersService.getTeamMembersDetails(team).pipe(
              map(
                ({ player, staff }) =>
                  new Team(
                    team.idTeam,
                    team.teamName,
                    team.logo,
                    team.maxPlayers,
                    new Game(
                      team.game.bannerimg,
                      team.game.img,
                      team.game.name,
                      team.game.pegi,
                      [], // Les styles ne sont pas fournis dans le nouveau format JSON
                      team.game.year
                    ),
                    player,
                    staff
                  )
              )
            )
          )
        )
      )
    );
  }

  /**
   * Récupère une équipe par son id.
   * @param id L'id de l'équipe.
   * @returns Un Observable qui émet un objet Team.
   */
  getTeamById(id: number): Observable<Team> {
    return this.getById(id).pipe(
      mergeMap((team: Team) =>
        this.teamMembersService.getTeamMembersDetails(team).pipe(
          map(
            ({ player, staff }) =>
              new Team(
                team.idTeam,
                team.teamName,
                team.logo,
                team.maxPlayers,
                new Game(
                  team.game.bannerimg,
                  team.game.img,
                  team.game.name,
                  team.game.pegi,
                  [], // Les styles ne sont pas fournis dans le nouveau format JSON
                  team.game.year
                ),
                player,
                staff
              )
          )
        )
      )
    );
  }
}
