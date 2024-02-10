<?php
// Specify the directory where you want to store the uploaded files
$uploadDirectory = 'videos/';

// Check if the upload directory exists, if not, create it
if (!file_exists($uploadDirectory)) {
    mkdir($uploadDirectory, 0777, true); // Create the directory recursively
}

// Check if form is submitted and files are uploaded
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_FILES["files"]["name"][0])) {
    // Loop through each uploaded file
    foreach ($_FILES["files"]["tmp_name"] as $key => $tmpName) {
        // Get the file name and destination path
        $fileName = $_FILES["files"]["name"][$key];
        $destination = $uploadDirectory . $fileName;

        // Move the uploaded file to the destination directory
        if (move_uploaded_file($tmpName, $destination)) {
            echo "File uploaded successfully: $fileName<br>";
        } else {
            echo "Error uploading file: $fileName<br>";
        }
    }
} else {
    // No files uploaded or form not submitted
    echo "No files uploaded or form not submitted.";
}
?>
