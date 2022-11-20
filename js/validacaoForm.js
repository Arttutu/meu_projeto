const form = document.getElementById("formulario")
const campos = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".span-required")
const icone = document.querySelectorAll(".icon")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

//preve o clik no botao e para e executa as validações
form.addEventListener("submit", (event) => {
  event.preventDefault()
  nameValidate()
  sobreNomeValidate()
  emailValidate()
  senhaValidacao()
})

function setError(index) {
  campos[index].style.border = "2px solid  hsl(0, 100%, 74%)"
  spans[index].style.display = "block"
  icone[index].style.display = "inline-block"
}
function removeError(index) {
  campos[index].style.border = ""
  spans[index].style.display = "none"
  icone[index].style.display = "none"
}

function nameValidate() {
  if (campos[0].value.length == 0) {
    setError(0)
  } else {
    removeError(0)
  }
}
function sobreNomeValidate() {
  if (campos[1].value.length < 3) {
    setError(1)
  } else {
    removeError(1)
  }
}
function emailValidate() {
  if (!emailRegex.test(campos[2].value)) {
    setError(2)
  } else {
    removeError(2)
  }
}
function senhaValidacao() {
  if (campos[3].value.length < 8) {
    setError(3)
  } else {
    removeError(3)
  }
}
