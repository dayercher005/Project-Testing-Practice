function capitalize(string){

    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string){

    return string.split('').reverse().join('');
}

const Calculator = () => { 

    const add = (firstNumber, secondNumber) => {
        return firstNumber + secondNumber;
    }

    const subtract =(firstNumber, secondNumber) => {
        return firstNumber - secondNumber;
    }

    const divide = (firstNumber, secondNumber) => {
        return firstNumber / secondNumber;;
    }

    const multiply = (firstNumber, secondNumber) =>{
        return firstNumber * secondNumber;
    }

    return {add, subtract, divide, multiply};
}

function caesarCipher(string, number){

}

function analyzeArray(array){

    const sortedArray = array.sort();

    const arrayLength = array.length;
    const smallestNumber = sortedArray[0];
    const largestNumber = sortedArray[arrayLength - 1];
    const sumOfAllNumbers = array.reduce((total, current) => {
        return total + current;
    }, 0);
    const average = sumOfAllNumbers / arrayLength;
    
    const returnObject = {
        "average": average,
        "min": smallestNumber,
        "max": largestNumber,
        "length": arrayLength
    };

    return returnObject;
}

module.exports = {capitalize, reverseString, Calculator, caesarCipher, analyzeArray};