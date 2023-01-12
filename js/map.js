import { disablePage, enablePage } from "./switch.js";
import { makeNewCard } from "./template.js";
import { apartments } from "./data.js";

disablePage();

const map = L.map('map-canvas')
  .on('load', () => {
    enablePage();
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 35.675,
    lng: 139.75}, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
})

const mainPinMarker = L.marker(
  {
    lat: 35.675,
    lng: 139.75
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainPinMarker.addTo(map);

const addressInput = document.querySelector('#address');

addressInput.setAttribute('disabled', '');

let mainPinSet;

mainPinMarker.on('moveend', (evt) => {
  const pinSet = evt.target.getLatLng();
  mainPinSet = {
    lat: pinSet.lat.toFixed(5),
    lng: pinSet.lat.toFixed(5)
  }

  addressInput.value = `${mainPinSet.lat}, ${mainPinSet.lng}`
  console.log(mainPinSet)
})

const points = apartments.map((apartment) => {
  return {
    title: makeNewCard(apartment),
    lat: apartment.location.x,
    lng: apartment.location.y
  };
});

console.log(points)

points.forEach(({lat, lng, title}) => {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  const marker = L.marker(
    {
      lat,
      lng
    },
    {
      icon
    }
  );

  marker
    .addTo(map)
    .bindPopup(title);

});

