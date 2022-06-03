const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// first map this array multiplied by 2 and filter the mapped   
// array by the ages that are greater or equal to 40 then sort 
// them in an ascending order then add all of them up so that they give you
// a total of  798 try to do this on one line.


const total = ages.map(mult => mult*2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((sum,acc) => sum + acc );

console.log(total);