  var mymap = L.map('mapid', {'worldCopyJump': true}).setView([-27.4698, 153.0251], 3);
  L.tileLayer('https://api.mapbox.com/styles/v1/meaganc/ciufwy3ue00832ho88iy780k9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWVhZ2FuYyIsImEiOiJjaXVmd3ZlenowMGcyMnptemloNjR5NGlzIn0.Wupru1whacyUloGrJ3mMhQ', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'your.mapbox.project.id',
      accessToken: 'pk.eyJ1IjoibWVhZ2FuYyIsImEiOiJjaXVmd3ZlenowMGcyMnptemloNjR5NGlzIn0.Wupru1whacyUloGrJ3mMhQ'
  }).addTo(mymap);

  var markers = [
     [-122.3321, 47.6062, "Seattle" ],
     [ 153.0251, -27.4698, "Brisbane <img src='/assets/map/brisbane.jpg'/>" ],
     [ 151.2093, -33.8688, "Sydney <img src='/assets/map/sydney.jpg'/>" ],
     [ 152.3925, -23.9073, "Lady Musgrave Island<br><img src='/assets/map/ladymusgrave.jpg'/>" ],
     [ 174.7633, -36.8485, "Auckland<br><img src='/assets/map/auckland.jpg'/>" ],
     [ 175.1080, -36.8019, "Waiheke Island<br><img src='/assets/map/waiheke.jpg'/>" ],
     [ 174.0910, -35.2807, "Bay of Islands<br><img src='/assets/map/paihia.jpg'/>" ],
     [ 176.2497, -38.1368, "Rotorua<br><img src='/assets/map/rotorua.jpg'/>" ],
     [ 175.9150, -38.7916, "Lake Taupo<br><img src='/assets/map/taupo.jpg'/>" ],
     [ 174.7762, -41.2865, "Wellington<br><img src='/assets/map/wellington.jpg'/>" ],
     [ 173.6814, -42.4008, "Kaikoura<br><img src='/assets/map/kaikoura.jpg'/>" ],
     [ 170.4771, -44.0047, "Lake Tekapo<br><img src='/assets/map/laketekapo.jpg'/>" ],
     [ 170.1418, -43.5950, "Mt Cook<br><img src='/assets/map/mtcook.jpg'/>" ],
     [ 170.1652, -44.0697, "Lake Pukaki<br><img src='/assets/map/lakepukaki.jpg'/>" ],
     [ 168.6626, -45.0312, "Queenstown<br><img src='/assets/map/queenstown.jpg'/>" ]
  ];

  markers.forEach(function(marker){
    var lon = marker[0];
    var lat = marker[1];
    var popupText = marker[2];

     var markerLocation = new L.LatLng(lat, lon);
     var mapmarker = L.marker(markerLocation).addTo(mymap);
     mapmarker.bindPopup(popupText, {minWidth : 200})
  });
