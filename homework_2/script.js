// Exercise 1
// const firstData = prompt("Enter first data: ");
// const secondData = prompt("Enter second data: ");
// const thirdData = prompt("Enter third data: ");
// alert(`Your full data is: ${firstData} ${secondData} ${thirdData}`);

// Exercise 2
const number = prompt("Enter your number: ");
const numberSplit = number.split("");
let result = [];

if (number.length == 5) {
  numberSplit.forEach((number) => {
    if (Number(number) >= 0) {
      result.push(number);
    }
  });

  alert(result.join(" "));
} else {
  alert("Write a positive five-digit number!");
}
