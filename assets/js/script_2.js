const colorsHTML = document.querySelectorAll('#blue, #red, #green, #yellow');

for (color of colorsHTML) {
  color.addEventListener('click', setBlackColor);
}

function setBlackColor(event) {
  event.target.style.backgroundColor = 'black';
}
