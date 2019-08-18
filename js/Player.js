class Player {
    constructor (id, name, aim, awareness, positioning, kills, deaths) {
        this.id = id;
        this.name = name;
        this.aim = aim;
        this.awareness = awareness;
        this.positioning = positioning;
        this.kills = kills;
        this.deaths = deaths;
    }

    overall() {
        return (this.aim + this.awareness + this.positioning) / 3
    }
}

// nome
// (id, name, aim, awareness, positioning, kills, deaths)
var s1mple = new Player (1, "s1mple", 95, 89, 85, 0, 0)
var niko = new Player (2, "Niko", 85, 85, 80, 0, 0)
var Stewie2K = new Player (3, "Stewie2K", 78, 80, 72, 0, 0)
var Fallen = new Player (4, "Fallen", 72, 87, 85, 0, 0)
var Fer = new Player (5, "Fer", 75, 85, 80, 0, 0)
var Shox = new Player (6,  "Shox", 75, 75, 65, 0, 0)
var Elige = new Player (7, "Elige", 85, 82, 78, 0, 0)
var Coldzera = new Player (8, "Coldzera", 86, 85, 85, 0, 0)



