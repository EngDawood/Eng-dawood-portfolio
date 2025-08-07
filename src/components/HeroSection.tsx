'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { FadeIn, ScrollingTechStack, CountUp, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslatedData } from '@/hooks/useTranslatedData';

interface TechStackItem {
  name: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

interface HeroSectionProps {
  techStack: TechStackItem[];
}

export default function HeroSection({ techStack }: HeroSectionProps) {
  const { t, isRTL } = useLanguage();
  const { personalInfo } = useTranslatedData();
  
  return (
    <section className="relative min-h-screen flex items-center px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto text-center space-y-6 sm:space-y-8">
        <FadeIn direction="up" delay={0.2} duration={0.8} threshold={0.2}>
          <h1 className={`text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight animate-hero-slide-up`}>
            <span>
              <span style={{ color: 'var(--foreground)' }}>{personalInfo.name.split(' ')[0]} </span>
              <span style={{ color: 'var(--primary)' }}>{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} duration={0.7}>
          <h2 className={`text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold animate-hero-fade-in ${isRTL ? 'font-arabic' : ''}`} 
              style={{ color: 'var(--muted-foreground)', animationDelay: '0.3s' }}>
            {personalInfo.title}
          </h2>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.4} duration={0.7}>
          <p className={`text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-0 animate-hero-fade-in ${isRTL ? 'font-arabic' : ''}`} 
             style={{ color: 'var(--muted-foreground)', animationDelay: '0.4s' }}>
            {personalInfo.shortBio}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.5}>
          <StaggerChildren staggerDelay={0.1} className="flex flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-16 py-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 tabular-nums animate-counter" style={{ color: 'var(--foreground)' }}>
                <CountUp end={7} suffix="+" duration={2} />
              </div>
              <div className={`text-xs sm:text-sm lg:text-base xl:text-lg ${isRTL ? 'font-arabic' : ''}`} style={{ color: 'var(--muted-foreground)' }}>
                {isRTL ? 'سنوات خبرة أكاديمية' : 'Years Academic Experience'}
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
            </div>
            <div className="w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 tabular-nums animate-counter" style={{ color: 'var(--foreground)' }}>
                <CountUp end={2847} suffix="+" duration={2.2} />
              </div>
              <div className={`text-xs sm:text-sm lg:text-base xl:text-lg ${isRTL ? 'font-arabic' : ''}`} style={{ color: 'var(--muted-foreground)' }}>
                {isRTL ? 'طالب تم مساعدته' : 'Students Helped'}
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
            </div>
            <div className="w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 tabular-nums animate-counter" style={{ color: 'var(--foreground)' }}>
                <CountUp end={96} suffix="%" duration={2.4} />
              </div>
              <div className={`text-xs sm:text-sm lg:text-base xl:text-lg ${isRTL ? 'font-arabic' : ''}`} style={{ color: 'var(--muted-foreground)' }}>
                {isRTL ? 'معدل النجاح' : 'Success Rate'}
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
            </div>
          </StaggerChildren>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm lg:text-base font-medium" style={{ color: 'var(--muted-foreground)' }}>
              {isRTL ? 'التخصصات الأكاديمية التي نخدمها' : 'Academic Specializations We Serve'}
            </p>
            <ScrollingTechStack 
              techStack={techStack}
              direction={isRTL ? "right" : "left"}
              isRTL={isRTL}
              className="py-2"
            />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.7} duration={0.6}>
          <div className={`flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4 sm:px-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button 
              onClick={() => {
                const message = isRTL 
                  ? "مرحباً! أهتم بخدماتكم الأكاديمية وأريد استشارة مجانية لمناقشة مشروعي."
                  : "Hello! I'm interested in your academic services and would like a free consultation to discuss my project.";
                
                const encodedMessage = encodeURIComponent(message);
                const whatsappUrl = `https://wa.me/966542002960?text=${encodedMessage}`;
                
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
              }}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-white transition-all duration-200 hover:opacity-90 text-center ${isRTL ? 'font-arabic' : ''}`}
              style={{ backgroundColor: 'var(--primary)' }}>
              {isRTL ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
            </button>
            <Link href="/projects" 
                  className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base border transition-all duration-200 hover:bg-card text-center ${isRTL ? 'font-arabic' : ''}`}
                  style={{ borderColor: 'var(--border)', color: 'var(--foreground)', backgroundColor: 'transparent' }}>
              {isRTL ? 'استعرض مشاريعنا الأكاديمية' : 'View Academic Projects'}
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.8} duration={0.6}>
          <div className="flex justify-center items-center space-x-3 sm:space-x-4 pt-6 sm:pt-8">
            {personalInfo.socialLinks.github && (
              <Link href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                    style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                <Github size={16} className="sm:w-5 sm:h-5" />
              </Link>
            )}
            {personalInfo.socialLinks.linkedin && (
              <Link href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                    style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </Link>
            )}
            {personalInfo.socialLinks.twitter && (
              <Link href={personalInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                    style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                <Twitter size={16} className="sm:w-5 sm:h-5" />
              </Link>
            )}
            {personalInfo.socialLinks.instagram && (
              <Link href={personalInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-full border transition-all duration-200 hover:border-primary hover:text-primary"
                    style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}>
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}