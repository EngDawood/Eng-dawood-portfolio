import { 
  CompanyProfile, 
  AcademicSpecialization, 
  AcademicLevel, 
  AcademicProject,
  StudentTestimonial,
  ExpertProfile,
  PlatformStatistics,
  PricingTier
} from './academic-types';

// Company Profile - Academic Excellence Hub
export const companyProfile: CompanyProfile = {
  name: "Academic Excellence Hub",
  arabicName: "مركز التميز الأكاديمي",
  tagline: "Empowering Academic Success Worldwide",
  arabicTagline: "نمكن النجاح الأكاديمي عالمياً",
  description: "Leading academic services platform specializing in comprehensive support for students across all academic levels. We provide expert assistance in research, writing, project development, and academic consultation with a focus on quality, originality, and academic integrity.",
  arabicDescription: "منصة الخدمات الأكاديمية الرائدة المتخصصة في تقديم الدعم الشامل للطلاب عبر جميع المستويات الأكاديمية. نقدم المساعدة المتخصصة في البحث والكتابة وتطوير المشاريع والاستشارات الأكاديمية مع التركيز على الجودة والأصالة والنزاهة الأكاديمية.",
  mission: "To bridge the gap between academic challenges and student success by providing world-class educational support that empowers learners to achieve their full potential.",
  arabicMission: "سد الفجوة بين التحديات الأكاديمية ونجاح الطلاب من خلال تقديم الدعم التعليمي عالمي المستوى الذي يمكن المتعلمين من تحقيق إمكاناتهم الكاملة.",
  email: "eng.dawoodsaleh@gmail.com",
  phone: "+966532296438",
  whatsapp: "+966532296438",
  location: " Riyadh, Saudi Arabia",
  arabicLocation: " الرياض، المملكة العربية السعودية",
  established: "2017",
  languages: ["Arabic", "English"],
  socialLinks: {
    website: "https://academicexcellencehub.com",
    linkedin: "https://linkedin.com/dawood-h-567276191",
    twitter: "https://x.com/EngDawood7/",
    instagram: "https://instagram.com/EngDawood7",
    whatsapp: "https://wa.me/966532296438"
  }
};

// Academic Levels
export const academicLevels: AcademicLevel[] = [
  {
    level: 'undergraduate',
    arabicLevel: 'البكالوريوس',
    priceMultiplier: 1.0,
    description: 'Bachelor degree level assignments and projects',
    arabicDescription: 'مهام ومشاريع مستوى درجة البكالوريوس'
  },
  {
    level: 'masters',
    arabicLevel: 'الماجستير',
    priceMultiplier: 1.5,
    description: 'Graduate level research and thesis work',
    arabicDescription: 'البحوث وأطروحات مستوى الدراسات العليا'
  },
  {
    level: 'phd',
    arabicLevel: 'الدكتوراه',
    priceMultiplier: 2.5,
    description: 'Doctoral dissertation and advanced research',
    arabicDescription: 'رسائل الدكتوراه والبحوث المتقدمة'
  }
];

