// write a function that takes in three parameters and returns the sum of those three parameters
function sum(a,b,c){
	return a+b+c
}


console.log(sum(1,2,3))


// given a string, create a function that returns the last character in that string.
// examples:
// "cattywampus" --> s
function lastchar(string){
	var n = string.length
	return string.charAt(n-1)
}

console.log(lastchar("Kevin"))


// write a function that takes in one parameter and returns the cube of that parameter
// examples:
// 3 --> 27
// 4 --> 64

function cube(number){
	return Math.pow(number, 3)
}

console.log(cube(5))

// define a function that takes in a string and reverses it. you are not allowed to
// call the "reverse" function (or any other string functions)

var reversedword = ""

function word(string){
	for(var i=string.length-1; i>=0; i--)
	reversedword += string[i]

		
}


word("kevin") 
console.log(reversedword)

// write a function that takes in two arrays of the same length as parameters. From those two arrays,
// create, then return an object which contains the elements of the first array as keys, and the
// elements of the second array as values.
// examples:
// ["exciting", "exotic"], ["markets", "britain"] --> { exciting: "markets", exotic: "britain" }
// ["a", "b", "c"], ["x", "y", "z"] --> { a: "x", b: "y", c: "z" }

var array1 = ["a", "b", "c"]
var array2 = ["1", "2", "3"]


function toObject(names, values) {
    var result = {};
    for (var i = 0; i < names.length; i++)
         result[names[i]] = values[i];
    return result;
}

console.log(toObject(array1, array2))

// Given an object with keys and values, create two arrays: one which contains the object's keys,
// and one which contains the object's values. Wrap this into a function which takes in one object
// that contains keys and values, and returns a different object that contains two keys. The first key
// should be named "keys" and will have the first array as a value. The second key should be named
// "values" and will have the second array as a value.
// examples:
// { exciting: "markets", exotic: "britain" } --> { keys: ["exciting", "exotic"], values: ["markets", "britain"] }
// { a: "x", b: "y", c: "z" } --> { keys: ["a", "b", "c"], values: ["x", "y", "z"] }

var objet = {
	"a": "1",
	"b": "2",
	"c": "3"
}
function keysAndvalues(object) {

var values = []
var keys = [];
for (var key in object) {
    keys.push(key)
    values.push(object[key]);
}




console.log(keys, values)
}

keysAndvalues(objet)
// OPTIONAL CHALLENGE 1
// write a function that takes in two parameters, x and n, and computes x to the nth power
// you may not use Math.* functions
// OPTIONAL CHALLENGE 2
// Jon has terrible social anxiety, and wishes to sit as far away from everyone as possible.
// Given an array of booleans, where the array represents a row of seated people, and each
// boolean represents whether the seat is occupied or not, find the ideal seat for Jon.