document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");

    /// Event list for card ADD Button in Cardfinder
    document.getElementById("addcard").onclick = function() {
      const cardDetail = {
        cardName: document.getElementById("cardName").textContent,
        cardImage: document.getElementById("cardImage").src,
        cardDesc: document.getElementById("cardDesc").textContent,
        cardRarity: document.getElementById("rarity").textContent,
        cardPrice: document.getElementById("price").textContent
      }

      axios.post("http://localhost:3000/api/addCard", {
        cardDetail
      })      
      .then(res => console.log(res))
      .catch(err => console.log(err))
      
    };

    /// Event list for card Serach Button in Layout
    document.getElementById("search-button").onclick = function() {
      alert("Alert!");
    };

    //// Event listenr for search bar in Cardfinder
    document.getElementById("theButton").onclick = function() {
      removeErrDiv();
      const card = document.getElementById("theInput").value;
     
      getMagicInfo(card);
    };
  },
  false
);
