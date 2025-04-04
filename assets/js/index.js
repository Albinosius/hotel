document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".main__item.card");

  cards.forEach((card) => {
    const bookButton = card.querySelector(".card__main-bottom-button");

    bookButton.addEventListener("click", (event) => {
      event.stopPropagation(); 
      if (!card.classList.contains("pressed") && !card.classList.contains("active")) {
        card.classList.add("pressed");
      }
    });

    card.addEventListener("mouseleave", () => {
      if (card.classList.contains("pressed")) {
        card.classList.remove("pressed");
        card.classList.add("active");
      }
    });

    card.addEventListener("click", () => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
      }
    });
  });
});
