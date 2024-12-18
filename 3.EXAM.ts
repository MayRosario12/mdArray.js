let subArray1Input = prompt("Genevieve,Juan,Luna,Gabriel,Elise");
let subArray2Input = prompt("24,65,21,5,9)");

let subArray1 = subArray1Input.split('Genevieve,Juan,Luna,Gabriel,Elise'); 
let subArray2 = subArray2Input.split('24,65,21,5,9').map(Number);

// Restructure the arrays into a new multi-dimensional array where each sub-array contains [name, age]
let restructuredArray = subArray1.map((name, index) => [name, subArray2[index]]);

// Log the restructured array
restructuredArray.forEach(subArray => {
    console.log(subArray);
});