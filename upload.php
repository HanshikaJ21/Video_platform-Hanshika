<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Videos</title>
    <link rel="stylesheet" href="styles_upload.css">
</head>
<body>
    <header>
        <div class="header-container">
            <h1>My Video Platform</h1>
            <nav>
                <ul>
                    <li><a href="upload.php">Upload Videos</a></li>
                    <li><a href="video_player.html">Video Player</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="upload-container">
        <h2>Upload Videos</h2>
        <div class="upload-area" id="uploadArea">
            <i class="fas fa-cloud-upload-alt upload-icon"></i>
            <p class="upload-text">Drag and drop videos here or <span class="click-text" id="clickToSelect">click to select files</span></p>
            <input type="file" id="fileInput" multiple>
        </div>
        <ul id="fileList"></ul>
        <button type="button" id="uploadButton">Upload</button>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
    <script src="upload.js"></script>
</body>
</html>
