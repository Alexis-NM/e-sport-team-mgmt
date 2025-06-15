import { Game } from "./game";
import { Team } from "./team";

export class Member {
  country: string;
  firstname: string;
  idMember: number;
  lastname: string;
  nickname: string;
  photo: string;
  role: string;
  game: Game;
  team: Team;

  constructor(
    country: string,
    firstname: string,
    idMember: number,
    lastname: string,
    nickname: string,
    photo: string,
    role: string,
    game: Game,
    team: Team
  ) {
    this.country = country;
    this.firstname = firstname;
    this.idMember = idMember;
    this.lastname = lastname;
    this.nickname = nickname;
    this.photo = photo;
    this.role = role;
    this.game = game;
    this.team = team;
  }
}
