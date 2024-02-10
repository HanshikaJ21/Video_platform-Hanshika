<?php
// Database configuration
$dbHost = 'localhost'; // Change this if your MySQL server is hosted elsewhere
$dbUsername = 'root'; // Change this if your MySQL username is different
$dbPassword = ''; // Change this if your MySQL password is different
$dbName = 'video_platform'; // Change this to the name of your database

// Create a database connection
$conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
