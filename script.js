/* =====================================================
 GLITCHA - CLUTCH SHOP
===================================================== */


/* =====================================================
   WHATSAPP NUMBER
===================================================== */

const WHATSAPP_NUMBER = "917796389595";


/* =====================================================
   PRODUCTS

   Yaha se aap products add/edit kar sakte ho.
===================================================== */

const products = [

    {
        id: 1,
        name: "Royal Black Clutch",
        category: "party",
        price: 1499,
        badge: "BESTSELLER",
        image: "images/clutch1.png",
        description: "A timeless black clutch designed for parties, dinners and special occasions."
    },

    {
        id: 2,
        name: "Golden Evening Clutch",
        category: "party",
        price: 1499,
        badge: "NEW",
        image: "images/clutch2.png",
        description: "A beautiful golden statement clutch that adds elegance to your evening look."
    },

    {
        id: 3,
        name: "Pearl Wedding Clutch",
        category: "wedding",
        price: 1499,
        badge: "WEDDING",
        image: "images/clutch3.png",
        description: "Elegant pearl-inspired styling perfect for weddings and festive occasions."
    },

    {
        id: 4,
        name: "Classic Beige Clutch",
        category: "daily",
        price: 1499,
        badge: "",
        image: "images/clutch4.png",
        description: "A minimal beige clutch that works beautifully with everyday outfits."
    },

    {
        id: 5,
        name: "Wine Party Clutch",
        category: "party",
        price: 1499,
        badge: "POPULAR",
        image: "images/clutch5.png",
        description: "A stylish wine-colored clutch for parties and evening events."
    },

    {
        id: 6,
        name: "Bridal Pearl Box",
        category: "wedding",
        price: 1499,
        badge: "PREMIUM",
        image: "images/clutch6.png",
        description: "A premium pearl box clutch made to complement your bridal style."
    },

    {
        id: 7,
        name: "Minimal Gold Clutch",
        category: "daily",
        price: 1499,
        badge: "NEW",
        image: "images/clutch7.png",
        description: "Clean and sophisticated gold styling for modern everyday fashion."
    },

    {
        id: 8,
        name: "Crystal Party Clutch",
        category: "party",
        price: 1499,
        badge: "TRENDING",
        image: "images/clutch8.png",
        description: "A glamorous crystal-inspired clutch for your special night."
    },

    {
        id: 9,
        name: "Elegant Rose Clutch",
        category: "party",
        price: 1499,
        badge: "NEW",
        image: "images/clutch9.png",
        description: "A beautiful rose-inspired clutch for elegant occasions."
    },

    {
        id: 10,
        name: "Classic Silver Clutch",
        category: "party",
        price: 1499,
        badge: "POPULAR",
        image: "images/clutch10.png",
        description: "A sophisticated silver clutch perfect for evening events."
    },

    {
        id: 11,
        name: "Bridal White Clutch",
        category: "wedding",
        price: 1499,
        badge: "WEDDING",
        image: "images/clutch11.png",
        description: "A graceful white clutch designed for bridal and wedding looks."
    },

    {
        id: 12,
        name: "Champagne Gold Clutch",
        category: "party",
        price: 1499,
        badge: "PREMIUM",
        image: "images/clutch12.png",
        description: "A luxurious champagne-gold clutch for special celebrations."
    },

    {
        id: 13,
        name: "Classic Pink Clutch",
        category: "daily",
        price: 1499,
        badge: "",
        image: "images/clutch13.png",
        description: "A stylish pink clutch suitable for everyday fashion."
    },

    {
        id: 14,
        name: "Black Pearl Clutch",
        category: "wedding",
        price: 1499,
        badge: "PREMIUM",
        image: "images/clutch14.png",
        description: "A luxurious black pearl clutch with an elegant finish."
    },

    {
        id: 15,
        name: "Royal Blue Clutch",
        category: "party",
        price: 1499,
        badge: "TRENDING",
        image: "images/clutch15.png",
        description: "A striking royal blue clutch for parties and evening occasions."
    },

    {
        id: 16,
        name: "Classic Maroon Clutch",
        category: "party",
        price: 1499,
        badge: "POPULAR",
        image: "images/clutch16.png",
        description: "A rich maroon clutch that adds sophistication to your outfit."
    },

    {
        id: 17,
        name: "Luxury Gold Box Clutch",
        category: "wedding",
        price: 1499,
        badge: "PREMIUM",
        image: "images/clutch17.png",
        description: "A luxury gold box clutch designed for weddings and celebrations."
    },

    {
        id: 18,
        name: "Elegant Lavender Clutch",
        category: "party",
        price: 1499,
        badge: "NEW",
        image: "images/clutch18.png",
        description: "A soft lavender clutch for a graceful and modern appearance."
    },

    {
        id: 19,
        name: "Classic Cream Clutch",
        category: "daily",
        price: 1499,
        badge: "",
        image: "images/clutch19.png",
        description: "A clean cream-colored clutch for everyday elegant styling."
    },

    {
        id: 20,
        name: "Diamond Shine Clutch",
        category: "party",
        price: 1499,
        badge: "BESTSELLER",
        image: "images/clutch20.png",
        description: "A sparkling statement clutch designed to stand out at parties."
    },

    {
        id: 21,
        name: "Bridal Gold Pearl Clutch",
        category: "wedding",
        price: 1499,
        badge: "WEDDING",
        image: "images/clutch21.png",
        description: "A beautiful gold and pearl clutch for bridal occasions."
    },

    {
        id: 22,
        name: "Modern Black Box Clutch",
        category: "party",
        price: 1499,
        badge: "NEW",
        image: "images/clutch22.png",
        description: "A modern black box clutch with a sophisticated silhouette."
    },

    {
        id: 23,
        name: "Soft Peach Clutch",
        category: "daily",
        price: 1499,
        badge: "",
        image: "images/clutch23.png",
        description: "A soft peach clutch that adds a subtle touch of elegance."
    },

    {
        id: 24,
        name: "Golden Pearl Evening Clutch",
        category: "wedding",
        price: 1499,
        badge: "PREMIUM",
        image: "images/clutch24.png",
        description: "A glamorous pearl evening clutch for weddings and celebrations."
    },

    {
        id: 25,
        name: "Emerald Green Clutch",
        category: "party",
        price: 1499,
        badge: "TRENDING",
        image: "images/clutch25.png",
        description: "A bold emerald green clutch for statement evening looks."
    },

    {
        id: 26,
        name: "Classic Champagne Clutch",
        category: "party",
        price: 1499,
        badge: "POPULAR",
        image: "images/clutch26.png",
        description: "A refined champagne clutch for parties and special dinners."
    },

    {
        id: 27,
        name: "Pearl White Evening Clutch",
        category: "wedding",
        price: 1499,
        badge: "WEDDING",
        image: "images/clutch27.png",
        description: "An elegant pearl white clutch perfect for wedding occasions."
    },

    {
        id: 28,
        name: "Ruby Red Clutch",
        category: "party",
        price: 1499,
        badge: "NEW",
        image: "images/clutch28.png",
        description: "A vibrant ruby red clutch designed for glamorous evenings."
    },

    {
        id: 29,
        name: "Luxury Beige Box Clutch",
        category: "daily",
        price: 1499,
        badge: "PREMIUM",
        image: "images/clutch29.png",
        description: "A premium beige box clutch with a clean modern design."
    },

    {
        id: 30,
        name: "Silver Crystal Clutch",
        category: "party",
        price: 1499,
        badge: "BESTSELLER",
        image: "images/clutch30.png",
        description: "A sparkling silver crystal clutch made for glamorous occasions."
    },

    {
        id: 31,
        name: "Royal Wine Pearl Clutch",
        category: "wedding",
        price: 1499,
        badge: "PREMIUM",
        image: "images/clutch31.png",
        description: "A rich wine-colored pearl clutch for weddings and festive events."
    },

    {
        id: 32,
        name: "Signature Gold Clutch",
        category: "party",
        price: 1499,
        badge: "ONROOMS",
        image: "images/clutch32.png",
        description: "A signature ONROOMS clutch designed for an elegant statement look."
    }

];


