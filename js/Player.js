class Player {
    constructor (id, name, aim, awareness, positioning, kills, deaths) {
        this.id = Player.incrementId()
        this.name = name;
        this.aim = aim;
        this.awareness = awareness;
        this.positioning = positioning;
        this.overall = ((this.aim + this.awareness + this.positioning) / 3).toFixed(0);
        this.kills = kills;
        this.deaths = deaths;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
      }


}

// nome
// (id, name, aim, awareness, positioning, kills, deaths)
var s1mple = new Player (Player.id, "s1mple", 95, 89, 85, 0, 0)
var niko = new Player (Player.id, "Niko", 85, 85, 80, 0, 0)
var stewie2K = new Player (Player.id, "Stewie2K", 78, 80, 72, 0, 0)
var fallen = new Player (Player.id, "Fallen", 72, 87, 85, 0, 0)
var fer = new Player (Player.id, "Fer", 75, 85, 80, 0, 0)
var shox = new Player (Player.id, "Shox", 75, 75, 65, 0, 0)
var elige = new Player (Player.id, "Elige", 85, 82, 78, 0, 0)
var coldzera = new Player (Player.id, "Coldzera", 86, 85, 85, 0, 0)
var tarik = new Player (Player.id, "tarik", 80, 75, 75, 0, 0)
var zywoo = new Player (Player.id, "ZywOo", 90, 86, 90, 0, 0)
var felps = new Player (Player.id, "felps", 90, 86, 90, 0, 0)
