function generateList(array) {
    let result = "<ul>\n";

    for (let item of array) {
        result += "    <li>";
        if (Array.isArray(item)) {
            result += generateList(item);
        } else {
            result += item;
        }
        result += "</li>\n";
    }

    result += "</ul>\n";
    return result;
}

let example = [1, 2, 3, [4.1, 4.2, 4.3], 5];

console.log(generateList(example));
