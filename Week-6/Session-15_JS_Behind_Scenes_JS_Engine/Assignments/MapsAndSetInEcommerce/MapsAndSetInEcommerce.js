// Create a WeakMap to store product views
const productViews = new WeakMap();

// Create a WeakSet to store products in the cart
const cartItems = new WeakSet();

function incrementProductViews(productId) {
    // Check if the product ID is already in the WeakMap
    if (productViews.has(productId)) {
        // Increment the view count by 1
        const views = productViews.get(productId);
        productViews.set(productId, views + 1);
    } else {
        // Add the product ID to the WeakMap with an initial view count of 1
        productViews.set(productId, 1);
    }
}

function addToCart(productId) {
    // Check if the product ID is already in the WeakSet
    if (cartItems.has(productId)) {
        return "Product already in cart";
    } else {
        // Add the product ID to the WeakSet
        cartItems.add(productId);
        return "Product added to cart";
    }
}

const product1 = { id: 1 };
const product2 = { id: 2 };

incrementProductViews(product1);
incrementProductViews(product1);
incrementProductViews(product1);
incrementProductViews(product2);
incrementProductViews(product2);

console.log(productViews.get(product1)); // Output: 3
console.log(productViews.get(product2)); // Output: 2

console.log(addToCart(product1)); // Output: "Product added to cart"
console.log(addToCart(product1)); // Output: "Product already in cart"
console.log(addToCart(product2)); // Output: "Product added to cart"