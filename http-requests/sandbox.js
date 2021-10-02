 //make http request to get data from another server
 //we make these requests to API end points

//wrap up below code in function for reusability
const getTodos = (resource , callback) => {
 //create request object
 const request = new XMLHttpRequest();

 //attach eventlistener to get data
  //ready state meaning changes in request
  //listen until readystate is 4
  request.addEventListener('readystatechange', () => {
      //console.log(request, request.readyState);
      if(request.readyState == 4 && request.status == 200){
          //parse method takes json and convert it into js object
          const data = JSON.parse(request.responseText);
          callback(undefined, data);
          //it will return data on console
          //console.log(request.responseText)
      } else if(request.readyState == 4) {
          console.log('could not fetch the data');
           callback('could not fetch data', undefined);

      }
  });

 //setting up request
//  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//  //send request
//  request.send();
//};

//setting up request
request.open('GET', resource);
//send request
request.send();
};



//define callback function to do specific task with data
//specify callback function
getTodos('json/luigi.json', (err, data) => {
    console.log(data);
getTodos('json/mario.json', (err, data) => {
        console.log(data);
getTodos('json/shaun.json', (err, data) => {
            console.log(data);
   
   });

  });
});