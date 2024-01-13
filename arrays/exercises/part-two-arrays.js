let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’.
cargoHold[5] = "space tether";
//Print the array to confirm the change.
console.log(cargoHold);

//2) Remove the last item from the array with pop. 
//Print the element removed and the updated array.
console.log(cargoHold.pop());

//3) Remove the first item from the array with shift.
//Print the element removed and the updated array.
console.log(cargoHold.shift());

//4) Unlike pop and shift, push and unshift require arguments inside the (). 
//   Add the items 1138 and ‘20 meters’ to the the array -
//   the number at the start and the string at the end. 
//   Print the updated array to confirm the changes.
cargoHold.unshift(1138).push('20 meters');
console.log(cargoHold);
//5) Use a template literal to print the final array and its length.
console.log(cargoHold, cargoHold.length);
