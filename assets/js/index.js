document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (cards) {
    cards.forEach((card) => {
      const bookButton = card.querySelector(".card__main-bottom-button");

      if (bookButton) {
        bookButton.addEventListener("click", (event) => {
          event.stopPropagation();
          if (!card.classList.contains("pressed") && !card.classList.contains("active")) {
            card.classList.add("pressed");

            if (isTouchDevice) {
                if (card.classList.contains("pressed")) {
                  card.classList.remove("pressed");
                  card.classList.add("active");
                }
            }
          }
        });
      }

      if (!isTouchDevice) {
        card.addEventListener("mouseleave", () => {
          if (card.classList.contains("pressed")) {
            card.classList.remove("pressed");
            card.classList.add("active");
          }
        });
      }

      card.addEventListener("click", () => {
        if (card.classList.contains("active")) {
          card.classList.remove("active");
        }
      });
    });
  }
});
