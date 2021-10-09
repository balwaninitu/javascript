//constructor functions
function User(username, email){
this.username = username;
this.email = email;
// this.login = function(){
//     console.log(`${this.username} has logged in`);
};


User.prototype.login = function(){
    console.log(`${this.username} has logged in`)
    return this;
};

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`)
    return this;
};

function Admin(username, email, title){

    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){

};

// class User{
//     constructor(username, email){
//         //set up properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
   
const userOne = new User('mario', 'mario@co.sg');
const userTwo = new User('luigi', 'luigi@co.sg');
const userThree = new Admin('nitu', 'nitu@co.sg', 'black-belt');

console.log(userOne, userTwo, userThree);
userOne.login().logout();
userOne.logout();
