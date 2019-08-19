doCards()
var playerTeam = [];
//clonando a array ' allplayers ' do player.js para fazer o time inimigo com os restantes.
var enemyTeam = allPlayers.slice(0);


function getTeams(player) { 
    //colocando o player(objeto) dentro da array PlayerTeam
    playerTeam.push(player) 

    //pegando a arrray do clone "var enemyteam" e tirando o objeto pela index enviada pelo paremetro do botao
    var enemyIndex = enemyTeam.indexOf(player);
    if (enemyIndex > -1) {
        enemyTeam.splice(enemyIndex, 1);
     }
     sessionStorage.setItem('playerTeam', JSON.stringify(playerTeam));
     sessionStorage.setItem('enemyTeam', JSON.stringify(enemyTeam));

     console.log(enemyTeam);
    if (playerTeam.length == 5) {
        setTimeout(function(){
            window.location.href = "simulation.html";       
        }, 10) 
        
    }
}