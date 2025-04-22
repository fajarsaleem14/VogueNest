
const products = [

    {
        id: 1,
        name: "Classic White Tee",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        description: "Premium 100% organic cotton with relaxed fit",
        category: "shirts",
        badge: "Sale",
        badgeClass: "badge-sale"
    },
    {
        id: 2,
        name: "Striped Oxford Shirt",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
        description: "Classic button-down with timeless stripes",
        category: "shirts",
        badge: "New",
        badgeClass: "badge-new"
    },
    
    {
        id: 4,
        name: "Denim Western Shirt",
        price: 59.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        description: "Vintage-inspired with pearl snap buttons",
        category: "shirts",
        badge: "Limited",
        badgeClass: "badge-limited"
    },
    
    // Pants 
    {
        id: 5,
        name: "Baggy Jeans",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "90s inspired loose fit denim",
        category: "pants",
        badge: "Trending"
    },
    /*{
        id: 6,
        name: "Straight Fit Trousers",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1595341595379-cf0f0a76369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "Tailored fit for a polished look",
        category: "pants"
    },*/
    {
        id: 7,
        name: "Flare Jeans",
        price: 79.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        description: "70s inspired bell bottom style",
        category: "pants",
        badge: "Sale",
        badgeClass: "badge-sale"
    },
    {
        id: 8,
        name: "Cargo Pants",
        price: 65.99,
        image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        description: "Utility pants with multiple pockets",
        category: "pants"
    },
    
    // Shoes 
    {
        id: 9,
        name: "Leather Loafers",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        description: "Handcrafted Italian leather with cushioned insole",
        category: "shoes",
        badge: "New",
        badgeClass: "badge-new"
    },
    {
        id: 10,
        name: "White Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
        description: "Classic minimalist design with arch support",
        category: "shoes"
    },
    {
        id: 11,
        name: "Running Joggers",
        price: 99.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Lightweight with responsive cushioning",
        category: "shoes",
        badge: "Sale",
        badgeClass: "badge-sale"
    },
    {
        id: 12,
        name: "Hiking Boots",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        description: "Waterproof with advanced traction technology",
        category: "shoes"
    },
    
    // Tote Bags 
    {
        id: 13,
        name: "Canvas Tote Bag",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        description: "Eco-friendly heavy-duty canvas with leather straps",
        category: "bags",
        badge: "Eco"
    },
    {
        id: 14,
        name: "Leather Tote",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80",
        description: "Genuine leather with multiple compartments",
        category: "bags"
    },
    /*{
        id: 15,
        name: "Perfume",
        price: 49.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        description: "Natural woven straw with cotton lining",
        category: "Perfumes",
        badge: "Summer",
        badgeClass: "badge-new"
    },
    {
        id: 16,
        name: "Mini Crossbody Tote",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
        description: "Compact size with adjustable strap",
        category: "bags"
    },*/
    
    // Jewelry 
    {
        id: 17,
        name: "Pearl Ring",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "Authentic freshwater pearls with gold clasp",
        category: "jewelry",
        badge: "Bestseller"
    },
    {
        id: 18,
        name: "Diamond Neklace",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
       description: "0.5 carat genuine diamonds in 14k white gold",
        category: "jewelry"
    },
    {
        id: 19,
        name: "Leather Wrap Bracelet",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        description: "Handwoven leather with silver accent beads",
        category: "jewelry",
        badge: "Sale",
        badgeClass: "badge-sale"
    },
    {
        id: 20,
        name: "Minimalist Locket",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        description: "Stackable gold-plated rings",
        category: "jewelry"
    }
];

// Shopping cart array
let cart = [];
let currentCategory = 'all';

// DOM Elements
const productsGrid = document.getElementById('products');
const categoryButtons = document.querySelectorAll('.category-btn');
const cartCount = document.querySelector('.cart-count');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupEventListeners();
    
    // Load cart from localStorage if exists
    if(localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCartCount();
    }
});

// Set up event listeners
function setupEventListeners() {
    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            currentCategory = button.dataset.category;
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            renderProducts();
        });
    });
}

// Render products based on current category
function renderProducts() {
    productsGrid.innerHTML = '';
    
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Badge HTML if exists
        const badgeHTML = product.badge 
            ? `<span class="product-badge ${product.badgeClass || ''}">${product.badge}</span>` 
            : '';
        
        // Original price HTML if exists
        const priceHTML = product.originalPrice
            ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>`
            : '';
        
        productCard.innerHTML = `
            <div class="product-image-container">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    ${priceHTML}
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    
    // Update UI
    updateCartCount();
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Animation feedback
    const button = event.target;
    button.textContent = '✓ Added';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '';
    }, 1500);
}

// Update cart count display
function updateCartCount() {
    cartCount.textContent = cart.length;
}