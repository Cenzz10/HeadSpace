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

// WhatsApp configuration
const whatsappNumber = "6282139868141"; // Ganti dengan nomor WhatsApp Anda

// Social links
const socialLinks = {
    instagram: "https://www.instagram.com/headspace11_?igsh=MXNmemV3dWM1YzN4cA==",
    whatsapp: "https://wa.me/6282139868141",
    tiktok: "https://www.tiktok.com/@headspace11_?_r=1&_t=ZS-93F8Ef0AjD"
};

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

// DOM elements untuk checkout modal
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const backToCartBtn = document.getElementById('backToCartBtn');
const summaryTotalItems = document.getElementById('summaryTotalItems');
const summaryTotalPrice = document.getElementById('summaryTotalPrice');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartCount();
    updateStockSummary();
    
    // Event listeners untuk cart
    cartIcon.addEventListener('click', openCartModal);
    closeModal.addEventListener('click', closeCartModal);
    
    // Event listeners untuk checkout modal
    closeCheckoutModal.addEventListener('click', closeCheckoutModalHandler);
    checkoutForm.addEventListener('submit', submitCheckoutForm);
    backToCartBtn.addEventListener('click', backToCartHandler);
    
    // Event listeners untuk filter
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
    
    checkoutModal.addEventListener('click', function(e) {
        if (e.target === checkoutModal) {
            closeCheckoutModalHandler();
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
        const displayQuantity = quantityInCart;
        
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
            if (selectedPrice === 'low') return product.price <= 30000;
            if (selectedPrice === 'medium') return product.price > 30000 && product.price <= 40000;
            if (selectedPrice === 'high') return product.price > 40000;
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
    let currentValue = parseInt(qtyInput.value) || 0;
    let newValue = currentValue + change;
    
    if (newValue < 0) newValue = 0;
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
    
    if (!qtyInput) return; // Jika input tidak ditemukan (produk difilter)
    
    const quantity = parseInt(qtyInput.value);
    const currentQuantity = isNaN(quantity) ? 0 : quantity;
    
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

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyInput.value);
    
    // Validasi: quantity harus angka dan > 0
    if (isNaN(quantity) || quantity <= 0) {
        showNotification('Quantity harus lebih dari 0!', 'error');
        
        // Reset ke 0 jika negatif
        if (quantity < 0 || isNaN(quantity)) {
            qtyInput.value = 0;
            updateAddButton(productId);
        }
        
        return;
    }
    
    if (!product || product.stock !== 'ready') {
        showNotification('Produk tidak tersedia!', 'error');
        return;
    }
    
    // Cek apakah sudah ada di keranjang
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
        // Jika sudah ada, update quantity
        cart[existingItemIndex].quantity += quantity;
        showNotification(`${product.name} ditambahkan ${quantity} pcs (Total: ${cart[existingItemIndex].quantity} pcs)`, 'success');
    } else {
        // Jika belum ada, tambahkan baru
        cart.push({
            ...product,
            quantity: quantity
        });
        showNotification(`${product.name} (${quantity} pcs) ditambahkan ke keranjang!`, 'success');
    }
    
    updateCartCount();
    updateAddButton(productId);
    renderCartItems();
}

function updateCartItem(productId) {
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyInput.value);
    
    // Validasi: jika quantity <= 0, hapus dari keranjang
    if (isNaN(quantity) || quantity <= 0) {
        // Hapus dari keranjang jika ada
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex !== -1) {
            const productName = cart[itemIndex].name;
            cart.splice(itemIndex, 1);
            showNotification(`${productName} dihapus dari keranjang`, 'success');
        } else {
            showNotification('Quantity harus lebih dari 0!', 'error');
        }
        
        updateCartCount();
        updateAddButton(productId);
        renderCartItems();
        return;
    }
    
    if (!product || product.stock !== 'ready') {
        showNotification('Produk tidak tersedia!', 'error');
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        // Update quantity yang ada
        cart[itemIndex].quantity = quantity;
        showNotification(`${product.name} diperbarui menjadi ${quantity} pcs`, 'success');
    } else {
        // Jika belum ada di keranjang dan quantity > 0, tambahkan
        cart.push({
            ...product,
            quantity: quantity
        });
        showNotification(`${product.name} (${quantity} pcs) ditambahkan ke keranjang!`, 'success');
    }
    
    updateCartCount();
    updateAddButton(productId);
    renderCartItems();
}

// Remove from cart
function removeFromCart(productId) {
    const productName = cart.find(item => item.id === productId)?.name || '';
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
    
    // Reset product card UI
    resetProductCardUI(productId);
    
    showNotification(`${productName} dihapus dari keranjang`, 'success');
}

