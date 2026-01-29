// Product Data with Stock Information for HeadSpace
const products = [
    {
        id: 1,
        name: "0029 - Flaflu",
        category: "formal - girl",
        price: 43000,
        image: "images/topicewe1.jpeg",
        description: "Flat cap pink berbahan halus.",
        stock: "ready"
    },
    {
        id: 2,
        name: "0009 - Blyelu",
        category: "formal - girl",
        price: 44000,
        image: "images/topicewe2.jpeg",
        description: "Flat cap berwarna biru berbahan halus.",
        stock: "ready"
    },
    {
        id: 3,
        name: "0011 - Brondo",
        category: "formal - girl",
        price: 48000,
        image: "images/topicewe3.jpeg",
        description: "Flat cap berwarna coklat dengan pita coklat tua di bawahnya.",
        stock: "soldout"
    },
    {
        id: 4,
        name: "0099 - Bleape",
        category: "formal - girl",
        price: 45000,
        image: "images/topicewe4.jpeg",
        description: "Flat cap berwarna hitam dengan hiasan pita putih dibawahnya.",
        stock: "ready"
    },
    {
        id: 5,
        name: "0026 - Doodiee",
        category: "formal - girl",
        price: 47000,
        image: "images/topicewe5.jpeg",
        description: "Topi putih dengan hiasan jaring dan manikmanik serta pita dibawahnya.",
        stock: "soldout"
    },
    {
        id: 6,
        name: "0085 - Cherpey",
        category: "casual - girl",
        price: 29000,
        image: "images/topicewe6.jpeg",
        description: "Topi putih polos dengan gambar cherry. Simpel dan mudah dipadukan.",
        stock: "ready"
    },
    {
        id: 7,
        name: "0014 - Dowpiw",
        category: "casual - girl",
        price: 28000,
        image: "images/topicewe7.jpeg",
        description: "Topi pink pastel dengan bordir karakter lucu. Cute dan kasual.",
        stock: "ready"
    },
    {
        id: 8,
        name: "0004 - Blueblie",
        category: "casual - girl",
        price: 30000,
        image: "images/topicewe8.jpeg",
        description: "Topi denim dengan detail pita dan renda. Kesan girly dan unik.",
        stock: "soldout"
    },
    {
        id: 9,
        name: "0094 - Piechei",
        category: "casual - girl",
        price: 29000,
        image: "images/topicewe9.jpeg",
        description: "Topi warna cream-pink dengan motif cherry dan tulisan cheers. Adem dan nyaman dipakai.",
        stock: "ready"
    },
    {
        id: 10,
        name: "0012 - Ginboou",
        category: "casual - girl",
        price: 27000,
        image: "images/topicewe10.jpeg",
        description: "Topi motif kotak biru pastel dengan bordir pita. Tampilan manis dan feminin.",
        stock: "ready"
    },
    {
    id: 11,
        name: "0033 - Greendo",
        category: "formal - boy",
        price: 35000,
        image: "images/topilaki1.jpeg",
        description: "Flat cap berwarna army.",
        stock: "ready"
    },
    {
    id: 12,
        name: "0092 - Blobrow",
        category: "formal - boy",
        price: 39000,
        image: "images/topilaki2.jpeg",
        description: "Flat cap dengan motif kotak-kotak.",
        stock: "ready"
    },
    {
    id: 13,
        name: "0072 - Blackie",
        category: "formal - boy",
        price: 30000,
        image: "images/topilaki3.jpeg",
        description: "Flat cap hitam metalic.",
        stock: "ready"
    },
    {
    id: 14,
        name: "0086 - Swag",
        category: "formal - boy",
        price: 36000,
        image: "images/topilaki4.jpeg",
        description: "Flat cap hitam dengan hiasan rantai dibawahnya.",
        stock: "ready"
    },
    {
    id: 15,
        name: "0018 - Garyto",
        category: "formal - boy",
        price: 38000,
        image: "images/topilaki5.jpeg",
        description: "Flat cap berwarna abu-abu dengan pet di depannya.",
        stock: "ready"
    },
    {
    id: 16,
        name: "0056 - Sriga",
        category: "casual - boy",
        price: 35000,
        image: "images/topilaki6.jpeg",
        description: "Topi biru dengan gambar NY di depannya dan logo disampingnya.",
        stock: "ready"
    },
    {
    id: 17,
        name: "0074 - Bluwie",
        category: "casual - boy",
        price: 37000,
        image: "images/topilaki7.jpeg",
        description: "Topi berwarna navy dengan warna cream di bagian belakangnya dan ada tulisan di bagian depan.",
        stock: "ready"
    },
    {
    id: 18,
        name: "0032 - Swige",
        category: "casual - boy",
        price: 35000,
        image: "images/topilaki8.jpeg",
        description: "Topi berwarna cream dan hijau dengan gambar NY didepannya.",
        stock: "ready"
    },
    {
    id: 19,
        name: "0081 - Nakyu",
        category: "casual - boy",
        price: 36000,
        image: "images/topilaki9.jpeg",
        description: "Topi berwarna biru dengan tulisan New York.",
        stock: "ready"
    },
    {
    id: 20,
        name: "0032 - Grumpy",
        category: "casual - boy",
        price: 36000,
        image: "images/topilaki10.jpeg",
        description: "topi berwarna cream dengan tulisan New York di depannya.",
        stock: "ready"
    },

];

