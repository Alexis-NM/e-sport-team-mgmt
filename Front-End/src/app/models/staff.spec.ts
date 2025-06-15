import { Staff } from './staff';
import { Game } from './game';
import { Team } from './team';
import { Style } from './style';

describe('Staff', () => {
  let game: Game;
  let team: Team;

  beforeEach(() => {
    const styles: Style[] = [{ style: 'Action' }];
    game = new Game('bannerimg.jpg', 'img.jpg', 'GameName', 18, styles, 2021);
    team = new Team(1, 'TeamName', 'logo.jpg', 5, game, [], []);
  });

  it('devrait créer une instance de Staff', () => {
    const staff = new Staff(
      'CountryName',
      'Firstname',
      123,
      'Lastname',
      'Nickname',
      'photo.jpg',
      'Role',
      game,
      team
    );

    expect(staff).toBeTruthy();
    expect(staff.country).toBe('CountryName');
    expect(staff.firstname).toBe('Firstname');
    expect(staff.id).toBe(123);
    expect(staff.lastname).toBe('Lastname');
    expect(staff.nickname).toBe('Nickname');
    expect(staff.photo).toBe('photo.jpg');
    expect(staff.role).toBe('Role');
    expect(staff.game).toBe(game);
    expect(staff.team).toBe(team);
  });
});
