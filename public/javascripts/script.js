document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");

    /// Event list for card ADD Button in Cardfinder

    let addCrd = document.getElementById("addcard")
    let searchButton = document.getElementById("search-button")
    let theButton = document.getElementById("theButton")


    if (addCrd) {

      addCrd.onclick = function () {
        const cardDetail = {
          cardName: document.getElementById("cardName").textContent,
          cardImage: document.getElementById("cardImage").src,
          cardDesc: document.getElementById("cardDesc").textContent,
          cardRarity: document.getElementById("rarity").textContent,
          cardPrice: document.getElementById("price").textContent
        }

        // axios.post("https://magicfinder.herokuapp.com/api/addCard", {
        axios.post("http://localhost:3000/api/addCard", {
            cardDetail
          })
          .then(res => console.log(res))
          .catch(err => console.log(err))

      };
    }




    function initMap() {

      if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
          position => {
            // axios.get("https://magicfinder.herokuapp.com/events/api")
            axios.get("http://localhost:3000/events/api")
              .then(res => {
                printMap(position.coords, res.data)

              })
              .catch(err => console.log(err))

          },
          //   err => console.log(err)
        )
      } else {
        console.log('Lo siento, no dispones de API de geolocalización')
      }
    }

    function printMap(coords, arr) {

      const myMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      })
      myMap.setCenter({
        lat: coords.latitude,
        lng: coords.longitude
      })
      arr.forEach(elm => {
        new google.maps.Marker({
          position: {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
          },
          map: myMap
        })

      })
      new google.maps.Marker({
        position: {
          lat: coords.latitude,
          lng: coords.longitude
        },
        map: myMap
      })

    }




    console.log('Script.js ok');

    initMap()


    /// Event list for card Serach Button in Layout
    if (searchButton) {

      searchButton.onclick = function () {
        alert("Alert!");
      };
    }

    //// Event listenr for search bar in Cardfinder
    if (theButton) {

      theButton.onclick = function () {
        removeErrDiv();
        const card = document.getElementById("theInput").value;

        getMagicInfo(card);
      };
    }
  },
  false
);