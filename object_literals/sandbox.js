// object literals

let user = {

    name: 'crystal',
    age: 30,
    email: 'abc@example.com',
    location: 'usa',
    blogs: ['rules of law', 'gravity law'],
    // login: function () {
    //regular short hand function can also written as
    login() {
        console.log("user logged in");
    },
    logout() {
        console.log("user logged out")
    },
    //arrow function doesnt work with this keyword
    logBlogs() {
        console.log("This user has written following blogs");
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }

};

console.log(user);

console.log(user.name);

//another way
console.log(user['name']);
console.log(user['email']);

user['name'] = 'saffire';
console.log(user['name']);

console.log(typeof user);

user.login();

user.logout();

user.logBlogs();
//console.log(this);

