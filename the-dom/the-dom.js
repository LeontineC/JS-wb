const pizza = document.querySelector('p');
pizza.insertAdjacentText('beforeend', '🍕');

const picture = document.querySelector('.picture');
console.log(picture.classList);

function toggleShape() {
    picture.classList.toggle('round');
    // console.log(picture.classList.contains('round'));
}

picture.addEventListener('click', toggleShape);

picture.classList.contains('round');

//create elements

const aParagraph = document.createElement('p');
aParagraph.textContent = 'an image that keeps changing on refresh';
aParagraph.classList.add('description');
// console.log(aParagraph.classList);

const anImage = document.createElement('img');
anImage.src = "https://picsum.photos/300";

const aDiv = document.createElement('div');
aDiv.classList.add('wrapper');

aDiv.appendChild(aParagraph);
aDiv.appendChild(anImage);
document.body.appendChild(aDiv);

const heading = document.createElement('h2');
heading.textContent = 'this is the heading';

aDiv.insertAdjacentElement('afterbegin', heading);

const anUnorderedList = document.createElement('ul');
const listItemOne = document.createElement('li');
const listItemTwo = document.createElement('li');
const listItemThree = document.createElement('li');
const listItemFour = document.createElement('li');
const listItemFive = document.createElement('li');

listItemOne.textContent = 'one';
listItemTwo.textContent = 'two';
listItemThree.textContent = 'three';
listItemFour.textContent = 'four';
listItemFive.textContent = 'five';

anUnorderedList.appendChild(listItemTwo);
anUnorderedList.appendChild(listItemThree);
anUnorderedList.appendChild(listItemFive);

listItemTwo.insertAdjacentElement('beforebegin', listItemOne);
listItemThree.insertAdjacentElement('afterend', listItemFour);

document.body.appendChild(anUnorderedList);

const width = 400;
const srcTwo = `https://picsum.photos/${width}`;
const description = `nice photo`;

const createHTML = `
<div class="container">
<h3>${description}</h3>
<img src="${srcTwo}" />
</div>`
;

const myHTMLFragment = document.createRange().createContextualFragment(createHTML);
//turns all items contained into DOM node elements
console.log(myHTMLFragment);

document.body.appendChild(myHTMLFragment);

const me = document.querySelector('.moi');
//elements
console.log(me.children);
console.log(me.firstElementChild);
console.log(me.lastElementChild);
console.log(me.previousElementSibling);
console.log(me.nextElementSibling);
console.log(me.parentElement);

//in Elements grab something in Console will appear with $0 can discover all of above info etc

//nodes
console.log(me.childNodes);
console.log(me.firstChild);
console.log(me.lastChild);
console.log(me.previousSibling);
console.log(me.nextSibling);
console.log(me.parentNode);

const p = document.createElement('p');
p.textContent = 'i will be removed shortly';
document.body.appendChild(p);
p.remove();
console.log(p);  //still exists in js memory can re-add
document.body.appendChild(p);