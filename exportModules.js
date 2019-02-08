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

//define list
var list = [];


module.exports = {
  storeList: function(num) {
    //takes a # and stores in a list
    //function must define outside module
    storeListFunction(num);
  },
  returnList: function() {
    //list.sort list in ascending order
    //function must define outside module
    return returnListFunction();
  }

};

//define function storeListFunction
function storeListFunction(num) {
  list.push(num); //correct [] syntax?
};

//define returnListFunction
function returnListFunction() {
  return list.sort(function(a,b) {
    return a - b;
  });
}