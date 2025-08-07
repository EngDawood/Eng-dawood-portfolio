'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
// Translations are handled within components
import AcademicContactForm from '@/components/AcademicContactForm';
import { companyProfile } from '@/data/academic-data';

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  
  const [hoverStates, setHoverStates] = useState({
    backLink: false,
  });

  const handleHover = (element: string, isHovering: boolean) => {
    setHoverStates(prev => ({
      ...prev,
      [element]: isHovering
    }));
  };

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen py-8 px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className={`inline-flex items-center mb-6 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            style={{ 
              color: hoverStates.backLink ? 'var(--primary)' : 'var(--muted-foreground)' 
            }}
            onMouseEnter={() => handleHover('backLink', true)}
            onMouseLeave={() => handleHover('backLink', false)}
          >
            <ArrowLeft size={20} className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {t('common.backToHome')}
          </Link>
          
          <div className={`max-w-3xl ${isRTL ? 'text-right' : ''}`}>
            <h1 className={`text-4xl lg:text-5xl font-bold mb-6 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'تواصل معنا' : 'Contact Us'}
            </h1>
            <p className={`text-lg leading-relaxed text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL 
                ? 'نحن هنا لمساعدتك في تحقيق التميز الأكاديمي. تواصل معنا للحصول على استشارة مجانية حول مشروعك الأكاديمي.'
                : 'We are here to help you achieve academic excellence. Contact us for a free consultation about your academic project.'
              }
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className={`flex flex-col items-center text-center ${isRTL ? 'text-right' : ''}`}>
                <div className="p-3 rounded-xl mb-4 bg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <h3 className={`font-semibold mb-2 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'البريد الإلكتروني' : 'Email'}
                </h3>
                <a 
                  href={`mailto:${companyProfile.email}`} 
                  className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline break-all"
                >
                  {companyProfile.email}
                </a>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className={`flex flex-col items-center text-center ${isRTL ? 'text-right' : ''}`}>
                <div className="p-3 rounded-xl mb-4 bg-green-100 dark:bg-green-900/20">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <h3 className={`font-semibold mb-2 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'الواتساب' : 'WhatsApp'}
                </h3>
                <a 
                  href={`https://wa.me/${companyProfile.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-green-600 hover:underline"
                >
                  {companyProfile.whatsapp}
                </a>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className={`flex flex-col items-center text-center ${isRTL ? 'text-right' : ''}`}>
                <div className="p-3 rounded-xl mb-4 bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <h3 className={`font-semibold mb-2 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'الموقع' : 'Location'}
                </h3>
                <p className={`text-sm text-center text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? companyProfile.arabicLocation : companyProfile.location}
                </p>
              </div>
            </div>
          </div>

          {/* Academic Contact Form */}
          <AcademicContactForm />

          {/* Academic FAQ Section */}
          <div className="mt-20">
            <div className={`text-center mb-12 ${isRTL ? 'text-right' : ''}`}>
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
              <p className={`text-lg max-w-2xl mx-auto text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL 
                  ? 'أسئلة شائعة حول خدماتنا الأكاديمية وطريقة العمل'
                  : 'Common questions about our academic services and working process'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Academic FAQ Items */}
              {[
                {
                  questionEn: "What academic levels do you support?",
                  questionAr: "ما هي المستويات الأكاديمية التي تدعمونها؟",
                  answerEn: "We support all academic levels from undergraduate to PhD across multiple specializations including Computer Science, Engineering, Medical Sciences, Natural Sciences, Business & Economics, and Humanities & Social Sciences.",
                  answerAr: "ندعم جميع المستويات الأكاديمية من البكالوريوس إلى الدكتوراه عبر تخصصات متعددة بما في ذلك علوم الحاسب، الهندسة، العلوم الطبية، العلوم الطبيعية، إدارة الأعمال والاقتصاد، والعلوم الإنسانية والاجتماعية."
                },
                {
                  questionEn: "How do you ensure originality and avoid plagiarism?",
                  questionAr: "كيف تضمنون الأصالة وتجنب الانتحال؟",
                  answerEn: "Every project is written from scratch with original research and analysis. We provide a comprehensive plagiarism report and ensure all sources are properly cited according to academic standards.",
                  answerAr: "كل مشروع يُكتب من الصفر مع بحث وتحليل أصلي. نقدم تقرير انتحال شامل ونضمن استشهاد صحيح بجميع المصادر وفقاً للمعايير الأكاديمية."
                },
                {
                  questionEn: "What is included in your service packages?",
                  questionAr: "ما المشمول في حزم الخدمة؟",
                  answerEn: "Our packages include professional academic writing, research and analysis, multiple revisions, plagiarism report, proper formatting, and 24/7 WhatsApp support depending on the selected tier.",
                  answerAr: "تشمل حزمنا الكتابة الأكاديمية المهنية، البحث والتحليل، مراجعات متعددة، تقرير انتحال، تنسيق مناسب، ودعم الواتساب على مدار الساعة حسب الباقة المختارة."
                },
                {
                  questionEn: "How long does it take to complete a project?",
                  questionAr: "كم من الوقت يستغرق إكمال المشروع؟",
                  answerEn: "Delivery time depends on complexity and urgency. Standard projects take 5-7 days, urgent projects 2-3 days, and emergency projects 24-48 hours. PhD-level projects may require additional time.",
                  answerAr: "وقت التسليم يعتمد على التعقيد والأولوية. المشاريع العادية تستغرق 5-7 أيام، العاجلة 2-3 أيام، والطارئة 24-48 ساعة. مشاريع الدكتوراه قد تحتاج وقت إضافي."
                },
                {
                  questionEn: "Do you provide revisions?",
                  questionAr: "هل تقدمون مراجعات؟",
                  answerEn: "Yes! We provide 2-3 rounds of free revisions depending on your package. PhD Elite package includes unlimited revisions to ensure complete satisfaction.",
                  answerAr: "نعم! نقدم 2-3 جولات من المراجعات المجانية حسب الباقة. باقة الدكتوراه النخبة تشمل مراجعات غير محدودة لضمان الرضا التام."
                },
                {
                  questionEn: "How do you handle payment and pricing?",
                  questionAr: "كيف تتعاملون مع الدفع والتسعير؟",
                  answerEn: "We offer transparent pricing in SAR based on academic level, complexity, and urgency. Payment is secure and we accept multiple methods. Use our pricing calculator for instant estimates.",
                  answerAr: "نقدم تسعير شفاف بالريال السعودي حسب المستوى الأكاديمي والتعقيد والأولوية. الدفع آمن ونقبل طرق متعددة. استخدم حاسبة الأسعار للحصول على تقدير فوري."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className={`text-lg font-bold mb-4 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {isRTL ? item.questionAr : item.questionEn}
                  </h3>
                  <p className={`text-base leading-relaxed text-muted-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {isRTL ? item.answerAr : item.answerEn}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Additional Help */}
            <div className="mt-12 text-center">
              <div className={`bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
                <h3 className={`text-xl font-semibold mb-4 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'لا تزال لديك أسئلة؟' : 'Still have questions?'}
                </h3>
                <p className={`text-base mb-6 text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL 
                    ? 'لا تتردد في التواصل! نحن هنا للمساعدة في أي أسئلة حول مشروعك الأكاديمي.'
                    : "Don't hesitate to reach out! We're here to help with any questions about your academic project."
                  }
                </p>
                <button 
                  onClick={() => {
                    const message = isRTL 
                      ? "مرحباً! لدي أسئلة حول خدماتكم الأكاديمية."
                      : "Hello! I have questions about your academic services.";
                    
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/966532296438?text=${encodedMessage}`;
                    
                    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                  }}
                  className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-colors hover:scale-105 transform ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
                >
                  <MessageCircle size={18} />
                  <span>{isRTL ? 'اسأل سؤال' : 'Ask a Question'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
