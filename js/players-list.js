//lista de todos os jogadores do jogo.
// (id, name, aim, awareness, positioning, kills, deaths)
s1mple = new Player (Player.id, "s1mple", 95, 89, 85, 0, 0)
niko = new Player (Player.id, "Niko", 85, 85, 80, 0, 0)
stewie2K = new Player (Player.id, "Stewie2K", 78, 80, 72, 0, 0)
fallen = new Player (Player.id, "Fallen", 72, 87, 85, 0, 0)
fer = new Player (Player.id, "Fer", 75, 85, 80, 0, 0)
shox = new Player (Player.id, "Shox", 75, 75, 65, 0, 0)
elige = new Player (Player.id, "Elige", 85, 82, 78, 0, 0)
coldzera = new Player (Player.id, "Coldzera", 86, 85, 85, 0, 0)
tarik = new Player (Player.id, "tarik", 73, 78, 74, 0, 0)
zywoo = new Player (Player.id, "ZywOo", 90, 86, 90, 0, 0)
felps = new Player (Player.id, "Felps", 78, 68, 65, 0, 0)
s0m = new Player (Player.id, "s0m", 69, 60, 57, 0, 0)
sick = new Player (Player.id, "Sick", 61, 51, 58, 0, 0)
freeman = new Player (Player.id, "Freeman", 60, 51, 53, 0, 0)
hs = new Player (Player.id, "HS", 68, 65, 62, 0, 0)
tenz = new Player (Player.id, "Tenz", 82, 62, 60, 0, 0)

//randomiza a ordem dos objetos que vão para a array database[]
shuffle = (everySinglePlayer) => everySinglePlayer.sort(() => Math.random() - 0.5);
shuffle(everySinglePlayer);
var database = everySinglePlayer;


