const addRow = () => {
    let tableRow = document.getElementById('table');
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    cell1.innerHTML = "farzad";
    cell2.innerHTML = "farzad";
    row.append(cell2, cell1)
    tableRow.appendChild(row);
}