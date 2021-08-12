
const blogs = [
    { title: 'rules of law', likes: 30 },
    { title: 'gravity law', likes: 20 }
];

console.log(blogs);


let user = {

    name: 'crystal',
    age: 30,
    email: 'abc@example.com',
    location: 'usa',
    blogs: ['rules of law', 'gravity law'],


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
            console.log(blog.title, blog.likes);
        });
    }

};

