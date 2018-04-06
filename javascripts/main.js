console.log("js");
let playersInfo =[];

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
};

const buildDomString = () => {
  let domString = "";
    domString +=  `<div class="form-group">`;
    domString +=     `<div class="width pull-left">`;
    domString +=       `<label for="first-player">Player 1</label>`;
    domString +=       `<input type="text" class="form-control" id="first-player" placeholder="username">`;
    domString +=     `</div>`;
    domString +=     `<div class="width pull-right">`;
    domString +=       `<label for="second-player">Player 2</label>`;
    domString +=       `<input type="text" class="form-control" id="second-player" placeholder="username">`;
    domString +=     `</div>`;
    domString +=     `<button type="button" id="button" class="btn btn-success center-block">Start Cage Match</button>`;
    domString +=   `</div>`;
  printToDom(domString, "play");
  addEventListenerButton();
  }



const addEventListenerButton = () => {
 let button = document.getElementById("button");
 button.addEventListener("click", initializeButton);
// console.log("clicked");
}
    
const initializeButton = (e) => {
  // console.log(e);
  console.log("clicked")
  let inputPlayer1 = document.getElementById("first-player");
  let inputPlayer2 = document.getElementById("second-player");
  let inputPlayer1Value = inputPlayer1.value;
  let inputPlayer2Value = inputPlayer2.value;
  xhr1(inputPlayer1Value);
  xhr1(inputPlayer2Value);
  setTimeout(displayWinner, 3000);
}


const xhr1 = (inputPlayerUsername) =>{
  let jobsRequest = new XMLHttpRequest();
  jobsRequest.addEventListener("load", player1JSONConvert);
  // console.log(jobsJSONConvert);
  jobsRequest.addEventListener("error", executeThisCodeIfXHRFails);
  jobsRequest.open("GET", `https://teamtreehouse.com/${inputPlayerUsername}.json`);
  jobsRequest.send();
}

function executeThisCodeIfXHRFails () {
}

function player1JSONConvert() {
  let playersData = JSON.parse(this.responseText);
  console.log("profile");
    // buildDomString(playersData);
    // buildDomString(playersData);
    // console.log(playersData);
    
  displayCageMatchResults(playersData);
  addPointstoArray(playersData);
    // console.log(displayCageMatchResults);
    // selectWinner(event);
   
}

const displayCageMatchResults = players => {
  let domString = "";
  // players.forEach(player => {
  // domString += `<div>`;

  domString +=   `<div class="col-sm-6">`;
  domString +=     `<div class="thumbnail center-block">`;
  domString +=       `<img src="${players.gravatar_url}" alt="...">`;
  domString +=       `<div class="caption">`;
  domString +=         `<h5 class="text-center">${players.name}</h5>`;
  domString +=         `<h3 class="text-center">${players.points.total}</h3>`;
  domString +=       `</div>`;
  domString +=     `</div>`;
  domString +=   `</div>`;
  // domString += `</div>`;
  console.log
  printToDom(domString, "play");
};



const addPointstoArray = (playersData) => {
  const points1 = playersData.points.total;
  const name = playersData.profile_name;
  const badges = playersData.badges;
  // console.log(playersData.profile_name);
  playersInfo.push({
      name: name,
      points: points1,
      badges: badges
    });
  
}



const displayWinner = () => {
  console.log(playersInfo);
  let domString = "";
  let winnerBadges=[];
  // for(var i=0; i<points.length; i++){
    domString += `<div class="col-xs-12 margin-top-winnerHeading">`;
  if(playersInfo[0].points > playersInfo[1].points){
    winnerBadges.push(playersInfo[0].badges);
    domString +=    `<h1 class="text-center" id="winner-heading">${playersInfo[0].name} is the WINNER</h1>`;
  } else if (playersInfo[0].points < playersInfo[1].points){
    winnerBadges.push(playersInfo[1].badges);
    domString +=    `<h1 class="text-center" id="winner-heading">${playersInfo[1].name} is the WINNER</h1>`;
  }else {
    domString +=    `<h1 class="text-center" id="winner-heading">Players have equal scores</h1>`;
  }
    domString += `</div>`;
  console.log(winnerBadges);
    // domString +=  `<div>`;
  winnerBadges[0].forEach((badge) => {
    domString +=    `<div class="col-xs-3">`;
    domString +=    `<div class="panel">`;
    domString +=   `<div class="panel-heading">`;
    domString +=      `<p class="text-center badge-name">${badge.name}</p>`;
    domString +=   `</div>`;
    domString +=   `<div class="panel-body">`;
    // domString +=      `<div class="pull-left badge-container">`;
    domString +=        `<img class="img" src="${badge.icon_url}" alt="...">`; //class="img-responsive center-block"
    // domString +=        `<div class="caption">`;
    domString +=   `</div>`;
    domString += `</div>`;
    domString += `</div>`;
    // domString +=    `</div>`;
  
    console.log(badge.icon_url);
  });
  printToDom(domString, "play");
  domString = "";
  console.log(winnerBadges);
  playersInfo =[];
}
  

const startApplication = () => {
  buildDomString(); 

};

startApplication ();