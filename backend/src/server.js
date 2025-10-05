import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { products, carts } from './data.js';

dotenv.config();

const app = express();

// CORS setup
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token'],
  })
);

app.use(express.json());
app.use(morgan('dev'));

// Custom logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`[REQ] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms}ms)`);
  });
  next();
});

const API_VERSION = '1.0.0';
const PORT = process.env.PORT || 4000;
const HOST = '0.0.0.0'; // ✅ Important for Render

// Helper: paginate array
function paginate(items, page = 1, limit = 20) {
  const total = items.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(Math.max(1, page), pages);
  const start = (currentPage - 1) * limit;
  const sliced = items.slice(start, start + limit);
  return { data: sliced, pagination: { total, pages, currentPage, limit } };
}

// 🛍 Products - Get all products with filters
app.post('/api/product/user/list', (req, res) => {
  console.log('[API] POST /api/product/user/list', req.body);
  
  const {
    page = 1,
    limit = 20,
    category = [],
    subCategory = [],
    search = '',
    sortBy = 'date',
    sortOrder = 'desc',
    bestseller,
    excludeId,
  } = req.body || {};

  let filtered = [...products];

  if (bestseller) filtered = filtered.filter((p) => p.bestseller);
  if (excludeId) filtered = filtered.filter((p) => p._id !== excludeId);
  if (Array.isArray(category) && category.length)
    filtered = filtered.filter((p) => category.includes(p.category));
  if (Array.isArray(subCategory) && subCategory.length)
    filtered = filtered.filter((p) => subCategory.includes(p.subCategory));
  if (search) {
    const term = search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
    );
  }

  if (sortBy === 'price') {
    filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else {
    filtered.sort((a, b) => a.createdAt - b.createdAt);
  }
  if (sortOrder === 'desc') filtered.reverse();

  const { data, pagination } = paginate(filtered, page, limit);
  
  console.log(`[API] Returning ${data.length} products (Total: ${pagination.total})`);
  res.json({ success: true, products: data, pagination });
});

// 🏆 Get bestseller products
app.get('/api/product/bestsellers', (req, res) => {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 10);
  res.json({
    success: true,
    products: bestsellers
  });
});

// GET /api/product/:id
app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, product });
});

// 🛒 CART
app.post('/api/cart/get', (req, res) => {
  const token = req.headers.token || 'guest';
  const cartData = carts.get(token) || {};
  res.json({ success: true, cartData });
});

app.post('/api/cart/add', (req, res) => {
  const token = req.headers.token || 'guest';
  const { itemId, cartData } = req.body;
  if (!itemId || !cartData)
    return res.status(400).json({ success: false, message: 'Missing itemId or cartData' });
  const existing = carts.get(token) || {};
  existing[itemId] = cartData;
  carts.set(token, existing);
  res.json({ success: true, message: 'Item added', cartData: existing });
});

app.post('/api/cart/update', (req, res) => {
  const token = req.headers.token || 'guest';
  const { itemId, cartData } = req.body;
  if (!itemId || cartData === undefined)
    return res.status(400).json({ success: false, message: 'Missing itemId or cartData' });
  const existing = carts.get(token) || {};
  if (!cartData.quantity || cartData.quantity === 0) {
    delete existing[itemId];
  } else {
    existing[itemId] = cartData;
  }
  carts.set(token, existing);
  res.json({ success: true, message: 'Cart updated', cartData: existing });
});

// 📦 Order settings
app.get('/api/order/settings', (req, res) => {
  console.log('[API] GET /api/order/settings');
  res.json({
    success: true,
    settings: {
      footerEmail: 'info@tibupharmacy.com',
      footerPhone: '+254 704883755',
      address: '123 Pharmacy Plaza, Healthcare District, Nairobi 00100',
      city: 'Nairobi',
      country: 'Kenya',
      currency: 'KES',
      deliveryFee: 150,
      minOrderAmount: 500
    },
  });
});

// 💰 Coupon verification
app.post('/api/order/verify-coupon', (req, res) => {
  const { couponCode, amount } = req.body || {};
  if (!couponCode) return res.json({ success: false, message: 'Coupon code required' });
  if (couponCode.toUpperCase() === 'SUMMER2025') {
    if (amount < 50) return res.json({ success: false, message: 'Minimum order amount is 50' });
    return res.json({ success: true, couponDetails: { code: couponCode, discount: 15 } });
  }
  return res.json({ success: false, message: 'Invalid coupon code' });
});

// 🪙 Crypto wallets mock
app.get('/api/order/crypto-wallets', (req, res) => {
  console.log('[API] GET /api/order/crypto-wallets');
  const wallets = [
    {
      cryptoType: 'USDT',
      network: 'TRC20',
      walletAddress: 'TPMockWalletAddress123456789',
      qrCodeImage:
        'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TPMockWalletAddress123456789',
    },
    {
      cryptoType: 'BTC',
      network: 'Bitcoin',
      walletAddress: 'bc1qsamplebitcoinaddressxyz',
      qrCodeImage:
        'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bc1qsamplebitcoinaddressxyz',
    },
    {
      cryptoType: 'ETH',
      network: 'ERC20',
      walletAddress: '0xSampleEthereumAddressABCDEF',
      qrCodeImage:
        'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0xSampleEthereumAddressABCDEF',
    },
  ];
  res.json({ success: true, wallets, fetchedAt: new Date().toISOString() });
});

// 🧾 Guest order
app.post('/api/order/guest', (req, res) => {
  const { items, amount } = req.body || {};
  if (!items?.length) return res.status(400).json({ success: false, message: 'No items in order' });
  if (!amount || amount <= 0)
    return res.status(400).json({ success: false, message: 'Invalid amount' });

  const orderId = 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  res.json({ success: true, orderId, message: 'Guest order accepted (mock).' });
});

// 📰 Blog + Contact
app.get('/api/blog/list', (req, res) =>
  res.json({ success: true, blogs: [], pagination: { total: 0, pages: 0, currentPage: 1, limit: 10 } })
);

app.post('/api/contact', (req, res) => res.json({ success: true, message: 'Message received' }));

// 🩺 Health + root
app.get('/health', (_, res) =>
  res.json({ status: 'ok', time: new Date().toISOString(), version: API_VERSION })
);
app.get('/', (_, res) =>
  res.json({
    message: 'Mock Tibu Pharmacy Backend Running',
    version: API_VERSION,
    docs: '/health',
  })
);

// 404 + Error handlers
app.use('/api', (req, res) => {
  res.status(404).json({ success: false, message: 'API route not found' });
});

app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  if (process.env.NODE_ENV !== 'production') console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ✅ FIXED HOST BINDING HERE
app.listen(PORT, HOST, () => {
  console.log(`\n──────────────────────────────────────────────`);
  console.log(` 🏥 Tibu Pharmacy Backend API`);
  console.log(` 🚀 Server: http://${HOST}:${PORT}`);
  console.log(` 🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(` 📦 Products loaded: ${products.length}`);
  console.log(` 📡 Version: ${API_VERSION}`);
  console.log(`\n 📋 API Endpoints:`);
  console.log(`    GET  /health`);
  console.log(`    POST /api/product/user/list`);
  console.log(`    GET  /api/product/bestsellers`);
  console.log(`    GET  /api/product/:id`);
  console.log(`    GET  /api/order/settings`);
  console.log(`    GET  /api/order/crypto-wallets`);
  console.log(`    POST /api/cart/get`);
  console.log(`    POST /api/cart/add`);
  console.log(`    POST /api/cart/update`);
  console.log(`──────────────────────────────────────────────\n`);
});
