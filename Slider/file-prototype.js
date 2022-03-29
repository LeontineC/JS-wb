function Slider(slider){
  if (!(slider instanceof Element)) {
    throw new Error("no slider");
  }

  
  this.slides = slider.querySelector(".slides");
  this.slider = slider;
  const prevButton = slider.querySelector(".goToPrev");
  const nextButton = slider.querySelector(".goToNext");

  

  this.startSlider();
  this.applyClasses();

  prevButton.addEventListener("click", () => this.moveSlides("back"));
  nextButton.addEventListener("click", () => this.moveSlides());
};

Slider.prototype.startSlider = function() {
  console.log(this)
  this.current = this.slider.querySelector(".current") || this.slides.firstElementChild;
  this.prev = this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add("current");
  this.prev.classList.add("prev");
  this.next.classList.add("next");
};

Slider.prototype.moveSlides = function(direction) {
  const classesToRemove = ["prev", "current", "next"];
  this.prev.classList.remove(...classesToRemove);
  this.current.classList.remove(...classesToRemove);
  this.next.classList.remove(...classesToRemove);
  if (direction === "back") {
    [this.prev, this.current, this.next] = [
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }
  this.applyClasses();
};

const sliderOne = new Slider(document.querySelector(".slider-one"));
const sliderTwo = new Slider(document.querySelector(".slider-two"));
