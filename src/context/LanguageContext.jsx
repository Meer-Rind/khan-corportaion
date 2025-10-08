import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const translations = {
    en: {
      home: "Home",
      about: "About",
      contact: "Contact",
      heroTitle: "Lease Premium Electronics",
      heroSubtitle: "Affordable leasing for phones, laptops, bikes, and home appliances",
      ctaButton: "Get Started",
      products: "Our Products",
      reviews: "Customer Reviews",
      downloadApp: "Download Our App",
      howToUse: "How to Use",
      viewDetails: "Product Details",
      getInfo: "Get More Information",
      aboutUs: "About Us",
      terms: "Terms & Services",
      privacy: "Privacy Policy",
      instalment: "Instalment Plan",
      guarantor: "Guarantor Requirement",
      sendMessage: "Send Message",
      name: "Name",
      email: "Email",
      message: "Message",
      selectLanguage: "Select Language",
      english: "English",
      urdu: "Urdu",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
      call: "Call"
    },
    ur: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      contact: "رابطہ کریں",
      heroTitle: "پریمیم الیکٹرانکس لیں",
      heroSubtitle: "فونز، لیپ ٹاپس، بائیکس اور گھریلو آلات کے لیے affordable leasing",
      ctaButton: "شروع کریں",
      products: "ہماری مصنوعات",
      reviews: "گاہکوں کے تجربات",
      downloadApp: "ہماری ایپ ڈاؤنلوڈ کریں",
      howToUse: "استعمال کرنے کا طریقہ",
      viewDetails: "مصنوعات کی تفصیلات",
      getInfo: "مزید معلومات لیں",
      aboutUs: "ہمارے بارے میں",
      terms: "شرائط و خدمات",
      privacy: "پرائیویسی پالیسی",
      instalment: "اقساط کا منصوبہ",
      guarantor: "ضامن کی ضرورت",
      sendMessage: "پیغام بھیجیں",
      name: "نام",
      email: "ای میل",
      message: "پیغام",
      selectLanguage: "زبان منتخب کریں",
      english: "انگریزی",
      urdu: "اردو",
      contactUs: "رابطہ کریں",
      whatsapp: "واٹس ایپ",
      call: "کال"
    }
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}