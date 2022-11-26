const form = document.getElementById("formulario")
const campos = document.querySelectorAll(".required")
const span = document.querySelectorAll(".span-required")
const email = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

function setError(index) {
  campos[index].style.border = "2px solid hsl(0, 100%, 74%)"
  span[index].style.display = "block"
}
const removeError = (index) => {
  campos[index].style.border = "none"
  span[index].style.display = "none"
}
function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0)
    console.log("erro")
  } else {
    removeError(0)
  }
}
function emailValidate() {
  if (!email.test(campos[1].value)) {
    setError(1)
    console.log("erro email")
  } else {
    removeError(1)
  }
}
