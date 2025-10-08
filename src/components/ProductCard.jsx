import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const ProductCard = ({ product }) => {
  const { language, translations } = useLanguage()
  const whatsappNumber = '+923016601992'

  const handleWhatsAppClick = () => {
    const message = `Hello! I'm interested in ${product.name}. Please provide more details.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-orange-100">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description[language]}
        </p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-primary font-bold text-lg">
            Rs {product.price}/month
          </span>
          <span className="text-sm text-gray-500 bg-orange-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
        >
          <span>{translations[language].getInfo}</span>
          <span> / </span>
          <span className={language === 'ur' ? 'urdu-text' : ''}>
            {translations[language].viewDetails}
          </span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard