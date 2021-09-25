const now = new Date();

//below will give false value
//const now = new Date(72548796);

console.log(dateFns.isToday(now));

//use dateFns library to format date and time
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

//comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));