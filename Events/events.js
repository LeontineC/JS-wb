const btn = document.querySelector(".btn");
const btnTwo = document.querySelector(".btn2");
const btnOK = document.querySelector(".ok");

console.dir(btn);
// btn.addEventListener('click', function() {
//   console.log('clicked');
// });
//anonymous function
//go get something listening for something do something

function handleClick() {
  console.log("click");
} //can reuse multiple buttons

const handleOK = () => {
  console.log("ok");
};

btn.addEventListener("click", handleClick);
btnTwo.addEventListener("click", handleClick);
btnOK.addEventListener("click", handleOK);

//remove  unbinding  doesnt work with anon functions
btnTwo.removeEventListener("click", handleClick);

//multiple items
const multipleBtns = document.querySelectorAll("button.multiple");
console.log(multipleBtns);

function handleMultiple() {
  console.log("multiples");
}

multipleBtns.forEach(function (multipleBtn) {
  console.log("binding the multiple button");
  multipleBtn.addEventListener("click", handleMultiple);
});

function handleMultipleTwice(whatever) {
  console.log("sure");
  whatever.addEventListener("click", handleMultiple);
}

// multipleBtns.forEach(handleMultipleTwice);
multipleBtns.forEach((something) => {
  something.addEventListener("click", handleOK);
});

multipleBtns.forEach((nameless) => {
  nameless.addEventListener("click", () => {
    console.log("nameless version");
  });
});

const buttonsTwo = document.querySelectorAll(".multiple-two");

function handleButtonsClick(event) {
  console.log("these are buttons");
  console.log(event);
  console.log(typeof event.target.dataset.price);
  console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  //event.target is what actually got clicked
  // event.currentTarget is what fired off event
  event.stopPropagation(); //prevents bubbling up
  }
  //propagation when pointer event fires off multiple elements

buttonsTwo.forEach(function (buttonTwo) {
  buttonTwo.addEventListener("click", handleButtonsClick);
});

window.addEventListener('click', function(e) {
    console.log('this is the window');
    console.log(e.target);
    console.log(e.type);
    console.log(e.bubbles);
    // e.stopPropagation();
}, {capture: true}); //third argument after function 
//changes order to capture downwards 
//when adding event.stopPropagation() does not go further down lower level

const image = document.querySelector('.photo');

image.addEventListener('mousemove', function(e) {
    console.count(e.target);
})
