// Code your solutions in this file
function writeCards(names, event) {
  const greetings = [];
  for (let index = 0; index < names.length; index++) {
    greetings.push(`Thank you, ${names[index]}, for the wonderful ${event} gift!`);
  }
  return greetings;
}

function countdown(num) {
  while (num >=0) {
    console.log(num);
    num--;
  }
}