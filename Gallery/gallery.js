function Gallery(gallery) {
  if (!gallery) {
    throw new Error("no gallery found :( !");
  }

  const images = Array.from(gallery.querySelectorAll("img"));
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  let currentImage;
  console.log(modal);

  function openModal() {
    console.info("opening modal");
    if (modal.matches(".open")) {
      console.info("modal already open");
      return;
    }
    modal.classList.add("open");
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
  }

  function closeModal() {
    modal.classList.remove("open");
    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    } //currentTarget clicked on outside modal div so if same e.target also outside modal
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }
  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    console.log(el);
    modal.querySelector("img").src = el.src;
    modal.querySelector("h2").textContent = el.title;
    modal.querySelector("h4").textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // handleImageClick = (e) => {showImage(e.currentTarget);};
  // images.forEach(image => image.addEventListener('click', handleImageClick));
  images.forEach((image) =>
    image.addEventListener("click", (e) => showImage(e.currentTarget))
  );
  modal.addEventListener("click", handleClickOutside);
}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));
