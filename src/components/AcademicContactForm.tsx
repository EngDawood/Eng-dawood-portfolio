'use client';

import { useState } from 'react';
import { Send, GraduationCap, Clock, Calculator } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { academicSpecializations, academicLevels } from '@/data/academic-data';

interface AcademicContactFormProps {
  className?: string;
}

export default function AcademicContactForm({ className = '' }: AcademicContactFormProps) {
  const { isRTL } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    academicLevel: '',
    urgency: 'standard' as 'standard' | 'urgent' | 'emergency',
    wordCount: '',
    subject: '',
    message: '',
    additionalServices: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const urgencyOptions = [
    { id: 'standard', nameEn: 'Standard (5-7 days)', nameAr: 'عادي (5-7 أيام)' },
    { id: 'urgent', nameEn: 'Urgent (2-3 days)', nameAr: 'عاجل (2-3 أيام)' },
    { id: 'emergency', nameEn: 'Emergency (24-48 hours)', nameAr: 'طارئ (24-48 ساعة)' }
  ];

  const additionalServices = [
    { id: 'plagiarism-report', nameEn: 'Plagiarism Report', nameAr: 'تقرير الانتحال' },
    { id: 'formatting', nameEn: 'Professional Formatting', nameAr: 'التنسيق المهني' },
    { id: 'presentation', nameEn: 'Presentation Slides', nameAr: 'شرائح العرض' },
    { id: 'data-analysis', nameEn: 'Statistical Analysis', nameAr: 'التحليل الإحصائي' },
    { id: 'priority-support', nameEn: 'Priority WhatsApp Support', nameAr: 'دعم الواتساب الأولوي' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Create a detailed message for WhatsApp
    const selectedSpecialization = academicSpecializations.find(spec => spec.id === formData.specialization);
    const selectedLevel = academicLevels.find(level => level.level === formData.academicLevel);
    const selectedUrgency = urgencyOptions.find(option => option.id === formData.urgency);

    const message = isRTL
      ? `🎓 طلب خدمة أكاديمية جديد

👤 الاسم: ${formData.name}
📧 البريد الإلكتروني: ${formData.email}
📱 الهاتف: ${formData.phone || 'غير محدد'}

📚 تفاصيل المشروع:
• التخصص: ${selectedSpecialization?.arabicTitle || 'غير محدد'}
• المستوى الأكاديمي: ${selectedLevel?.arabicLevel || 'غير محدد'}
• الأولوية: ${selectedUrgency?.nameAr || 'عادي'}
• عدد الكلمات: ${formData.wordCount || 'غير محدد'}

📋 الموضوع: ${formData.subject}

💬 تفاصيل المشروع:
${formData.message}

${formData.additionalServices.length > 0 ? `\n🎯 خدمات إضافية مطلوبة:\n${formData.additionalServices.map(id => 
  '• ' + (additionalServices.find(service => service.id === id)?.nameAr || id)
).join('\n')}` : ''}

---
تم الإرسال من موقع Academic Excellence Hub`
      : `🎓 New Academic Service Request

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || 'Not specified'}

📚 Project Details:
• Specialization: ${selectedSpecialization?.title || 'Not specified'}
• Academic Level: ${selectedLevel?.level || 'Not specified'}
• Urgency: ${selectedUrgency?.nameEn || 'Standard'}
• Word Count: ${formData.wordCount || 'Not specified'}

📋 Subject: ${formData.subject}

💬 Project Details:
${formData.message}

${formData.additionalServices.length > 0 ? `\n🎯 Additional Services Requested:\n${formData.additionalServices.map(id => 
  '• ' + (additionalServices.find(service => service.id === id)?.nameEn || id)
).join('\n')}` : ''}

---
Sent from Academic Excellence Hub website`;

    try {
      // Open WhatsApp with the message
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/966532296438?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      setSubmitStatus({
        type: 'success',
        message: isRTL 
          ? 'تم توجيهك إلى الواتساب! يرجى إرسال الرسالة المُعدة مسبقاً للحصول على رد سريع.'
          : 'You have been redirected to WhatsApp! Please send the pre-filled message for a quick response.'
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          specialization: '',
          academicLevel: '',
          urgency: 'standard',
          wordCount: '',
          subject: '',
          message: '',
          additionalServices: []
        });
        setSubmitStatus({ type: null, message: '' });
      }, 3000);

    } catch {
      setSubmitStatus({
        type: 'error',
        message: isRTL 
          ? 'حدث خطأ في فتح الواتساب. يرجى المحاولة مرة أخرى أو التواصل مباشرة.'
          : 'Error opening WhatsApp. Please try again or contact directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter(id => id !== serviceId)
    }));
  };

  return (
    <div className={`bg-card border border-border rounded-xl p-6 lg:p-8 ${className}`}>
      <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="p-3 rounded-lg bg-primary/10">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className={`text-2xl lg:text-3xl font-bold text-foreground ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL ? 'طلب خدمة أكاديمية' : 'Request Academic Service'}
            </h2>
            <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
              {isRTL 
                ? 'املأ النموذج أدناه وسنتواصل معك عبر الواتساب'
                : 'Fill out the form below and we will contact you via WhatsApp'
              }
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status Message */}
        {submitStatus.type && (
          <div className={`p-4 rounded-lg text-center ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/10 dark:text-green-400 dark:border-green-800' 
              : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/10 dark:text-red-400 dark:border-red-800'
          } ${isRTL ? 'font-arabic' : ''}`}>
            {submitStatus.message}
          </div>
        )}

        {/* Personal Information */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
            {isRTL ? 'المعلومات الشخصية' : 'Personal Information'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'الاسم الكامل' : 'Full Name'} *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'font-arabic text-right' : ''}`}
                placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'البريد الإلكتروني' : 'Email'} *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'text-right' : ''}`}
                placeholder={isRTL ? 'your.email@example.com' : 'your.email@example.com'}
              />
            </div>
            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'رقم الهاتف (اختياري)' : 'Phone Number (Optional)'}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'text-right' : ''}`}
                placeholder={isRTL ? '+966xxxxxxxxx' : '+966xxxxxxxxx'}
              />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
            {isRTL ? 'المعلومات الأكاديمية' : 'Academic Information'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'التخصص الأكاديمي' : 'Academic Specialization'} *
              </label>
              <select
                name="specialization"
                required
                value={formData.specialization}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'font-arabic text-right' : ''}`}
              >
                <option value="">
                  {isRTL ? 'اختر التخصص' : 'Select Specialization'}
                </option>
                {academicSpecializations.map(spec => (
                  <option key={spec.id} value={spec.id}>
                    {isRTL ? spec.arabicTitle : spec.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'المستوى الأكاديمي' : 'Academic Level'} *
              </label>
              <select
                name="academicLevel"
                required
                value={formData.academicLevel}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'font-arabic text-right' : ''}`}
              >
                <option value="">
                  {isRTL ? 'اختر المستوى' : 'Select Level'}
                </option>
                {academicLevels.map(level => (
                  <option key={level.level} value={level.level}>
                    {isRTL ? level.arabicLevel : level.level.charAt(0).toUpperCase() + level.level.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                <Clock className="w-4 h-4 inline mr-1" />
                {isRTL ? 'مستوى الأولوية' : 'Urgency Level'}
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'font-arabic text-right' : ''}`}
              >
                {urgencyOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {isRTL ? option.nameAr : option.nameEn}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                <Calculator className="w-4 h-4 inline mr-1" />
                {isRTL ? 'عدد الكلمات المتوقع' : 'Expected Word Count'}
              </label>
              <input
                type="number"
                name="wordCount"
                value={formData.wordCount}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'text-right' : ''}`}
                placeholder={isRTL ? 'مثال: 1000' : 'e.g., 1000'}
              />
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
            {isRTL ? 'خدمات إضافية (اختيارية)' : 'Additional Services (Optional)'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {additionalServices.map(service => (
              <label key={service.id} className={`flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/50 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                <input
                  type="checkbox"
                  checked={formData.additionalServices.includes(service.id)}
                  onChange={(e) => handleAdditionalServiceChange(service.id, e.target.checked)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  disabled={isSubmitting}
                />
                <span className={`text-sm text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                  {isRTL ? service.nameAr : service.nameEn}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <h3 className={`text-lg font-semibold mb-4 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
            {isRTL ? 'تفاصيل المشروع' : 'Project Details'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'عنوان المشروع' : 'Project Title'} *
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${isRTL ? 'font-arabic text-right' : ''}`}
                placeholder={isRTL ? 'مثال: تحليل نظام إدارة المستشفيات' : 'e.g., Hospital Management System Analysis'}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 text-foreground ${isRTL ? 'font-arabic text-right' : ''}`}>
                {isRTL ? 'تفاصيل المشروع' : 'Project Description'} *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${isRTL ? 'font-arabic text-right' : ''}`}
                placeholder={isRTL 
                  ? 'أخبرنا عن مشروعك: الأهداف، المتطلبات، الموعد النهائي، وأي تفاصيل أخرى مهمة...'
                  : 'Tell us about your project: objectives, requirements, deadline, and any other important details...'
                }
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
        >
          <Send size={20} />
          <span>
            {isSubmitting 
              ? (isRTL ? 'جاري التحضير...' : 'Preparing...')
              : (isRTL ? 'إرسال عبر الواتساب' : 'Send via WhatsApp')
            }
          </span>
        </button>

        {/* Note */}
        <div className={`text-center text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
          {isRTL 
            ? '* سيتم توجيهك إلى الواتساب مع رسالة معدة مسبقاً تحتوي على كل التفاصيل'
            : '* You will be redirected to WhatsApp with a pre-filled message containing all details'
          }
        </div>
      </form>
    </div>
  );
}