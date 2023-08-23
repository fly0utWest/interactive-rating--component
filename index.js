let ratingTab = document.querySelector(".rating-tab");
let responseTab = document.querySelector(".response-tab");
let submit = document.querySelector(".rating-form__submit");
let checked;

const buttons = document.getElementsByClassName("rate__button");
let buttonsArray = Array.from(buttons);

for (let i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", (event) => {
    event.preventDefault();
    checked = buttonsArray[i].id;
    buttonsArray[i].classList.add("rate__button_checked");
    for (let j = 0; j < buttonsArray.length; j++) {
      if (buttonsArray[j].id !== checked) {
        buttonsArray[j].classList.remove("rate__button_checked");
      }
    }
    console.log(checked);
  });
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  if (checked !== undefined) {
    ratingTab.style.display = "none";
    responseTab.style.display = "flex";
    document.querySelector(".grade").innerHTML = checked + " ";
  }
});
