document.addEventListener('DOMContentLoaded', function () {

function myRegisterStudent(form) {
    var email = form.querySelector("#student-mail").value;
    console.log(email);
    var fullname = form.querySelector("#student-fullname").value;
    console.log(fullname);
    var gender = form.querySelector("#student-gender").value;
    console.log(gender);
    var grade = form.querySelector("#student-grade").value;
    console.log(grade);
    var birthdate = form.querySelector("#student-birthdate").value;
    console.log(birthdate);

    var formData = new FormData(form);

    fetch("request.php", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        // Traitement de la réponse de request.php
    })
    .catch(function(error) {
        // Gestion des erreurs
    });

}
    var submitButton = document.getElementById("submit-btn");
    var form = document.getElementById("form-add-student");
    submitButton.addEventListener("click", myRegisterStudent(form));
});
