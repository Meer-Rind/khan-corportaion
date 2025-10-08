import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

const Header = () => {
  const location = useLocation()
  const { translations, language } = useLanguage()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Khan Corporation</h1>
              <p className="text-xs text-gray-600">Gujrat - Electronics Leasing</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {translations[language].home}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {translations[language].about}
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              {translations[language].contact}
            </Link>
          </nav>

          {/* Language Toggle */}
          <LanguageToggle />
        </div>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
          <Link 
            to="/" 
            className={`text-sm font-medium ${
              isActive('/') ? 'text-primary' : 'text-gray-600'
            }`}
          >
            {translations[language].home}
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium ${
              isActive('/about') ? 'text-primary' : 'text-gray-600'
            }`}
          >
            {translations[language].about}
          </Link>
          <Link 
            to="/contact" 
            className={`text-sm font-medium ${
              isActive('/contact') ? 'text-primary' : 'text-gray-600'
            }`}
          >
            {translations[language].contact}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header