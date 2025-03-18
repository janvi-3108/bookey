<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "bookey");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get user input
$email = $_POST["email"];
$password = $_POST["pass"];

// Fetch user data
$query = "SELECT * FROM user WHERE email = '$email' AND pass = '$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hashed_pass = $row["pass"];

    // Verify password
    if ($password == $hashed_pass) {
        echo "<script>window.location.href = '/bookey/mainpage.html';</script>";
    } else {
        echo "<p style='color:red;'>Invalid email or password!</p>";
    }
} else {
    echo "<p style='color:red;'>User not found!</p>";
}

$conn->close();
?>