// Academic Specializations
export const academicSpecializations: AcademicSpecialization[] = [
  {
    id: 'computer-science',
    title: 'Computer Science & Programming',
    arabicTitle: 'علوم الحاسب والبرمجة',
    description: 'Expert assistance in programming assignments, software development projects, algorithms, data structures, AI/ML, and computer science research.',
    arabicDescription: 'المساعدة المتخصصة في مهام البرمجة ومشاريع تطوير البرمجيات والخوارزميات وهياكل البيانات والذكاء الاصطناعي/التعلم الآلي وبحوث علوم الحاسب.',
    icon: '/services/ai.png',
    category: 'stem',
    features: [
      'Programming assignments in multiple languages',
      'Software development projects',
      'Algorithm design and analysis',
      'Database design and implementation',
      'AI/ML model development',
      'Mobile and web application development',
      'Technical documentation and reports'
    ],
    arabicFeatures: [
      'مهام البرمجة بلغات متعددة',
      'مشاريع تطوير البرمجيات',
      'تصميم وتحليل الخوارزميات',
      'تصميم وتنفيذ قواعد البيانات',
      'تطوير نماذج الذكاء الاصطناعي/التعلم الآلي',
      'تطوير تطبيقات الهاتف المحمول والويب',
      'التوثيق التقني والتقارير'
    ],
    academicLevels: academicLevels,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '2-3 days',
      emergency: '24-48 hours'
    },
    complexity: 4,
    popular: true
  },
  {
    id: 'engineering',
    title: 'Engineering Services',
    arabicTitle: 'الخدمات الهندسية',
    description: 'Comprehensive support for engineering students across all disciplines including civil, mechanical, electrical, chemical, and industrial engineering projects.',
    arabicDescription: 'الدعم الشامل لطلاب الهندسة عبر جميع التخصصات بما في ذلك مشاريع الهندسة المدنية والميكانيكية والكهربائية والكيميائية والصناعية.',
    icon: '/services/mangment.png',
    category: 'engineering',
    features: [
      'Technical calculations and analysis',
      'Engineering design projects',
      'CAD drawings and modeling',
      'Feasibility studies',
      'Project management plans',
      'Technical reports and presentations',
      'Research in emerging technologies'
    ],
    arabicFeatures: [
      'الحسابات والتحليلات التقنية',
      'مشاريع التصميم الهندسي',
      'الرسوم الهندسية والنمذجة',
      'دراسات الجدوى',
      'خطط إدارة المشاريع',
      'التقارير والعروض التقنية',
      'البحث في التقنيات الناشئة'
    ],
    academicLevels: academicLevels,
    deliveryTime: {
      standard: '7-10 days',
      urgent: '3-5 days',
      emergency: '48-72 hours'
    },
    complexity: 4,
    popular: true
  },
  {
    id: 'medical-sciences',
    title: 'Medical & Health Sciences',
    arabicTitle: 'العلوم الطبية والصحية',
    description: 'Specialized academic support for medical students and healthcare professionals including research papers, case studies, and clinical documentation.',
    arabicDescription: 'الدعم الأكاديمي المتخصص لطلاب الطب والمهنيين الصحيين بما في ذلك الأوراق البحثية ودراسات الحالة والتوثيق السريري.',
    icon: '/services/consultation.png',
    category: 'medical',
    features: [
      'Medical research papers',
      'Clinical case studies',
      'Literature reviews in healthcare',
      'Public health policy analysis',
      'Medical ethics discussions',
      'Pharmaceutical research',
      'Healthcare management studies'
    ],
    arabicFeatures: [
      'الأوراق البحثية الطبية',
      'دراسات الحالات السريرية',
      'مراجعات الأدبيات في الرعاية الصحية',
      'تحليل سياسات الصحة العامة',
      'مناقشات الأخلاقيات الطبية',
      'البحوث الصيدلانية',
      'دراسات إدارة الرعاية الصحية'
    ],
    academicLevels: academicLevels,
    deliveryTime: {
      standard: '7-10 days',
      urgent: '4-6 days',
      emergency: '72 hours'
    },
    complexity: 5,
    popular: false
  },
  {
    id: 'natural-sciences',
    title: 'Natural Sciences & Mathematics',
    arabicTitle: 'العلوم الطبيعية والرياضيات',
    description: 'Academic assistance in mathematics, physics, chemistry, biology, and environmental sciences with focus on problem-solving and research methodologies.',
    arabicDescription: 'المساعدة الأكاديمية في الرياضيات والفيزياء والكيمياء والأحياء والعلوم البيئية مع التركيز على حل المشكلات ومنهجيات البحث.',
    icon: '/services/web.png',
    category: 'stem',
    features: [
      'Mathematical problem solving',
      'Laboratory report writing',
      'Statistical data analysis',
      'Scientific research methodology',
      'Environmental impact studies',
      'Theoretical physics problems',
      'Chemistry lab experiments analysis'
    ],
    arabicFeatures: [
      'حل المسائل الرياضية',
      'كتابة تقارير المختبر',
      'التحليل الإحصائي للبيانات',
      'منهجية البحث العلمي',
      'دراسات التأثير البيئي',
      'مسائل الفيزياء النظرية',
      'تحليل تجارب مختبر الكيمياء'
    ],
    academicLevels: academicLevels,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '2-4 days',
      emergency: '24-48 hours'
    },
    complexity: 3,
    popular: false
  },
  {
    id: 'business-economics',
    title: 'Business & Economics',
    arabicTitle: 'إدارة الأعمال والاقتصاد',
    description: 'Professional support for business studies, economic analysis, financial modeling, and strategic planning across various business disciplines.',
    arabicDescription: 'الدعم المهني لدراسات الأعمال والتحليل الاقتصادي والنمذجة المالية والتخطيط الاستراتيجي عبر مختلف تخصصات الأعمال.',
    icon: '/services/training.png',
    category: 'business',
    features: [
      'Business plan development',
      'Financial analysis and modeling',
      'Market research and analysis',
      'Strategic management plans',
      'Economic policy analysis',
      'Case study analysis',
      'Investment portfolio analysis'
    ],
    arabicFeatures: [
      'تطوير خطط الأعمال',
      'التحليل والنمذجة المالية',
      'بحوث وتحليل السوق',
      'خطط الإدارة الاستراتيجية',
      'تحليل السياسات الاقتصادية',
      'تحليل دراسات الحالة',
      'تحليل محافظ الاستثمار'
    ],
    academicLevels: academicLevels,
    deliveryTime: {
      standard: '5-8 days',
      urgent: '3-4 days',
      emergency: '48 hours'
    },
    complexity: 3,
    popular: true
  },
  {
    id: 'humanities-social',
    title: 'Humanities & Social Sciences',
    arabicTitle: 'العلوم الإنسانية والاجتماعية',
    description: 'Comprehensive academic support for humanities and social sciences including literature, history, psychology, sociology, and Islamic studies.',
    arabicDescription: 'الدعم الأكاديمي الشامل للعلوم الإنسانية والاجتماعية بما في ذلك الأدب والتاريخ وعلم النفس وعلم الاجتماع والدراسات الإسلامية.',
    icon: '/services/ui.png',
    category: 'humanities',
    features: [
      'Research papers and essays',
      'Literature analysis and reviews',
      'Historical research projects',
      'Psychological case studies',
      'Sociological surveys and analysis',
      'Islamic studies research',
      'Legal document analysis'
    ],
    arabicFeatures: [
      'الأوراق البحثية والمقالات',
      'تحليل ومراجعات الأدب',
      'مشاريع البحث التاريخي',
      'دراسات الحالة النفسية',
      'المسوحات والتحليلات الاجتماعية',
      'البحوث الإسلامية',
      'تحليل الوثائق القانونية'
    ],
    academicLevels: academicLevels,
    deliveryTime: {
      standard: '4-6 days',
      urgent: '2-3 days',
      emergency: '24-48 hours'
    },
    complexity: 2,
    popular: false
  }
];

