document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");

    /// Event list for card ADD Button in Cardfinder

    let addCrd = document.getElementById("addcard")
    let searchButton = document.getElementById("search-button")
    let theButton = document.getElementById("theButton")
    let cardShop = document.getElementById("cardShop")

    let btBlue = document.getElementById("btBlue")
    let btBlack = document.getElementById("btBlack")


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

    if (btBlue) {
      btBlue.onclick = (e) => {
        let color = btBlue.getAttribute("id")

        axios.get("/api/filter")

      }
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
        zoom: 11,
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

    // axios.get("https://api.scryfall.com/cards?page=3")
    //   .then(res => {
    //     console.log(res.data.data[0])
    //     axios.get("http://localhost:3000/index", {
    //         params: {
    //           info: res.data.data[0]
    //         }
    //       })
    //       .then(res => {
    //         // console.log(res)
    //         // cardShop = res.data.data.splice(0, 20)

    //       })
    //       .catch(err => console.log(err))



    //     // for (let i=0 ; i<30 ; i++){
    //     //   console.log(cardShop)
    //     //   let img = document.createElement("img")
    //     //   let name = document.createElement("h4")
    //     //   let price = document.createElement("p")
    //     //   let detBtn = document.createElement("button")
    //     //   img.src = `${res.data.data[i].image_uris.small}`
    //     //   name.innerHTML = `${res.data.data[i].name}`
    //     //   price.innerHTML = `${res.data.data[i].prices.eur}`+" €"
    //     //   detBtn.innerHTML = "Ver detalles"
    //     //   cardShop.appendChild(img)
    //     //   cardShop.appendChild(name)
    //     //   cardShop.appendChild(price)
    //     //   cardShop.appendChild(detBtn)
    //     //   }


    //   })
    //   .catch(err => console.log(err))



 

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