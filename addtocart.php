<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "bookstore");

if ($conn->connect_error) {
    die(json_encode(["message" => "Database connection failed!"]));
}

// Get data from fetch
$title = $_POST['title'];
$price = $_POST['price'];
$image = $_POST['image'];

// Insert data into cart table
$sql = "INSERT INTO cart (title, price, image) VALUES ('$title', '$price', '$image')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Added to cart successfully!"]);
} else {
    echo json_encode(["message" => "Error adding to cart"]);
}

$conn->close();
?>
