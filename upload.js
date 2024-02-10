document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clickToSelect').addEventListener('click', function() {
        document.getElementById('fileInput').click(); // Trigger the file input click event
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get upload area and file input
    var uploadArea = document.getElementById('uploadArea');
    var fileInput = document.getElementById('fileInput');
    var uploadButton = document.getElementById('uploadButton');

    // Add event listeners for drag and drop events
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragenter', handleDragEnter);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);

    // Prevent default behavior for dragover event
    function handleDragOver(event) {
        event.preventDefault();
    }

    // Highlight upload area when file dragged over
    function handleDragEnter(event) {
        uploadArea.classList.add('drag-over');
    }

    // Remove highlight when file dragged out
    function handleDragLeave(event) {
        uploadArea.classList.remove('drag-over');
    }

    // Handle file drop
    function handleDrop(event) {
        event.preventDefault();
        uploadArea.classList.remove('drag-over');

        var files = event.dataTransfer.files;
        handleFiles(files);
    }

    // Handle selected files (same logic as file input change event)
    fileInput.addEventListener('change', function(event) {
        var files = event.target.files;
        handleFiles(files);
    });

    // Function to handle dropped or selected files
    function handleFiles(files) {
        var fileList = document.getElementById('fileList');
        fileList.innerHTML = ''; // Clear previous file list

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var listItem = document.createElement('li');
            listItem.textContent = file.name;
            fileList.appendChild(listItem);
        }
    }

    // Upload button click event handler
    uploadButton.addEventListener('click', function() {
        // Retrieve the file(s) selected by the user
        var files = fileInput.files;

        // Create a FormData object to send the file(s) to the server
        var formData = new FormData();

        // Add each file to the FormData object
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            formData.append('files[]', file);
        }

        // Send the files to the server using XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'upload_process.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Upload successful
                console.log(xhr.responseText);
                alert('Upload successful!');
            } else {
                // Error occurred
                console.error('Error occurred during upload.');
                alert('Error occurred during upload. Please try again.');
            }
        };
        xhr.send(formData);
    });
});
