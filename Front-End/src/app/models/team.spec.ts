import { Team } from './team';
import { Game } from './game';
import { Player } from './player';
import { Staff } from './staff';
import { Style } from './style';

describe('Team', () => {
  let game: Game;
  let players: Player[];
  let staff: Staff[];
  let team: Team;

  beforeEach(() => {
    const styles: Style[] = [{ style: 'Action' }];
    game = new Game('bannerimg.jpg', 'img.jpg', 'GameName', 18, styles, 2021);

    team = new Team(1, 'TeamName', 'logo.jpg', 5, game, [], []);

    players = [
      new Player(
        'CountryName',
        'Firstname',
        1,
        'Lastname',
        'Nickname',
        'photo.jpg',
        'Role',
        game,
        team
      ),
      new Player(
        'CountryName',
        'Firstname',
        2,
        'Lastname',
        'Nickname',
        'photo.jpg',
        'Role',
        game,
        team
      ),
    ];

    staff = [
      new Staff(
        'CountryName',
        'Firstname',
        1,
        'Lastname',
        'Nickname',
        'photo.jpg',
        'Role',
        game,
        team
      ),
      new Staff(
        'CountryName',
        'Firstname',
        2,
        'Lastname',
        'Nickname',
        'photo.jpg',
        'Role',
        game,
        team
      ),
    ];

    team.player = players;
    team.staff = staff;
  });

  it('devrait créer une instance de Team', () => {
    expect(team).toBeTruthy();
    expect(team.id).toBe(1);
    expect(team.team).toBe('TeamName');
    expect(team.logo).toBe('logo.jpg');
    expect(team.maxplayers).toBe(5);
    expect(team.game).toBe(game);
    expect(team.player).toBe(players);
    expect(team.staff).toBe(staff);
  });
});
