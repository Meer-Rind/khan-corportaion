import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { language, translations } = useLanguage()

  const content = {
    en: {
      aboutUs: `
        Khan Corporation is a premier electronics leasing company based in Gujrat, Pakistan. 
        We specialize in providing high-quality electronics on lease with flexible payment plans 
        that suit your budget. Our mission is to make premium electronics accessible to everyone 
        through affordable leasing options.
      `,
      terms: `
        • Minimum lease period: 3 months
        • Security deposit required
        • Early termination fees apply
        • Products are insured against theft and damage
        • Regular maintenance included
      `,
      privacy: `
        We value your privacy and are committed to protecting your personal information. 
        All data is stored securely and never shared with third parties without consent.
      `,
      instalment: `
        Our Kahta/instalment plans are designed to be flexible and affordable. 
        Choose from weekly, bi-weekly, or monthly payment options. 
        We offer competitive rates and transparent pricing with no hidden charges.
      `,
      guarantor: `
        To ensure the safety of our assets, we require 1-2 guarantors for each lease agreement. 
        Guarantors must be employed or have a stable source of income and valid identification.
      `
    },
    ur: {
      aboutUs: `
        خان کارپوریشن گجرات، پاکستان میں ایک premier الیکٹرانکس لیزنگ کمپنی ہے۔ 
        ہم flexible payment plans کے ساتھ lease پر اعلیٰ معیار کے الیکٹرانکس فراہم کرنے میں مہارت رکھتے ہیں 
        جو آپ کے بجٹ کے مطابق ہوں۔ ہمارا مشق premium الیکٹرانکس کو affordable leasing options کے ذریعے 
        سب کے لیے قابل رسائی بنانا ہے۔
      `,
      terms: `
        • کم از کم lease مدت: 3 ماہ
        • سیکیورٹی ڈپازٹ درکار
        • ابتدائی ختم کرنے کی فیس لاگو
        • مصنوعات چوری اور نقصان کے خلاف insured ہیں
        • باقاعدہ maintenance شامل
      `,
      privacy: `
        ہم آپ کی پرائیویسی کی قدر کرتے ہیں اور آپ کی ذاتی معلومات کے تحفظ کے لیے پرعزم ہیں۔ 
        تمام ڈیٹا محفوظ طریقے سے stored کیا جاتا ہے اور بغیر رضامندی کے تیسرے فریقوں کے ساتھ کبھی شیئر نہیں کیا جاتا۔
      `,
      instalment: `
        ہمارے قسط/اقساط کے منصوبے flexible اور affordable بنائے گئے ہیں۔ 
        ہفتہ وار، پندرہ روزہ، یا ماہانہ ادائیگی کے اختیارات میں سے انتخاب کریں۔ 
        ہیم competitive rates اور transparent pricing پیش کرتے ہیں بغیر کسی hidden charges کے۔
      `,
      guarantor: `
        ہماری assets کی حفاظت کو یقینی بنانے کے لیے، ہم ہر lease agreement کے لیے 1-2 ضامنوں کی ضرورت ہوتی ہے۔ 
        ضامنوں کا employed ہونا یا آمدنی کا مستحکم ذریعہ ہونا اور درست شناختی کارڈ ہونا ضروری ہے۔
      `
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {translations[language].aboutUs}
        </h1>

        {/* About Us */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {translations[language].aboutUs}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {content[language].aboutUs}
          </p>
        </section>

        {/* Terms & Services */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {translations[language].terms}
          </h2>
          <div className="text-gray-700 whitespace-pre-line">
            {content[language].terms}
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {translations[language].privacy}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {content[language].privacy}
          </p>
        </section>

        {/* Instalment Plan */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {translations[language].instalment}
          </h2>
          <div className="text-gray-700 whitespace-pre-line">
            {content[language].instalment}
          </div>
        </section>

        {/* Guarantor Requirement */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            {translations[language].guarantor}
          </h2>
          <div className="text-gray-700 whitespace-pre-line">
            {content[language].guarantor}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About