const openPopUp = document.getElementById("open-pop-up");
const closePoUp = document.getElementById("close-pop-up");
const popUp = document.getElementById("pop-up");

openPopUp.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("active");
})

closePoUp.addEventListener("click", () => {
  popUp.classList.remove("active");
})
