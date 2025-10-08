import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { language, translations } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    messageLanguage: 'en'
  })

  const whatsappNumber = '+923016601992'

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const messages = {
      en: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      ur: `نام: ${formData.name}\nای میل: ${formData.email}\nپیغام: ${formData.message}`
    }

    const selectedMessage = messages[formData.messageLanguage]
    const encodedMessage = encodeURIComponent(selectedMessage)
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      messageLanguage: 'en'
    })
  }

  const handleDirectWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {translations[language].contactUs}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              {translations[language].sendMessage}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  {translations[language].name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  {translations[language].email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="messageLanguage">
                  {translations[language].selectLanguage}
                </label>
                <select
                  id="messageLanguage"
                  name="messageLanguage"
                  value={formData.messageLanguage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="en">{translations[language].english}</option>
                  <option value="ur">{translations[language].urdu}</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  {translations[language].message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {translations[language].sendMessage} via WhatsApp
              </button>
            </form>
          </div>

          {/* Direct Contact Methods */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                {translations[language].contactUs}
              </h2>
              
              <div className="space-y-4">
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>📱</span>
                  <span>{translations[language].whatsApp}: +92 301 6601992</span>
                </button>

                <div className="text-center text-gray-600 py-4">
                  <p className={language === 'ur' ? 'urdu-text' : ''}>
                    {language === 'en' 
                      ? 'We typically respond within 1-2 hours during business hours'
                      : 'ہم business hours کے دوران عام طور پر 1-2 گھنٹے کے اندر جواب دیتے ہیں'
                    }
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-primary p-4">
                  <p className={language === 'ur' ? 'urdu-text text-sm' : 'text-sm'}>
                    {language === 'en'
                      ? 'For fastest response, please use WhatsApp. You can send us a message directly by clicking the button above.'
                      : 'سب سے تیز response کے لیے، براہ کرم WhatsApp استعمال کریں۔ آپ اوپر والے بٹن پر کلک کر کے ہمیں براہ راست پیغام بھیج سکتے ہیں۔'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {language === 'en' ? 'Business Hours' : 'کاروباری اوقات'}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Monday - Saturday' : 'سوموار - ہفتہ'}</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language === 'en' ? 'Sunday' : 'اتوار'}</span>
                  <span>{language === 'en' ? 'Closed' : 'بند'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact