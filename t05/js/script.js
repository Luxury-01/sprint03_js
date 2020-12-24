function Calculator() {
    this.result = 0;

    this.init = function(num) {
        this.result = num;
        return this; 
    }
    this.add = function(num) {
        this.result += num;
        return this;
    }
    this.sub = function(num) {
        this.result -= num;
        return this;
    }
    this.mul = function(num) {
        this.result *= num;
        return this;
    }
    this.div = function(num) {
        this.result /= num;
        return this;
    }
    this.alert = function() {
        return setTimeout(() => alert(this.result), 5000);
    }
}

const calc = new Calculator();
console.log(
    calc
        .init(2)
        .add(2)
        .mul(3)
        .div(4) 
        .sub(2).result // 1
); 

calc.alert();







































// https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f
// https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4