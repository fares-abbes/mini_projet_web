// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Your existing code for smooth scrolling and form validation

    // Update dynamic text
    const dynamicTextElement = document.getElementById('dynamic-text');
    if (dynamicTextElement) {
        const dynamicTexts = ['Computer Science Student', 'Web Developer', 'Tech Enthusiast'];
        let currentIndex = 0;

        // Function to update dynamic text
        function updateDynamicText() {
            dynamicTextElement.textContent = dynamicTexts[currentIndex];
            currentIndex = (currentIndex + 1) % dynamicTexts.length;
        }

        // Call the function initially and set an interval for continuous updates
        updateDynamicText();
        setInterval(updateDynamicText, 3000); // Change text every 3 seconds (adjust as needed)
    }
});
