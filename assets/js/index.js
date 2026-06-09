const selectBtns = document.querySelectorAll(".btn-rate");
const submitBtn = document.querySelector(".btn-submit");
const rateEl = document.querySelector("#rate");
const cards = document.querySelectorAll(".card");

let state = {
  rate: 0,
};

selectBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selected = Number(e.target.dataset.tip);
    state.rate = selected;

    selectBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
  });
});

submitBtn.addEventListener("click", () => {
  if (state.rate === 0) return;

  rateEl.innerHTML = state.rate;
  cards.forEach((card) => {
    card.classList.toggle("hidden");
  });
});
