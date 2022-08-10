// import functions and grab DOM elements
import { getSpots } from './fetch-utils.js';
import { renderSpotKind } from './render-utils.js';
// let state


const spotContainer = document.getElementById('spot-container');

async function loadData() {
    const spot = await getSpots();
    
    // loop thro spots
    for (let kindOfSpot of spot){
        const SpotP = renderSpotKind(kindOfSpot);
        spotContainer.append(SpotP);
    }
}

loadData();