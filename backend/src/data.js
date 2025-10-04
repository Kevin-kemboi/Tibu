// In-memory mock data for development
import { v4 as uuid } from 'uuid';

const categories = ['Prescription','OTC','Healthcare','Wellness','Personal Care','Ayurvedic'];
const subCategories = ['Tablets','Capsules','Syrups','Injectables','Topical','Drops','Equipment'];

export const products = Array.from({ length: 60 }).map((_, i) => {
  const category = categories[i % categories.length];
  const subCategory = subCategories[i % subCategories.length];
  return {
    _id: uuid(),
    name: `Sample Product ${i + 1}`,
    description: `This is a detailed description for Sample Product ${i + 1}. Useful for testing UI layouts and truncation logic.`,
    price: (5 + (i % 15) * 1.5).toFixed(2),
    category,
    subCategory,
    bestseller: i % 6 === 0,
    minOrderQuantity: (i % 3) + 1,
  image: [`https://placehold.co/400x400?text=Product+${i + 1}`],
    quantityPriceList: [
      { quantity: 10, price: (5 + (i % 10)).toFixed(2) },
      { quantity: 25, price: (4.75 + (i % 10)).toFixed(2) },
      { quantity: 50, price: (4.5 + (i % 10)).toFixed(2) }
    ],
    createdAt: Date.now() - i * 3600 * 1000
  };
});

// Simple in-memory cart storage keyed by token
export const carts = new Map(); // token -> { productId: { quantity, selectedPrice, isPackage } }
