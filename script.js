//your JS code here. If required.
// Get references to the HTML elements
const num1Input = document.getElementById('n1');
const num2Input = document.getElementById('n2');
const calculateBtn = document.getElementById('sum_btn');
const resultDisplay = document.getElementById('sum');

// Add click event listener to the button
calculateBtn.addEventListener('click', function() {
    // Get the values from the inputs
    const value1 = num1Input.value;
    const value2 = num2Input.value;

    // Check if both inputs have values
    if (value1 !== "" && value2 !== "") {
        // Convert strings to numbers and calculate sum
        const total = Number(value1) + Number(value2);
        
        // Display the sum
        resultDisplay.textContent = total;
    } else {
        // Clear the display if inputs are empty
        resultDisplay.textContent = "";
    }
});