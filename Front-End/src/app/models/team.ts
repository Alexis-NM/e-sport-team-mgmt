import { Game } from "./game";
import { Player } from "./player";
import { Staff } from "./staff";

export class Team {
  /**
   * L'identifiant de l'équipe.
   */
  idTeam: number;

  /**
   * Le nom de l'équipe.
   */
  teamName: string;

  /**
   * Le logo de l'équipe.
   */
  logo: string;

  /**
   * Le nombre maximum de joueurs dans l'équipe.
   */
  maxPlayers: number;

  /**
   * Le jeu associé à l'équipe.
   */
  game: Game;

  /**
   * Les joueurs de l'équipe.
   */
  player: Player[];

  /**
   * Le staff de l'équipe.
   */
  staff: Staff[];

  /**
   * Crée une nouvelle instance de l'équipe.
   * @param idTeam L'identifiant de l'équipe.
   * @param teamName Le nom de l'équipe.
   * @param logo Le logo de l'équipe.
   * @param maxPlayers Le nombre maximum de joueurs dans l'équipe.
   * @param game Le jeu associé à l'équipe.
   * @param player Les joueurs de l'équipe.
   * @param staff Le staff de l'équipe.
   */
  constructor(
    idTeam: number,
    teamName: string,
    logo: string,
    maxPlayers: number,
    game: Game,
    player: Player[],
    staff: Staff[]
  ) {
    this.idTeam = idTeam;
    this.teamName = teamName;
    this.logo = logo;
    this.maxPlayers = maxPlayers;
    this.game = game;
    this.player = player;
    this.staff = staff;
  }
}
