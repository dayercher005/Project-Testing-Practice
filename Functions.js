function capitalize(string){

    return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string){

    return string.split('').reverse().join('');
}

class Calculator{

    constructor(){
        
    }

    add(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }

    subtract(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }

    divide(firstNumber, secondNumber){
        return firstNumber + secondNumber;;
    }

    multiply(firstNumber, secondNumber){
        return firstNumber + secondNumber;
    }

}

function caesarCipher(string, number){

}

function analyzeArray(array){

    const sortedArray = array.sort();

    const arrayLength = array.length;
    const smallestNumber = sortedArray[0];
    const largestNumber = sortedArray[arrayLength - 1];
    
}

module.exports = {capitalize, reverseString, Calculator} 