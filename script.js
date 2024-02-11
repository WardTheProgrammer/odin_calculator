const add = (num1, num2) => {
    return Number(num1) + Number(num2);
}

const subtract = (num1, num2) => {
    return Number(num1) - Number(num2);
}

const multiple = (num1, num2) => {
    return Number(num1) * Number(num2);
}

const divide = (num1, num2) => {
    return Number(num1) / Number(num2);
}

let num1 = '';
let num2 = '';
let operation = '';	


const operate = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiple(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}
