let formulari = document.getElementById("formulari");

formulari.addEventListener("submit", function (event) {
  event.preventDefault();

  let correu = document.getElementById("correu");
  let contrasenya = document.getElementById("contrasenya");
  let error = document.getElementById("error");

  // treure la vora vermella d'abans
  correu.style.border = "none";
  contrasenya.style.border = "none";

  if (correu.value == "") {
    error.innerHTML = "Error: has d'escriure el correu";
    correu.style.border = "3px solid red";
  } else if (!correu.value.includes("@")) {
    error.innerHTML = "Error: el correu ha de tenir una @";
    correu.style.border = "3px solid red";
  } else if (contrasenya.value == "") {
    error.innerHTML = "Error: has d'escriure la contrasenya";
    contrasenya.style.border = "3px solid red";
  } else {
    error.innerHTML = "Dades correctes!";
  }
});
