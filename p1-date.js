/*
    CIT 281 Project 1 (pt1)
    Name: Olivia Butler
*/

// Use arrays to grab the day of the week.
// Output to console.

// Manual input method:

// const dayOfWeek = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// today = dayOfWeek[2]; 
// console.log("Today is " + today + ", nice!");


// Grabs day from your local date method:

const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const t = new Date(); 

let today = dayOfWeek[t.getDay()];
console.log("Today is " + today + ", nice!");


