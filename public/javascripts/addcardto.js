



function addcard() {
  // console.log("ciao");
  // const cardinfo = {
  //   cardName: document.getElementById("cardName").textContent,
  //   cardImage: document.getElementById("cardImage").src,
  //   cardDesc: document.getElementById("cardDesc").textContent,
  //   cardRarity: document.getElementById("rarity").textContent,
  //   cardPrice: document.getElementById("price").textContent
  // };
  // console.log(cardinfo);

  
  const newCard = new {
    cardName: document.getElementById("cardName").textContent,
    cardImage: document.getElementById("cardImage").src,
    cardDesc: document.getElementById("cardDesc").textContent,
    cardRarity: document.getElementById("rarity").textContent,
    cardPrice: document.getElementById("price").textContent
  };
  
  axios.post("/routes/api/addCard.js");
}
