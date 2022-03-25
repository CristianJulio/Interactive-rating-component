const mainContainer = window.document.querySelector(".container")
const thanksContainer = window.document.querySelector(".thanks-container")
const rateButtons = window.document.querySelectorAll(".buttons-container button")
const submitBtn = window.document.querySelector(".submit-btn")
const rateElement = window.document.querySelector(".rate")

let rate = 0

Array.from(rateButtons).forEach((button) => {
  button.addEventListener("click", () => {
    window.document.querySelector(".selected")?.classList.remove("selected")
    button.classList.add("selected")
    rate = Number(button.textContent)
  })
})

submitBtn.addEventListener("click", () => {
  rateElement.textContent = `You selected ${rate} out of 5`
  mainContainer.style.display = "none"
  thanksContainer.style.display = "block"
})