var delay = 750;
function simulate()  {
simularButton.hide();
speedButton.show();
quickEndButton.show();
var TRrounds = 0;
var CTrounds = 0;
battleHelper();

function battleHelper() {
  scrollDown()
  getConsole.insertAdjacentHTML("beforebegin", "<p>Round: " + rounds + "</p>");
  
  if (rounds<16)  {
  let playerTeam = JSON.parse(sessionStorage.getItem('playerTeam'))
  let enemyTeam = JSON.parse(sessionStorage.getItem('enemyTeam'))
    battle(playerTeam, enemyTeam);
}

  if (rounds===16) {
    function swap(CTrounds, TRrounds) {
      getConsole.insertAdjacentHTML("beforebegin", "<p>Half Time: Swapping Teams</p>");
      getConsole.insertAdjacentHTML("beforebegin", "<p class='score'>Half Time Score:<br>CounterT: "+CTrounds+" x "+"Terrorists: "+TRrounds+"</p>");
      return [TRrounds, CTrounds]
    }
    [CTrounds, TRrounds] = swap(CTrounds, TRrounds);
    scrollDown()
    setTimeout(function() {battle(playerTeam, enemyTeam)},500)
  }
  
  if (rounds>16) {
    let playerTeam = JSON.parse(sessionStorage.getItem('enemyTeam'))
    let enemyTeam = JSON.parse(sessionStorage.getItem('playerTeam'))
    battle(playerTeam, enemyTeam);
  } 


    
  
  }

function battle(playerTeam, enemyTeam) { 
  scrollDown()
  // If either of the teams have no members, end the round
  if (!playerTeam.length || !enemyTeam.length) {
    return battleHelper();
  }
  
  // Duplicate the input teams to modify them
  let playerTeamOutput = playerTeam
  let enemyTeamOutput = enemyTeam
  
  // Get the index for a random player from each team
  playerTeamIndex = Math.floor(Math.random() * playerTeamOutput.length)
  enemyTeamIndex = Math.floor(Math.random() * enemyTeamOutput.length)


  // Get the player from each team
  player = playerTeam[playerTeamIndex];
  enemy = enemyTeam[enemyTeamIndex];

  
  // Select a random stat to the player to compare.
  let StatPlayer = ["aim", "awareness", "positioning"];
  let StatPlayerRandom = StatPlayer[Math.floor(Math.random() * StatPlayer.length)]
 // Select a random stat to the enemy to compare.
  let StatEnemy = ["aim", "awareness", "positioning"];
  let StatEnemyRandom = StatEnemy[Math.floor(Math.random() * StatEnemy.length)]

  // Probability of T's win the round by bomb explosion.
  let min1 = 0;
  let max2 = 150;
  let planted = false;
  
  let bombPlanted = Math.floor(Math.random() * (+max2 - +min1)) + +min1;
  if (bombPlanted < 0 && planted==false) {
    getConsole.insertAdjacentHTML("beforebegin", "The bomb has been planted<br>");
    planted=true;
  } 

                                                      // AIM  > AWARENESS // "<span class='CTName'>" + </span>
    //player aim == enemy awareness
  if (StatPlayerRandom == "aim" && StatEnemyRandom == "aim" ) {
    if (player.aim > enemy.aim) {
      getConsole.insertAdjacentHTML("beforebegin","<span class='CTName'>" + player.name + "</span> killed <span class='TName'>" + enemy.name + " </span><br>");
      enemyTeamOutput.splice(enemyTeamIndex, 1)
      
    } else if (player.aim < enemy.aim) {
      getConsole.insertAdjacentHTML("beforebegin", "<span class='TName'>" +  enemy.name + "</span>  killed <span class='CTName'>" + player.name + " </span><br>");
      playerTeamOutput.splice(playerTeamIndex, 1)


    } else if (player.aim == enemy.aim && player.overall > enemy.overall) {
    getConsole.insertAdjacentHTML("beforebegin", "<span class='CTName'>" + player.name + " </span> killed <span class='TName'>" + enemy.name + " </span> with a lucky shot<br>");
    enemyTeamOutput.splice(enemyTeamIndex, 1)
    } else if (player.aim == enemy.aim && player.overall < enemyTeam.overall) {
    getConsole.insertAdjacentHTML("beforebegin", "<span class='TName'>" + enemy.name + " </span> killed <span class='CTName'>" + player.name + " </span> with a lucky shot<br>");
    playerTeamOutput.splice(playerTeamIndex, 1)

  }
}
    //player aim >> enemy awareness
  if (StatPlayerRandom == "aim" && StatEnemyRandom == "awareness" ) {
      getConsole.insertAdjacentHTML("beforebegin","<span class='CTName'>" + player.name + "</span> killed <span class='TName'>" + enemy.name+ " </span> <br> ");
      enemyTeamOutput.splice(enemyTeamIndex, 1)
  } 
   //enemy aim >> player awareness
  if (StatPlayerRandom == "awareness" && StatEnemyRandom == "aim" ) {
    getConsole.insertAdjacentHTML("beforebegin","<span class='TName'>" + enemy.name + "</span> killed <span class='CTName'>" + player.name+ " </span><br>");
    playerTeamOutput.splice(playerTeamIndex, 1)
  } 


                                                    // POSITIONING  > AIM // "<span class='CTName'>" + </span>
    //player positioning == enemy aim
  if (StatPlayerRandom == "positioning" && StatEnemyRandom == "positioning" ) {
    if (player.positioning > enemy.positioning) {
      getConsole.insertAdjacentHTML("beforebegin", "<span class='CTName'>" + player.name + "</span> killed <span class='TName'>" + enemy.name + " </span><br>");
      enemyTeamOutput.splice(enemyTeamIndex, 1)
    } else if (player.positioning < enemy.positioning) {
      getConsole.insertAdjacentHTML("beforebegin", "<span class='TName'>" + enemy.name + "</span> killed <span class='CTName'>" + player.name + " </span><br>");
      playerTeamOutput.splice(playerTeamIndex, 1)

    } else if (player.positioning == enemy.positioning && player.overall > enemy.overall) {
    getConsole.insertAdjacentHTML("beforebegin", "<span class='CTName'>" + player.name + " </span> killed <span class='TName'>" + enemy.name + " </span> with a lucky timing<br>");
    enemyTeamOutput.splice(enemyTeamIndex, 1)
    } else if (player.positioning == enemy.positioning && player.overall < enemyTeam.overall) {
    getConsole.insertAdjacentHTML("beforebegin", "<span class='TName'>" + enemy.name + " </span> killed <span class='CTName'>" + player.name + " </span> with a lucky timing<br>");
    playerTeamOutput.splice(playerTeamIndex, 1)

  }
}
    //player positioning >> enemy aim
  if (StatPlayerRandom == "positioning" && StatEnemyRandom == "aim" ) {
      getConsole.insertAdjacentHTML("beforebegin", "<span class='CTName'>" +  player.name + "</span> killed <span class='TName'>" + enemy.name+ "</span> <br> ");
      enemyTeamOutput.splice(enemyTeamIndex, 1)
  } 
   //enemy positioning >> player aim
  if (StatPlayerRandom == "aim" && StatEnemyRandom == "positioning" ) {
    getConsole.insertAdjacentHTML("beforebegin", "<span class='TName'>" + enemy.name + "</span> killed <span class='CTName'>" + player.name+ " </span> <br>");
    playerTeamOutput.splice(playerTeamIndex, 1)
  } 

                                                    // AWARENESS  > POSITIONING // "<span class='CTName'>" + </span>
//player awareness == enemy awareness
if (StatPlayerRandom == "awareness" && StatEnemyRandom == "awareness" ) {
  if (player.awareness > enemy.awareness) {
    getConsole.insertAdjacentHTML("beforebegin", "<span class='CTName'>" + player.name + " </span>killed <span class='TName'>" + enemy.name + " </span><br>");
    enemyTeamOutput.splice(enemyTeamIndex, 1)
  } else if (player.awareness < enemy.awareness) {
    getConsole.insertAdjacentHTML("beforebegin", "<span class='TName'>" + enemy.name + " </span> killed <span class='CTName'>" + player.name + "</span><br>");
    playerTeamOutput.splice(playerTeamIndex, 1)

  } else if (player.awareness == enemy.awareness && player.overall > enemy.overall) {
  getConsole.insertAdjacentHTML("beforebegin", "<span class='CTName'>" + player.name + "</span> killed <span class='TName'>" + enemy.name + " </span> beucase of footsteps<br>");
  enemyTeamOutput.splice(enemyTeamIndex, 1)
  } else if (player.awareness == enemy.awareness && player.overall < enemyTeam.overall) {
  getConsole.insertAdjacentHTML("beforebegin", "<span class='TName'>" + enemy.name + " </span> killed <span class='CTName'>"  + player.name + " </span> because of footsteps<br>");
  playerTeamOutput.splice(playerTeamIndex, 1)

}
}
  //player awareness >> enemy positioning
if (StatPlayerRandom == "awareness" && StatEnemyRandom == "positioning" ) {
    getConsole.insertAdjacentHTML("beforebegin","<span class='CTName'>" +  player.name + "</span> killed <span class='TName'>" + enemy.name+ " </span><br> ");
    enemyTeamOutput.splice(enemyTeamIndex, 1)
} 
  //enemy awareness >> player positioning
if (StatPlayerRandom == "positioning" && StatEnemyRandom == "awareness" ) {
  getConsole.insertAdjacentHTML("beforebegin","<span class='TName'>" +  enemy.name + "</span> killed <span class='CTName'>" + player.name+ " </span><br>");
  playerTeamOutput.splice(playerTeamIndex, 1)
} 



//Look if either of the teams have players left and show the round winner/score.
if (!enemyTeamOutput.length) {
    getConsole.insertAdjacentHTML("beforebegin", "<p class='CWin'>CTs Won the Round</p>");
    rounds++;
    CTrounds++
    getConsole.insertAdjacentHTML("beforebegin", "<p class='score'>CounterT: "+CTrounds+" x "+"Terrorists: "+TRrounds+"</p>");
    scrollDown()
    } 


if (!playerTeamOutput.length) {
    getConsole.insertAdjacentHTML("beforebegin", "<p class='TWin'>TRs Won the Round</p>");
    rounds++;
    TRrounds++
    getConsole.insertAdjacentHTML("beforebegin", "<p class='score'>CounterT: "+CTrounds+" x "+"Terrorists: "+TRrounds+"</p>");
    scrollDown()
    } 
  
//Immedietly recall the function to begin another battle
  if(CTrounds < 16 && TRrounds < 16) {
  return setTimeout(function() {
    battle(playerTeamOutput, enemyTeamOutput)},delay)
  } else {
    
    if (CTrounds == 16) {
      speedButton.hide();
      quickEndButton.hide();
      getConsole.insertAdjacentHTML("beforebegin", "<p class='TWin'> Enemy Victory! </p> <p class='score'>Final Score:<br>CounterT: "+CTrounds+" x "+"Terrorists: "+TRrounds+"</p>");
      scrollDown()
      }
  
    if (TRrounds == 16) {
        speedButton.hide();
        quickEndButton.hide();
        getConsole.insertAdjacentHTML("beforebegin", "<p class='CWin'> Player Victory! </p> <p class='score'>Final Score:<br>CounterT: "+CTrounds+" x "+"Terrorists: "+TRrounds+"</p>");
        scrollDown()
    }
  
    if (TRrounds == 15  && CTrounds == 15) {
      speedButton.hide();
      quickEndButton.hide();
      getConsole.insertAdjacentHTML("beforebegin", "<p> DRAW </p> <p class='score'>Final Score:<br>CounterT: "+CTrounds+" x "+"Terrorists: "+TRrounds+"</p>");
      scrollDown()
    }

  }
  
 

}

}

