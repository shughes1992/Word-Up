import { prototype } from "stream";


// Contains a constructor, Word that depends on the Letter constructor. This is used to create 
// an object representing the current word the user is attempting to guess. 

// That means the constructor should define:
// * An array of `new` Letter objects representing the letters of the underlying word
// * A function that returns a string representing the word. This should call the function on each


//  letter object (the first function defined in `Letter.js`) that displays the character or an 
//  underscore and concatenate those together.* A function that takes a character as an argument and calls the 
//  guess function on each letter object (the second function defined in `Letter.js`)


var inquirer = require("inquirer");

function Letter(char) {
    this.visible= !/[a-z1-9]/i.test(char);
    this.char = char;
}

Letter.prototype.toString = function() {
    if (this.visible === true) {
        return this.char;
    }

    return "_";
}