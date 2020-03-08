window.KEYS = {
  isKeyLeftPressed: false,
  isKeyRightPressed: false,
  isKeyUpPressed: false,
  isKeyDownPressed: false
};

const handleKeyDown = ({ key }) => {
  if (key === 'ArrowLeft') {
    KEYS.isKeyLeftPressed = true;
  }
  if (key === 'ArrowRight') {
    KEYS.isKeyRightPressed = true;
  }
  if (key === 'ArrowUp') {
    KEYS.isKeyUpPressed = true;
  }
  if (key === 'ArrowDown') {
    KEYS.isKeyDownPressed = true;
  }
};

const handleKeyUp = ({ key }) => {
  if (key === 'ArrowLeft') {
    KEYS.isKeyLeftPressed = false;
  }
  if (key === 'ArrowRight') {
    KEYS.isKeyRightPressed = false;
  }
  if (key === 'ArrowUp') {
    KEYS.isKeyUpPressed = false;
  }
  if (key === 'ArrowDown') {
    KEYS.isKeyDownPressed = false;
  }
};

window.onkeydown = handleKeyDown;
window.onkeyup = handleKeyUp;
