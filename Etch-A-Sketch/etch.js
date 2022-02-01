//select the elements needed

const shakeButton = document.querySelector(".shakeButton");
const canvas = document.querySelector("#etch");
const ctx = canvas.getContext("2d");
const moveAmount = 10;

//setup canvas for drawing

// const width = canvas.width;
// const height = canvas.height;
//above destructured
const { width, height } = canvas;
//create random x and y starting points
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;

ctx.lineJoin = "round"; //bevel or miter
ctx.lineCap = "round"; //butt or square
ctx.lineWidth = moveAmount;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//write a draw function

draw = ({ key }) => {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`;
  //   console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case "ArrowUp":
      y -= moveAmount;
      break;
    case "ArrowDown":
      y = y + moveAmount; //y+=
      break;
    case "ArrowRight":
      x += moveAmount;
      break;
    case "ArrowLeft":
      x -= moveAmount;
      break;
    default:
      break;
  }
  //   x = x - moveAmount;
  //   y = y - moveAmount;
  ctx.lineTo(x, y);
  ctx.stroke();
};

//write handler for the keys

handleKey = (e) => {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key }); //object
    // console.log('handleKey');
    // console.log(e.key);
  }
};

//shake and clear canvas function

shakeAndClear = (e) => {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height); //from top left corner to entire width and height
  canvas.addEventListener(
    "animationend",
    () => {
      canvas.classList.remove("shake");
    },
    { once: true }
  ); //else keeps adding eventListeners
 
};

shakeButton.addEventListener("click", shakeAndClear);
//listen for arrow keys
window.addEventListener("keydown", handleKey);
