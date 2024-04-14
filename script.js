const box = document.getElementById('box');
const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomRight = document.getElementById('bottomRight');
const bottomLeft = document.getElementById('bottomLeft');
const text = document.getElementById('codeOutput');

function updateBorderRadius() {
    const radiusValue = `${topLeft.value}% ${topRight.value}% ${bottomRight.value}% ${bottomLeft.value}%`;
    box.style.borderRadius = radiusValue;

    text.value = `border-radius: ${radiusValue};`;
     
}

function copyCode() {
    const codeOutput = document.getElementById('codeOutput');
    codeOutput.select();
    document.execCommand('copy');
    
}

topLeft.addEventListener('input', updateBorderRadius);
topRight.addEventListener('input', updateBorderRadius);
bottomRight.addEventListener('input', updateBorderRadius);
bottomLeft.addEventListener('input', updateBorderRadius);
