export function renderSpotKind(kindOfSpot) {
    const pTag = document.createElement('p');
    const container = document.createElement('div');
    pTag.textContent = kindOfSpot.spot;
    pTag.classList.add('spot-kind');

    const img = document.createElement('img');
    img.src = `./assets/${kindOfSpot.spot}.png`;
    container.append(pTag, img);

    return container;
}