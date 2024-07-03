document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "T-Shirt", price: "$20", image: "images/tshirt.jpg" },
        { name: "Jeans", price: "$40", image: "images/jeans.jpg" },
        // Add more products
    ];

    let productsContainer = document.getElementById('products');
    products.forEach(product => {
        let productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
});
