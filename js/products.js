document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("products-container");
  const spinner = document.getElementById("loading-spinner");
  const cartCountEl = document.getElementById("cart-count");
  const toastEl = document.getElementById("cartToast");
  const toastMessage = document.getElementById("toast-message");

  let cartCount = 0;
  const bsToast = new bootstrap.Toast(toastEl);

  async function loadProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=8");
      if (!res.ok) throw new Error("API infrastructure response error state.");

      const products = await res.json();
      spinner.classList.add("d-none");
      renderGrid(products);
    } catch (err) {
      console.error(err);
      spinner.innerHTML = `<p class="text-danger fw-medium">Failed to load curated gear. Check network console.</p>`;
    }
  }

function renderGrid(items) {
    container.innerHTML = items.map(item => `
      <div class="col-12 col-sm-6 col-lg-3">
        <div class="card h-100 custom-product-card">
          <div class="card-image-container bg-white border-bottom p-4 d-flex align-items-center justify-content-center">
            <img src="${item.image}" alt="${item.title}" class="img-fluid" loading="lazy">
          </div>
          <div class="card-body d-flex flex-column p-4">
            <span class="product-category">${item.category}</span>
            <h3 class="card-title product-title" title="${item.title}">${item.title}</h3>
            
            <div class="mt-auto d-flex align-items-center justify-content-between">
              <span class="fw-bold fs-5">$${item.price.toFixed(2)}</span>
              <button class="btn btn-primary-modern py-1 px-3 fs-6 d-inline-flex align-items-center gap-1" 
                      data-action="add-to-cart" 
                      data-title="${item.title.replace(/"/g, '&quot;')}">
                <i class="bi bi-plus-lg"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  }
  // Event Delegation Architecture
  container.addEventListener("click", (e) => {
    const targetButton = e.target.closest('[data-action="add-to-cart"]');
    if (!targetButton) return;

    const productTitle = targetButton.getAttribute("data-title");

    // Mutate state
    cartCount++;
    cartCountEl.textContent = cartCount;

    // Trigger UI Confirmation elements
    toastMessage.textContent = `Added "${productTitle}" to cart`;
    bsToast.show();
  });

  if (container) {
    loadProducts();
  }
});