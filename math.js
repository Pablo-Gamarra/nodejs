
const Math = {};

function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if(x2 === 0){
        console.log('No se puede dividir entre 0');
    }else{
        return x1 / x2
    }
}

/*
console.log(add(1,2));
console.log(substract(3,1));
console.log(multiply(3,2));
console.log(divide(6,2));
console.log(divide(2,0));
*/

/*
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;
