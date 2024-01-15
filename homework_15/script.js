const array = [1, 2, 3, 4, 5, 6, 7, 8];

removeElement(array, 3);

function removeElement(array, number) {
    const arrayNumber = array.indexOf(number)

    if(number > 0){
        array.splice(arrayNumber, 1);
    }

}

console.log(array);