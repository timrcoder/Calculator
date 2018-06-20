
// let counter = 0
// let firstValue
// let secondValue
// let operationValue
// function calculate(x) {
//     counter +=1
//     if ((counter % 2) === 0) {
//         secondValue = x
//         if ((operationValue=== "multiply")){
//             console.log(firstValue * secondValue);
//         }
//     } else {
//         firstValue = x
//         console.log(firstValue);
//     }
// }
// function chooseOperation(x) {
//     operationValue = x
// }
//=========================================


let counter = 0
let firstValue
let secondValue
let operationValue

function calculate(val) {
    counter += 1
    if ((counter % 2) === 0) {
        // If odd
        console.log(operationValue)
        if (operationValue === 'add') {
            console.log(firstValue + val)
        }
        else if (operationValue === 'subtract') {
            console.log(firstValue - val)
        }
        else if (operationValue === 'divide') {
            console.log(firstValue / val)
        }
    } else {
        // If even
        firstValue = val;
    }
}

function chooseOperation(operation) {
    operationValue = operation;
}

