function displayData() {
    const form = document.getElementById("registrationForm");
    const outputTable = document.getElementById("outputTable");

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthdate = document.getElementById("birthdate").value;

    let gender;
    const genderMale = document.getElementById("male");
    const genderFemale = document.getElementById("female");

    if (genderMale.checked) {
        gender = genderMale.value;
    } else if (genderFemale.checked) {
        gender = genderFemale.value;
    } else {
        gender = "";
    }

    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;

    const animals = [];
    const checkboxes = form.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(function(checkbox) {
        animals.push(checkbox.value);
    });

    const animalsInfo = animals.length > 0 ? animals.join(", ") : "None";

    if (firstName === "" || lastName === "" || birthdate === "" || gender === "" || city === "" || address === "") {
        alert("Please fill in all fields.");
        return;
    }

    let table = "<table border='1'><tr><th>Field</th><th>Value</th></tr>";
    table += "<tr><td>First Name</td><td>" + firstName + "</td></tr>";
    table += "<tr><td>Last Name</td><td>" + lastName + "</td></tr>";
    table += "<tr><td>Date of Birth</td><td>" + birthdate + "</td></tr>";
    table += "<tr><td>Gender</td><td>" + gender + "</td></tr>";
    table += "<tr><td>City</td><td>" + city + "</td></tr>";
    table += "<tr><td>Address</td><td>" + address + "</td></tr>";
    table += "<tr><td>Animals</td><td>" + animalsInfo + "</td></tr>";
    table += "</table>";

    outputTable.innerHTML = table;
}
