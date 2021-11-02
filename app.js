"use strict";

let destinations = ['Manhattan','Brooklyn','StatenIsland'];
let restaurants = ['HibachiBanzai','PizzaZone','CrazyCannolis'];
let entertainments = ['NightClub','MovieTheater','Circus'];
let transportations =['Car','Train','Bus']

function generator(arrary){
    return arrary[Math.floor(Math.random()*arrary.length)];
}

let counter = 0
while (counter == 0){
    let destinationSelected = generator(destinations);
    let restaurantSelected = generator(restaurants);
    let entertainmentSelected = generator(entertainments);
    let transportationSelected = generator(transportations);
    let resultsSelected = `Destination: ${destinationSelected}\nRestaurant: ${restaurantSelected}\nEntertainment: ${entertainmentSelected}\nTransportation: ${transportationSelected}`;
if (confirm(`Press OK to confirm your day trip.\nPress Cancel to have destinations re-selected. \n\n${resultsSelected}`)) {
    counter = 1;
    console.log(resultsSelected);
  }
  else{
    continue;
  }
}