const productsData = {
    electronics: [
        { id: 1, name: "Cool Smartphone", price: 500 },
        { id: 2, name: "Cool Laptop", price: 1000 },
        { id: 2, name: "Cool macbook", price: 1500 },
    ],
    clothing: [
        { id: 3, name: "Pretty T-Shirt", price: 20 },
        { id: 4, name: "Pretty Jeans", price: 50 },
        { id: 4, name: "Pretty Shirt", price: 150 },
        { id: 4, name: "Pretty Socks", price: 250 },
    ],
    books: [
        { id: 5, name: "Interesting Book", price: 30 },
        { id: 6, name: "In fact interesting Book", price: 35 },
    ]
};

function showProducts(category) {
    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    productsData[category].forEach(product => {
        const listItem = document.createElement("li");

        listItem.textContent = product.name;
        listItem.onclick = () => showProductDetails(product);

        productList.appendChild(listItem);
    });
}

function showProductDetails(product) {
    const details = document.getElementById("details");
    details.innerHTML = `
        <p>Name: ${product.name}</p>
        <p>Price: $${product.price}</p>
        <button onclick="buyProduct(${product.id})">Buy</button>
    `;
}

function buyProduct() {
    alert("Product purchased!");

    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    const details = document.getElementById("details");
    details.innerHTML = "";
}
