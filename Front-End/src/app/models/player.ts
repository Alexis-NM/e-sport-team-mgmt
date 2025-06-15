import { Game } from "./game";
import { Team } from "./team";
import { Member } from "./member";

export class Player extends Member {
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
    super(country, firstname, idMember, lastname, nickname, photo, role, game, team);
  }
}
