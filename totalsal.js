//  calculate the total salary (task 2)
let salaries={
    John:1500,
    pete:2000,
    vignesh:4500,
    amy:5000
}
let sum=0;
for(let sal in salaries)
{
    sum += salaries[sal];
}
console.log('sum is:',sum);