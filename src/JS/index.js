const calculator = {
    plus:function(a, b){
        return a + b;
    },
    minus:function(a, b){
        return a - b;
    },
    multiplicate:function(a, b){
        return a * b;
    },
    divide:function(a, b){
        return a / b;
    },
    power:function(a, b){
        return a ** b;
    }
}

var num = calculator.minus(5, 3);

console.log(num);