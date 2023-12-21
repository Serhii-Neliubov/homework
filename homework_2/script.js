// Exercise 1
// const firstData = prompt("Enter first data: ");
// const secondData = prompt("Enter second data: ");
// const thirdData = prompt("Enter third data: ");
// alert(`Your full data is: ${firstData} ${secondData} ${thirdData}`);

// Exercise 2
const number = prompt("Enter your number: ");
if (Math.round(number) > 0 && number.length == 5) {
  const numberSplit = number.split("");
  let result = [];

  numberSplit.map((number) => {
    if (parseInt(number)) {
      result = [...result, number];
    }
  });

  if (result.length === 5) {
    alert(result.slice("").join(" "));
  } else {
    alert("Write correct number!");
  }
} else {
  alert("Write a positive five-digit number!");
}
