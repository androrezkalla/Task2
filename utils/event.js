import { add } from "./math";
import { multipy } from "./math";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const updateWithAddedNumbers = () => {
        if (!number1.value || !number2.value) {
            result.innerHTML = 'Error: Missing input';
            return;
        }
        else{
            result.innerHTML = 'The sum is: ' + add(number1.value,number2.value);
        }
    }

    const updateWithMultNumbers = () => {
        if (!number1.value || !number2.value) {
            result.innerHTML = 'Error: Missing input';
            return;
        }
        else{
            result.innerHTML = 'The product is:  ' + multipy(number1.value,number2.value);
        }  
    }

    addButton.addEventListener('click', updateWithAddedNumbers);
    multiplyButton.addEventListener('click', updateWithMultNumbers);
}

export {eventHandler}