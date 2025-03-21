// let rn = prompt("Input number of rows");
// let cn = prompt("Input number of columns");

let rn = 3;
let cn = 4;

if(parseInt(rn) <= 0 || parseInt(cn) <= 0){
	alert("Please enter a valid row and column number.");
}

const table = document.querySelector("#myTable");

function createTable() {
    //Write your code here
	let table = document.getElementById("myTable");
    table.innerHTML = ""; // Clear existing table

    // Create rows and columns
    for (let i = 0; i < rn; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cn; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
