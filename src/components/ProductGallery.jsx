// Product Gallery component to showcase pharmaceutical images
import React, { useState } from 'react';
import { imageUrls } from '../assets/imageConfig';

const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'prescription', label: 'Prescription' },
    { key: 'otc', label: 'Over-the-Counter' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'wellness', label: 'Wellness' },
    { key: 'personalCare', label: 'Personal Care' },
    { key: 'ayurvedic', label: 'Ayurvedic' }
  ];

  const getProductsByCategory = () => {
    if (selectedCategory === 'all') {
      return imageUrls.products;
    }
    
    // For demo, show category-specific images if available
    const categoryImage = imageUrls.categories[selectedCategory];
    return categoryImage ? [categoryImage, ...imageUrls.products.slice(0, 8)] : imageUrls.products.slice(0, 9);
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-roboto font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Pharmaceutical Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-open-sans">
            Professional healthcare solutions with quality assurance
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.key
                  ? 'bg-primary-500 text-white shadow-medium'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 shadow-soft'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getProductsByCategory().slice(0, 12).map((imageUrl, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={imageUrl}
                  alt={`Pharmaceutical product ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x400/e5e7eb/374151?text=Product+${index + 1}`;
                  }}
                />
              </div>
              <div className="p-4">
                <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-3"></div>
                <p className="text-sm font-open-sans text-gray-600 dark:text-gray-300">
                  Professional Grade Medicine
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-roboto font-medium rounded-lg shadow-medium hover:shadow-strong transition-all duration-200 transform hover:-translate-y-1">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;