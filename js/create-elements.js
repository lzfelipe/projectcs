const cardsContainer = document.querySelector("#cards-container");

var allPlayers = [s1mple, niko, stewie2K, fer, elige, zywoo, tarik, fallen, coldzera, shox]
function shuffle(allPlayers) {
    allPlayers.sort(() => Math.random() - 0.6);
  }
shuffle(allPlayers);

for (var i=1; i<7; i++) {
    var random = Math.floor(Math.random() * allPlayers.length)
    randomName = allPlayers[random];
    console.log(random);
    }
    
    //faz o loop por cada objeto da array e cria os cards com a funcao createCard()
    function doCards() {
        //necessario colocar lenght+1 e i-1 (?); 
        for (var i= 1; i < allPlayers.length+1; i++) {
            var card = createCard(i, allPlayers);
            cardsContainer.append(card);
        }
    } 
    //funcao que cria os cards, recebe os parametros do loop for pra cada objeto criado pela constructor da classe Players.
    function createCard(i, allPlayers) {
        let divCard = $("<div>").addClass("card card-width col-12 col-md-4 p-0 m-4 card-border").attr("id", "player"+allPlayers[ (i-1) ].id);
        let img = $("<img>").attr("src", "img/" + allPlayers[ (i-1) ].id + ".jpg").addClass("card-img-top card-image-size");
        let divCardBody = $("<div>").addClass("card-body text-center");
        let nome = $("<h5>").attr("id", "#player"+ i +"-name").addClass("card-title text-center").text( allPlayers[ (i-1) ].name );
        let paragraph = $("<p>").addClass("card-text text-center").text("Overall: ");
        let span = $("<span>").attr("id", "#player"+ i +"-overall").text( allPlayers[ (i-1) ].overall );
        let divButton = $("<div>").addClass("btn-group-toggle").attr("data-toggle", "buttons");
        let label = $("<label>").addClass("btn btn-secondary button-bg-color").text("Pick").attr("onchange", "$('#player"+allPlayers[ (i-1) ].id+"').hide()")
        .attr("onclick", "getTeams(allPlayers["+[i-1]+"])");
        let button = $("<input>").attr("type", "checkbox").addClass("input-player");
    
        // pai append (filho)
        label.append(button);
        divButton.append(label);
        paragraph.append(span);
    
        divCardBody.append(nome);
        divCardBody.append(paragraph);
        divCardBody.append(divButton);
    
        divCard.append(img);
        divCard.append(divCardBody);
        
        return divCard[0];
    }
