document.addEventListener('DOMContentLoaded', function () {

    function myRegisterStudent(form) {
        var formData = new FormData(form);

        fetch("request.php", {
            method: "POST",
            body: formData
        })
        .then(function(response) {
            if (!response.ok) {
                console.error("Réponse non OK :", response);
                throw new Error("Erreur lors de la requête.");
            }
        })
        .then(function(data) {
            // Traitez la réponse ici
            if (data === "success") {
                // L'insertion a réussi
                alert("Étudiant enregistré avec succès !");
            } else {
                // L'insertion a échoué, data contiendra un message d'erreur
                alert("Erreur lors de l'enregistrement de l'étudiant : " + data);
            }
        })
        .catch(function(error) {
            // Gestion des erreurs
            alert("Erreur : " + error.message);
        });

    }
        var submitButton = document.getElementById("submit-btn");
        var form = document.getElementById("form-add-student");
        submitButton.addEventListener("click", function(event) {
            event.preventDefault();
            myRegisterStudent(form);
        });
        
});