// Cart functionality
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// DOM elements
const productGrid = document.getElementById('productGrid');
const cartIcon = document.getElementById('cartIcon');
const cartCountElement = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartItems = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const stockFilter = document.getElementById('stockFilter');
const searchInput = document.getElementById('searchInput');
const totalProductsElement = document.getElementById('totalProducts');
const readyStockElement = document.getElementById('readyStock');
const soldOutElement = document.getElementById('soldOut');

// Social links - GANTI DENGAN LINK ANDA
const socialLinks = {
    instagram: "https://www.instagram.com/headspace11_?igsh=MXNmemV3dWM1YzN4cA==",
    whatsapp: "https://wa.me/6282139868141",
    tiktok: "https://www.tiktok.com/@headspace11_?_r=1&_t=ZS-93F8Ef0AjD"
};

const paymentLink = "https://docs.google.com/forms/d/e/1FAIpQLSf6WKdiat8oTxqJTTJCJm-axdxk1XIFpPujiaPYZve-AC57Gw/viewform"; // GANTI DENGAN LINK PEMBAYARAN ANDA

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartCount();
    updateStockSummary();
    
    // Event listeners
    cartIcon.addEventListener('click', openCartModal);
    closeModal.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', goToPayment);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    stockFilter.addEventListener('change', filterProducts);
    searchInput.addEventListener('input', filterProducts);
    
    // Close modal when clicking outside
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
    
    // Setup social media links
    setupSocialLinks();
});

// Setup social media links
function setupSocialLinks() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        const iconClass = icon.querySelector('i').className;
        if (iconClass.includes('instagram')) {
            icon.href = socialLinks.instagram;
            icon.target = '_blank';
        } else if (iconClass.includes('whatsapp')) {
            icon.href = socialLinks.whatsapp;
            icon.target = '_blank';
        } else if (iconClass.includes('tiktok')) {
            icon.href = socialLinks.tiktok;
            icon.target = '_blank';
        }
    });
}

