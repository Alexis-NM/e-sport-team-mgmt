import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TeamMembersService } from "../../services/team-members.service";
import { MemberCardComponent } from "./member-card/member-card.component";
import { Member } from "../../models/member";

@Component({
  selector: "app-members",
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {
  member: Member | undefined;
  memberType!: "player" | "staff";
  teamId!: number;

  constructor(
    private route: ActivatedRoute,
    private teamMembersService: TeamMembersService
  ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get("teamId");
    const memberType = this.route.snapshot.paramMap.get("memberType");
    const memberId = this.route.snapshot.paramMap.get("memberId");

    if (
      teamId &&
      (memberType === "player" || memberType === "staff") &&
      memberId
    ) {
      this.memberType = memberType;
      this.teamId = +teamId;
      this.teamMembersService
        .getMemberById(+teamId, memberType, +memberId)
        .subscribe((member) => {
          this.member = member;
        });
    }
  }
}
