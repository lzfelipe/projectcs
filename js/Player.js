class Player {
    constructor (id, name, aim, awareness, positioning, kills, deaths) {
        this.id = Player.incrementId()
        this.name = name;
        this.aim = aim;
        this.awareness = awareness;
        this.positioning = positioning;
        this.overall = ((this.aim + this.awareness + this.positioning) / 3).toFixed(0);
        this.price = (this.aim + this.awareness + this.positioning) * 101;
        if (this.overall >= 70 && this.overall <= 80) {
            this.price = (this.aim + this.awareness + this.positioning) * 65;
        }
        if (this.overall < 70) {
            this.price = (this.aim + this.awareness + this.positioning) * 45;
        }
        this.kills = kills;
        this.deaths = deaths;
        //automaticamente insere o objeto construido dentro da array everySinglePlayer[];
        everySinglePlayer[this.id-1] = this; 
        
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
      }

      
}

//array que contém TODOS os Players que a classe construiu.
var everySinglePlayer = [];
