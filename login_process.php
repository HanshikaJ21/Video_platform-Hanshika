<?php
include 'db_config.php';

$valid_username = "admin";
$valid_password = "password";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate username and password
    if ($username === $valid_username && $password === $valid_password) {
        // Redirect to video upload page upon successful login
        header("Location: upload.php");
        exit();
    } else {
        // Redirect back to login page with error message
        header("Location: login.php?error=invalid_credentials");
        exit();
    }
}
?>
