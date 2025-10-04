import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { products, carts } from './data.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 4000;

// Helper: paginate array
function paginate(items, page = 1, limit = 20) {
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(Math.max(1, page), pages);
  const start = (currentPage - 1) * limit;
  const sliced = items.slice(start, start + limit);
  return { data: sliced, pagination: { total, pages, currentPage, limit } };
}

// POST /api/product/user/list
app.post('/api/product/user/list', (req, res) => {
  const { page = 1, limit = 20, category = [], subCategory = [], search = '', sortBy = 'date', sortOrder = 'desc', bestseller, excludeId } = req.body || {};

  let filtered = [...products];

  if (bestseller) {
    filtered = filtered.filter(p => p.bestseller);
  }

  if (excludeId) {
    filtered = filtered.filter(p => p._id !== excludeId);
  }

  if (Array.isArray(category) && category.length) {
    filtered = filtered.filter(p => category.includes(p.category));
  }

  if (Array.isArray(subCategory) && subCategory.length) {
    filtered = filtered.filter(p => subCategory.includes(p.subCategory));
  }

  if (search) {
    const term = search.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
  }

  // Sorting
  if (sortBy === 'price') {
    filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else { // date
    filtered.sort((a, b) => a.createdAt - b.createdAt);
  }
  if (sortOrder === 'desc') filtered.reverse();

  const { data, pagination } = paginate(filtered, page, limit);

  res.json({ success: true, products: data, pagination });
});

// GET /api/product/:id
app.get('/api/product/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, product });
});

// CART ROUTES
// Expect header: token (string). We'll just trust any token.

app.post('/api/cart/get', (req, res) => {
  const token = req.headers.token || 'guest';
  const cartData = carts.get(token) || {};
  res.json({ success: true, cartData });
});

app.post('/api/cart/add', (req, res) => {
  const token = req.headers.token || 'guest';
  const { itemId, cartData } = req.body;
  if (!itemId || !cartData) return res.status(400).json({ success: false, message: 'Missing itemId or cartData' });
  const existing = carts.get(token) || {};
  existing[itemId] = cartData;
  carts.set(token, existing);
  res.json({ success: true, message: 'Item added', cartData: existing });
});

app.post('/api/cart/update', (req, res) => {
  const token = req.headers.token || 'guest';
  const { itemId, cartData } = req.body;
  if (!itemId || cartData === undefined) return res.status(400).json({ success: false, message: 'Missing itemId or cartData' });
  const existing = carts.get(token) || {};
  if (!cartData.quantity || cartData.quantity === 0) {
    delete existing[itemId];
  } else {
    existing[itemId] = cartData;
  }
  carts.set(token, existing);
  res.json({ success: true, message: 'Cart updated', cartData: existing });
});

// Order settings (contact info / footer)
app.get('/api/order/settings', (req, res) => {
  res.json({
    success: true,
    settings: {
      footerEmail: 'ymgspharmacy@gmail.com',
      footerPhone: '+91 8858284423'
    }
  });
});

// Coupon verification mock
app.post('/api/order/verify-coupon', (req, res) => {
  const { couponCode, amount } = req.body || {};
  if (!couponCode) return res.json({ success: false, message: 'Coupon code required' });
  // Simple mock: SUMMER2025 gives flat 15 off if amount >= 50
  if (couponCode.toUpperCase() === 'SUMMER2025') {
    if (amount < 50) return res.json({ success: false, message: 'Minimum order amount for this coupon is 50' });
    return res.json({ success: true, couponDetails: { code: couponCode, discount: 15 } });
  }
  return res.json({ success: false, message: 'Invalid coupon code' });
});

// Crypto wallets mock
app.get('/api/order/crypto-wallets', (req, res) => {
  const wallets = [
    {
      cryptoType: 'USDT',
      network: 'TRC20',
      walletAddress: 'TPMockWalletAddress123456789',
      qrCodeImage: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TPMockWalletAddress123456789'
    },
    {
      cryptoType: 'BTC',
      network: 'Bitcoin',
      walletAddress: 'bc1qsamplebitcoinaddressxyz',
      qrCodeImage: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bc1qsamplebitcoinaddressxyz'
    },
    {
      cryptoType: 'ETH',
      network: 'ERC20',
      walletAddress: '0xSampleEthereumAddressABCDEF',
      qrCodeImage: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0xSampleEthereumAddressABCDEF'
    }
  ];
  res.json({ success: true, wallets });
});

// Guest order placement mock
app.post('/api/order/guest', (req, res) => {
  const { items, amount } = req.body || {};
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: 'No items in order' });
  }
  if (!amount || amount <= 0) {
    return res.status(400).json({ success: false, message: 'Invalid amount' });
  }
  // Return a mock order id
  const orderId = 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  res.json({ success: true, orderId, message: 'Guest order accepted (mock).' });
});

// Minimal blog endpoints (placeholder)
app.get('/api/blog/list', (req, res) => {
  res.json({ success: true, blogs: [], pagination: { total: 0, pages: 0, currentPage: 1, limit: 10 } });
});

// Contact route placeholder
app.post('/api/contact', (req, res) => {
  res.json({ success: true, message: 'Message received' });
});

app.get('/', (_, res) => res.send('Mock YMGS Backend Running'));

app.listen(PORT, () => {
  console.log(`Mock backend listening on http://localhost:${PORT}`);
});
