:root {
  --bg: #f8f6f1;
  --panel: #ffffff;
  --card: #fffaf1;
  --primary: #1c7c54;
  --primary-dark: #14583b;
  --accent: #f7d77a;
  --text: #1d2a25;
  --muted: #667a72;
  --border: #ebefe8;
  --shadow: 0 18px 38px rgba(25, 60, 48, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, #f8f6f1 0%, #edf7f0 100%);
  color: var(--text);
}

button,
input {
  font: inherit;
}

img {
  width: 100%;
  display: block;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(28, 124, 84, 0.08);
  border-radius: 22px;
  padding: 18px 24px;
  position: sticky;
  top: 16px;
  z-index: 20;
  box-shadow: var(--shadow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #2ca56d);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 10px 25px rgba(21, 101, 72, 0.25);
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-weight: 600;
}

.nav a {
  color: inherit;
  text-decoration: none;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.search-box {
  display: flex;
  align-items: center;
  background: #f5f8f5;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0 12px 0 16px;
  min-width: 250px;
}

.search-box input {
  border: none;
  background: transparent;
  outline: none;
  padding: 12px 0;
  width: 100%;
  color: var(--text);
}

.icon-button,
.primary-button,
.secondary-button {
  border: none;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.icon-button:hover,
.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.icon-button {
  width: 44px;
  height: 44px;
  background: #edf7f0;
  color: var(--primary-dark);
  font-size: 1.1rem;
  position: relative;
}

.cart-badge {
  position: absolute;
  right: -4px;
  top: -5px;
  background: #ff7b54;
  color: white;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 50%;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.primary-button {
  background: linear-gradient(135deg, var(--primary), #2ca56d);
  color: white;
  padding: 12px 20px;
  font-weight: 700;
  box-shadow: 0 12px 24px rgba(28, 124, 84, 0.2);
}

.secondary-button {
  background: #eef7ef;
  color: var(--primary-dark);
  padding: 12px 18px;
  font-weight: 700;
}

.hero {
  margin-top: 30px;
  background: linear-gradient(135deg, rgba(254, 249, 235, 0.95), rgba(231, 249, 236, 0.9));
  border-radius: 30px;
  padding: 36px 40px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  border: 1px solid rgba(28, 124, 84, 0.08);
  box-shadow: var(--shadow);
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 4vw, 4rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.hero-copy p {
  color: var(--muted);
  margin: 16px 0 28px;
  font-size: 1.03rem;
  line-height: 1.7;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-bottom: 26px;
}

.trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  color: var(--muted);
  font-weight: 700;
}

.trust-row strong {
  display: block;
  color: var(--text);
  font-size: 1.4rem;
}

.hero-visual {
  position: relative;
  min-height: 360px;
}

.feature-card {
  position: absolute;
  border-radius: 26px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.main-product {
  width: 74%;
  height: 280px;
  right: 0;
  top: 0;
  background: url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80') center/cover no-repeat;
}

.small-card {
  left: 0;
  bottom: 10px;
  width: 48%;
  background: rgba(255, 255, 255, 0.88);
  padding: 18px;
  backdrop-filter: blur(4px);
}

.small-card .mini-badge {
  background: #effbf4;
  color: var(--primary);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.72rem;
  font-weight: 800;
  display: inline-block;
  margin-bottom: 10px;
}

.small-card h3 {
  margin: 0;
  font-size: 1.2rem;
}

.price-tag {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
}

.discount-pill {
  background: #fff2d9;
  color: #bb6a00;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.8rem;
}

.content {
  margin-top: 36px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(1.7rem, 2.5vw, 2.4rem);
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.filter-pill {
  background: #eef6f2;
  color: var(--primary-dark);
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
}

.filter-pill.active {
  background: var(--primary);
  color: white;
  box-shadow: 0 12px 20px rgba(28, 124, 84, 0.18);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 22px;
}

.product-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.product-image {
  height: 220px;
  position: relative;
}

.product-image img {
  height: 100%;
  object-fit: cover;
}

.pill {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-dark);
  font-size: 0.72rem;
  font-weight: 800;
  border-radius: 999px;
  padding: 7px 10px;
}

.product-body {
  padding: 18px 16px 16px;
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--muted);
  font-size: 0.82rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.product-name {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.4;
}

.product-desc {
  margin: 10px 0 16px;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.92rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.product-price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.main-price {
  font-size: 1.25rem;
  font-weight: 800;
}

.strike {
  text-decoration: line-through;
  font-size: 0.8rem;
  color: var(--muted);
}

.product-actions {
  display: flex;
  gap: 8px;
}

.action-button {
  border: none;
  border-radius: 12px;
  padding: 10px 14px;
  font-weight: 700;
}

.light-button {
  background: #edf7f0;
  color: var(--primary-dark);
}

.dark-button {
  background: var(--text);
  color: white;
}

.cart-layout {
  margin-top: 42px;
  display: grid;
  grid-template-columns: 2.2fr 1fr;
  gap: 26px;
}

.panel {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--border);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 22px;
}

.summary-list {
  display: grid;
  gap: 14px;
}

.summary-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.summary-item strong {
  display: block;
}

.inline-amount {
  font-weight: 800;
}

.cart-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}

.cart-image {
  width: 72px;
  height: 72px;
  border-radius: 16px;
  overflow: hidden;
}

.cart-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-details {
  flex: 1;
}

.cart-details h4 {
  margin: 0 0 8px;
  font-size: 1rem;
}

.qty-control {
  display: flex;
  align-items: center;
  gap: 12px;
}

.qty-button {
  border: 1px solid var(--border);
  background: white;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  font-weight: 700;
}

.empty-state {
  padding: 32px 18px;
  text-align: center;
  color: var(--muted);
}

.checkout-form {
  margin-top: 18px;
  display: grid;
  gap: 14px;
}

.checkout-form input {
  width: 100%;
  border: 1px solid var(--border);
  background: #f9faf9;
  border-radius: 14px;
  padding: 12px 14px;
  outline: none;
}

.checkout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 27, 22, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 50;
}

.modal {
  width: min(900px, 100%);
  background: white;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(28, 38, 33, 0.24);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.modal-image {
  height: 100%;
  min-height: 380px;
  background-size: cover;
  background-position: center;
}

.modal-body {
  padding: 28px;
}

.modal-body h3 {
  margin: 0;
  font-size: clamp(1.8rem, 2vw, 2.6rem);
}

.modal-price {
  margin: 18px 0 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.modal-price strong {
  font-size: 1.8rem;
}

.modal-body p {
  color: var(--muted);
  line-height: 1.7;
}

.modal-actions {
  display: flex;
  gap: 12px;
  margin-top: 26px;
}

.close-button {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
}

.toast {
  position: fixed;
  right: 28px;
  bottom: 28px;
  background: var(--primary-dark);
  color: white;
  border-radius: 14px;
  padding: 14px 18px;
  box-shadow: var(--shadow);
  z-index: 75;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .cart-layout {
    grid-template-columns: 1fr;
  }

  .modal-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  header {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 16px;
  }

  .nav {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .header-actions {
    width: 100%;
    justify-content: center;
  }

  .search-box {
    min-width: 0;
    width: 100%;
  }

  .hero {
    padding: 24px 18px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
