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

  }
   buildDomString ();

    // addEventListenerButton();