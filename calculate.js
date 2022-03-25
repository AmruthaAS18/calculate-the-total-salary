let calculate={
    n1: 0,
    n2: 0,

    read: ()=>{
                n1=prompt('enter first num');
                n2=prompt('enter second num');
                console.log(n1,n2);

    },

    add: ()=>{
              console.log(num(n1)+num(n2));
    },

    multiply: ()=>{
                    console.log(num(n1)+num(n2));
    }
}
    calculate.read();
    calculate.add();
    calculate.multiply();