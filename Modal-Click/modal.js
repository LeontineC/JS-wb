const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

handleButtonClick = (e) => {
  const button = e.currentTarget;
  const card = button.closest(".card");
  console.log(card);
  const imgSrc = card.querySelector("img").src;
  const description = card.dataset.description;
  console.log(imgSrc, description);
  const name = card.querySelector("h2").textContent;
  //add info to modal
  modalInner.innerHTML = `
    <img src="${imgSrc.replace("200", "600")}" alt="${name}" />
    <p>${description}</p>
    `;
  modalOuter.classList.add("open");
};

cardButtons.forEach((button) =>
  button.addEventListener("click", handleButtonClick)
);

closeModal = (e) => {
  modalOuter.classList.remove("open");
};

modalOuter.addEventListener("click", (e) => {
  const isOutside = !e.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
