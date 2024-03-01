function generateTable(rows, cols) {
  const table = document.getElementById("table");

  for (let i = 1; i <= rows; i++) {
    let row = table.insertRow();

    for (let j = 1; j <= cols; j++) {
      let cell = row.insertCell();

      cell.textContent = (i - 1) * cols + j;
    }
  }
}

generateTable(10, 10);