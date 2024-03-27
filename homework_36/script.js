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
        const order = {
            name: name,
            city: city,
            delivery: delivery,
            payment: payment,
            quantity: quantity,
            comment: comment,
            date: new Date().toLocaleString()
        };

        let orders = JSON.parse(localStorage.getItem('orders')) || [];

        orders.push(order);

        localStorage.setItem('orders', JSON.stringify(orders));

        document.getElementById("orderForm").reset();

        showMyOrders();
    }
}
function showMyOrders() {
    const orderListContainer = document.getElementById("orderList");
    orderListContainer.innerHTML = '';

    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.forEach(function(order, index) {
        const orderElement = document.createElement("div");
        orderElement.classList.add("order");

        orderElement.innerHTML = `
            <p>Date: ${order.date}</p>
            <p>Name: ${order.name}</p>
            <p>City: ${order.city}</p>
            <p>Delivery: ${order.delivery}</p>
            <p>Payment Method: ${order.payment}</p>
            <p>Quantity: ${order.quantity}</p>
            <p>Comment: ${order.comment}</p>
            <button onclick="deleteOrder(${index})">Delete</button>
        `;

        orderListContainer.appendChild(orderElement);
        orderListContainer.appendChild(document.createElement("hr"));
    });
}

function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.splice(index, 1);

    localStorage.setItem('orders', JSON.stringify(orders));
    showMyOrders();
}

showMyOrders();
