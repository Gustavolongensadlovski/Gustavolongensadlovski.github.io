const box = document.getElementById('box');
const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomRight = document.getElementById('bottomRight');
const bottomLeft = document.getElementById('bottomLeft');


function updateBorderRadius() {
    const radiusValue = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%`;
    box.style.borderRadius = radiusValue;
}

topLeft.addEventListener('input', updateBorderRadius);
topRight.addEventListener('input', updateBorderRadius);
bottomRight.addEventListener('input', updateBorderRadius);
bottomLeft.addEventListener('input', updateBorderRadius);
