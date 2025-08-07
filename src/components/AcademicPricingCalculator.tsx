'use client';

import { useState, useEffect, useCallback } from 'react';
import { Calculator, Clock, GraduationCap, Zap, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { academicSpecializations, academicLevels, pricingTiers } from '@/data/academic-data';
// Academic types are imported for type checking only

interface PricingCalculatorProps {
  className?: string;
}

interface CalculationParams {
  specialization: string;
  academicLevel: string;
  urgency: 'standard' | 'urgent' | 'emergency';
  complexity: number; // 1-5 scale
  wordCount: number;
  additionalServices: string[];
}

export default function AcademicPricingCalculator({ className = '' }: PricingCalculatorProps) {
  const { isRTL } = useLanguage();
  const [params, setParams] = useState<CalculationParams>({
    specialization: 'computer-science',
    academicLevel: 'undergraduate',
    urgency: 'standard',
    complexity: 3,
    wordCount: 1000,
    additionalServices: []
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);
  const [breakdown, setBreakdown] = useState<{ [key: string]: number }>({});
  const [deliveryTime, setDeliveryTime] = useState<string>('');

  // Additional services with prices (in SAR)
  const additionalServices = [
    { id: 'plagiarism-report', nameEn: 'Plagiarism Report', nameAr: 'تقرير الانتحال', price: 50 },
    { id: 'formatting', nameEn: 'Professional Formatting', nameAr: 'التنسيق المهني', price: 75 },
    { id: 'presentation', nameEn: 'Presentation Slides', nameAr: 'شرائح العرض', price: 100 },
    { id: 'data-analysis', nameEn: 'Statistical Analysis', nameAr: 'التحليل الإحصائي', price: 150 },
    { id: 'revision-extra', nameEn: 'Extra Revisions (3x)', nameAr: 'مراجعات إضافية (3x)', price: 100 },
    { id: 'priority-support', nameEn: 'Priority WhatsApp Support', nameAr: 'دعم الواتساب الأولوي', price: 80 }
  ];

  // Urgency multipliers
  const urgencyMultipliers = {
    standard: { multiplier: 1.0, nameEn: 'Standard', nameAr: 'عادي' },
    urgent: { multiplier: 1.5, nameEn: 'Urgent', nameAr: 'عاجل' },
    emergency: { multiplier: 2.5, nameEn: 'Emergency', nameAr: 'طارئ' }
  };

  const calculatePrice = useCallback(() => {
    // Get base price from pricing tier
    const selectedLevel = academicLevels.find(level => level.level === params.academicLevel);
    const basePricingTier = pricingTiers.find(tier => tier.academicLevel === params.academicLevel);
    
    if (!selectedLevel || !basePricingTier) return;

    // Base price calculation
    const basePrice = basePricingTier.basePrice;

    // Word count factor (per 1000 words)
    const wordCountMultiplier = Math.max(1, params.wordCount / 1000);
    
    // Complexity multiplier (1-5 scale: 0.8x to 1.4x)
    const complexityMultiplier = 0.6 + (params.complexity * 0.2);
    
    // Academic level multiplier
    const levelMultiplier = selectedLevel.priceMultiplier;
    
    // Urgency multiplier
    const urgencyMultiplier = urgencyMultipliers[params.urgency].multiplier;

    // Calculate core price
    const corePrice = basePrice * wordCountMultiplier * complexityMultiplier * levelMultiplier * urgencyMultiplier;

    // Additional services
    const additionalPrice = params.additionalServices.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);

    const finalPrice = Math.round(corePrice + additionalPrice);

    // Set breakdown
    setBreakdown({
      basePrice: Math.round(basePrice * wordCountMultiplier),
      complexity: Math.round(basePrice * wordCountMultiplier * (complexityMultiplier - 1)),
      academicLevel: Math.round(basePrice * wordCountMultiplier * (levelMultiplier - 1)),
      urgency: Math.round(basePrice * wordCountMultiplier * complexityMultiplier * levelMultiplier * (urgencyMultiplier - 1)),
      additionalServices: additionalPrice
    });

    setCalculatedPrice(finalPrice);

    // Set delivery time
    const selectedSpecialization = academicSpecializations.find(spec => spec.id === params.specialization);
    if (selectedSpecialization) {
      setDeliveryTime(selectedSpecialization.deliveryTime[params.urgency]);
    }
  }, [params, additionalServices, urgencyMultipliers]);

  // Calculate price whenever parameters change
  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    setParams(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter(id => id !== serviceId)
    }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(isRTL ? 'ar-SA' : 'en-US', {
      style: 'currency',
      currency: 'SAR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={`bg-card border border-border rounded-xl p-6 lg:p-8 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-primary/10">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className={`text-xl lg:text-2xl font-bold text-foreground ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'حاسبة الأسعار الأكاديمية' : 'Academic Pricing Calculator'}
          </h3>
          <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'احسب تكلفة مشروعك الأكاديمي بدقة' : 'Calculate your academic project cost accurately'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Parameters */}
        <div className="space-y-6">
          {/* Academic Specialization */}
          <div>
            <label className={`block text-sm font-medium mb-3 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
              <GraduationCap className="w-4 h-4 inline mr-2" />
              {isRTL ? 'التخصص الأكاديمي' : 'Academic Specialization'}
            </label>
            <select
              value={params.specialization}
              onChange={(e) => setParams(prev => ({ ...prev, specialization: e.target.value }))}
              className={`w-full p-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent ${isRTL ? 'font-arabic text-right' : ''}`}
            >
              {academicSpecializations.map(spec => (
                <option key={spec.id} value={spec.id}>
                  {isRTL ? spec.arabicTitle : spec.title}
                </option>
              ))}
            </select>
          </div>

          {/* Academic Level */}
          <div>
            <label className={`block text-sm font-medium mb-3 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
              {isRTL ? 'المستوى الأكاديمي' : 'Academic Level'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {academicLevels.map(level => (
                <button
                  key={level.level}
                  onClick={() => setParams(prev => ({ ...prev, academicLevel: level.level }))}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    params.academicLevel === level.level
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-muted-foreground hover:border-primary/50'
                  } ${isRTL ? 'font-arabic' : ''}`}
                >
                  {isRTL ? level.arabicLevel : level.level.charAt(0).toUpperCase() + level.level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Word Count */}
          <div>
            <label className={`block text-sm font-medium mb-3 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
              {isRTL ? 'عدد الكلمات' : 'Word Count'}
              <span className="text-primary ml-2">{params.wordCount.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min="500"
              max="10000"
              step="500"
              value={params.wordCount}
              onChange={(e) => setParams(prev => ({ ...prev, wordCount: parseInt(e.target.value) }))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>500</span>
              <span>10,000</span>
            </div>
          </div>

          {/* Complexity */}
          <div>
            <label className={`block text-sm font-medium mb-3 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
              {isRTL ? 'مستوى التعقيد' : 'Complexity Level'}
              <span className="text-primary ml-2">
                {Array.from({ length: params.complexity }, () => '⭐').join('')}
              </span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(level => (
                <button
                  key={level}
                  onClick={() => setParams(prev => ({ ...prev, complexity: level }))}
                  className={`flex-1 p-2 rounded-lg border text-xs font-medium transition-all ${
                    params.complexity >= level
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  ⭐
                </button>
              ))}
            </div>
            <p className={`text-xs text-muted-foreground mt-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
              {isRTL ? 'من بسيط (⭐) إلى معقد جداً (⭐⭐⭐⭐⭐)' : 'From Simple (⭐) to Very Complex (⭐⭐⭐⭐⭐)'}
            </p>
          </div>

          {/* Urgency */}
          <div>
            <label className={`block text-sm font-medium mb-3 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
              <Clock className="w-4 h-4 inline mr-2" />
              {isRTL ? 'مستوى الأولوية' : 'Urgency Level'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(urgencyMultipliers).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setParams(prev => ({ ...prev, urgency: key as 'standard' | 'urgent' | 'emergency' }))}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    params.urgency === key
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background text-muted-foreground hover:border-primary/50'
                  } ${isRTL ? 'font-arabic' : ''}`}
                >
                  {isRTL ? value.nameAr : value.nameEn}
                  <div className="text-xs opacity-70">
                    +{Math.round((value.multiplier - 1) * 100)}%
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          {/* Price Display */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <div className={`text-sm text-muted-foreground mb-2 ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'التكلفة الإجمالية' : 'Total Cost'}
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
              {formatPrice(calculatedPrice)}
            </div>
            <div className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? `التسليم خلال: ${deliveryTime}` : `Delivery: ${deliveryTime}`}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-3">
            <h4 className={`font-semibold text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
              {isRTL ? 'تفصيل السعر' : 'Price Breakdown'}
            </h4>
            
            {Object.entries(breakdown).map(([key, value]) => (
              value > 0 && (
                <div key={key} className={`flex justify-between items-center text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                    {key === 'basePrice' && (isRTL ? 'السعر الأساسي' : 'Base Price')}
                    {key === 'complexity' && (isRTL ? 'التعقيد' : 'Complexity')}
                    {key === 'academicLevel' && (isRTL ? 'المستوى الأكاديمي' : 'Academic Level')}
                    {key === 'urgency' && (isRTL ? 'الأولوية' : 'Urgency')}
                    {key === 'additionalServices' && (isRTL ? 'الخدمات الإضافية' : 'Additional Services')}
                  </span>
                  <span className="font-medium text-foreground">
                    {value > 0 ? '+' : ''}{formatPrice(value)}
                  </span>
                </div>
              )
            ))}
          </div>

          {/* Additional Services */}
          <div className="space-y-3">
            <h4 className={`font-semibold text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
              {isRTL ? 'خدمات إضافية' : 'Additional Services'}
            </h4>
            
            <div className="space-y-2">
              {additionalServices.map(service => (
                <label key={service.id} className={`flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <input
                    type="checkbox"
                    checked={params.additionalServices.includes(service.id)}
                    onChange={(e) => handleAdditionalServiceChange(service.id, e.target.checked)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                    <div className={`text-sm font-medium text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                      {isRTL ? service.nameAr : service.nameEn}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      +{formatPrice(service.price)}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              const message = isRTL 
                ? `مرحباً! أريد طلب خدمة أكاديمية:\n\nالتخصص: ${academicSpecializations.find(s => s.id === params.specialization)?.arabicTitle}\nالمستوى: ${academicLevels.find(l => l.level === params.academicLevel)?.arabicLevel}\nعدد الكلمات: ${params.wordCount}\nالأولوية: ${urgencyMultipliers[params.urgency].nameAr}\nالتكلفة المقدرة: ${formatPrice(calculatedPrice)}\n\nأريد استشارة مجانية.`
                : `Hello! I want to request an academic service:\n\nSpecialization: ${academicSpecializations.find(s => s.id === params.specialization)?.title}\nLevel: ${params.academicLevel}\nWord Count: ${params.wordCount}\nUrgency: ${urgencyMultipliers[params.urgency].nameEn}\nEstimated Cost: ${formatPrice(calculatedPrice)}\n\nI'd like a free consultation.`;
              
              const encodedMessage = encodeURIComponent(message);
              const whatsappUrl = `https://wa.me/966542002960?text=${encodedMessage}`;
              
              window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            }}
            className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
          >
            <Zap className="w-5 h-5" />
            {isRTL ? 'اطلب الآن عبر الواتساب' : 'Order Now via WhatsApp'}
          </button>

          {/* Guarantee Note */}
          <div className={`flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className={`text-sm ${isRTL ? 'font-arabic' : ''}`}>
              <p className="font-semibold text-green-800 dark:text-green-400 mb-1">
                {isRTL ? 'ضمان الجودة 100%' : '100% Quality Guarantee'}
              </p>
              <p className="text-green-700 dark:text-green-300">
                {isRTL 
                  ? 'مراجعات مجانية • تقرير انتحال • دعم 24/7'
                  : 'Free revisions • Plagiarism report • 24/7 support'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}