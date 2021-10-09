//constructor functions
function User(username, email){
this.username = username;
this.email = email;
this.login = function(){
    console.log(`${this.username} has logged in`);
}
}


// class User{
//     constructor(username, email){
//         //set up properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
   
const userOne = new User('mario', 'mario@co.sg');
const userTwo = new User('luigi', 'luigi@co.sg');

console.log(userOne, userTwo);
userOne.login();
