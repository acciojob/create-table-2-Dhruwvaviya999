let rn = prompt("Input number of rows");
let cn = prompt("Input number of columns");

if(parseInt(rn) <= 0 || parseInt(cn) <= 0){
	alert("Please enter a valid row and column number.");
}

const table = document.querySelector("#myTable");

function createTable() {
    //Write your code here
	for(let i=0; i<rn; i++){
		table.insertRow(i);
	}

	let tableRows = document.querySelectorAll("tr");
	tableRows.forEach((row, rowIdx)=>{
		for(let colIndx=0; colIndx<cn; colIndx++){
			let cell = row.insertCell(colIndx);
			cell.innerText = `Row-${rowIdx} Column-${colIndx}`;
		}
	});
	
}
