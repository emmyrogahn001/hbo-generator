document.addEventListener('DOMContentLoaded', () => {

 
    const generateBtns = document.querySelectorAll('.generateBtn');
    const numberList = document.getElementById('numberList');

 
    function generateNumbers(prefix) {
        
        // Clear any old numbers from the list
        numberList.innerHTML = '';
        

        for (let i = 0; i < 10; i++) {
            
          
            let randomSuffix = Math.floor(Math.random() * 1000000);
            
           
            let suffix = String(randomSuffix).padStart(6, '0');
            
         
            let fullNumber = prefix + suffix;
            
            // Create and add the new list item
            let listItem = document.createElement('li');
            listItem.textContent = fullNumber;
            numberList.appendChild(listItem);
        }
    }

    generateBtns.forEach(button => {
        button.addEventListener('click', () => {
            
            const prefix = button.dataset.prefix;
            
         
            generateNumbers(prefix);
        });
    });
});
