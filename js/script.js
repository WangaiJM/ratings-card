const btnRate = document.querySelectorAll(".btn-rate");
const submit = document.querySelector(".btn-submit");
const rate = document.querySelector("#rate");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

let value;

btnRate.forEach((btn) => {
  btn.addEventListener("click", () => {
    value = Number(btn.textContent);

    btnRate.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

submit.addEventListener("click", () => {
  if (value > 0) {
    card1.style.display = "none";
    card2.style.display = "block";
    rate.textContent = value;
  }
});
