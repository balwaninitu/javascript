const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];

  //filter out over 20 price
  //map filtered array
// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

//chaining method based on above
//since both method working on array
const promos = products
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds` );


console.log(promos);