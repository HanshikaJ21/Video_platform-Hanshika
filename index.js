// JavaScript for the slider/carousel
document.addEventListener("DOMContentLoaded", function() {
    // Get all carousel items
    var carouselItems = document.querySelectorAll(".carousel-item");
    var currentIndex = 0;

    // Show the initial carousel item
    showItem(currentIndex);

    // Function to show a specific carousel item
    function showItem(index) {
        // Hide all carousel items
        carouselItems.forEach(function(item) {
            item.style.display = "none";
        });

        // Show the carousel item at the specified index
        carouselItems[index].style.display = "block";
    }

    // Function to display the next carousel item
    function nextItem() {
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0; // Loop back to the first item
        }
        showItem(currentIndex);
    }

    // Function to display the previous carousel item
    function prevItem() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1; // Go to the last item
        }
        showItem(currentIndex);
    }

    // Set up event listeners for next and previous buttons
    var nextButton = document.getElementById("nextButton");
    var prevButton = document.getElementById("prevButton");

    nextButton.addEventListener("click", nextItem);
    prevButton.addEventListener("click", prevItem);
});

// JavaScript for handling user interaction
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for like, comment, and share buttons
    var likeButton = document.querySelector(".like-btn");
    var commentButton = document.querySelector(".comment-btn");
    var shareButton = document.querySelector(".share-btn");

    likeButton.addEventListener("click", function() {
        // Handle like button click event
        alert("Liked!");
    });

    commentButton.addEventListener("click", function() {
        // Handle comment button click event
        alert("Commented!");
    });

    shareButton.addEventListener("click", function() {
        // Handle share button click event
        alert("Shared!");
    });
});
