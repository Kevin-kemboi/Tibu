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

### Integration with Backend Systems

This frontend integrates with two main backend systems:

1. **[YMGS Backend](https://github.com/Sanskargupta0/YMGS-Backend)**: Main API server handling:
   - Product catalog management
   - User authentication and profiles
   - Order processing and payment integration
   - Blog content management
   - Contact form handling

2. **[YMGS Admin Panel](https://github.com/Sanskargupta0/YMGS-Admin)**: Administrative interface for:
   - Product inventory management
   - Order fulfillment and tracking
   - User management
   - Content management (blogs, testimonials)
   - Analytics and reporting

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

### For Testing & Demo

You can test the application using these demo credentials:

**Demo User Account:**
- **Email**: `Sanskar362002@gmail.com`
- **Password**: `Qwerty123`

**Test Coupon Code:**
- **Coupon**: `SUMMER2025` (for testing discount functionality)

### For Customers

1. **Browse Products**: Visit the products page to explore available medicines and health products
2. **Search & Filter**: Use the search bar and filters to find specific products
3. **Add to Cart**: Select products and add them to your shopping cart
4. **Checkout**: 
   - Register/login for a personalized experience, or
   - Use guest checkout for quick purchases
5. **Payment**: Choose from multiple payment methods available
6. **Track Orders**: Monitor your order status through the orders page

### For Administrators

1. Use the [YMGS Admin Panel](https://github.com/Sanskargupta0/YMGS-Admin) to:
   - Manage product inventory
   - Process and fulfill orders
   - Handle customer inquiries
   - Update blog content and testimonials

## 🏗️ Project Structure

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

## 🌐 Deployment

### Vercel Deployment (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Import to Vercel**: Connect your repository to Vercel
3. **Configure Environment Variables**:
   - Add `VITE_BACKEND_URL` (your production backend URL)
   - Add `VITE_RAZORPAY_KEY_ID` (your production Razorpay key)
4. **Deploy**: Vercel automatically builds and deploys your application
5. **Auto-Deploy**: Future commits to main branch trigger automatic deployments

### Manual Deployment

Build and deploy to any static hosting service:

```bash
# Build for production
npm run build

# The dist/ folder contains your production-ready application
# Upload it to your hosting provider
```

### Environment Variables for Production

Ensure these are set in your deployment platform:

| Variable | Example | Required |
|----------|---------|----------|
| `VITE_BACKEND_URL` | `https://api.tibupharmacy.com` | Yes |
| `VITE_RAZORPAY_KEY_ID` | `rzp_live_xxxxxxxxx` | No |

### Deployment Checklist

- [ ] Set production environment variables
- [ ] Update backend URL to production API
- [ ] Use production Razorpay keys (not test keys)
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure CORS on backend for production domain
- [ ] Test payment integration in production
- [ ] Verify WhatsApp integration works
- [ ] Test mobile responsiveness
- [ ] Run lighthouse audit for performance

## 🔒 Security Features

- **Input Validation**: Client-side form validation with server-side verification
- **Secure Authentication**: Token-based authentication with the backend
- **Payment Security**: Secure payment processing through trusted gateways
- **Data Protection**: Sensitive information handled securely through backend APIs
- **CORS Configuration**: Proper cross-origin resource sharing setup

## 🎨 UI/UX Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: User preference with localStorage persistence
- **Loading States**: Skeleton loaders and progress indicators
- **Error Handling**: User-friendly error messages and retry mechanisms
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized images and lazy loading

## 🔧 API Integration

The frontend communicates with the backend through RESTful APIs:

### Main API Endpoints Used:
- `/api/product/user/list` - Product catalog
- `/api/cart/*` - Shopping cart operations
- `/api/order/*` - Order processing and management
- `/api/user/*` - User authentication and profile
- `/api/blog/*` - Blog content
- `/api/contact` - Contact form submissions

### Payment Integration:
- **Razorpay**: For Indian market payments
- **Stripe**: For international payments
- **Manual Processing**: For alternative payment methods

## 🚦 Troubleshooting

### Common Issues

1. **Backend Connection Failed**: 
   - Verify `VITE_BACKEND_URL` is set correctly
   - Ensure backend server is running
   - Check network connectivity

2. **Payment Integration Issues**:
   - Verify Razorpay key is valid
   - Check backend payment configuration
   - Ensure SSL is enabled for production

3. **Build Errors**:
   - Clear node_modules and reinstall dependencies
   - Check for TypeScript/JavaScript syntax errors
   - Verify all environment variables are set

4. **Theme Not Persisting**:
   - Check localStorage availability
   - Verify ThemeContext is properly wrapped around components

### Performance Tips

- Enable image optimization in production
- Use proper caching headers for static assets
- Monitor bundle size and optimize if necessary
- Implement proper error boundaries

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Optimized mobile experience with hamburger menu and touch gestures

## 🤝 Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, or documentation improvements.

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/tibu-pharmacy-frontend.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style and conventions
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your feature"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Link any related issues
   - Wait for code review

### Contribution Guidelines

- **Code Style**: Follow the existing ESLint configuration
- **Commits**: Use clear, descriptive commit messages
- **Testing**: Test your changes in both light and dark themes
- **Documentation**: Update README if you add new features
- **Responsive**: Ensure changes work on mobile, tablet, and desktop

### Areas for Contribution

- 🐛 Bug fixes and error handling improvements
- ✨ New features and enhancements
- 📱 Mobile UX improvements
- 🎨 UI/UX refinements
- 📚 Documentation improvements
- 🌍 Localization and translations
- ⚡ Performance optimizations
- ♿ Accessibility improvements

## 📞 Support & Contact

### Customer Support

- **WhatsApp**: [+254 704883755](https://wa.me/254704883755)
- **Email**: info@tibupharmacy.com
- **Location**: Nairobi, Kenya

### Technical Support

If you encounter technical issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing GitHub issues
3. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Browser and OS information

### Business Inquiries

For partnerships, wholesale orders, or business opportunities:
- Email: info@tibupharmacy.com
- Phone: +254 704883755

## 📄 License

This project is open source and available under the **MIT License**.

```
MIT License

Copyright (c) 2025 Tibu Pharmacy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **React Team**: For the amazing React library
- **Vite Team**: For the blazing-fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **Professional Stock Photo Libraries**: Shutterstock, Getty Images, iStock for pharmaceutical product imagery
- **Open Source Community**: For the incredible tools and libraries

## 📊 Project Status

- ✅ **Active Development**: Regularly updated and maintained
- ✅ **Production Ready**: Stable and tested for production use
- 🚀 **Future Plans**: M-Pesa integration, mobile app, advanced analytics

## 🔗 Related Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)

---

<div align="center">

### 💊 Tibu Pharmacy - Your Health, Our Priority

**Made with ❤️ in Kenya 🇰🇪**

[Website](https://tibupharmacy.com) • [WhatsApp](https://wa.me/254704883755) • [Email](mailto:info@tibupharmacy.com)

⭐ Star this repo if you find it useful!

</div> 
