import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import ProductCard from '../components/ProductCard'
import { products, reviews, appVersions, howToUseSteps } from '../data/products'

const Home = () => {
  const { language, translations } = useLanguage()
  const whatsappNumber = '+923016601992'

  const handleWhatsAppContact = () => {
    const message = 'Hello! I want to know more about your leasing services.'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {translations[language].heroTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {translations[language].heroSubtitle}
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
          >
            {translations[language].ctaButton}
          </button>
        </div>
      </section>

      {/* APK Download Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {translations[language].downloadApp}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {appVersions.map((version, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{version.name}</h3>
                <div className="mb-4">
                  <img 
                    src="/api/placeholder/200/200" 
                    alt="QR Code" 
                    className="mx-auto w-32 h-32 border-2 border-primary rounded-lg"
                  />
                </div>
                <a
                  href={version.downloadLink}
                  download
                  className="bg-primary hover:bg-accent text-white py-2 px-6 rounded-lg transition-colors duration-200 inline-block"
                >
                  Download APK ({version.size})
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {translations[language].products}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {translations[language].howToUse}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howToUseSteps[language].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {translations[language].reviews}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home