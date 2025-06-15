import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Team } from "../../models/team";
import { TeamsService } from "../../services/teams.service";
import { StaffListComponent } from "./staff-list/staff-list.component";
import { PlayerListComponent } from "./player-list/player-list.component";
import { Player } from "../../models/player";
import { Staff } from "../../models/staff";

@Component({
  selector: "app-team",
  standalone: true,
  imports: [StaffListComponent, PlayerListComponent],
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.scss"],
})
export class TeamComponent implements OnInit {
  team: Team | undefined;
  players: Player[] = [];
  staff: Staff[] = [];

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private router: Router
  ) {}

  navigateToHome() {
    this.router.navigate(["/home"]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.teamsService.getTeamById(+id).subscribe((team: Team) => {
        this.team = team;
        this.players = team.player;
        this.staff = team.staff;
      });
    }
  }
}
