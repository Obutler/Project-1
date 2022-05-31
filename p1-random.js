/*
    CIT 281 Project 1 (pt2)
    Name: Olivia Butler
*/

// output to the console a string of random length between 5-25 chars.

// Returns a random number between min (inclusive) and max (exclusive)


function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let stringLen = getRandomInteger(5,25);

function randomStr() {
  let str = "";
  const chars = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i <= stringLen; i++)
    str += chars.charAt(Math.floor(Math.random() * chars.length));

  return str;
}
console.log(randomStr(stringLen));
