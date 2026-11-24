let formulari = document.getElementById("formulari");

formulari.addEventListener("submit", function (event) {
  event.preventDefault();

  let correu = document.getElementById("correu");
  let contrasenya = document.getElementById("contrasenya");
  let error = document.getElementById("error");

  // treure la vora vermella d'abans
  correu.style.border = "";
  correu.removeAttribute("aria-invalid");
  contrasenya.style.border = "";
  contrasenya.removeAttribute("aria-invalid");

  if (correu.value == "") {
    error.innerHTML = "Error: has d'escriure el correu";
    correu.style.border = "3px solid red";
    correu.setAttribute("aria-invalid", "true");
  } else if (!correu.value.includes("@")) {
    error.innerHTML = "Error: el correu ha de tenir una @ (ex: nom@gmail.com)";
    correu.style.border = "3px solid red";
    correu.setAttribute("aria-invalid", "true");
  } else if (contrasenya.value == "") {
    error.innerHTML = "Error: has d'escriure la contrasenya";
    contrasenya.style.border = "3px solid red";
    contrasenya.setAttribute("aria-invalid", "true");
  } else {
    error.innerHTML = "Dades correctes!";
  }
});
