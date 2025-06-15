import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Player } from "../models/player";
import { Staff } from "../models/staff";
import { Team } from "../models/team";
import { Member } from "../models/member";
import { Game } from "../models/game";

@Injectable({
  providedIn: "root",
})
export class TeamMembersService {
  constructor(private http: HttpClient) {}

  getTeamMembers(teamId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.BASE_API}/teamsMembersTypes/team/${teamId}`
    );
  }

  getTeamMembersDetails(
    team: Team
  ): Observable<{ player: Player[]; staff: Staff[] }> {
    return this.getTeamMembers(team.idTeam).pipe(
      map((members) => {
        const player = members
          .filter((member) => member.type.typeName === "Player")
          .map((member) => {
            const game = new Game(
              member.team.game.bannerimg,
              member.team.game.img,
              member.team.game.name,
              member.team.game.pegi,
              [], // Styles are not provided
              member.team.game.year
            );
            return new Player(
              member.member.country,
              member.member.firstname,
              member.member.idMember,
              member.member.lastname,
              member.member.nickname,
              member.member.photo,
              member.member.role,
              game,
              team
            );
          });

        const staff = members
          .filter((member) => member.type.typeName === "Staff")
          .map((member) => {
            const game = new Game(
              member.team.game.bannerimg,
              member.team.game.img,
              member.team.game.name,
              member.team.game.pegi,
              [], // Styles are not provided
              member.team.game.year
            );
            return new Staff(
              member.member.country,
              member.member.firstname,
              member.member.idMember,
              member.member.lastname,
              member.member.nickname,
              member.member.photo,
              member.member.role,
              game,
              team
            );
          });

        return { player, staff };
      })
    );
  }

  getMemberById(
    teamId: number,
    memberType: "player" | "staff",
    memberId: number
  ): Observable<Member | undefined> {
    return this.getTeamMembers(teamId).pipe(
      map((members) => {
        const memberTypeSingular =
          memberType === "player" ? "player" : "staff";

        const member = members.find((m) => {
          const isIdMatch = m.member && m.member.idMember === memberId;
          const isTypeMatch =
            m.type && m.type.typeName.toLowerCase() === memberTypeSingular;
          return isIdMatch && isTypeMatch;
        });

        if (!member || !member.team || !member.team.game) {
          return undefined;
        }

        const game = new Game(
          member.team.game.bannerimg,
          member.team.game.img,
          member.team.game.name,
          member.team.game.pegi,
          [], // Styles are not provided
          member.team.game.year
        );

        const team = new Team(
          member.team.idTeam,
          member.team.teamName,
          member.team.logo,
          member.team.maxPlayers,
          game,
          [], // Players will be added later
          [] // Staff will be added later
        );

        if (memberTypeSingular === "player") {
          if (!member.member) {
            return undefined;
          }
          return new Player(
            member.member.country,
            member.member.firstname,
            member.member.idMember,
            member.member.lastname,
            member.member.nickname,
            member.member.photo,
            member.member.role,
            game,
            team
          );
        } else {
          if (!member.member) {
            return undefined;
          }
          return new Staff(
            member.member.country,
            member.member.firstname,
            member.member.idMember,
            member.member.lastname,
            member.member.nickname,
            member.member.photo,
            member.member.role,
            game,
            team
          );
        }
      })
    );
  }
}