// Render products to the page
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p class="no-products">Tidak ada produk yang sesuai dengan filter.</p>';
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Check if product is in cart
        const cartItem = cart.find(item => item.id === product.id);
        const quantityInCart = cartItem ? cartItem.quantity : 0;
        const displayQuantity = quantityInCart > 0 ? quantityInCart : 1;
        
        // Sold out badge
        const soldOutBadge = product.stock === 'soldout' ? '<div class="sold-out-badge">SOLD OUT</div>' : '';
        
        // Action buttons based on stock
        let actionButtons = '';
        if (product.stock === 'soldout') {
            actionButtons = '<button class="btn-disabled" disabled>Stok Habis</button>';
        } else {
            // Show quantity controls and add/update button
            actionButtons = `
                <div class="quantity-control-wrapper">
                    <div class="quantity-control">
                        <button class="qty-minus" onclick="changeQuantity(${product.id}, -1)">-</button>
                        <input type="number" class="qty-input" id="qty-${product.id}" 
                               value="${displayQuantity}" min="1" max="99">
                        <button class="qty-plus" onclick="changeQuantity(${product.id}, 1)">+</button>
                    </div>
                    <div class="add-to-cart-container">
                        ${quantityInCart > 0 ? 
                            `<button class="btn btn-update" onclick="updateCartItem(${product.id})">
                                <i class="fas fa-sync-alt"></i> Update
                            </button>` : 
                            `<button class="btn" onclick="addToCart(${product.id})">
                                <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
                            </button>`
                        }
                    </div>
                </div>
                <button class="btn btn-outline" onclick="viewDetails(${product.id})">Detail</button>
            `;
        }
        
        productCard.innerHTML = `
            ${soldOutBadge}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-category">${getCategoryName(product.category)}</span>
                <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                <div class="product-stock ${product.stock === 'ready' ? 'stock-ready' : 'stock-soldout'}">
                    <i class="fas ${product.stock === 'ready' ? 'fa-check-circle' : 'fa-times-circle'} stock-icon"></i>
                    ${product.stock === 'ready' ? 'Ready Stock' : 'Sold Out'}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    ${actionButtons}
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
        
        // Add input change event
        if (product.stock === 'ready') {
            const qtyInput = document.getElementById(`qty-${product.id}`);
            qtyInput.addEventListener('change', function() {
                validateQuantityInput(product.id);
            });
        }
    });
}

// Get category name
function getCategoryName(category) {
    const categories = {
        'casual - girl': 'Casual - Girl',
        'casual - boy': 'Casual - Boy',
        'formal - girl': 'Formal - Girl',
        'formal - boy': 'Formal - Boy',
    };
    return categories[category] || category;
}

// Update stock summary
function updateStockSummary() {
    const totalProducts = products.length;
    const readyStock = products.filter(product => product.stock === 'ready').length;
    const soldOut = products.filter(product => product.stock === 'soldout').length;
    
    totalProductsElement.textContent = totalProducts;
    readyStockElement.textContent = readyStock;
    soldOutElement.textContent = soldOut;
}

// Filter products
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    const selectedStock = stockFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredProducts = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price
    if (selectedPrice !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (selectedPrice === 'low') return product.price <= 150000;
            if (selectedPrice === 'medium') return product.price > 150000 && product.price <= 300000;
            if (selectedPrice === 'high') return product.price > 300000;
            return true;
        });
    }
    
    // Filter by stock
    if (selectedStock !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.stock === selectedStock);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts(filteredProducts);
}

// Change quantity with + or - buttons
function changeQuantity(productId, change) {
    const qtyInput = document.getElementById(`qty-${productId}`);
    let currentValue = parseInt(qtyInput.value) || 1;
    let newValue = currentValue + change;
    
    if (newValue < 1) newValue = 1;
    if (newValue > 99) newValue = 99;
    
    qtyInput.value = newValue;
    
    // Update button text if product is already in cart
    updateAddButton(productId);
}

// Validate quantity input
function validateQuantityInput(productId) {
    const qtyInput = document.getElementById(`qty-${productId}`);
    let value = parseInt(qtyInput.value);
    
    if (isNaN(value) || value < 1) {
        qtyInput.value = 1;
    } else if (value > 99) {
        qtyInput.value = 99;
    }
    
    // Update button text if product is already in cart
    updateAddButton(productId);
}

// Update add button text
function updateAddButton(productId) {
    const cartItem = cart.find(item => item.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyInput.value) || 1;
    
    // Find the add button container
    const productCard = qtyInput.closest('.product-card');
    if (!productCard) return;
    
    const addButtonContainer = productCard.querySelector('.add-to-cart-container');
    if (!addButtonContainer) return;
    
    if (cartItem && cartItem.quantity === quantity) {
        // Quantity hasn't changed
        addButtonContainer.innerHTML = `
            <button class="btn btn-in-cart">
                <i class="fas fa-check"></i> Di Keranjang
            </button>
        `;
    } else if (cartItem) {
        // Quantity changed, show update button
        addButtonContainer.innerHTML = `
            <button class="btn btn-update" onclick="updateCartItem(${productId})">
                <i class="fas fa-sync-alt"></i> Update
            </button>
        `;
    } else {
        // Not in cart, show add button
        addButtonContainer.innerHTML = `
            <button class="btn" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
            </button>
        `;
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyInput.value) || 1;
    
    if (!product || product.stock !== 'ready') {
        showNotification('Produk tidak tersedia!', 'error');
        return;
    }
    
    cart.push({
        ...product,
        quantity: quantity
    });
    
    updateCartCount();
    updateAddButton(productId);
    showNotification(`${product.name} (${quantity} pcs) ditambahkan ke keranjang!`, 'success');
}

// Update cart item
function updateCartItem(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyInput.value) || 1;
    
    if (!product || product.stock !== 'ready') {
        showNotification('Produk tidak tersedia!', 'error');
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        if (quantity === 0) {
            // Remove from cart
            cart.splice(itemIndex, 1);
            showNotification(`${product.name} dihapus dari keranjang`, 'success');
        } else {
            // Update quantity
            cart[itemIndex].quantity = quantity;
            showNotification(`${product.name} diperbarui menjadi ${quantity} pcs`, 'success');
        }
    }
    
    updateCartCount();
    updateAddButton(productId);
    renderCartItems();
}

// Remove from cart
// Update fungsi removeFromCart
function removeFromCart(productId) {
    const productName = cart.find(item => item.id === productId)?.name || '';
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
    
    // Reset product card UI
    resetProductCardUI(productId);
    
    showNotification(`${productName} dihapus dari keranjang`, 'success');
}

// Update fungsi adjustCartItemQuantity - tambahkan reset jika quantity jadi 0
function adjustCartItemQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex === -1) return;
    
    const newQuantity = cart[itemIndex].quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > 99) {
        showNotification('Maksimal 99 item per produk', 'error');
        return;
    }
    
    cart[itemIndex].quantity = newQuantity;
    updateCartCount();
    renderCartItems();
    
    // Update product card
    const qtyInput = document.getElementById(`qty-${productId}`);
    if (qtyInput) {
        qtyInput.value = newQuantity;
        updateAddButton(productId);
    }
    
    showNotification(`Jumlah ${cart[itemIndex].name} diperbarui: ${newQuantity} pcs`, 'success');
}

// Fungsi baru untuk reset UI produk
function resetProductCardUI(productId) {
    const qtyInput = document.getElementById(`qty-${productId}`);
    
    if (!qtyInput) return; // Jika produk tidak ditampilkan (karena filter)
    
    // Reset quantity input ke 1
    qtyInput.value = 1;
    
    // Reset button ke "Tambah ke Keranjang"
    const productCard = qtyInput.closest('.product-card');
    if (!productCard) return;
    
    const addButtonContainer = productCard.querySelector('.add-to-cart-container');
    if (!addButtonContainer) return;
    
    // Cari produk data
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Reset ke tampilan awal
    addButtonContainer.innerHTML = `
        <button class="btn" onclick="addToCart(${productId})">
            <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
        </button>
    `;
}

// Update fungsi filterProducts untuk reset UI yang benar
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    const selectedStock = stockFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    let filteredProducts = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price
    if (selectedPrice !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            if (selectedPrice === 'low') return product.price <= 150000;
            if (selectedPrice === 'medium') return product.price > 150000 && product.price <= 300000;
            if (selectedPrice === 'high') return product.price > 300000;
            return true;
        });
    }
    
    // Filter by stock
    if (selectedStock !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.stock === selectedStock);
    }
    
    // Filter by search term
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts(filteredProducts);
}

// Update fungsi renderProducts untuk menangani produk yang tidak ditampilkan
function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p class="no-products">Tidak ada produk yang sesuai dengan filter.</p>';
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Check if product is in cart
        const cartItem = cart.find(item => item.id === product.id);
        const quantityInCart = cartItem ? cartItem.quantity : 0;
        const displayQuantity = quantityInCart > 0 ? quantityInCart : 1;
        
        // Sold out badge
        const soldOutBadge = product.stock === 'soldout' ? '<div class="sold-out-badge">SOLD OUT</div>' : '';
        
        // Action buttons based on stock
        let actionButtons = '';
        if (product.stock === 'soldout') {
            actionButtons = '<button class="btn-disabled" disabled>Stok Habis</button>';
        } else {
            // Determine button text based on cart status
            let buttonHTML = '';
            if (quantityInCart > 0) {
                buttonHTML = `
                    <button class="btn btn-update" onclick="updateCartItem(${product.id})">
                        <i class="fas fa-sync-alt"></i> Update
                    </button>
                `;
            } else {
                buttonHTML = `
                    <button class="btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
                    </button>
                `;
            }
            
            actionButtons = `
                <div class="quantity-control-wrapper">
                    <div class="quantity-control">
                        <button class="qty-minus" onclick="changeQuantity(${product.id}, -1)">-</button>
                        <input type="number" class="qty-input" id="qty-${product.id}" 
                               value="${displayQuantity}" min="1" max="99">
                        <button class="qty-plus" onclick="changeQuantity(${product.id}, 1)">+</button>
                    </div>
                    <div class="add-to-cart-container">
                        ${buttonHTML}
                    </div>
                </div>
                <button class="btn btn-outline" onclick="viewDetails(${product.id})">Detail</button>
            `;
        }
        
        productCard.innerHTML = `
            ${soldOutBadge}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <span class="product-category">${getCategoryName(product.category)}</span>
                <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                <div class="product-stock ${product.stock === 'ready' ? 'stock-ready' : 'stock-soldout'}">
                    <i class="fas ${product.stock === 'ready' ? 'fa-check-circle' : 'fa-times-circle'} stock-icon"></i>
                    ${product.stock === 'ready' ? 'Ready Stock' : 'Sold Out'}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    ${actionButtons}
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
        
        // Add input change event
        if (product.stock === 'ready') {
            const qtyInput = document.getElementById(`qty-${product.id}`);
            qtyInput.addEventListener('change', function() {
                validateQuantityInput(product.id);
            });
        }
    });
}

