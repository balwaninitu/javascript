//time & date
const now = new Date();

console.log(now);
console.log(typeof now);

//year, months, day, times
console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate());
console.log('getDay', now.getDay());
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());


//timestamps
//displays number of milliseconds since 1 Jan 1970
console.log('timestamp', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());