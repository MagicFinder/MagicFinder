let errDiv;

const restMagicApi = axios.create({
  baseURL: "https://api.scryfall.com/cards/named?exact="
});

function getMagicInfo(theName) {
  restMagicApi
    .get(theName)
    .then(responseFromAPI => {
      console.log("Response from API is: ", responseFromAPI.data);
      removeErrDiv();
      const cardName = responseFromAPI.data.name;
      const cardId = responseFromAPI.data.id;
      const cardImage = responseFromAPI.data.image_uris.small;
      const cardDesc = responseFromAPI.data.oracle_text;
      const cardRarity = responseFromAPI.data.rarity
      const cardPrice = responseFromAPI.data.prices.usd ////mas de un valor ?
      

      
      // instead in the console, show data in the browser using JS DOM manipulation:
      document.getElementById("cardName").innerHTML = cardName;
      document.getElementById("cardId").innerHTML = "Card ID: " + cardId;
      document.getElementById("cardImage").src = cardImage;
      document.getElementById("cardDesc").innerHTML = cardDesc
      document.getElementById("rarity").innerHTML = cardRarity;
      document.getElementById("price").innerHTML = cardPrice;
    })
    .catch(err => {
      if (err.response.status === 404) {        
        removeCardInfo();
        createDiv();
        const theErr = document.createTextNode(`Carta no encontrada `);
        errDiv.appendChild(theErr);
      } else {
        console.log("err => ", err);
      }
    });
}

function createDiv() {
  errDiv = document.createElement("div");
  errDiv.setAttribute("id", "error");
  document.body.appendChild(errDiv);
}

function removeErrDiv() {
  if (document.getElementById("error")) {
    const error = document.getElementById("error");
    error.parentNode.removeChild(error);
  }
}

function removeCardInfo() {
  document.getElementById("cardName").innerHTML = "";
  document.getElementById("cardId").innerHTML = "";
}

function checkInput() {
  removeErrDiv();
  if (document.getElementById("theInput").value === "") {
    document.getElementById("theButton").disabled = true;
    removeCardInfo();
    createDiv();
    const theErr = document.createTextNode(`Wanna input something? `);
    errDiv.appendChild(theErr);
  } else {
    document.getElementById("theButton").disabled = false;
  }
}

// document.getElementById("theButton").onclick = function() {
//   removeErrDiv();
//   const card = document.getElementById("theInput").value;
//   getMagicInfo(card);
// };

  
  