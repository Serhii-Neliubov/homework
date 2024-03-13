function generateList(array) {

    return array.reduce((result, item) => {
        result += "    <li class='list-item'>";

        if (Array.isArray(item)) {
            result += generateList(item);
        } else {
            result += item;
        }

        result += "</li>\n";
        return result;
    }, "<ul>\n") + "</ul>\n";

}

let example = [1, 2, 3, [4.1, 4.2, 4.3], 5];
const listContainer = document.getElementById("list");
listContainer.innerHTML = generateList(example);