// Update fungsi updateAddButton untuk lebih sederhana
function updateAddButton(productId) {
    const cartItem = cart.find(item => item.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    
    if (!qtyInput) return; // Jika input tidak ditemukan (produk difilter)
    
    const quantity = parseInt(qtyInput.value) || 1;
    const productCard = qtyInput.closest('.product-card');
    
    if (!productCard) return;
    
    const addButtonContainer = productCard.querySelector('.add-to-cart-container');
    if (!addButtonContainer) return;
    
    // Cari produk data
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (cartItem) {
        // Produk ada di keranjang
        if (cartItem.quantity === quantity) {
            // Quantity sama, tampilkan "Di Keranjang"
            addButtonContainer.innerHTML = `
                <button class="btn btn-in-cart">
                    <i class="fas fa-check"></i> Di Keranjang
                </button>
            `;
        } else {
            // Quantity berbeda, tampilkan "Update"
            addButtonContainer.innerHTML = `
                <button class="btn btn-update" onclick="updateCartItem(${productId})">
                    <i class="fas fa-sync-alt"></i> Update
                </button>
            `;
        }
    } else {
        // Produk tidak ada di keranjang
        addButtonContainer.innerHTML = `
            <button class="btn" onclick="addToCart(${productId})">
                <i class="fas fa-cart-plus"></i> Tambah ke Keranjang
            </button>
        `;
    }
}

// Update cart count
function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = cartCount;
    
    // Update cart total
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalElement.textContent = cartTotal.toLocaleString('id-ID');
}

