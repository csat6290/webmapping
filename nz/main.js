/* Neuseelandreise Skript */
// einzeliger Kommentar

let lat = -45.874167;
let lng = 170.503611;
let zoom = 13;

let coords = [-45.874167, 170.503611];

//console.log(coords)
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);

//console.log("text");
//console.log('text');
//console.log('id="map"');
//console.log(`latitude = ${lat} `);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);

//Etappe in der Konsole ansprechen


// consoles sind arrays

// coords sind die Koordinaten

let popup = `
<h3> ${ETAPPEN[3].titel} (Etappe ${ETAPPEN[3].nr}) </h3>
<ul>
<li>geogr. Länge: ${ETAPPEN[3].lng}</li>
<li>geogr. Breite: ${ETAPPEN[3].lat}</li>
<li><a href="${ETAPPEN[3].wikipedia}">Link zur Wikipediaseite</a></li>
<li><a href="${ETAPPEN[3].github}">Link zur Etappenseite</a></li>
</ul>
`;

// popup Liste erstellt mit einer Variable und anschließend die Etappenvariable benutzt um die Etappe zu beschriften


let map = L.map('map').setView(coords, zoom);

// let sind die Variablen

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();


for (let etappe of ETAPPEN) {
    
    let popup = `
<h3> ${etappe.titel} (Etappe ${etappe.nr}) </h3>
<ul>
<li>geogr. Länge: ${etappe.lng}</li>
<li>geogr. Breite: ${etappe.lat}</li>
<li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
<li><a href="${etappe.github}">Link zur Etappenseite</a></li>
</ul>
`;
    //console.log(etappe);
    L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
}