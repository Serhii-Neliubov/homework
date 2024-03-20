function submitOrder() {
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const delivery = document.getElementById("delivery").value;
    const payment = document.getElementById("payment").value;
    const quantity = document.getElementById("quantity").value;
    const comment = document.getElementById("comment").value;

    if (name === "" || city === "" || delivery === "" || payment === "" || quantity === "") {
        alert("Please fill in all required fields.");
    } else {
        let orderInfo = "Name: " + name + "\n";
        orderInfo += "City: " + city + "\n";
        orderInfo += "Nova Poshta Warehouse: " + delivery + "\n";
        orderInfo += "Payment Method: " + payment + "\n";
        orderInfo += "Quantity: " + quantity + "\n";
        orderInfo += "Comment: " + comment + "\n";

        const orderElement = document.createElement("div");
        orderElement.classList.add("order");
        orderElement.innerText = orderInfo;

        document.getElementById("orderList").appendChild(orderElement);
        document.getElementById("orderList").appendChild(document.createElement("hr"));

        document.getElementById("orderForm").reset();
    }
}