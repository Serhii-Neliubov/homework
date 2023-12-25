// Exercise 1
// const firstData = prompt("Enter first data: ");
// const secondData = prompt("Enter second data: ");
// const thirdData = prompt("Enter third data: ");
// alert(`Your full data is: ${firstData} ${secondData} ${thirdData}`);

// Exercise 2
const number = prompt("Enter your number: ");
const numberSplit = number.split("");

if (number.length == 5) {
  result = numberSplit.map((number) => {
    if (Number(number) >= 0) {
      return number;
    }
  });
  
  alert(result.join(" "));

} else {
  alert("Write a positive five-digit number!");
}
