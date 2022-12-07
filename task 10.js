let first = '01/25/2020';
let second = 'January 15, 2020';
 
let x = new Date(first);
let y = new Date(second);
 
 
const diffInDays = Math.floor((x - y) / (1000 * 60 * 60 * 24));
console.log(diffInDays)
