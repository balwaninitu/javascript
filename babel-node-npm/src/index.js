import {styleBody, addTitle, contact} from  './dom';
import { addTitle } from './dom';

import users, {getPremUsers} from './data';

const premUsers = getPremUsers(users);

console.log(users, premUsers);

console.log('index file');
addTitle('test');
styleBody();
console.log(contact);



// const greet = name => {
//     console.log(`hello ${name}`);
//   };
  
//   greet('mario');
//   greet('luigi');
//   greet('link');

//   class User{
//     constructor(){
//       this.score = 0;
//     }
//   }