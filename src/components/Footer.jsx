import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { language, translations } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <h3 className="text-xl font-bold">Khan Corporation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              {language === 'en' 
                ? 'Your trusted partner for electronics leasing in Gujrat. Quality products, affordable rates.'
                : 'گجرات میں الیکٹرانکس لیزنگ کے لیے آپ کا قابل اعتماد پارٹنر۔ معیاری مصنوعات، affordable rates۔'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  {translations[language].home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  {translations[language].about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  {translations[language].contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{translations[language].contactUs}</h4>
            <div className="space-y-2">
              <a 
                href="https://wa.me/923016601992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
              >
                <span>📱</span>
                <span>+92 301 6601992</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Khan Corporation Gujrat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer