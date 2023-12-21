// Exercise 1
// const firstData = prompt("Enter first data: ");
// const secondData = prompt("Enter second data: ");
// const thirdData = prompt("Enter third data: ");
// alert(`Your full data is: ${firstData} ${secondData} ${thirdData}`);

// Exercise 2
const number = prompt("Enter your number: ");
if (Math.round(number) > 0 && number.length == 5) {
  const result = number.split("").join(" ");
  alert(result);
} else {
  alert("Write a positive five-digit number!");
}