/* =====================================================
   CART
===================================================== */

let cart = [];


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts() {

    const productContainer =
        document.getElementById("products");

    const searchValue =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const categoryValue =
        document.getElementById("categoryFilter")
        .value;


    const filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(searchValue);

        const matchesCategory =
            categoryValue === "all" ||
            product.category === categoryValue;

        return matchesSearch && matchesCategory;

    });


    if (filteredProducts.length === 0) {

        productContainer.innerHTML = `
            <div class="no-results">
                <h3>No products found</h3>
                <p>Try another search or category.</p>
            </div>
        `;

        return;
    }


    productContainer.innerHTML =
        filteredProducts.map(product => {

            return `

                <div class="product-card">

                    <div class="product-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                        ${
                            product.badge
                                ? `<span class="badge">${product.badge}</span>`
                                : ""
                        }

                    </div>


                    <div class="product-info">

                        <div class="category">
                            ${product.category}
                        </div>

                        <h3>
                            ${product.name}
                        </h3>

                        <div class="price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </div>


                        <div class="product-actions">

                            <button
                                class="view-btn"
                                onclick="viewProduct(${product.id})"
                            >
                                View
                            </button>

                            <button
                                class="add-btn"
                                onclick="addToCart(${product.id})"
                            >
                                Add to Cart
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;


    const existingItem =
        cart.find(item => item.id === productId);


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    updateCart();

    showNotification(
        `${product.name} added to cart`
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    const totalQuantity =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );


    const totalPrice =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    cartCount.textContent = totalQuantity;

    cartTotal.textContent =
        `₹${totalPrice.toLocaleString("en-IN")}`;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        return;
    }


    cartItems.innerHTML =
        cart.map(item => {

            return `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <div class="cart-item-price">
                            ₹${item.price.toLocaleString("en-IN")}
                        </div>


                        <div class="quantity">

                            <button
                                onclick="changeQuantity(${item.id}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQuantity(${item.id}, 1)"
                            >
                                +
                            </button>

                            <button
                                class="remove"
                                onclick="removeFromCart(${item.id})"
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(productId, change) {

    const item =
        cart.find(item => item.id === productId);

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== productId);

    }


    updateCart();

}


