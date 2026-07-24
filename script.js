document.addEventListener('DOMContentLoaded', () => {
    // Select the required elements from the DOM
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Function to generate a random Hex color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add click event listener to the button
    changeColorBtn.addEventListener('click', () => {
        // Generate a random color
        const newColor = getRandomColor();
        // Change the background color of the box
        colorBox.style.backgroundColor = newColor;
    });
});
