import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./styles.css";

const message = document.querySelector<HTMLParagraphElement>("#message");
const mapElement = document.querySelector<HTMLDivElement>("#map");

if (!mapElement) {
  throw new Error("Map container #map not found.");
}

const map = L.map(mapElement);
const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconAnchor: [10, 20],
});
const myLocations = [
  {
    name: "WBS CODING SCHOOL",
    location: [52.457131, 13.54007],
    description: "The best coding school in the world",
  },
  {
    name: "Alexanderplatz",
    location: [52.521918, 13.413215],
    description: "The most famous square in Berlin",
  },
  {
    name: "Brandenburg Gate",
    location: [52.516275, 13.377704],
    description: "The most famous gate in Berlin",
  },
  {
    name: "Berlin Wall",
    location: [52.507541, 13.39032],
    description: "The most famous wall in Berlin",
  },
];
myLocations.forEach((location) => {
  L.marker(location.location, { icon: markerIcon })
    .bindPopup(location.description)
    .addTo(map);
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
const bounds = L.latLngBounds(myLocations.map((location) => location.location));
map.fitBounds(bounds);

if (message) {
  message.textContent = "Leaflet map loaded with TailwindCSS styling.";
}
