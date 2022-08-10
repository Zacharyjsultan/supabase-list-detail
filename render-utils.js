export function renderSpotKind(kindOfSpot) {
    const pTag = document.createElement('p');
    const container = document.createElement('div');
// figure out anchor
    const anchor = document.createElement('a');

     //
    anchor.href = `./details/?id=${kindOfSpot.id}`;

    pTag.textContent = kindOfSpot.spot;
    pTag.classList.add('spot-kind');

    const img = document.createElement('img');
    img.src = `./assets/${kindOfSpot.spot}.png`;
   
    container.append(pTag, img);
    
    //
    anchor.append(container);
    //
    return anchor;
}