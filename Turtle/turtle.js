const turtle = document.querySelector(".turtle");
let x = 0;
let y = 0;
const speed = 40;
let flipped = false;

handleKeydown = (e) => {
  if (!e.key.includes("Arrow")) {
    return;
  }
  switch (e.key) {
    case "ArrowUp":
      y = y - 1;
      rotate = -90;
      break;
    case "ArrowDown":
      y = y + 1;
      rotate = 90;
      break;
    case "ArrowRight":
      x = x + 1;
      flipped = false;
      rotate = 0;
      break;
    case "ArrowLeft":
      x = x - 1;
      flipped = true;
      rotate = 0;
      break;
    default:
      console.log("something went wrong");
      break;
  }
  //   turtle.style.background = 'lime';
  //   turtle.style['background'] = 'lime';

  turtle.setAttribute(
    "style",
    `--horizontal-x: ${x * speed}px;
      --vertical-y: ${y * speed}px;
      --rotate-y: ${flipped ? "180deg" : "0"};
      --rotate: ${rotate}deg;`
  );
};

window.addEventListener("keydown", handleKeydown);