/* =====================================================
   REMOVE PRODUCT
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(item => item.id !== productId);

    updateCart();

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    document
        .getElementById("cart")
        .classList.add("active");

    document
        .getElementById("overlay")
        .classList.add("active");

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    document
        .getElementById("cart")
        .classList.remove("active");

    document
        .getElementById("overlay")
        .classList.remove("active");

}


/* =====================================================
   VIEW PRODUCT
===================================================== */

function viewProduct(productId) {

    const product =
        products.find(item => item.id === productId);

    if (!product) return;


    document.getElementById("productDetails").innerHTML = `

        <div class="product-detail">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <p class="small-title">
                    ${product.category.toUpperCase()}
                </p>

                <h2>
                    ${product.name}
                </h2>

                <div class="detail-price">
                    ₹${product.price.toLocaleString("en-IN")}
                </div>

                <p>
                    ${product.description}
                </p>

                <button
                    class="add-btn"
                    style="width:100%; padding:15px;"
                    onclick="addToCart(${product.id}); closeProductModal();"
                >
                    Add to Cart
                </button>

            </div>

        </div>

    `;


    document
        .getElementById("productModal")
        .classList.add("active");

}


/* =====================================================
   CLOSE PRODUCT MODAL
===================================================== */

function closeProductModal() {

    document
        .getElementById("productModal")
        .classList.remove("active");

}


/* =====================================================
   OPEN CHECKOUT
===================================================== */

function openCheckout() {

    if (cart.length === 0) {

        showNotification(
            "Please add a product first."
        );

        return;
    }


    closeCart();


    const total =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    document.getElementById("checkoutTotal")
        .textContent =
        `₹${total.toLocaleString("en-IN")}`;


    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


/* =====================================================
   CLOSE CHECKOUT
===================================================== */

function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


/* =====================================================
   PLACE ORDER
===================================================== */

document
    .getElementById("orderForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        if (cart.length === 0) {

            showNotification(
                "Your cart is empty."
            );

            return;
        }


        const name =
            document
                .getElementById("customerName")
                .value
                .trim();


        const phone =
            document
                .getElementById("customerPhone")
                .value
                .trim();


        const address =
            document
                .getElementById("customerAddress")
                .value
                .trim();


        const payment =
            document
                .getElementById("paymentMethod")
                .value;


        const total =
            cart.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            );


        let message =
            `*NEW ORDER - GLITCHA*%0A%0A`;


        message +=
            `*Customer Details*%0A`;

        message +=
            `Name: ${name}%0A`;

        message +=
            `Phone: ${phone}%0A`;

        message +=
            `Address: ${address}%0A`;

        message +=
            `Payment: ${payment}%0A%0A`;


        message +=
            `*Order Items*%0A`;


        cart.forEach(item => {

            message +=
                `• ${item.name} x ${item.quantity} - ₹${item.price * item.quantity}%0A`;

        });


        message += `%0A`;

        message +=
            `*TOTAL: ₹${total}*%0A%0A`;

        message +=
            `Thank you for shopping with GLITCHA.`;


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


        window.open(
            whatsappURL,
            "_blank"
        );


        /*
            After opening WhatsApp,
            clear the cart.
        */

        cart = [];

        updateCart();

        closeCheckout();

        document
            .getElementById("orderForm")
            .reset();


    });


/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification(message) {

    const notification =
        document.createElement("div");


    notification.textContent =
        message;


    notification.style.position =
        "fixed";

    notification.style.bottom =
        "25px";

    notification.style.left =
        "50%";

    notification.style.transform =
        "translateX(-50%)";

    notification.style.background =
        "#c7a96b";

    notification.style.color =
        "#080808";

    notification.style.padding =
        "13px 22px";

    notification.style.borderRadius =
        "30px";

    notification.style.fontWeight =
        "700";

    notification.style.zIndex =
        "5000";


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.remove();

    }, 2500);

}
/* =====================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
===================================================== */

document
    .getElementById("productModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeProductModal();

        }

    });


document
    .getElementById("checkoutModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeCheckout();

        }

    });


/* =====================================================
   INITIAL LOAD
===================================================== */

displayProducts();

updateCart();