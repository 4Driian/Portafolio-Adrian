const eyeL = document.getElementById('eye-left');
const eyeR = document.getElementById('eye-right');

const getEye = (eye) => eye.firstElementChild;
const getAngle = (a, b) => Math.atan(a / b);
const getHypotenuse = (a, b) => Math.sqrt(a * a + b * b);

const getEyeCoordinates = (eye) => {
  const { x, y, width, height } = eye.getBoundingClientRect();
  return { x: x + width / 2, y: y + height / 2 };
};

const getMaxMovement = (eye) => {
  const eyeWidth = eye.getBoundingClientRect().width;
  return eyeWidth / 10; // Ajusta el valor según tus preferencias
};

const limitOffset = (offset, eye) => {
  const maxMovement = getMaxMovement(eye);
  if (getHypotenuse(offset.x, offset.y) <= maxMovement) {
    return { x: offset.x, y: offset.y };
  }

  const angle = getAngle(offset.y, offset.x);
  let x = Math.cos(angle) * maxMovement;
  let y = Math.sin(angle) * maxMovement;
  x = offset.x < 0 ? -x : x;
  y = offset.x < 0 ? -y : y;

  return { x, y };
};

const getEyeOffset = (eye, mouse) => {
  const x = (mouse.x - eye.x) * 0.25;
  const y = (mouse.y - eye.y) * 0.25;

  return { x, y };
};

const moveEye = (eye, mouse) => {
  const center = getEyeCoordinates(eye);
  const offset = getEyeOffset(center, mouse);
  const limitedOffset = limitOffset(offset, eye);

  const eyeElement = getEye(eye);
  eyeElement.style.transform = `translate(${limitedOffset.x}px, ${limitedOffset.y}px)`;
};

const blinkEye = (eye) => {
  const eyeElement = getEye(eye);
  eyeElement.style.animation = 'blink 0.3s linear';
  setTimeout(() => {
    eyeElement.style.animation = '';
  }, 300);
};

const onMouseMove = (event) => {
  const mouse = { x: event.clientX, y: event.clientY };

  moveEye(eyeL, mouse);
  moveEye(eyeR, mouse);
};

const onClick = (event) => {
  const target = event.target;
  if (target === eyeL || target === eyeR) {
    blinkEye(target);
  }
};

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('touchmove', onMouseMove);
window.addEventListener('click', onClick);

export { eyeL, eyeR, onMouseMove };
