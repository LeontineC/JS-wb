const terms = document.querySelector(".terms-and-conditions");
const strong = document.querySelector("strong");
console.log(strong);

const button = document.querySelector(".accept");

observerCallback = (payload) => {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    observer.unobserve(terms.lastElementChild);
    // } else {
    // button.disabled = true;
  }
};

const observer = new IntersectionObserver(observerCallback, {
  root: terms,
  threshold: 1,
});

observer.observe(terms.lastElementChild);

// terms.addEventListener('scroll',(e) => {
// console.log(e);
// });
