import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const LanguageToggle = () => {
  const { language, toggleLanguage, translations } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 border border-primary rounded-lg hover:bg-orange-50 transition-colors duration-200"
    >
      <span className={`text-sm font-medium ${language === 'ur' ? 'text-primary' : 'text-gray-600'}`}>
        {language === 'en' ? 'EN' : 'UR'}
      </span>
      <div className="w-8 h-4 bg-primary rounded-full relative">
        <div
          className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-200 ${
            language === 'en' ? 'left-0.5' : 'right-0.5'
          }`}
        />
      </div>
    </button>
  )
}

export default LanguageToggle