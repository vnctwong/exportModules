/*
Create a module that exports a function that takes a number as a
parameter and stores it in a list. The list should not be accessible
from outside the module.

Export another function that returns a version of the data list that
is sorted in ascending order. The function you use to sort the data
orrectly should not be accessible from outside the module.
(Think back to the Custom Sorting Exercise when handling sorting)

Implement a Node.js script that imports the functionality of your
module, adds at least 5 different data points to the module's data
list, and outputs the sorted list. */


var recieveModules = require("./exportModules");
// recieves sorted list

var dataPoints = [3, 6, 8, 9, 4];

//use loop to add data points to list *use recieveModules

dataPoints.forEach(function (i) {
  recieveModules.storeList(i);
});

//sort and print list

console.log(recieveModules.returnList());
console.log(recieveModules.storeList());



// module.exports = {
//   storeList: function storeListFunction(num) {
//     return list.push([]); //correct [] syntax?
//   },
//   returnList: function returnListFunction() {
//     return list.sort();
//   }


