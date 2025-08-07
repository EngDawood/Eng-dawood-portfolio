'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { FadeIn } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import AcademicProjectsGrid from '@/components/AcademicProjectsGrid';

export default function ProjectsPage() {
  const { t, isRTL } = useLanguage();
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  return (
    <FadeIn direction="up" duration={0.8}>
      <div className="min-h-screen py-8">
        {/* Header */}
        <div className="mb-12">
          <FadeIn direction="left" delay={0.1}>
            <Link 
              href="/" 
              className={`inline-flex items-center mb-6 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
              style={{ 
                color: hoveredElement === 'back-link' ? 'var(--primary)' : 'var(--muted-foreground)' 
              }}
              onMouseEnter={() => setHoveredElement('back-link')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <ArrowLeft size={20} className={`${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {t('common.backToHome')}
            </Link>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className={`flex items-start gap-4 mb-6 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className={`text-4xl lg:text-5xl font-bold mb-4 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'مشاريعنا الأكاديمية' : 'Our Academic Projects'}
                </h1>
                <p className={`text-lg max-w-3xl text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL 
                    ? 'استكشف مجموعة من المشاريع الأكاديمية المتميزة التي نفذناها عبر مختلف التخصصات والمستويات الأكاديمية. كل مشروع يمثل قصة نجاح وتميز أكاديمي.'
                    : 'Explore our collection of outstanding academic projects delivered across various specializations and academic levels. Each project represents a success story of academic excellence.'
                  }
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Academic Projects Grid */}
        <AcademicProjectsGrid />

        {/* Call to Action */}
        <FadeIn direction="up" delay={0.4}>
          <div className="mt-20 text-center">
            <div className={`rounded-2xl p-8 lg:p-12 bg-card border border-border shadow-sm ${isRTL ? 'text-right' : ''}`}>
              <div className="max-w-3xl mx-auto">
                <h2 className={`text-3xl lg:text-4xl font-bold mb-6 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? 'هل لديك مشروع أكاديمي؟' : 'Have an Academic Project?'}
                </h2>
                <p className={`text-lg mb-8 text-muted-foreground leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL 
                    ? 'نحن متحمسون دائماً للعمل على مشاريع أكاديمية جديدة ومساعدة الطلاب في تحقيق التميز الأكاديمي. دع&apos;نا نناقش كيف يمكننا مساعدتك in تحقيق أهدافك الأكاديمية.'
                    : 'We&apos;re always excited to work on new academic projects and help students achieve academic excellence. Let&apos;s discuss how we can help you reach your academic goals.'
                  }
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => {
                      const message = isRTL 
                        ? "مرحباً! لديّ مشروع أكاديمي وأريد استشارة مجانية لمناقشة التفاصيل."
                        : "Hello! I have an academic project and would like a free consultation to discuss the details.";
                      
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/966542002960?text=${encodedMessage}`;
                      
                      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-colors ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {isRTL ? 'ابدأ مشروعك الآن' : 'Start Your Project'}
                  </button>
                  <Link 
                    href="/contact"
                    className={`bg-card hover:bg-muted text-primary border border-border font-semibold py-4 px-8 rounded-lg transition-colors ${isRTL ? 'font-arabic' : ''}`}
                  >
                    {isRTL ? 'تواصل معنا' : 'Contact Us'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </FadeIn>
  );
}
