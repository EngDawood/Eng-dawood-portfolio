'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { companyProfile } from '@/data/academic-data';

interface WhatsAppFloatProps {
  className?: string;
}

export default function WhatsAppFloat({ className = '' }: WhatsAppFloatProps) {
  const { isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-show tooltip for new visitors
  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem('whatsapp-tooltip-seen');
    if (!hasSeenTooltip && isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        localStorage.setItem('whatsapp-tooltip-seen', 'true');
        // Auto-hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleWhatsAppClick = () => {
    const message = isRTL 
      ? "مرحباً! أهتم بخدماتكم الأكاديمية وأريد استشارة مجانية."
      : "Hello! I'm interested in your academic services and would like a free consultation.";
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${companyProfile.whatsapp.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed z-50 ${isRTL ? 'left-4 lg:left-6' : 'right-4 lg:right-6'} bottom-4 lg:bottom-6 ${className}`}>
      {/* Tooltip */}
      {showTooltip && (
        <div 
          className={`absolute bottom-16 ${isRTL ? 'left-0' : 'right-0'} bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 max-w-xs animate-fade-in-up`}
          style={{ 
            backgroundColor: 'var(--card)',
            borderColor: 'var(--border)',
            color: 'var(--foreground)'
          }}
        >
          <div className="flex items-start gap-2">
            <div className="flex-1">
              <p className={`text-sm font-medium mb-1 ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'مرحباً! 👋' : 'Hello! 👋'}
              </p>
              <p className={`text-xs opacity-90 leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL 
                  ? 'هل تحتاج مساعدة أكاديمية؟ تحدث معنا الآن!'
                  : 'Need academic help? Chat with us now!'
                }
              </p>
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <X size={14} />
            </button>
          </div>
          {/* Arrow */}
          <div 
            className={`absolute top-full ${isRTL ? 'left-6' : 'right-6'} w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent`}
            style={{ borderTopColor: 'var(--card)' }}
          />
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-bounce-subtle"
        style={{ 
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)'
        }}
        title={isRTL ? 'تحدث معنا على الواتساب' : 'Chat with us on WhatsApp'}
      >
        <MessageCircle size={24} className="transform group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
        
        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </button>

      {/* Floating text label */}
      <div 
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          isRTL ? 'right-16 text-right' : 'left-16 text-left'
        } bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none`}
      >
        {isRTL ? 'واتساب' : 'WhatsApp'}
      </div>
    </div>
  );
}