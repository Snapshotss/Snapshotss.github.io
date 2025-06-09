"use strict";
// Iterating properties.
let planeta = {
    name: "Earth",
    galaxy: "Milky Way",
    numberOfMoons: 1,
    weight: 100000
};
for (let prop in planeta) {
    console.log("Planeta " + prop + " :- " + planeta[prop]);
}
