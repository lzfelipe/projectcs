const cardsContainer = document.querySelector("#cards-container");

var allPlayers = database
// numero de players que vão ser mostrados na index
allPlayers.length = 10;
//ordem dos players (no caso, do menor overall pro maior)
allPlayers.sort(function(a, b) {
    return parseFloat(a.overall) - parseFloat(b.overall)
});

//faz o loop por cada objeto da array(allplayers[]) e cria os cards com a funcao createCard()
function doCards() {
    //necessario colocar lenght+1 e i-1 (?); 
    for (var i= 1; i < allPlayers.length+1; i++) {
        var card = createCard(i, allPlayers);
        cardsContainer.append(card);
    }
} 
//funcao que cria os cards, recebe os parametros do loop for pra cada objeto criado pela constructor da classe Players.
function createCard(i, allPlayers) {
    let player = allPlayers[ (i-1) ]; 

    //define a cor da carta do jogador (gold, silver ou bronze)
    let cardColor;
    if(player.overall > 80) {cardColor = "gold"}
    if(player.overall >= 70 && player.overall <= 80) {cardColor = "silver"}
    if(player.overall < 70) {cardColor = "bronze"}

    //regras para criacao das cartas
    let divCard = $("<div>").addClass("card card-width col-5 col-md-2 p-0 m-1 card-border card-border-"+cardColor).attr("id", "player"+player.id);
    let img = $("<img>").attr("src", "img/" + player.id + ".jpg").addClass("card-img-top card-image-size");
    let divCardBody = $("<div>").addClass("card-body card-body-"+cardColor+" card-disapear text-center");
    let nome = $("<h5>").attr("id", "#player"+ i +"-name").addClass("card-title text-center").text( player.name );
    let paragraph = $("<p>").addClass("card-text text-center").text("Overall: ");
    let paragraph2 = $("<p>").addClass("card-text text-center").text("Price: "+player.price);
    let span = $("<span>").attr("id", "#player"+ i +"-overall").text( player.overall );
    let divButton = $("<div>").addClass("btn-group-toggle").attr("data-toggle", "buttons");
    let label = $("<label>").addClass("btn btn-secondary button-bg-color").text("Pick")
    .attr("onclick", "getTeams(allPlayers["+[i-1]+"])");
    let button = $("<input>").attr("type", "checkbox").addClass("input-player");

    // pai append (filho)
    label.append(button);
    divButton.append(label);
    paragraph.append(span);

    divCardBody.append(nome);
    divCardBody.append(paragraph);
    divCardBody.append(paragraph2);
    divCardBody.append(divButton);

    divCard.append(img);
    divCard.append(divCardBody);
    
    return divCard[0];
}
