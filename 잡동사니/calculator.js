const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    div: function(a, b){
        return a / b;
    },
    mul: function(a, b){
        return a * b;
    },
    power: function(a, b){
        return a ** b;
    },
};

const plusResult = calculator.plus(1,2);
const minusResult = calculator.minus(2,3);
const divResult = calculator.div(3,4);
const mulResult = calculator.power(4,5);
const powerResult = calculator.power(5,6);
console.log(plusResult);
console.log(minusResult);
console.log(divResult);
console.log(mulResult);
console.log(powerResult);
