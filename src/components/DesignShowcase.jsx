// Tibu Pharmacy Design System Showcase Component
import React from 'react';

const DesignShowcase = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 font-roboto">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary-600 dark:text-primary-400">
          Tibu Pharmacy Design System
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-open-sans">
          Modern healthcare solutions with elegant design
        </p>
      </div>

      {/* Color Palette */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Colors</h2>
        <div className="grid grid-cols-5 gap-4">
          {/* Primary Colors */}
          <div className="space-y-2">
            <div className="h-16 bg-primary-500 rounded-lg shadow-soft"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Primary 500</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-primary-300 rounded-lg shadow-soft"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Primary 300</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-accent-500 rounded-lg shadow-soft"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Accent 500</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-accent-300 rounded-lg shadow-soft"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Accent 300</p>
          </div>
          <div className="space-y-2">
            <div className="h-16 bg-gray-500 rounded-lg shadow-soft"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Neutral 500</p>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Typography</h2>
        <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
          <h1 className="text-4xl font-roboto font-bold text-gray-900 dark:text-gray-100">
            Roboto Bold - Headings
          </h1>
          <h2 className="text-2xl font-roboto font-semibold text-gray-900 dark:text-gray-100">
            Roboto Semibold - Subheadings
          </h2>
          <p className="text-base font-open-sans text-gray-600 dark:text-gray-300">
            Open Sans Regular - Body text with excellent readability for healthcare content.
          </p>
          <p className="text-sm font-open-sans font-medium text-gray-700 dark:text-gray-200">
            Open Sans Medium - Labels and important text
          </p>
        </div>
      </div>

      {/* Shadows & Effects */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Shadows & Effects</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
            <p className="text-center font-medium">Soft Shadow</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-medium">
            <p className="text-center font-medium">Medium Shadow</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-strong">
            <p className="text-center font-medium">Strong Shadow</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200">
            Primary Button
          </button>
          <button className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors duration-200">
            Accent Button
          </button>
          <button className="px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 font-medium rounded-lg transition-colors duration-200">
            Outline Button
          </button>
        </div>
      </div>

      {/* Animation Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Animations</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft animate-fade-in">
            <p className="text-center font-medium">Fade In</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft animate-slide-up">
            <p className="text-center font-medium">Slide Up</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft animate-pulse-soft">
            <p className="text-center font-medium">Soft Pulse</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;