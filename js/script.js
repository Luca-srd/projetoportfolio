const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener("submit", (event) => {
  event.preventeDefault();
  nameValidate();
  emailValidate();
  console.log("asdasa");
});

function setError(index) {
  campos[index].style.border = "2px solid #e63636";
  spans[index].style.display = "block";
}
function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}
function nameValidate() {
  if (campos[0].value.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}
function emailValidate() {
  if (emailRegex.teste(campos[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}
function assuntoValidate() {
  if (campos[2].value.length < 9) {
    setError(2);
  } else {
    removeError(2);
  }
}
function menssgemValidate() {
  if (campos[3].value.length < 6) {
    setError(3);
  } else {
    removeError(3);
  }
}
