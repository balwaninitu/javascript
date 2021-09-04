const scores = [10,30,15,25,50,40,5];

//filter method takes call back function
//filtering any number in array which is over 20
const filteredScores = scores.filter((score) => {
return score > 20;
});

console.log(filteredScores);


const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];

  //use filter method to find out list of premium member
//   const premiumUsers = users.filter((user) => {
//       return user.premium;
  //});

  //OR

  const premiumUsers = users.filter(user =>  user.premium);



  console.log(premiumUsers);
  