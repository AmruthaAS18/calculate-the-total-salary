//multiply no by 2 (task 3)
let pageInfo={
    width:500,
    height:500,
    title:"My Page"
}

let tot_sum=0;

for(let amount in pageInfo){
    if(typeof pageInfo[amount] == 'number'){
        tot_sum += pageInfo[amount];
    }
}
console.log('total amount:',tot_sum);
