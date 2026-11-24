let formulari = document.getElementById("formulari");

formulari.addEventListener("submit", function (event) {
  event.preventDefault();

  let usuari = document.getElementById("usuari");
  let correu = document.getElementById("correu");
  let contrasenya = document.getElementById("contrasenya");
  let error = document.getElementById("error");

  // treure la vora vermella d'abans
  usuari.style.border = "";
  usuari.removeAttribute("aria-invalid");
  correu.style.border = "";
  correu.removeAttribute("aria-invalid");
  contrasenya.style.border = "";
  contrasenya.removeAttribute("aria-invalid");

  if (usuari.value == "") {
    error.innerHTML = "Error: has d'escriure un nom d'usuari";
    usuari.style.border = "3px solid red";
    usuari.setAttribute("aria-invalid", "true");
  } else if (correu.value == "") {
    error.innerHTML = "Error: has d'escriure el correu";
    correu.style.border = "3px solid red";
    correu.setAttribute("aria-invalid", "true");
  } else if (!correu.value.includes("@")) {
    error.innerHTML = "Error: el correu ha de tenir una @ (ex: nom@gmail.com)";
    correu.style.border = "3px solid red";
    correu.setAttribute("aria-invalid", "true");
  } else if (contrasenya.value.length < 8) {
    error.innerHTML = "Error: la contrasenya ha de tenir minim 8 caracters";
    contrasenya.style.border = "3px solid red";
    contrasenya.setAttribute("aria-invalid", "true");
  } else {
    error.innerHTML = "Compte creat!";
  }
});
