// const correctAnswers = ['B', 'B', 'B', 'B'];
// const form = document.querySelector('.quiz-form');

// form.addEventListener('submit', e => {
//     //default action is to refresh page we dont want them
//     e.preventDefault();

//     let score = 0;
//     const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//     //check answers
//     userAnswers.forEach((answer, index) => {
//         //check input answer with given answer and accordingly add score
//         if(answer === correctAnswers[index]){
//             score += 25;
//         }
//     });

//     console.log(score);
// });

const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

  // log the score to console
  //console.log(score);

  //show result on page
  //scrollto takes two args x and y
  scrollTo(0,0);
  result.querySelector('span').textContent = `${score}%`;
  result.classList.remove('d-done');

  let output = 0;
  const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;
      if(output === score){
          clearInterval(timer);
      }else {
          output++;
      }
  }, 10);

});

//window object

// setTimeout(() => {
//     alert('hello, ninjas');
// }, 3000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i === 5){
// clearInterval(timer);
//     }
    
// }, 1000);