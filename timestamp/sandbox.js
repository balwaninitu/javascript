//timestamps

const before = new Date('Mar 30 2020 7:30:59');
const now = new Date();

console.log(now.getTime(), before.getTime());

//get difference between two timestamps
const diff = now.getTime() - before.getTime();
console.log(diff);

//convert milliseconds to minutes
const mins = Math.round(diff / 1000 / 60);
console.log(mins);

//convert milliseconds to hours
const hours = Math.round(mins / 60);
console.log(hours);

//convert milliseconds to days
const days = Math.round(hours / 24);
console.log(days);

console.log(`The blog was written ${days} days ago`);

//converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));