// Open cart modal
function openCartModal() {
    renderCartItems();
    cartModal.classList.add('active');
}

// Close cart modal
function closeCartModal() {
    cartModal.classList.remove('active');
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart fa-3x"></i>
                <p>Keranjang belanja Anda masih kosong</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <div class="cart-item-quantity-controls">
                    <button class="cart-qty-btn" onclick="adjustCartItemQuantity(${item.id}, -1)">-</button>
                    <span class="cart-qty-display">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="adjustCartItemQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Update cart total
    cartTotalElement.textContent = cartTotal.toLocaleString('id-ID');
    
    // Add continue payment button
    const continuePaymentDiv = document.createElement('div');
    continuePaymentDiv.className = 'continue-payment-container';
    continuePaymentDiv.innerHTML = `
        <a href="${paymentLink}" class="btn btn-payment" target="_blank" onclick="closeCartModal()">
            <i class="fas fa-credit-card"></i> Lanjutkan Pembayaran
        </a>
    `;
    cartItems.appendChild(continuePaymentDiv);
}

// Adjust cart item quantity
function adjustCartItemQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex === -1) return;
    
    const newQuantity = cart[itemIndex].quantity + change;
    
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > 99) {
        showNotification('Maksimal 99 item per produk', 'error');
        return;
    }
    
    cart[itemIndex].quantity = newQuantity;
    updateCartCount();
    renderCartItems();
    
    // Update product card
    const qtyInput = document.getElementById(`qty-${productId}`);
    if (qtyInput) {
        qtyInput.value = newQuantity;
        updateAddButton(productId);
    }
    
    showNotification(`Jumlah ${cart[itemIndex].name} diperbarui: ${newQuantity} pcs`, 'success');
}

// Go to payment
function goToPayment() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja Anda masih kosong!', 'error');
        return;
    }
    
    // Open payment link in new tab
    window.open(paymentLink, '_blank');
}

// View details
function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name}\n\nKategori: ${getCategoryName(product.category)}\nHarga: Rp ${product.price.toLocaleString('id-ID')}\nStatus: ${product.stock === 'ready' ? 'Ready Stock' : 'Sold Out'}\n\n${product.description}`);
}

// Show notification
function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${type === 'success' ? 'var(--success-green)' : 'var(--error-red)'};
        color: white;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        max-width: 350px;
        font-weight: 500;
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}