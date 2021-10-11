//object literal notation to create object

const userOne = {
    username: 'nitu',
    email: 'nitu@sg.co.sg',
    login(){
        console.log('the user logged in');   
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'ritu',
    email: 'ritu@sg.co.sg',
    login(){
        console.log('the user logged in');   
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

//better approach
const userThree = new User('ridu@sg.co.sg', 'ridu');


