/* Neuseelandreise Skript */
// einzeliger Kommentar

let lat = -45.874167;
let lng = 170.503611;
let zoom = 13;

let coords = [-45.874167, 170.503611];
console.log(coords)
console.log(coords[0]);
console.log(coords[1]);
console.log(coords.length);

console.log("text");
console.log('text');
console.log('id="map"');
console.log(`latitude = ${lat} `);

console.log(ETAPPEN);

// consoles sind arrays

// coords sind die Koordinaten

let popup = `
<h3>Dunedin</h3>
<ul>
<li>geogr. Länge: ${lng}</li>
<li>geogr. Breite: ${lat}</li>
</ul>
`

// popup Liste erstellt mit einer Variable

let map = L.map('map').setView(coords, zoom);

// let sind die Variablen

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();