// Sample Academic Projects Portfolio
export const academicProjects: AcademicProject[] = [
  {
    id: 'ai-chatbot-analysis',
    title: 'AI Chatbot Implementation Analysis',
    arabicTitle: 'تحليل تطبيق روبوت المحادثة الذكي',
    specialization: 'computer-science',
    academicLevel: 'masters',
    university: 'King Saud University',
    subject: 'Artificial Intelligence',
    arabicSubject: 'الذكاء الاصطناعي',
    description: 'Comprehensive analysis and implementation of an AI chatbot system for customer service automation, including natural language processing and machine learning components.',
    arabicDescription: 'تحليل وتطبيق شامل لنظام روبوت محادثة ذكي لأتمتة خدمة العملاء، بما في ذلك معالجة اللغة الطبيعية ومكونات التعلم الآلي.',
    methodology: 'Applied mixed-methods approach combining quantitative performance metrics with qualitative user experience analysis.',
    arabicMethodology: 'تطبيق منهج مختلط يجمع بين مقاييس الأداء الكمية وتحليل تجربة المستخدم النوعي.',
    results: 'Achieved 85% accuracy in intent recognition and 92% user satisfaction rate with 40% reduction in response time.',
    arabicResults: 'تحقيق دقة 85% في التعرف على النية ومعدل رضا المستخدمين 92% مع تقليل وقت الاستجابة بنسبة 40%.',
    duration: '3 months',
    completionDate: '2024-01-15',
    grade: 'A+',
    images: ['/project/ai/1.png', '/project/ai/2.png'],
    featured: true,
    anonymous: false,
    testimonial: {
      text: 'Excellent analysis with innovative implementation approach. The project exceeded expectations.',
      arabicText: 'تحليل ممتاز مع نهج تطبيق مبتكر. تجاوز المشروع التوقعات.',
      rating: 5,
      level: 'Masters Student'
    }
  },
  {
    id: 'sustainable-building-design',
    title: 'Sustainable Building Design Project',
    arabicTitle: 'مشروع التصميم المستدام للمباني',
    specialization: 'engineering',
    academicLevel: 'undergraduate',
    university: 'King Fahd University',
    subject: 'Civil Engineering',
    arabicSubject: 'الهندسة المدنية',
    description: 'Design and analysis of an eco-friendly residential building incorporating renewable energy systems and sustainable materials.',
    arabicDescription: 'تصميم وتحليل مبنى سكني صديق للبيئة يدمج أنظمة الطاقة المتجددة والمواد المستدامة.',
    methodology: 'Utilized CAD software for structural design and performed energy efficiency calculations using building simulation tools.',
    arabicMethodology: 'استخدام برامج التصميم بمساعدة الحاسوب للتصميم الهيكلي وإجراء حسابات كفاءة الطاقة باستخدام أدوات محاكاة المباني.',
    results: 'Achieved 30% energy savings compared to conventional designs with LEED Gold certification potential.',
    arabicResults: 'تحقيق توفير 30% في الطاقة مقارنة بالتصاميم التقليدية مع إمكانية الحصول على شهادة LEED الذهبية.',
    duration: '4 months',
    completionDate: '2023-12-10',
    grade: 'A',
    images: ['/project/civil/1.png', '/project/civil/2.png'],
    featured: true,
    anonymous: false
  },
  {
    id: 'healthcare-system-analysis',
    title: 'Healthcare Management System Analysis',
    arabicTitle: 'تحليل نظام إدارة الرعاية الصحية',
    specialization: 'medical-sciences',
    academicLevel: 'masters',
    subject: 'Health Administration',
    arabicSubject: 'إدارة الصحة',
    description: 'Comprehensive analysis of healthcare delivery systems in Saudi Arabia with recommendations for digital transformation.',
    arabicDescription: 'تحليل شامل لأنظمة تقديم الرعاية الصحية في المملكة العربية السعودية مع توصيات للتحول الرقمي.',
    methodology: 'Mixed-methods research combining quantitative data analysis with qualitative stakeholder interviews.',
    arabicMethodology: 'بحث الأساليب المختلطة يجمع بين تحليل البيانات الكمية والمقابلات النوعية مع أصحاب المصلحة.',
    results: 'Identified key improvement areas and proposed implementation roadmap for digital health initiatives.',
    arabicResults: 'تحديد مجالات التحسين الرئيسية واقتراح خارطة طريق التنفيذ لمبادرات الصحة الرقمية.',
    duration: '6 months',
    completionDate: '2023-11-20',
    images: ['/project/health/1.png'],
    featured: false,
    anonymous: true
  }
];

