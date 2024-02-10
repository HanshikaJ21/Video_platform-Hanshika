<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // User is not logged in
    echo json_encode(['timestamp' => null]); // Return null timestamp
    exit();
}

// Connect to the database
// Include database connection configuration file
include 'db_config.php';

// Retrieve last-watched video timestamp for the logged-in user from the database
$user_id = $_SESSION['user_id'];
$sql = "SELECT last_watched_timestamp FROM user_videos WHERE user_id = $user_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of the first row
    $row = $result->fetch_assoc();
    $last_watched_timestamp = $row["last_watched_timestamp"];
} else {
    // No last-watched video timestamp found for the user
    $last_watched_timestamp = null;
}

// Close database connection
$conn->close();

// Output the last-watched timestamp as a JSON object
echo json_encode(['timestamp' => $last_watched_timestamp]);
?>
