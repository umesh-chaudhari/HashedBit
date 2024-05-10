const even = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
const calculate = (operation, num1, num2) => {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero!";
            }
            break;
        default:
            result = "Error: Invalid operation!";
    }
    return result;
}
const findTax = (salary) => {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
     
        taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3; 
            break;
        default:
            return "Invalid salary!";
    }
    return salary * taxRate;
}


const sumOfProducts = (n1, n2) =>{
    let sum = 0
    const num1 = n1.toString().split('').map(Number)
    const num2 = n2.toString().split('').map(Number)
    
    const maxLength = Math.max(num1.length, num2.length)

    for(let i = 0; i<maxLength; i++){
        const digit1 = num1[num1.length - 1 - i] || 0
        const digit2 = num2[num1.length - 1 - i] || 0
        sum = sum + digit1*digit2 
    }
    return sum
}