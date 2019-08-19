const getConsole = document.querySelector(".console");
const consoleID = document.querySelector("#cons");
const simularButton = $('#simular-button');
const speedButton = $('#speed-up');
const quickEndButton = $('#quickEnd');
let rounds = 1;
let playerTeam = JSON.parse(sessionStorage.getItem('playerTeam'))
let enemyTeam = JSON.parse(sessionStorage.getItem('enemyTeam'))

if (playerTeam == null) {
  $('#simular-button').hide();
}
else if (playerTeam.length < 3) {
  $('#simular-button').hide();
}

let time1 = document.querySelector(".time1");
let time2 = document.querySelector(".time2");

time1.innerHTML = "Your Team: "+ playerTeam[0].name + ", " + playerTeam[1].name + ", " + playerTeam[2].name + ", " + playerTeam[3].name + " and " + playerTeam[4].name;

time2.innerHTML = "Enemy Team: "+ enemyTeam[0].name + ", " + enemyTeam[1].name + ", " + enemyTeam[2].name + ", " + enemyTeam[3].name + " and " + enemyTeam[4].name;



function speedUp(){
  delay=300;
  return delay;
}


function endQuick(){
  speedButton.hide();
  quickEndButton.hide();
  delay=0;
  return delay;
}

function scrollDown() {
  var consoleID = document.getElementById('cons');
  consoleID.scrollTop = consoleID.scrollHeight;
}

function chooseAgain() {
  window.location.href = "index.html";
  sessionStorage.clear();
} 

