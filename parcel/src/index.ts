import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./styles.css";

const message = document.querySelector<HTMLParagraphElement>("#message");
const mapElement = document.querySelector<HTMLDivElement>("#map");

if (!mapElement) {
  throw new Error("Map container #map not found.");
}

const map = L.map(mapElement).setView([49.2827, -123.1207], 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

if (message) {
  message.textContent = "Leaflet map loaded with TailwindCSS styling.";
}
