 //make http request to get data from another server
 //we make these requests to API end points

 //create request object
 const request = new XMLHttpRequest();

 //attach eventlistener to get data
  //ready state meaning changes in request
  //listen until readystate is 4
  request.addEventListener('readystatechange', () => {
      //console.log(request, request.readyState);
      if(request.readyState == 4){
          //it will return data on console
          console.log(request.responseText)
      }
  })



 //setting up request
 request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
 //send request
 request.send();
