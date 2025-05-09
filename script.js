const conteiner = document.querySelector('.conteiner');

const numhexagons = 200;

const color = ['#007bff', '#28a745', '#ffc107']
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function creathexagon() {
    const hexagon = document.
    createElement('div');
    hexagon.classList.add('exagon');

    const x = getRandomNumber(0, window.innerWidth - 50);
    const y = getRandomNumber(0, window.InnerHeigth - 57.735);
    hexagon.sctyle.left = '${x}px';
    hexagon.sctyle.Top = '${y}px';
}
