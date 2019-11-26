// const axios = require('axios')

document.addEventListener('DOMContentLoaded', () => {

  function initMap() {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        position => {

          printMap(position.coords)
        },
        //   err => console.log(err)
      )
    } else {
      console.log('Lo siento, no dispones de API de geolocalización')
    }
  }

  function printMap(coords) {
    console.log("this is printMap")
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
}, false);


// var searchClick = function () {
//   var text = document.getElementById("search-button").value;
//   alert(text);

// };