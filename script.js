// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Get the button and the list from the HTML
    const generateBtn = document.getElementById('generateBtn');
    const numberList = document.getElementById('numberList');

    // 2. Create the function to generate numbers
    function generateNumbers() {
        
        // Clear any old numbers from the list
        numberList.innerHTML = '';
        
        const prefix = '18000';

        // 3. Loop 10 times
        for (let i = 0; i < 10; i++) {
            
            // Generate a random number between 0 and 999999
            let randomSuffix = Math.floor(Math.random() * 1000000);
            
            // Pad it with leading zeros to make it 6 digits long
            // (e.g., 42 becomes "000042")
            let suffix = String(randomSuffix).padStart(6, '0');
            
            // Combine with the prefix
            let fullNumber = prefix + suffix;
            
            // Create a new list item (<li>) element
            let listItem = document.createElement('li');
            
            // Set its text to the new number
            listItem.textContent = fullNumber;
            
            // Add the new item to the list in the HTML
            numberList.appendChild(listItem);
        }
    }

    // 4. Tell the button to run our function when it's clicked
    generateBtn.addEventListener('click', generateNumbers);
});
