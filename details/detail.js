import { getSpotsByID } from '../fetch-utils.js';
import { renderSpotKind } from '../render-utils.js';

const params = new URLSearchParams(window.location.search);
const spotDetail = document.getElementById('spot-detail');

async function loadData() {
    const data = await getSpotsByID(params.get('id'));
    const spotDiv = renderSpotKind(data);

    spotDetail.append(spotDiv);
    
}
loadData();