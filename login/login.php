<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "bookey");

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email=$_POST["email"];
$pass=$_POST["pass"];
$cnpass=$_POST["cnpass"];

if($pass!==$cnpass)
{
    echo "<p style='color: red;'>Passwords do not match!</p>";
}
else{
    echo "<script>window.location.href = '/bookey/mainpage.html';</script>";
}

$query = "INSERT INTO user (email, pass) VALUES ('$email', '$pass')";

    $result = $conn->query($query);
    if($result->num_rows > 0) {
            echo "New record created successfully";
            } 
    $conn->close();

?>