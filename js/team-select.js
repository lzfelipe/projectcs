doCards()
const shuffle = $("#shuffle");
var initalMoney = 90000;
$("#player-money").text("Your money: $" + initalMoney)
var playerTeam = [];
//clonando a array ' allplayers ' do player.js para fazer o time inimigo com os restantes.
var enemyTeam = allPlayers.slice(0);


//funcao que verifica o dinheiro do jogador e perimite/bloqueia a compra.
function getTeams(player) { 
    if (initalMoney < player.price) {
        if (initalMoney < 7380) {
            sessionStorage.clear();
            alert("You cant buy any of the players left");
            location.reload();
        } else {
        alert(player.name + " is too expensive for you.");
        return;
        }
    } 
    var actualMoney = initalMoney - player.price
    $("#player-money").text("Your money: $" + actualMoney.toFixed(2))

    //colocando o player(objeto) dentro da array PlayerTeam caso tenha dinheiro suficiente
    if (initalMoney >= player.price) {
        initalMoney = actualMoney;
        $("#player"+player.id).hide(500);
        pushTeam(player);
    } 
    
}

//funcao que empura o jogador escolhido para dentro da array caso tenha dinheiro.
function pushTeam(player) {
    playerTeam.push(player) 
    console.log(enemyTeam);
    //pegando a arrray do clone "var enemyteam" e tirando o objeto pela index enviada pelo paremetro do botao
    var enemyIndex = enemyTeam.indexOf(player);
    if (enemyIndex > -1) {
        enemyTeam.splice(enemyIndex, 1);
    }
    sessionStorage.setItem('playerTeam', JSON.stringify(playerTeam));
    enemyTeam.sort(() => Math.random() - 0.5);
    
    if (playerTeam.length == 5) {
        shuffle.hide();
        if (enemyTeam.length > 5) {
            enemyTeam.length=5;
            sessionStorage.setItem('enemyTeam', JSON.stringify(enemyTeam));
            console.log(enemyTeam);
        } else {
            sessionStorage.setItem('enemyTeam', JSON.stringify(enemyTeam));
        }
        setTimeout(function(){
            window.location.href = "simulation.html";       
        }, 501) 
        
    }
}