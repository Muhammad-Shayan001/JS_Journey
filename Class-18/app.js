
const productGrid = document.querySelector(".product-grid");
const loading = document.querySelector(".loading");

async function fetchAndDisplayProducts() {
    // Show loader before fetching
    loading.style.display = "block";
    productGrid.style.display = "none";

    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
              

              
            throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const products = await response.json();

        // Hide loader and show grid after data is fetched
        loading.style.display = "none";
        productGrid.style.display = "grid";

        displayProducts(products);

    } catch (error) {
       loading.style.display = "none";
        productGrid.style.display = "grid";
        productGrid.innerHTML = `<p class="error-message"> Failed to load products. Please try again later. </p>`;
        console.log('Error fetching products:', error);
    }
}

function displayProducts(product) {
    product.map((item) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${item.image}" alt="${item.title}" class="product-image">
            </div>
            <div class="product-info">
                <h2 class="product-title">${item.title}</h2>
                <p class="product-category">${item.category}</p>
                <p class="product-price">$${item.price.toFixed(2)}</p>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Initial fetch
fetchAndDisplayProducts();