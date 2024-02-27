"use strict";
// Function to show magicians' names
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Function to make magicians great
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Array of magician's names
let magicians = ['David Copperfield', 'Harry Houdini', 'Penn Jillette', 'Teller'];
// Call the function to make magicians great with a copy of the array
let great_magicians = make_great([...magicians]);
// Call the function to show original magicians' names
console.log("Original Magicians:");
show_magicians(magicians);
// Call the function to show magicians' names after modification
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