// Student Testimonials
export const studentTestimonials: StudentTestimonial[] = [
  {
    id: 'testimonial-1',
    studentLevel: 'masters',
    specialization: 'computer-science',
    text: 'Outstanding service! The AI project analysis was thorough and helped me achieve top grades. The team understood complex technical requirements perfectly.',
    arabicText: 'خدمة متميزة! كان تحليل مشروع الذكاء الاصطناعي شاملاً وساعدني في تحقيق أعلى الدرجات. فهم الفريق المتطلبات التقنية المعقدة بشكل مثالي.',
    rating: 5,
    projectType: 'AI Implementation',
    arabicProjectType: 'تطبيق الذكاء الاصطناعي',
    completionTime: '2 weeks',
    grade: 'A+',
    university: 'King Saud University',
    date: '2024-01-20',
    verified: true
  },
  {
    id: 'testimonial-2',
    studentLevel: 'undergraduate',
    specialization: 'engineering',
    text: 'Professional engineering analysis with detailed calculations. The sustainable design project exceeded my expectations and impressed my professors.',
    arabicText: 'تحليل هندسي مهني مع حسابات مفصلة. تجاوز مشروع التصميم المستدام توقعاتي وأعجب أساتذتي.',
    rating: 5,
    projectType: 'Sustainable Design',
    arabicProjectType: 'التصميم المستدام',
    completionTime: '3 weeks',
    grade: 'A',
    date: '2023-12-15',
    verified: true
  },
  {
    id: 'testimonial-3',
    studentLevel: 'phd',
    specialization: 'business-economics',
    text: 'Exceptional research quality and methodology. The economic analysis was comprehensive and well-structured, contributing significantly to my dissertation.',
    arabicText: 'جودة البحث والمنهجية استثنائية. كان التحليل الاقتصادي شاملاً ومنظماً بشكل جيد، وساهم بشكل كبير في رسالتي.',
    rating: 5,
    projectType: 'Economic Research',
    arabicProjectType: 'البحث الاقتصادي',
    completionTime: '4 weeks',
    university: 'King Abdulaziz University',
    date: '2023-10-30',
    verified: true
  }
];

