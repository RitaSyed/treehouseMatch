// empty array to push players info
let playersInfo =[]; 

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
};

// prints input boxes and button
const buildDomString = () => {
  let domString = "";
    domString +=  `<div class="sf">`;
    domString +=     `<div class="form-group pull-left">`;
    domString +=       `<label for="first-player">Player 1</label>`;
    domString +=       `<input type="text" class="form-control" id="first-player" placeholder="username">`;
    domString +=     `</div>`;
    domString +=     `<div class="form-group pull-right">`;
    domString +=       `<label for="second-player">Player 2</label>`;
    domString +=       `<input type="text" class="form-control" id="second-player" placeholder="username">`;
    domString +=     `</div>`;
    domString +=     `<button type="button" id="button" class="btn btn-lg btn-success center-block clearfix">Start Cage Match</button>`;
    domString +=   `</div>`;
  printToDom(domString, "play");
  addEventListenerButton();
  };

// adds event listener on the button
const addEventListenerButton = () => {
 let button = document.getElementById("button");
 button.addEventListener("click", initializeButton);
};

// calls xhr for players and waits for its return    
const initializeButton = (e) => {
  console.log("clicked")
  let inputPlayer1 = document.getElementById("first-player");
  let inputPlayer2 = document.getElementById("second-player");
  let inputPlayer1Value = inputPlayer1.value;
  let inputPlayer2Value = inputPlayer2.value;
  xhr(inputPlayer1Value);
  xhr(inputPlayer2Value);
  setTimeout(displayWinner, 2500);
};

// sends the xhr for players
const xhr = (inputPlayerUsername) =>{
  let jobsRequest = new XMLHttpRequest();
  jobsRequest.addEventListener("load", player1JSONConvert);
  // console.log(jobsJSONConvert);
  jobsRequest.addEventListener("error", executeThisCodeIfXHRFails);
  jobsRequest.open("GET", `https://teamtreehouse.com/${inputPlayerUsername}.json`);
  jobsRequest.send();
};

function executeThisCodeIfXHRFails () {
  console.log("error");
  addEventListenerButton();
}

// parses xhr for both players and calls to display players imgs and points, and calls to push players data to the emtry array
function player1JSONConvert() {
  let playersData = JSON.parse(this.responseText);
  console.log("profile");
  displayCageMatchResults(playersData);
  addPointstoArray(playersData);
}

// displays players' imgs, points, and names
const displayCageMatchResults = players => {
  let domString = "";
  domString +=   `<div class="col-sm-6">`;
  domString +=     `<div class="thumbnail center-block">`;
  domString +=       `<img src="${players.gravatar_url}" alt="...">`;
  domString +=       `<div class="caption">`;
  domString +=         `<h5 class="text-center">${players.name}</h5>`;
  domString +=         `<h3 class="text-center">${players.points.total}</h3>`;
  domString +=       `</div>`;
  domString +=     `</div>`;
  domString +=   `</div>`;
  printToDom(domString, "play");
};

// adds players' total points, badges, and names to the empty array
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
};

// determines winner and prints out winner's badges, and perpares for next input entry
const displayWinner = () => {
  console.log(playersInfo);
  let domString = "";
  let winnerBadges=[];
  let firstPlayerPoints = playersInfo[0].points;
  let secondPlayerPoints = playersInfo[1].points;
  let firstPlayerBadges = playersInfo[0].badges;
  let secondPlayerBadges = playersInfo[1].badges;
    domString += `<div class="col-xs-12 margin-top-winnerHeading">`;
  if(firstPlayerPoints > secondPlayerPoints){
    winnerBadges.push(firstPlayerBadges);
    domString +=    `<h1 class="text-center" id="winner-heading">${playersInfo[0].name} is the WINNER</h1>`;
  } else if (firstPlayerPoints < secondPlayerPoints){
    winnerBadges.push(secondPlayerBadges);
    domString +=    `<h1 class="text-center" id="winner-heading">${playersInfo[1].name} is the WINNER</h1>`;
  }else {
    domString +=    `<h1 class="text-center" id="winner-heading">Players have equal scores</h1>`;
  }
    domString += `</div>`;
  winnerBadges[0].forEach((badge) => {
    domString +=  `<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">`;
    domString +=    `<div class="panel">`;
    domString +=      `<div class="panel-heading">`;
    domString +=        `<p class="text-center badge-name">${badge.name}</p>`;
    domString +=      `</div>`;
    domString +=      `<div class="panel-body">`;
    domString +=        `<img class="img" src="${badge.icon_url}" alt="...">`; 
    domString +=      `</div>`;
    domString +=     `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, "play");
  domString = "";
  playersInfo =[];
  addEventListenerButton();
}
  
const startApplication = () => {
  buildDomString(); 
};

startApplication ();