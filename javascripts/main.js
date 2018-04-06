console.log("js");

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML += domString;
};

const buildDomString = () => {
  let domString = "";
    domString +=  `<div class="form-group clearfix">`;
    domString +=     `<div class="width pull-left">`;
    domString +=       `<label for="first-player">Player 1</label>`;
    domString +=       `<input type="text" class="form-control" id="first-player" placeholder="username">`;
    domString +=     `</div>`;
    domString +=     `<div class="width pull-right">`;
    domString +=       `<label for="second-player">Player 2</label>`;
    domString +=       `<input type="text" class="form-control" id="second-player" placeholder="username">`;
    domString +=     `</div>`;
    domString +=     `<div class="col-xs-12">`;
    domString +=       `<button type="button" id="button" class="btn btn-success center-block">Start Cage Match</button>`;
    domString +=     `</div>`;
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
  domString +=         `<h3 class="text-center">${players.points.total}</h3>`;
  domString +=       `</div>`;
  domString +=     `</div>`;
  domString +=   `</div>`;
  // domString += `</div>`;
  console.log
  printToDom(domString, "play");
};

const startApplication = () => {
  buildDomString(); 

};

startApplication ();