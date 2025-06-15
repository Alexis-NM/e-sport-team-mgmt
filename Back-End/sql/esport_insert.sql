USE esport;

-- Insertion des données dans les tables de base

-- Insertion des jeux
INSERT INTO games (bannerimg, img, name, pegi, year) VALUES
                                                         ('https://pbs.twimg.com/media/E6crCruVIAAYArr.jpg', 'https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg', 'League of Legends', 12, 2009),
                                                         ('https://interfaceingame.com/wp-content/uploads/counter-strike-global-offensive/counter-strike-global-offensive-banner.jpg', 'http://media.steampowered.com/apps/csgo/blog/images/fb_image.png', 'Counter Strike', 18, 2000),
                                                         ('https://www.fifa-infinity.com/wp-content/uploads/2021/06/fifa22-leaks.jpg', 'https://www.presse-citron.net/app/uploads/2021/09/tests-fifa-22.jpg', 'FIFA 22', 3, 2021);

-- Insertion des styles
INSERT INTO styles (style_name) VALUES
                                    ('MOBA'), ('FPS'), ('Tactical'), ('Sport');

-- Insertion des équipes
INSERT INTO teams (team_name, logo, maxplayers, id_game) VALUES
                                                             ('GamersOrigin', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/64/GamersOrigin_Oldlogo_square.png', 8, 1),
                                                             ('Vitality', 'https://vitality.gg/wp-content/themes/vitality/assets/images/logo.svg', 6, 2),
                                                             ('Movistar Riders', 'https://egw.news/uploads/news/1688573969522-16x9.jpg', 2, 3);

-- Insertion des membres
INSERT INTO members (country, firstname, lastname, nickname, photo, role) VALUES
                                                                              ('Hungary', 'Kiss', 'Tamás', 'Vizicsacsi', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/23/AST_Vizicsacsi_2022_Split_2.png', 'Top Laner'),
                                                                              ('France', 'Karim', 'Aubineau', 'Karim kt', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6f/GO_Karim_kt_2022_Split_2.png', 'Jungler'),
                                                                              ('Romania', 'Ronaldo', 'Betea', 'Ronaldo', '', 'Mid Laner'),
                                                                              ('Sweden', 'Ludvig Erik Hugo', 'Granquist', 'SMILEY', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e0/GO_SMILEY_2022_Split_2.png', 'Bot Laner'),
                                                                              ('France', 'Solal', 'Accary', 'Enjawve', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/44/GO_Enjawve_2022_Split_1.png', 'Support'),
                                                                              ('Denmark', 'Jesse', 'Le', 'Jesiz', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/f/f1/SK_Jesiz_2021_Split_2.png', 'Head Coach'),
                                                                              ('Israël', 'Lotan', 'Giladi', 'Spinx', 'https://prosettings.net/wp-content/uploads/spinx.png', 'rifler'),
                                                                              ('Denmark', 'Emil', 'Reif', 'Magisk', 'https://prosettings.net/wp-content/uploads/magisk.png', 'fix'),
                                                                              ('Denmark', 'Peter', 'Rasmussen', 'dupreeh', 'https://prosettings.net/wp-content/uploads/dupreeh.png', 'entry fragger'),
                                                                              ('France', 'Mathieu', 'Herbaut', 'ZywOo', 'https://prosettings.net/wp-content/uploads/zywoo.png', 'Sniper'),
                                                                              ('France', 'Dan', 'Madesclaire', 'apEX', 'https://prosettings.net/wp-content/uploads/apex.png', 'leader'),
                                                                              ('France', 'Mathieu', 'Leber', 'MaT', 'https://www.team-aaa.com/upload/media/post_image/0001/10/606221e0b811ff959faf3e885b5591f8190532e5.jpeg', 'Analyst'),
                                                                              ('France', 'Matthieu', 'PÉCHÉ', 'Matthieu', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Matthieu_P%C3%A9ch%C3%A9_-_Rio_2016c.jpg/280px-Matthieu_P%C3%A9ch%C3%A9_-_Rio_2016c.jpg', 'Manager'),
                                                                              ('Denmark', 'Danny Selim', 'Sørensen', 'zonic', 'https://cdn0.gamesports.net/edb_player_images/21000/21549.png', 'Head Coach'),
                                                                              ('España', 'Andoni', 'Payo Martín', 'Andonii', 'https://www.movistarriders.gg/wp-content/uploads/2017/03/ANDONI-2.png', 'Attaquant'),
                                                                              ('Portugal', 'Diogo', 'Pombo', 'tuga810', 'https://www.movistarriders.gg/wp-content/uploads/2019/05/MG_6829.png', 'Défenseur'),
                                                                              ('España', 'Luis', 'Sevilla', 'Deilor', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/37/FNC_Deilor.jpg', 'Director of Esports Performance');

-- Insertion des types
INSERT INTO types (type_name) VALUES
                                  ('Player'), ('Staff');

-- Insertion des relations styles et jeux
INSERT INTO styles_games (id_game, id_style) VALUES
                                                 (1, 1), -- League of Legends is MOBA
                                                 (2, 2), -- Counter Strike is FPS
                                                 (2, 3), -- Counter Strike is Tactical
                                                 (3, 4); -- FIFA 22 is Sport

-- Insertion des relations équipe-membre-type
-- GamersOrigin Players
INSERT INTO teams_members_types (id_team, id_member, id_type) VALUES
                                                                  (1, 1, 1), -- Vizicsacsi
                                                                  (1, 2, 1), -- Karim kt
                                                                  (1, 3, 1), -- Ronaldo
                                                                  (1, 4, 1), -- SMILEY
                                                                  (1, 5, 1), -- Enjawve

-- GamersOrigin Staff
                                                                  (1, 6, 2), -- Jesiz

-- Vitality Players
                                                                  (2, 7, 1), -- Spinx
                                                                  (2, 8, 1), -- Magisk
                                                                  (2, 9, 1), -- dupreeh
                                                                  (2, 10, 1), -- ZywOo
                                                                  (2, 11, 1), -- apEX

-- Vitality Staff
                                                                  (2, 12, 2), -- MaT
                                                                  (2, 13, 2), -- Matthieu
                                                                  (2, 14, 2), -- zonic

-- Movistar Riders Players
                                                                  (3, 15, 1), -- Andonii
                                                                  (3, 16, 1), -- tuga810

-- Movistar Riders Staff
                                                                  (3, 17, 2); -- Deilor