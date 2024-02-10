document.addEventListener("DOMContentLoaded", function() {
    // Sample array of uploaded videos with corresponding thumbnail paths
    var uploadedVideos = [
        { id: 1, name: "Video 1", src: "videos/video1.mp4", thumbnail: "thumbnails/tb_1.png" },
        { id: 2, name: "Video 2", src: "videos/video2.mp4", thumbnail: "thumbnails/tb_2.png" },
        { id: 3, name: "Video 3", src: "videos/video3.mp4", thumbnail: "thumbnails/tb_3.png" }
    ];

    // Get the video list element
    var videoList = document.getElementById("videoList");

    // Populate the video list
    uploadedVideos.forEach(function(video) {
        var listItem = document.createElement("li");

        // Create thumbnail image
        var thumbnailImg = document.createElement("img");
        thumbnailImg.src = video.thumbnail; // Set thumbnail image source
        thumbnailImg.alt = "Thumbnail"; // Add alt text for accessibility
        thumbnailImg.classList.add("thumbnail"); // Add thumbnail class
        listItem.appendChild(thumbnailImg); // Append thumbnail image to list item

        // Create video name element
        var videoName = document.createElement("span");
        videoName.textContent = video.name; // Set video name
        listItem.appendChild(videoName); // Append video name to list item

        listItem.addEventListener("click", function() {
            playVideo(video.src); // Play the selected video when list item is clicked
        });

        videoList.appendChild(listItem); // Append list item to video list
    });


    // Function to play the selected video
    function playVideo(videoFile) {
        var videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.src = videoFile;
        videoPlayer.play();
    }

    // Function to skip forward 10 seconds
    document.getElementById("btnForward").addEventListener("click", function() {
        var videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.currentTime += 10;
    });

    // Function to skip backward 10 seconds
    document.getElementById("btnBackward").addEventListener("click", function() {
        var videoPlayer = document.getElementById("videoPlayer");
        videoPlayer.currentTime -= 10;
    });

    // Function to delete the currently playing video
    document.getElementById("btnDelete").addEventListener("click", function() {
        var videoPlayer = document.getElementById("videoPlayer");
        var currentVideoId = parseInt(videoPlayer.dataset.id);

        if (confirm("Are you sure you want to delete this video?")) {
            // Remove the video from the uploadedVideos array
            uploadedVideos = uploadedVideos.filter(function(video) {
                return video.id !== currentVideoId;
            });

            // Remove the video list item
            var listItem = document.querySelector("#videoList li[data-id='" + currentVideoId + "']");
            if (listItem) {
                listItem.remove();
            }

            // Stop the video player
            videoPlayer.pause();
            videoPlayer.src = "";
            videoPlayer.removeAttribute("data-id");
        }
    });
});
