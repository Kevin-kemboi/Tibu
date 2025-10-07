# Tibu Pharmacy 🏥 

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react)](https://react.dev/)  
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?logo=vite)](https://vitejs.dev/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-cyan?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Your trusted online pharmacy in Kenya** - Quality medicines and healthcare products delivered to your doorstep 🇰🇪

## 📝 About Tibu Pharmacy

Tibu Pharmacy is a modern, full-featured e-commerce platform designed specifically for the Kenyan healthcare market. Built with cutting-edge web technologies, our platform provides a seamless shopping experience for customers to browse, search, and purchase authentic pharmaceutical products, health supplements, and medical supplies from the comfort of their homes.

### Why Tibu Pharmacy?

- **🎯 Kenya-Focused**: Localized for Kenyan customers with M-Pesa integration, local delivery, and Kenyan Shilling pricing
- **💊 Authentic Products**: Professional pharmaceutical imagery from trusted stock photo libraries
- **🚀 Lightning Fast**: Built with React 18 and Vite 6 for optimal performance
- **📱 Mobile-First**: Fully responsive design optimized for smartphones and tablets
- **🌓 Theme Support**: Beautiful dark and light themes for comfortable browsing
- **💳 Multiple Payment Options**: Support for various payment methods including cryptocurrencies
- **🔒 Secure & Private**: Your health information is protected with industry-standard security

## ⚙️ Tech Stack

### Core Technologies

- **Frontend Framework**: React 18.3 - Modern UI library with hooks and context API
- **Build Tool**: Vite 6.0 - Lightning-fast development and optimized production builds
- **Styling**: Tailwind CSS 3.4 - Utility-first CSS framework for rapid UI development
- **Routing**: React Router DOM 7 - Declarative routing for single-page applications

### Libraries & Tools

- **HTTP Client**: Axios - Promise-based HTTP client with interceptors
- **State Management**: React Context API - Centralized state for cart, theme, and user data
- **UI Components**: Lucide React - Beautiful, consistent icon library
- **Carousel**: Swiper.js - Modern touch-enabled slider
- **Notifications**: React Toastify - Elegant toast notifications
- **Development**: ESLint, PostCSS, Autoprefixer

### Image Assets

- **Professional pharmaceutical product images** from Shutterstock, Getty Images, and iStock
- **Optimized loading** with lazy loading and modern image formats

## 🔋 Features

### � E-commerce Core

**Complete Shopping Experience**
- Browse authentic pharmaceutical products with professional imagery
- Advanced search and filtering by category, subcategory, and keywords
- Product pagination with customizable results per page
- Featured products and bestsellers showcase
- Detailed product pages with descriptions, pricing, and availability
- Real pharmaceutical images from trusted professional stock libraries

**Smart Shopping Cart**
- Add/remove items with intuitive quantity controls
- Support for different product packages and pricing tiers
- Minimum order quantity validation
- Real-time cart total calculations with delivery fees
- Persistent cart across sessions

### � User Management

**Authentication & Profiles**
- Secure user registration and login system
- Profile management with saved delivery addresses
- Order history and real-time tracking
- Guest checkout option for quick purchases (no registration required)
- Token-based authentication with secure backend integration

### 💳 Payment Integration

**Multiple Payment Options**
- **Mobile Money**: M-Pesa integration (coming soon)
- **Cards**: Credit/Debit card payments via Razorpay
- **International**: Stripe for global transactions
- **Digital**: PayPal support
- **Crypto**: Bitcoin, Ethereum, USDT (TRC20, ERC20)
- **Traditional**: Western Union and bank transfers
- **Flexible**: Manual payment processing for alternative methods

**Secure Checkout**
- Guest checkout for quick purchases
- Saved payment methods for registered users
- Separate billing and delivery addresses
- Coupon code support with automatic discount calculations
- Order notes and special delivery instructions

### � Order Management

**Complete Order Tracking**
- Real-time order status updates
- Order verification and payment confirmation
- Detailed order history with payment information
- Email notifications for order updates
- Support for multiple order statuses (processing, shipped, delivered)

### � Customer Experience

**Modern UI/UX**
- Fully responsive design for desktop, tablet, and mobile
- Beautiful dark/light theme toggle with localStorage persistence
- Smooth loading states and skeleton loaders
- Toast notifications for instant user feedback
- Intuitive navigation with mobile hamburger menu
- Smooth animations and transitions

**Customer Support**
- **WhatsApp Integration**: Direct chat at +254 704883755
- Contact form with inquiry management
- Customer testimonials and reviews section
- Comprehensive FAQ and policy pages
- Nairobi, Kenya office location

**Content & Resources**
- Health and wellness blog section
- Paginated blog listings with featured articles
- SEO-friendly blog URLs
- Educational content about medicines and health

### ⚡ Performance & Technical

**Optimized Performance**
- Lightning-fast page loads with Vite 6
- Image optimization with lazy loading
- Efficient component-based architecture
- Smart state management with React Context API
- Minimal bundle size with tree-shaking
- Modern ES6+ JavaScript for optimal performance

## 🏗️ System Architecture

### Frontend Architecture

The application follows a modern React architecture with:

1. **Component-Based Structure**: Modular, reusable components for maintainability
2. **Context API**: Centralized state management for cart, theme, and user data
3. **React Router**: Client-side routing for single-page application experience
4. **API Integration**: RESTful API communication with the backend server



### Data Flow

```
Frontend (React) ↔ Backend API ↔ Database
                     ↕
                Admin Panel
```

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- **[Git](https://git-scm.com/)** - Version control
- **[Node.js](https://nodejs.org/)** - v18.x or higher (LTS recommended)
- **[npm](https://www.npmjs.com/)** or **[yarn](https://yarnpkg.com/)** - Package manager

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tibu-pharmacy-frontend.git
cd tibu-pharmacy-frontend
```

#### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

#### 3. Set Up Backend Server

The application includes a mock backend for development:

```bash
cd backend
npm install
node src/server.js
```

The backend will start on `http://127.0.0.1:4000`

#### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_BACKEND_URL=http://127.0.0.1:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

#### 5. Start Development Server

In a new terminal (keep backend running):

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 🎯 Quick Test

Once running, you can:

1. Browse the product catalog on the homepage
2. Search for specific pharmaceutical products
3. Add items to cart and proceed to checkout
4. Test guest checkout or create an account
5. Toggle between dark/light themes
6. Contact support via WhatsApp integration

### 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development server (frontend)
npm run dev

# Start backend server
cd backend && node src/server.js

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Update browser compatibility data
npx update-browserslist-db@latest
```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Backend API URL
VITE_BACKEND_URL=http://127.0.0.1:4000

# Payment Gateway (Razorpay)
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
```

### Variable Descriptions

| Variable | Description | Required | Default |
|----------|-------------|----------|----------|
| `VITE_BACKEND_URL` | Backend API server URL | Yes | `http://127.0.0.1:4000` |
| `VITE_RAZORPAY_KEY_ID` | Razorpay public key for payments | No | - |

### Environment-Specific Configuration

**Development:**
```env
VITE_BACKEND_URL=http://127.0.0.1:4000
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
```

**Production:**
```env
VITE_BACKEND_URL=https://api.tibupharmacy.com
VITE_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxx
```

### Security Notes

- Never commit `.env` files to version control
- Use different keys for development and production
- Keep Razorpay keys secure and rotate regularly
- The backend handles sensitive configuration (database, payment secrets, etc.)

## 🎯 Usage Guide

```
tibu-pharmacy-frontend/
├── backend/                      # Mock backend server
│   └── src/
│       ├── server.js            # Express API server
│       └── data.js              # Product data with real pharmaceutical images
├── public/                       # Static assets
│   └── vite.svg                 # Favicon
├── screenshots/                  # Application screenshots
│   ├── home-page.png
│   ├── products-collection.png
│   ├── product-detail.png
│   ├── shopping-cart.png
│   ├── checkout-page.png
│   ├── guest-checkout.png
│   ├── order-management.png
│   ├── blog-section.png
│   ├── contact-page.png
│   ├── about-us.png
│   ├── dark-theme.png
│   └── mobile-view.png
├── src/                         # Source code
│   ├── assets/                  # Images and static files
│   │   ├── assets.js           # Asset exports
│   │   ├── logo.png            # Tibu Pharmacy logo
│   │   ├── cart_icon.png       # UI icons
│   │   └── *.png,*.jpg         # Various UI assets
│   ├── components/              # Reusable UI components
│   │   ├── BestSeller.jsx      # Featured products section
│   │   ├── CartTotal.jsx       # Cart summary component
│   │   ├── Feature.jsx         # Features showcase
│   │   ├── Footer.jsx          # Site footer with Tibu branding
│   │   ├── Hero.jsx            # Homepage hero section
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── NewsLetterBox.jsx   # Newsletter subscription
│   │   ├── ProductItem.jsx     # Product card component
│   │   ├── RelatedProducts.jsx # Related products suggestions
│   │   ├── ScrollToTop.jsx     # Scroll to top button
│   │   ├── SearchBar.jsx       # Search functionality
│   │   ├── Testimonials.jsx    # Customer reviews
│   │   ├── ThemeSwitcher.jsx   # Dark/light theme toggle
│   │   ├── Title.jsx           # Section title component
│   │   └── WhatsAppButton.jsx  # WhatsApp integration (+254 704883755)
│   ├── context/                 # React Context providers
│   │   ├── ShopContext.jsx     # Main app state management
│   │   └── ThemeContext.jsx    # Theme state management
│   ├── lib/                     # Utility libraries
│   │   └── apiClient.js        # Axios instance with interceptors
│   ├── pages/                   # Main application pages
│   │   ├── About.jsx           # About Tibu Pharmacy
│   │   ├── BlogDetail.jsx      # Individual blog post
│   │   ├── Blogs.jsx           # Blog listing page
│   │   ├── Cart.jsx            # Shopping cart page
│   │   ├── Collection.jsx      # Products listing page
│   │   ├── Contact.jsx         # Contact form (Nairobi, Kenya)
│   │   ├── GuestCheckout.jsx   # Guest checkout process
│   │   ├── Home.jsx            # Homepage
│   │   ├── Login.jsx           # User authentication
│   │   ├── Orders.jsx          # Order history and tracking
│   │   ├── PlaceOrder.jsx      # Checkout for registered users
│   │   ├── Policy.jsx          # Terms and policies
│   │   ├── Product.jsx         # Individual product page
│   │   └── Verify.jsx          # Payment verification
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── .env                         # Environment variables (not in git)
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── README.md                    # This file
├── tailwind.config.js          # Tailwind CSS configuration
├── vercel.json                 # Vercel deployment config
└── vite.config.js              # Vite build configuration
```

### Key Files

- **`src/context/ShopContext.jsx`**: Central state management for products, cart, and orders
- **`src/lib/apiClient.js`**: Configured Axios instance for API calls
- **`backend/src/server.js`**: Mock Express server with pharmaceutical product data
- **`backend/src/data.js`**: Product database with 30 real pharmaceutical images
- **`src/components/WhatsAppButton.jsx`**: Direct WhatsApp integration for customer support

## 🔄 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```


