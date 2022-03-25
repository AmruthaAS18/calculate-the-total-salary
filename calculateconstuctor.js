function Calclator(){
    this.read=function()
    {
        this.num1=+prompt('num1');
        this.num2=+prompt('num2');
    };
     
    this.sum=function(){
        return this.num1 + this.num2;
    };

    this.mul=function(){
       return this.num1 * this.num2;
   };
   }


let calculator=new Calculator();
calculator.read();

alert("sum=" + calculator.sum());
alert("mul=" + calculator.mul());
