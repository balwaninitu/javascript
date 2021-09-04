const scores = [10, 90, 0, 40, 60, 10, 20, 100];
//only find first num which is higher than 50
const firstHighScore = scores.find(score => score > 50);

console.log(firstHighScore);