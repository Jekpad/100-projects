const cards = document.querySelectorAll(`.card`);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((card) => card.classList.remove("card_expand"));
    card.classList.add("card_expand");
  });
});