// Platform Statistics
export const platformStatistics: PlatformStatistics = {
  studentsServed: 2847,
  projectsCompleted: 3920,
  averageRating: 4.8,
  successRate: 96,
  specializations: 6,
  averageGrade: 'A-',
  yearsOfService: 7,
  expertTeamSize: 15
};

// Expert Profiles
export const expertProfiles: ExpertProfile[] = [
  {
    name: "Dr. EngDawood Alhasani",
    arabicName: "د. عبدالله ناصر الحسني",
    title: "Lead Academic Consultant & Platform Director",
    arabicTitle: "المستشار الأكاديمي الرئيسي ومدير المنصة",
    specializations: ['computer-science', 'engineering', 'business-economics'],
    experience: 7,
    education: [
      {
        degree: "Bachelor of Computer Science",
        arabicDegree: "بكالوريوس علوم الحاسب",
        institution: "Umm Al-Qura University",
        arabicInstitution: "جامعة أم القرى",
        field: "Computer Science & Information Technology"
      }
    ],
    bio: "Dr. EngDawood brings over 7 years of experience in academic consulting and project management. He has successfully guided hundreds of students across multiple disciplines, combining technical expertise with educational excellence.",
    arabicBio: "يجلب د. عبدالله أكثر من 7 سنوات من الخبرة في الاستشارات الأكاديمية وإدارة المشاريع. وقد نجح في توجيه المئات من الطلاب عبر تخصصات متعددة، مدمجاً الخبرة التقنية مع التميز التعليمي.",
    image: "/me/1.png"
  }
];

// Pricing Tiers
export const pricingTiers: PricingTier[] = [
  {
    id: 'undergraduate-standard',
    name: 'Undergraduate Standard',
    arabicName: 'البكالوريوس الأساسي',
    basePrice: 150,
    currency: 'SAR',
    academicLevel: 'undergraduate',
    features: [
      'Professional academic writing',
      'Research and analysis',
      '2 rounds of revisions',
      'Plagiarism report',
      'Email support'
    ],
    arabicFeatures: [
      'الكتابة الأكاديمية المهنية',
      'البحث والتحليل',
      'جولتان من المراجعات',
      'تقرير الانتحال',
      'دعم البريد الإلكتروني'
    ],
    deliveryTime: '5-7 days',
    revisions: 2,
    support: 'Email support',
    arabicSupport: 'دعم البريد الإلكتروني'
  },
  {
    id: 'masters-premium',
    name: 'Masters Premium',
    arabicName: 'الماجستير المتميز',
    basePrice: 300,
    currency: 'SAR',
    academicLevel: 'masters',
    features: [
      'Advanced research methodology',
      'Statistical analysis',
      '3 rounds of revisions',
      'Plagiarism report',
      'WhatsApp support',
      'Free formatting'
    ],
    arabicFeatures: [
      'منهجية البحث المتقدمة',
      'التحليل الإحصائي',
      'ثلاث جولات من المراجعات',
      'تقرير الانتحال',
      'دعم الواتساب',
      'التنسيق المجاني'
    ],
    deliveryTime: '7-10 days',
    revisions: 3,
    support: 'WhatsApp + Email',
    arabicSupport: 'الواتساب + البريد الإلكتروني',
    popular: true
  },
  {
    id: 'phd-elite',
    name: 'PhD Elite',
    arabicName: 'الدكتوراه النخبة',
    basePrice: 500,
    currency: 'SAR',
    academicLevel: 'phd',
    features: [
      'Comprehensive research',
      'Advanced statistical modeling',
      'Unlimited revisions',
      'Plagiarism report',
      'Priority WhatsApp support',
      'Free formatting',
      'Publication guidance'
    ],
    arabicFeatures: [
      'البحث الشامل',
      'النمذجة الإحصائية المتقدمة',
      'مراجعات غير محدودة',
      'تقرير الانتحال',
      'دعم الواتساب الأولوي',
      'التنسيق المجاني',
      'إرشادات النشر'
    ],
    deliveryTime: '10-14 days',
    revisions: -1, // Unlimited
    support: 'Priority WhatsApp + Phone',
    arabicSupport: 'الواتساب الأولوي + الهاتف'
  }
];