// Reset product card UI
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
    
    // Add checkout button
    const checkoutButtonDiv = document.createElement('div');
    checkoutButtonDiv.className = 'continue-payment-container';
    checkoutButtonDiv.innerHTML = `
        <button class="btn btn-payment" onclick="goToPayment()">
            <i class="fas fa-credit-card"></i> Lanjutkan ke Checkout
        </button>
    `;
    cartItems.appendChild(checkoutButtonDiv);
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

// Fungsi untuk membuka modal checkout
function goToPayment() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja Anda masih kosong!', 'error');
        return;
    }
    
    // Buka modal checkout
    openCheckoutModal();
}

// Fungsi untuk membuka modal checkout
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja Anda masih kosong!', 'error');
        return;
    }
    
    updateOrderSummary();
    checkoutModal.classList.add('active');
}

// Fungsi untuk menutup modal checkout
function closeCheckoutModalHandler() {
    checkoutModal.classList.remove('active');
}

// Fungsi untuk kembali ke keranjang
function backToCartHandler() {
    closeCheckoutModalHandler();
    openCartModal();
}

// Fungsi untuk update ringkasan pesanan
function updateOrderSummary() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    summaryTotalItems.textContent = totalItems;
    summaryTotalPrice.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
}

// Fungsi untuk mengirim pesanan ke WhatsApp
function submitCheckoutForm(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        showNotification('Keranjang belanja Anda masih kosong!', 'error');
        return;
    }
    
    // Ambil data dari form
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const orderNotes = document.getElementById('orderNotes').value;
    
    // Validasi form
    if (!customerName || !customerPhone || !customerAddress || !paymentMethod) {
        showNotification('Harap lengkapi semua data yang diperlukan!', 'error');
        return;
    }
    
    // Format nomor telepon (hapus awalan 0 jika ada, tambahkan 62)
    const formattedPhone = formatPhoneNumber(customerPhone);
    
    // Buat pesan WhatsApp
    const whatsappMessage = generateWhatsAppMessage(
        customerName,
        formattedPhone,
        customerAddress,
        paymentMethod,
        orderNotes
    );
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Reset form
    checkoutForm.reset();
    
    // Tutup modal
    closeCheckoutModalHandler();
    closeCartModal();
    
    // Kosongkan keranjang
    cart = [];
    updateCartCount();
    renderCartItems();
    
    // Render ulang produk untuk reset quantity controls
    renderProducts(products);
    
    // Buka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
    
    // Tampilkan notifikasi
    showNotification('Pesanan Anda sedang diproses! WhatsApp akan terbuka.', 'success');
}

// Fungsi untuk memformat nomor telepon
function formatPhoneNumber(phone) {
    // Hapus semua karakter non-digit
    let cleaned = phone.replace(/\D/g, '');
    
    // Jika diawali dengan 0, ganti dengan 62
    if (cleaned.startsWith('0')) {
        cleaned = '62' + cleaned.substring(1);
    }
    
    // Jika diawali dengan +62, hapus +
    if (cleaned.startsWith('+62')) {
        cleaned = cleaned.substring(1);
    }
    
    // Jika tidak diawali dengan 62, tambahkan
    if (!cleaned.startsWith('62')) {
        cleaned = '62' + cleaned;
    }
    
    return cleaned;
}

// Fungsi untuk generate pesan WhatsApp
function generateWhatsAppMessage(name, phone, address, paymentMethod, notes) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const orderDate = new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    let message = `PESANAN DARI WEBSITE HEADSPACE\n\n`;
    message += `*DATA PEMESAN:*\n`;
    message += `- Nama: ${name}\n`;
    message += `- WhatsApp: ${phone}\n`;
    message += `- Alamat: ${address}\n\n`;
    
    message += `DETAIL PESANAN:\n`;
    message += `═══════════════════════════\n`;
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   ├ Kategori: ${getCategoryName(item.category)}\n`;
        message += `   ├ Harga: Rp ${item.price.toLocaleString('id-ID')} x ${item.quantity}\n`;
        message += `   └ Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
    });
    message += `═══════════════════════════\n\n`;
    
    message += `RINCIAN PEMBAYARAN:\n`;
    message += `- Total Item: ${totalItems} pcs\n`;
    message += `- Total Harga: Rp ${totalPrice.toLocaleString('id-ID')}\n`;
    message += `- Metode Bayar: ${paymentMethod}\n\n`;
    
    if (notes) {
        message += `CATATAN PESANAN:\n${notes}\n\n`;
    }
    
    message += `- Waktu Pesan: ${orderDate}\n`;
    message += `\n_Saya sudah memesan dari website HeadSpace dan ingin melanjutkan pembayaran._\n`;
    message += `\nTerima kasih!`;
    
    return message;
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