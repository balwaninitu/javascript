
//fetch api
//steps => fetch data get the response and return fire function which has data
fetch('json/luigi.json').then((response) => {
console.log('resolve', response)
//it return promise which can be rejected or resolve
return response.json();
}).then(data => {
    console.log(data);

}).catch((err) => {
    console.log('rejected', err);

});