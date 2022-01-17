// Make a div
const divOne = document.createElement('div');
// add a class of wrapper to it
divOne.classList.add('wrapper');
// put it into the body
document.body.appendChild(divOne);
console.log(divOne);
// make an unordered list
// const ulOne = document.createElement('ul');

// const one = document.createElement('li');
// const two = document.createElement('li');
// const three = document.createElement('li');
// one.textContent = "one";
// two.textContent = "two";
// three.textContent = "three";
// ulOne.appendChild(one);
// ulOne.appendChild(two);
// ulOne.appendChild(three);
// document.body.appendChild(ulOne);
// divOne.appendChild(ulOne);
const ulOne = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`
// put that list into the above wrapper
divOne.innerHTML = ulOne;
// create an image
const anImage = document.createElement('img');
// set the source to an image
const theWidth = 250;
anImage.src = `https://picsum.photos/${theWidth}`;
// set the width to 250
anImage.height = 250;
// add a class of cute
anImage.classList.add('cute');
// add an alt of Cute Puppy
anImage.alt = 'Cute Puppy';
// Append that image to the wrapper
// document.body.appendChild(anImage);
divOne.appendChild(anImage);


// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="divTwo">
<p>paragraph one</p>
<p>paragraph two</p>
</div>`;
// const myHTMLFragment = document.createRange().createContextualFragment(myHTML);
// document.body.appendChild(myHTMLFragment); 
///OR 
divOne.insertAdjacentHTML('beforebegin', myHTML);
// put this div before the unordered list from above
// document.body.insertBefore(divOne, null);
// add a class to the second paragraph called warning
console.log(myHTML);
const divTwoo = document.querySelector('.divTwo');
console.log(divTwoo.children);
divTwoo.children[1].classList.add('warning');
divTwoo.children[0].remove(); // divTwoo.firstElementChild.remove();

// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const playerHTML = `<div class="playerCard">
      <h2>${name} is ${age} years old.</h2>
      <p>They are ${height} cm. tall and ${age} years old. In Dog years this person would be ${age * 7} years old. That would be an old dog!</p>
      <button class='delete' type='button'>&times; delete</button>
      </div>`
     return playerHTML;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
let fourCards = generatePlayerCard('Joe', 37, 1.78);
fourCards += generatePlayerCard('Jim', 67, 1.90);
fourCards += generatePlayerCard('Jason', 22, 1.69);
fourCards += generatePlayerCard('Jude', 71, 1.43);
console.log(fourCards);
newDiv.innerHTML = fourCards;
// make 4 player cards using generatePlayerCard

// append those cards to the div
divOne.insertAdjacentElement('beforebegin', newDiv);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const buttons = newDiv.querySelectorAll('button');

function removeCard(e) {
   clickedButton = e.currentTarget;
//    clickedButton.parentElement.remove();
   clickedButton.closest('.playerCard').remove();
}

buttons.forEach(button => button.addEventListener('click', removeCard));

// select all the buttons!
// make out delete function
// loop over them and attach a listener

