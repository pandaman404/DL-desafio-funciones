let color = null;
const box1 = document.getElementById('key');
const box2 = document.getElementById('key2');

document.addEventListener('keydown', changeBackground);

function changeBackground(event) {
  switch (event.key) {
    case 'a':
      color = 'pink';
      box1.style.backgroundColor = color;
      break;
    case 's':
      color = 'orange';
      box1.style.backgroundColor = color;
      break;
    case 'd':
      color = 'lightBlue';
      box1.style.backgroundColor = color;
      break;
    case 'q':
      color = 'purple';
      box2.style.backgroundColor = color;
      break;
    case 'w':
      color = 'gray';
      box2.style.backgroundColor = color;
      break;
    case 'e':
      color = 'brown';
      box2.style.backgroundColor = color;
      break;
    default:
      break;
  }
}
