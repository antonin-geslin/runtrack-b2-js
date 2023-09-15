<?php 

error_reporting(E_ALL);
ini_set('display_errors', 1);
function my_insert_student(string $email, string $fullname, string $gender, int $gradeId, DateTime $birthdate) : bool{
        $formattedBirthdate = $birthdate->format('Y-m-d');
        $bdd = new PDO('mysql:host=localhost;dbname=lp_official;charset=utf8', 'root', 'root');
        $requete = $bdd->prepare("INSERT INTO student (grade_id, email, fullname, birthdate, gender) VALUES (:grade_id, :email, :fullname, :birthdate, :gender)");
        $requete->bindParam(':email', $email);
        $requete->bindParam(':fullname', $fullname);
        $requete->bindParam(':gender', $gender);
        $requete->bindParam(':birthdate', $formattedBirthdate);
        $requete->bindParam(':grade_id', $gradeId);
        $requete->execute();
        if ($requete->execute()) {
            return(true);
        }
        return false;   
    }

?>