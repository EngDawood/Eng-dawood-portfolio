// Academic Services Data Structure
// Complete implementation of 39 services (20 traditional + 19 AI services)

export interface AcademicService {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  category: 'traditional' | 'ai';
  serviceType: 'academic-writing' | 'programming' | 'research' | 'design' | 'tutoring' | 'ai-creative' | 'ai-technical' | 'ai-content';
  specialization: string[];
  academicLevels: ('undergraduate' | 'masters' | 'phd')[];
  basePrice: number;
  priceUnit: 'per_page' | 'per_project' | 'per_hour' | 'fixed';
  currency: 'SAR';
  complexity: 1 | 2 | 3 | 4 | 5;
  deliveryTime: {
    standard: string;
    urgent: string;
    emergency: string;
  };
  features: string[];
  arabicFeatures: string[];
  requirements: string[];
  arabicRequirements: string[];
  deliverables: string[];
  arabicDeliverables: string[];
  popular: boolean;
  whatsappEnabled: boolean;
  samples?: string[];
  tags: string[];
  arabicTags: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  arabicDescription: string;
  icon: string;
  color: string;
  servicesCount: number;
  popular: boolean;
}

export interface ServicePricingCalculator {
  basePrice: number;
  academicLevelMultiplier: {
    undergraduate: number;
    masters: number;
    phd: number;
  };
  complexityMultiplier: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  urgencyMultiplier: {
    standard: number;
    urgent: number;
    emergency: number;
  };
  pageMultiplier: number;
  minimumOrder: number;
}

// Traditional Academic Services (20 services)
export const traditionalServices: AcademicService[] = [
  {
    id: 'university-assignments',
    title: 'University Assignment Solutions',
    arabicTitle: 'حل الواجبات الجامعية',
    description: 'Comprehensive solutions for university assignments across all specializations with detailed explanations and professional formatting.',
    arabicDescription: 'حلول شاملة للواجبات الجامعية عبر جميع التخصصات مع شروحات مفصلة وتنسيق مهني.',
    category: 'traditional',
    serviceType: 'academic-writing',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 50,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '3-5 days',
      urgent: '24-48 hours',
      emergency: '12-24 hours'
    },
    features: [
      'Professional academic writing',
      'Detailed explanations',
      'Proper formatting',
      'Plagiarism check',
      'Free revisions (2 rounds)'
    ],
    arabicFeatures: [
      'كتابة أكاديمية مهنية',
      'شروحات مفصلة',
      'تنسيق صحيح',
      'فحص الانتحال',
      'مراجعات مجانية (جولتان)'
    ],
    requirements: ['Assignment details', 'University guidelines', 'Deadline', 'Academic level'],
    arabicRequirements: ['تفاصيل الواجب', 'إرشادات الجامعة', 'الموعد النهائي', 'المستوى الأكاديمي'],
    deliverables: ['Complete solution', 'Step-by-step explanation', 'References', 'Plagiarism report'],
    arabicDeliverables: ['الحل الكامل', 'شرح خطوة بخطوة', 'المراجع', 'تقرير الانتحال'],
    popular: true,
    whatsappEnabled: true,
    tags: ['assignments', 'homework', 'university', 'academic-help'],
    arabicTags: ['واجبات', 'مهام', 'جامعة', 'مساعدة-أكاديمية']
  },

  {
    id: 'computer-programming',
    title: 'Computer Programming Projects',
    arabicTitle: 'مشاريع الحاسب والبرمجة',
    description: 'Expert programming solutions including software development, networking, operating systems, and database projects.',
    arabicDescription: 'حلول برمجية متخصصة تشمل تطوير البرمجيات والشبكات ونظم التشغيل ومشاريع قواعد البيانات.',
    category: 'traditional',
    serviceType: 'programming',
    specialization: ['computer-science', 'information-technology', 'software-engineering'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 150,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '2-3 days',
      emergency: '24-48 hours'
    },
    features: [
      'Multiple programming languages',
      'Complete source code',
      'Documentation',
      'Testing and debugging',
      'Technical support'
    ],
    arabicFeatures: [
      'لغات برمجة متعددة',
      'الكود المصدري الكامل',
      'التوثيق',
      'الاختبار وإصلاح الأخطاء',
      'الدعم التقني'
    ],
    requirements: ['Project specifications', 'Programming language', 'Platform requirements', 'Deadline'],
    arabicRequirements: ['مواصفات المشروع', 'لغة البرمجة', 'متطلبات المنصة', 'الموعد النهائي'],
    deliverables: ['Source code', 'Documentation', 'User manual', 'Test cases'],
    arabicDeliverables: ['الكود المصدري', 'التوثيق', 'دليل المستخدم', 'حالات الاختبار'],
    popular: true,
    whatsappEnabled: true,
    tags: ['programming', 'software', 'coding', 'development'],
    arabicTags: ['برمجة', 'برمجيات', 'أكواد', 'تطوير']
  },

  {
    id: 'thesis-dissertation',
    title: 'Master\'s & PhD Thesis',
    arabicTitle: 'رسائل الماجستير والدكتوراه',
    description: 'Comprehensive support for graduate research including thesis writing, methodology, analysis, and defense preparation.',
    arabicDescription: 'دعم شامل للبحوث العليا يشمل كتابة الرسالة والمنهجية والتحليل والتحضير للمناقشة.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['all-fields'],
    academicLevels: ['masters', 'phd'],
    basePrice: 80,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 5,
    deliveryTime: {
      standard: '2-3 months',
      urgent: '1-1.5 months',
      emergency: '3-4 weeks'
    },
    features: [
      'Original research',
      'Methodology design',
      'Data analysis',
      'Literature review',
      'Defense preparation'
    ],
    arabicFeatures: [
      'بحث أصلي',
      'تصميم المنهجية',
      'تحليل البيانات',
      'مراجعة الأدبيات',
      'التحضير للمناقشة'
    ],
    requirements: ['Research topic', 'University guidelines', 'Methodology preference', 'Data availability'],
    arabicRequirements: ['موضوع البحث', 'إرشادات الجامعة', 'تفضيل المنهجية', 'توفر البيانات'],
    deliverables: ['Complete thesis', 'Literature review', 'Methodology chapter', 'Analysis results', 'Defense slides'],
    arabicDeliverables: ['الرسالة الكاملة', 'مراجعة الأدبيات', 'فصل المنهجية', 'نتائج التحليل', 'شرائح المناقشة'],
    popular: true,
    whatsappEnabled: true,
    tags: ['thesis', 'dissertation', 'research', 'graduate'],
    arabicTags: ['رسالة', 'أطروحة', 'بحث', 'دراسات-عليا']
  },

  {
    id: 'graduation-projects',
    title: 'Research & Graduation Projects',
    arabicTitle: 'بحوث ومشاريع التخرج',
    description: 'Complete graduation projects with research, implementation, documentation, and presentation materials.',
    arabicDescription: 'مشاريع تخرج كاملة مع البحث والتنفيذ والتوثيق ومواد العرض.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate'],
    basePrice: 60,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '3-4 weeks',
      urgent: '2-3 weeks',
      emergency: '1-2 weeks'
    },
    features: [
      'Research methodology',
      'Data collection',
      'Analysis and results',
      'Professional documentation',
      'Presentation slides'
    ],
    arabicFeatures: [
      'منهجية البحث',
      'جمع البيانات',
      'التحليل والنتائج',
      'التوثيق المهني',
      'شرائح العرض'
    ],
    requirements: ['Project topic', 'Specifications', 'Data sources', 'University format'],
    arabicRequirements: ['موضوع المشروع', 'المواصفات', 'مصادر البيانات', 'تنسيق الجامعة'],
    deliverables: ['Complete project report', 'Research findings', 'Implementation', 'Presentation'],
    arabicDeliverables: ['تقرير المشروع الكامل', 'نتائج البحث', 'التنفيذ', 'العرض التقديمي'],
    popular: true,
    whatsappEnabled: true,
    tags: ['graduation', 'research', 'project', 'undergraduate'],
    arabicTags: ['تخرج', 'بحث', 'مشروع', 'بكالوريوس']
  },

  {
    id: 'website-development',
    title: 'Website Development',
    arabicTitle: 'تصميم المواقع الإلكترونية',
    description: 'Professional website development including design, development, and deployment with modern technologies.',
    arabicDescription: 'تطوير مواقع إلكترونية مهنية يشمل التصميم والتطوير والنشر بتقنيات حديثة.',
    category: 'traditional',
    serviceType: 'design',
    specialization: ['computer-science', 'information-technology', 'business'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 500,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '2-3 weeks',
      urgent: '1-2 weeks',
      emergency: '5-7 days'
    },
    features: [
      'Responsive design',
      'Modern frameworks',
      'Database integration',
      'SEO optimization',
      'Hosting setup'
    ],
    arabicFeatures: [
      'تصميم متجاوب',
      'أطر عمل حديثة',
      'تكامل قواعد البيانات',
      'تحسين محركات البحث',
      'إعداد الاستضافة'
    ],
    requirements: ['Website purpose', 'Design preferences', 'Features needed', 'Hosting details'],
    arabicRequirements: ['غرض الموقع', 'تفضيلات التصميم', 'الميزات المطلوبة', 'تفاصيل الاستضافة'],
    deliverables: ['Complete website', 'Source code', 'Documentation', 'Admin panel'],
    arabicDeliverables: ['الموقع الكامل', 'الكود المصدري', 'التوثيق', 'لوحة الإدارة'],
    popular: true,
    whatsappEnabled: true,
    tags: ['web-development', 'website', 'programming', 'design'],
    arabicTags: ['تطوير-مواقع', 'موقع', 'برمجة', 'تصميم']
  },

  {
    id: 'powerpoint-presentations',
    title: 'Professional PowerPoint Presentations',
    arabicTitle: 'عروض بوربوينت احترافية',
    description: 'Professionally designed presentations with engaging visuals, animations, and compelling content structure.',
    arabicDescription: 'عروض تقديمية مصممة بشكل مهني مع مرئيات جذابة وحركات ومحتوى منظم بطريقة مقنعة.',
    category: 'traditional',
    serviceType: 'design',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 25,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'Professional templates',
      'Custom animations',
      'Infographics',
      'Charts and graphs',
      'Speaker notes'
    ],
    arabicFeatures: [
      'قوالب احترافية',
      'حركات مخصصة',
      'انفوجرافيك',
      'الرسوم البيانية',
      'ملاحظات المتحدث'
    ],
    requirements: ['Content outline', 'Design preference', 'Duration', 'Audience type'],
    arabicRequirements: ['مخطط المحتوى', 'تفضيل التصميم', 'المدة', 'نوع الجمهور'],
    deliverables: ['PowerPoint file', 'PDF version', 'Speaker notes', 'Design assets'],
    arabicDeliverables: ['ملف البوربوينت', 'نسخة PDF', 'ملاحظات المتحدث', 'عناصر التصميم'],
    popular: true,
    whatsappEnabled: true,
    tags: ['powerpoint', 'presentation', 'slides', 'design'],
    arabicTags: ['بوربوينت', 'عرض-تقديمي', 'شرائح', 'تصميم']
  },

  {
    id: 'online-tutoring',
    title: 'Online Private Tutoring',
    arabicTitle: 'دروس خصوصية أونلاين',
    description: 'Personalized online tutoring sessions with experienced instructors across various academic subjects.',
    arabicDescription: 'جلسات تدريس خصوصية أونلاين مع مدرسين ذوي خبرة عبر مختلف المواد الأكاديمية.',
    category: 'traditional',
    serviceType: 'tutoring',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 100,
    priceUnit: 'per_hour',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: 'Same day',
      urgent: 'Within 2 hours',
      emergency: 'Within 1 hour'
    },
    features: [
      'One-on-one sessions',
      'Screen sharing',
      'Interactive whiteboard',
      'Session recording',
      'Flexible scheduling'
    ],
    arabicFeatures: [
      'جلسات فردية',
      'مشاركة الشاشة',
      'سبورة تفاعلية',
      'تسجيل الجلسة',
      'جدولة مرنة'
    ],
    requirements: ['Subject area', 'Current level', 'Specific topics', 'Preferred time'],
    arabicRequirements: ['مجال المادة', 'المستوى الحالي', 'مواضيع محددة', 'الوقت المفضل'],
    deliverables: ['Live tutoring session', 'Session notes', 'Practice materials', 'Progress report'],
    arabicDeliverables: ['جلسة تدريس مباشرة', 'ملاحظات الجلسة', 'مواد تطبيقية', 'تقرير التقدم'],
    popular: true,
    whatsappEnabled: true,
    tags: ['tutoring', 'teaching', 'online', 'private-lessons'],
    arabicTags: ['تدريس', 'تعليم', 'أونلاين', 'دروس-خصوصية']
  },

  {
    id: 'study-summaries',
    title: 'Study Material Summaries',
    arabicTitle: 'تلاخيص المواد الدراسية',
    description: 'Comprehensive and concise summaries of study materials to help students prepare effectively for exams.',
    arabicDescription: 'ملخصات شاملة ومقتضبة للمواد الدراسية لمساعدة الطلاب على التحضير الفعال للامتحانات.',
    category: 'traditional',
    serviceType: 'academic-writing',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 30,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'Key concepts extraction',
      'Visual organization',
      'Examples and cases',
      'Review questions',
      'Memory aids'
    ],
    arabicFeatures: [
      'استخراج المفاهيم الأساسية',
      'تنظيم بصري',
      'أمثلة وحالات',
      'أسئلة مراجعة',
      'وسائل مساعدة للذاكرة'
    ],
    requirements: ['Course material', 'Key topics', 'Summary length', 'Format preference'],
    arabicRequirements: ['مادة الدورة', 'المواضيع الأساسية', 'طول الملخص', 'تفضيل التنسيق'],
    deliverables: ['Summary document', 'Key points list', 'Review questions', 'Study guide'],
    arabicDeliverables: ['وثيقة الملخص', 'قائمة النقاط الأساسية', 'أسئلة المراجعة', 'دليل الدراسة'],
    popular: true,
    whatsappEnabled: true,
    tags: ['summaries', 'study-guide', 'exam-prep', 'notes'],
    arabicTags: ['ملخصات', 'دليل-دراسة', 'تحضير-امتحانات', 'ملاحظات']
  },

  {
    id: 'academic-sources',
    title: 'Academic Sources & Research Finder',
    arabicTitle: 'إيجاد المصادر الأكاديمية والبحوث',
    description: 'Expert research assistance to find credible academic sources, journals, and research materials for your projects.',
    arabicDescription: 'مساعدة بحثية متخصصة لإيجاد المصادر الأكاديمية والمجلات والمواد البحثية الموثوقة لمشاريعك.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 100,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'Credible source verification',
      'Database searches',
      'Citation formatting',
      'Source annotations',
      'Research bibliography'
    ],
    arabicFeatures: [
      'التحقق من مصداقية المصادر',
      'بحث قواعد البيانات',
      'تنسيق الاستشهادات',
      'تعليقات المصادر',
      'ببليوجرافيا البحث'
    ],
    requirements: ['Research topic', 'Required sources count', 'Citation style', 'Academic level'],
    arabicRequirements: ['موضوع البحث', 'عدد المصادر المطلوبة', 'نمط الاستشهاد', 'المستوى الأكاديمي'],
    deliverables: ['Sources list', 'Annotated bibliography', 'Full-text access', 'Citation guide'],
    arabicDeliverables: ['قائمة المصادر', 'ببليوجرافيا مُعلقة', 'وصول النص الكامل', 'دليل الاستشهاد'],
    popular: false,
    whatsappEnabled: true,
    tags: ['research', 'sources', 'bibliography', 'academic'],
    arabicTags: ['بحث', 'مصادر', 'ببليوجرافيا', 'أكاديمي']
  },

  {
    id: 'academic-proposals',
    title: 'Academic Plans & Proposals',
    arabicTitle: 'كتابة الخطط الأكاديمية والبروبوزال',
    description: 'Professional writing of academic proposals, research plans, and project proposals for funding and approval.',
    arabicDescription: 'كتابة مهنية للمقترحات الأكاديمية وخطط البحث ومقترحات المشاريع للحصول على التمويل والموافقة.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['all-fields'],
    academicLevels: ['masters', 'phd'],
    basePrice: 200,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '3-4 days',
      emergency: '2-3 days'
    },
    features: [
      'Professional formatting',
      'Comprehensive research plan',
      'Budget planning',
      'Timeline development',
      'Review and revision'
    ],
    arabicFeatures: [
      'تنسيق مهني',
      'خطة بحثية شاملة',
      'تخطيط الميزانية',
      'تطوير الجدول الزمني',
      'المراجعة والتنقيح'
    ],
    requirements: ['Research idea', 'Proposal guidelines', 'Budget requirements', 'Timeline'],
    arabicRequirements: ['فكرة البحث', 'إرشادات المقترح', 'متطلبات الميزانية', 'الجدول الزمني'],
    deliverables: ['Complete proposal', 'Research plan', 'Budget breakdown', 'Timeline chart'],
    arabicDeliverables: ['المقترح الكامل', 'خطة البحث', 'تفصيل الميزانية', 'مخطط زمني'],
    popular: false,
    whatsappEnabled: true,
    tags: ['proposal', 'research-plan', 'academic-writing', 'funding'],
    arabicTags: ['مقترح', 'خطة-بحث', 'كتابة-أكاديمية', 'تمويل']
  },

  {
    id: 'research-review',
    title: 'Research Review & Proofreading',
    arabicTitle: 'مراجعة وتدقيق البحوث العلمية',
    description: 'Professional review and proofreading services for academic papers, ensuring quality and academic standards.',
    arabicDescription: 'خدمات مراجعة وتدقيق مهنية للأوراق الأكاديمية، لضمان الجودة والمعايير الأكاديمية.',
    category: 'traditional',
    serviceType: 'academic-writing',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 40,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'Grammar and language check',
      'Structure review',
      'Content coherence',
      'Academic style',
      'Feedback report'
    ],
    arabicFeatures: [
      'فحص القواعد واللغة',
      'مراجعة الهيكل',
      'تماسك المحتوى',
      'النمط الأكاديمي',
      'تقرير الملاحظات'
    ],
    requirements: ['Research document', 'Review focus areas', 'Academic level', 'Style guide'],
    arabicRequirements: ['وثيقة البحث', 'مجالات التركيز في المراجعة', 'المستوى الأكاديمي', 'دليل الأسلوب'],
    deliverables: ['Reviewed document', 'Track changes version', 'Feedback report', 'Style improvements'],
    arabicDeliverables: ['الوثيقة المراجعة', 'نسخة تتبع التغييرات', 'تقرير الملاحظات', 'تحسينات الأسلوب'],
    popular: false,
    whatsappEnabled: true,
    tags: ['proofreading', 'review', 'editing', 'academic'],
    arabicTags: ['تدقيق', 'مراجعة', 'تحرير', 'أكاديمي']
  },

  {
    id: 'citation-formatting',
    title: 'Research Formatting & Citations',
    arabicTitle: 'تنسيق البحوث والاستشهادات',
    description: 'Professional formatting of research papers according to academic standards (APA, MLA, Harvard, Chicago).',
    arabicDescription: 'تنسيق مهني للأوراق البحثية وفقاً للمعايير الأكاديمية (APA, MLA, Harvard, Chicago).',
    category: 'traditional',
    serviceType: 'academic-writing',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 20,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '1-2 days',
      urgent: '12 hours',
      emergency: '6 hours'
    },
    features: [
      'Multiple citation styles',
      'Reference formatting',
      'In-text citations',
      'Bibliography creation',
      'Style consistency'
    ],
    arabicFeatures: [
      'أنماط استشهاد متعددة',
      'تنسيق المراجع',
      'استشهادات داخل النص',
      'إنشاء الببليوجرافيا',
      'اتساق الأسلوب'
    ],
    requirements: ['Document to format', 'Citation style', 'University guidelines', 'Reference list'],
    arabicRequirements: ['الوثيقة للتنسيق', 'نمط الاستشهاد', 'إرشادات الجامعة', 'قائمة المراجع'],
    deliverables: ['Formatted document', 'Proper citations', 'Reference list', 'Style guide'],
    arabicDeliverables: ['الوثيقة المنسقة', 'الاستشهادات الصحيحة', 'قائمة المراجع', 'دليل الأسلوب'],
    popular: true,
    whatsappEnabled: true,
    tags: ['formatting', 'citations', 'references', 'academic-style'],
    arabicTags: ['تنسيق', 'استشهادات', 'مراجع', 'نمط-أكاديمي']
  },

  {
    id: 'academic-translation',
    title: 'Academic Research Translation',
    arabicTitle: 'ترجمة البحوث والمقالات الأكاديمية',
    description: 'Professional translation of academic papers and research articles between Arabic and English with subject expertise.',
    arabicDescription: 'ترجمة مهنية للأوراق الأكاديمية والمقالات البحثية بين العربية والإنجليزية مع خبرة موضوعية.',
    category: 'traditional',
    serviceType: 'academic-writing',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 50,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '3-5 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Subject matter expertise',
      'Terminology consistency',
      'Cultural adaptation',
      'Academic style preservation',
      'Quality assurance review'
    ],
    arabicFeatures: [
      'خبرة في المجال الموضوعي',
      'اتساق المصطلحات',
      'التكيف الثقافي',
      'الحفاظ على الأسلوب الأكاديمي',
      'مراجعة ضمان الجودة'
    ],
    requirements: ['Source document', 'Target language', 'Subject area', 'Specific terminology'],
    arabicRequirements: ['الوثيقة المصدر', 'اللغة المستهدفة', 'المجال الموضوعي', 'المصطلحات المحددة'],
    deliverables: ['Translated document', 'Terminology glossary', 'Quality report', 'Original formatting'],
    arabicDeliverables: ['الوثيقة المترجمة', 'معجم المصطلحات', 'تقرير الجودة', 'التنسيق الأصلي'],
    popular: true,
    whatsappEnabled: true,
    tags: ['translation', 'academic', 'arabic', 'english'],
    arabicTags: ['ترجمة', 'أكاديمي', 'عربي', 'إنجليزي']
  },

  {
    id: 'statistical-analysis',
    title: 'Statistical Data Analysis',
    arabicTitle: 'التحليل الإحصائي للبيانات',
    description: 'Professional statistical analysis using SPSS, R, Excel, and other tools for research and academic projects.',
    arabicDescription: 'تحليل إحصائي مهني باستخدام SPSS و R و Excel وأدوات أخرى للبحوث والمشاريع الأكاديمية.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['business', 'psychology', 'education', 'social-sciences', 'health-sciences'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 150,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '3-5 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Multiple software tools',
      'Descriptive statistics',
      'Inferential analysis',
      'Data visualization',
      'Results interpretation'
    ],
    arabicFeatures: [
      'أدوات برمجية متعددة',
      'إحصاءات وصفية',
      'التحليل الاستنتاجي',
      'تصور البيانات',
      'تفسير النتائج'
    ],
    requirements: ['Data file', 'Research questions', 'Statistical tests needed', 'Software preference'],
    arabicRequirements: ['ملف البيانات', 'أسئلة البحث', 'الاختبارات الإحصائية المطلوبة', 'تفضيل البرنامج'],
    deliverables: ['Analysis results', 'Statistical output', 'Interpretation report', 'Visualizations'],
    arabicDeliverables: ['نتائج التحليل', 'المخرجات الإحصائية', 'تقرير التفسير', 'التصورات البصرية'],
    popular: true,
    whatsappEnabled: true,
    tags: ['statistics', 'data-analysis', 'spss', 'research'],
    arabicTags: ['إحصاء', 'تحليل-بيانات', 'spss', 'بحث']
  },

  {
    id: 'references-citations',
    title: 'References & Citations Writing',
    arabicTitle: 'كتابة المراجع والاستشهادات',
    description: 'Expert writing and formatting of academic references and citations according to international standards.',
    arabicDescription: 'كتابة وتنسيق متخصص للمراجع والاستشهادات الأكاديمية وفقاً للمعايير الدولية.',
    category: 'traditional',
    serviceType: 'academic-writing',
    specialization: ['all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 15,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '1-2 days',
      urgent: '12 hours',
      emergency: '6 hours'
    },
    features: [
      'Accurate citation format',
      'Reference verification',
      'DOI and URL checking',
      'Alphabetical organization',
      'Style guide compliance'
    ],
    arabicFeatures: [
      'تنسيق استشهاد دقيق',
      'التحقق من المراجع',
      'فحص DOI والروابط',
      'التنظيم الأبجدي',
      'الامتثال لدليل الأسلوب'
    ],
    requirements: ['Source list', 'Citation style', 'Document type', 'University guidelines'],
    arabicRequirements: ['قائمة المصادر', 'نمط الاستشهاد', 'نوع الوثيقة', 'إرشادات الجامعة'],
    deliverables: ['Formatted references', 'In-text citations', 'Bibliography', 'Citation guide'],
    arabicDeliverables: ['المراجع المنسقة', 'الاستشهادات داخل النص', 'الببليوجرافيا', 'دليل الاستشهاد'],
    popular: false,
    whatsappEnabled: true,
    tags: ['references', 'citations', 'bibliography', 'academic'],
    arabicTags: ['مراجع', 'استشهادات', 'ببليوجرافيا', 'أكاديمي']
  },

  {
    id: 'survey-questionnaire',
    title: 'Survey & Questionnaire Design',
    arabicTitle: 'إعداد الاستبيانات وأدوات البحث',
    description: 'Professional design of surveys, questionnaires, and research instruments with validity and reliability considerations.',
    arabicDescription: 'تصميم مهني للاستبيانات والاستطلاعات وأدوات البحث مع اعتبارات الصحة والثبات.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['psychology', 'education', 'business', 'social-sciences'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 120,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '3-4 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Question design',
      'Response scale development',
      'Pilot testing guidance',
      'Validity considerations',
      'Digital form creation'
    ],
    arabicFeatures: [
      'تصميم الأسئلة',
      'تطوير مقاييس الإجابة',
      'إرشادات الاختبار التجريبي',
      'اعتبارات الصحة',
      'إنشاء نماذج رقمية'
    ],
    requirements: ['Research objectives', 'Target population', 'Variables to measure', 'Distribution method'],
    arabicRequirements: ['أهداف البحث', 'المجتمع المستهدف', 'المتغيرات المراد قياسها', 'طريقة التوزيع'],
    deliverables: ['Complete questionnaire', 'Digital form', 'Pilot version', 'Administration guide'],
    arabicDeliverables: ['الاستبيان الكامل', 'النموذج الرقمي', 'النسخة التجريبية', 'دليل الإدارة'],
    popular: false,
    whatsappEnabled: true,
    tags: ['survey', 'questionnaire', 'research-tools', 'data-collection'],
    arabicTags: ['استبيان', 'استطلاع', 'أدوات-بحث', 'جمع-بيانات']
  },

  {
    id: 'research-methodology',
    title: 'Research Methodology Assistance',
    arabicTitle: 'مساعدة في منهجية البحث العلمي',
    description: 'Expert guidance in research methodology design, including qualitative and quantitative approaches.',
    arabicDescription: 'إرشاد متخصص في تصميم منهجية البحث، بما في ذلك المناهج النوعية والكمية.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['all-fields'],
    academicLevels: ['masters', 'phd'],
    basePrice: 200,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 5,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '3-4 days',
      emergency: '2-3 days'
    },
    features: [
      'Methodology design',
      'Data collection planning',
      'Sampling strategy',
      'Analysis framework',
      'Ethical considerations'
    ],
    arabicFeatures: [
      'تصميم المنهجية',
      'تخطيط جمع البيانات',
      'استراتيجية العينة',
      'إطار التحليل',
      'الاعتبارات الأخلاقية'
    ],
    requirements: ['Research problem', 'Research questions', 'Available resources', 'Timeline'],
    arabicRequirements: ['مشكلة البحث', 'أسئلة البحث', 'الموارد المتاحة', 'الجدول الزمني'],
    deliverables: ['Methodology chapter', 'Data collection plan', 'Analysis strategy', 'Ethics protocol'],
    arabicDeliverables: ['فصل المنهجية', 'خطة جمع البيانات', 'استراتيجية التحليل', 'بروتوكول الأخلاق'],
    popular: true,
    whatsappEnabled: true,
    tags: ['methodology', 'research-design', 'qualitative', 'quantitative'],
    arabicTags: ['منهجية', 'تصميم-بحث', 'نوعي', 'كمي']
  },

  {
    id: 'literature-review',
    title: 'Literature Review Writing',
    arabicTitle: 'كتابة مراجعة الأدبيات',
    description: 'Comprehensive literature review writing with critical analysis and synthesis of academic sources.',
    arabicDescription: 'كتابة مراجعة أدبيات شاملة مع التحليل النقدي وتوليف المصادر الأكاديمية.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['all-fields'],
    academicLevels: ['masters', 'phd'],
    basePrice: 60,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '1-2 weeks',
      urgent: '5-7 days',
      emergency: '3-4 days'
    },
    features: [
      'Comprehensive source search',
      'Critical analysis',
      'Thematic organization',
      'Gap identification',
      'Theoretical framework'
    ],
    arabicFeatures: [
      'بحث شامل للمصادر',
      'التحليل النقدي',
      'التنظيم الموضوعي',
      'تحديد الفجوات',
      'الإطار النظري'
    ],
    requirements: ['Research topic', 'Scope definition', 'Key themes', 'Source requirements'],
    arabicRequirements: ['موضوع البحث', 'تعريف النطاق', 'الموضوعات الأساسية', 'متطلبات المصادر'],
    deliverables: ['Literature review chapter', 'Source synthesis', 'Gap analysis', 'Theoretical framework'],
    arabicDeliverables: ['فصل مراجعة الأدبيات', 'تركيب المصادر', 'تحليل الفجوات', 'الإطار النظري'],
    popular: true,
    whatsappEnabled: true,
    tags: ['literature-review', 'academic-writing', 'research', 'critical-analysis'],
    arabicTags: ['مراجعة-أدبيات', 'كتابة-أكاديمية', 'بحث', 'تحليل-نقدي']
  },

  {
    id: 'data-analysis',
    title: 'Qualitative & Quantitative Data Analysis',
    arabicTitle: 'تحليل البيانات النوعية والكمية',
    description: 'Expert analysis of research data using both qualitative and quantitative methods with professional interpretation.',
    arabicDescription: 'تحليل متخصص لبيانات البحث باستخدام الأساليب النوعية والكمية مع تفسير مهني.',
    category: 'traditional',
    serviceType: 'research',
    specialization: ['all-fields'],
    academicLevels: ['masters', 'phd'],
    basePrice: 180,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 5,
    deliveryTime: {
      standard: '1-2 weeks',
      urgent: '5-7 days',
      emergency: '3-4 days'
    },
    features: [
      'Mixed methods analysis',
      'Thematic coding',
      'Statistical testing',
      'Pattern identification',
      'Results visualization'
    ],
    arabicFeatures: [
      'تحليل الأساليب المختلطة',
      'الترميز الموضوعي',
      'الاختبارات الإحصائية',
      'تحديد الأنماط',
      'تصور النتائج'
    ],
    requirements: ['Data files', 'Research questions', 'Analysis approach', 'Software preference'],
    arabicRequirements: ['ملفات البيانات', 'أسئلة البحث', 'نهج التحليل', 'تفضيل البرنامج'],
    deliverables: ['Analysis results', 'Findings chapter', 'Data visualizations', 'Interpretation report'],
    arabicDeliverables: ['نتائج التحليل', 'فصل النتائج', 'تصورات البيانات', 'تقرير التفسير'],
    popular: true,
    whatsappEnabled: true,
    tags: ['data-analysis', 'qualitative', 'quantitative', 'research'],
    arabicTags: ['تحليل-بيانات', 'نوعي', 'كمي', 'بحث']
  },

  {
    id: 'academic-presentations',
    title: 'Academic Defense Presentations',
    arabicTitle: 'إعداد العروض الأكاديمية للمناقشات',
    description: 'Professional preparation of thesis defense presentations and academic conference presentations.',
    arabicDescription: 'إعداد مهني لعروض مناقشة الرسالة والعروض الأكاديمية للمؤتمرات.',
    category: 'traditional',
    serviceType: 'design',
    specialization: ['all-fields'],
    academicLevels: ['masters', 'phd'],
    basePrice: 300,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '3-4 days',
      emergency: '2-3 days'
    },
    features: [
      'Defense presentation design',
      'Key points extraction',
      'Visual storytelling',
      'Q&A preparation',
      'Practice session guide'
    ],
    arabicFeatures: [
      'تصميم عرض المناقشة',
      'استخراج النقاط الأساسية',
      'السرد البصري',
      'التحضير للأسئلة والأجوبة',
      'دليل جلسة التدريب'
    ],
    requirements: ['Research document', 'Defense guidelines', 'Time allocation', 'Committee preferences'],
    arabicRequirements: ['وثيقة البحث', 'إرشادات المناقشة', 'تخصيص الوقت', 'تفضيلات اللجنة'],
    deliverables: ['Defense slides', 'Speaker notes', 'Summary handout', 'Practice guide'],
    arabicDeliverables: ['شرائح المناقشة', 'ملاحظات المتحدث', 'ملخص مطبوع', 'دليل التدريب'],
    popular: true,
    whatsappEnabled: true,
    tags: ['defense', 'presentation', 'thesis', 'academic'],
    arabicTags: ['مناقشة', 'عرض', 'رسالة', 'أكاديمي']
  }
];

// AI-Powered Services (19 services)
export const aiServices: AcademicService[] = [
  {
    id: 'ai-logo-design',
    title: 'AI Logo & Brand Identity Design',
    arabicTitle: 'تصميم الشعارات والهويات البصرية بـ AI',
    description: 'Professional logo and brand identity design using advanced AI tools with unlimited revisions until satisfaction.',
    arabicDescription: 'تصميم شعارات وهويات بصرية مهنية باستخدام أدوات الذكاء الاصطناعي المتقدمة مع مراجعات غير محدودة حتى الرضا.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['design', 'marketing', 'business'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 200,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'AI-powered design generation',
      'Multiple logo variations',
      'Brand color palette',
      'Typography selection',
      'Vector file formats'
    ],
    arabicFeatures: [
      'توليد التصميم بالذكاء الاصطناعي',
      'تنويعات متعددة للشعار',
      'لوحة ألوان العلامة التجارية',
      'اختيار الخط',
      'تنسيقات ملفات المتجهات'
    ],
    requirements: ['Business/project name', 'Industry sector', 'Style preferences', 'Color preferences'],
    arabicRequirements: ['اسم الشركة/المشروع', 'القطاع الصناعي', 'تفضيلات الأسلوب', 'تفضيلات الألوان'],
    deliverables: ['Logo variations', 'Brand guidelines', 'Vector files', 'Color palette'],
    arabicDeliverables: ['تنويعات الشعار', 'إرشادات العلامة التجارية', 'ملفات المتجهات', 'لوحة الألوان'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-design', 'logo', 'branding', 'identity'],
    arabicTags: ['تصميم-ذكي', 'شعار', 'علامة-تجارية', 'هوية']
  },

  {
    id: 'ai-image-creation',
    title: 'AI Image & Illustration Generation',
    arabicTitle: 'إنشاء الصور والرسوم التوضيحية بـ AI',
    description: 'Custom image and illustration creation using state-of-the-art AI models for academic and creative projects.',
    arabicDescription: 'إنشاء صور ورسوم توضيحية مخصصة باستخدام نماذج الذكاء الاصطناعي المتطورة للمشاريع الأكاديمية والإبداعية.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['design', 'art', 'education'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 25,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '1-2 days',
      urgent: '12 hours',
      emergency: '6 hours'
    },
    features: [
      'High-resolution images',
      'Custom art styles',
      'Academic illustrations',
      'Concept visualization',
      'Multiple format outputs'
    ],
    arabicFeatures: [
      'صور عالية الدقة',
      'أنماط فنية مخصصة',
      'رسوم توضيحية أكاديمية',
      'تصور المفاهيم',
      'مخرجات بصيغ متعددة'
    ],
    requirements: ['Image description', 'Style preference', 'Resolution needs', 'Usage context'],
    arabicRequirements: ['وصف الصورة', 'تفضيل الأسلوب', 'احتياجات الدقة', 'سياق الاستخدام'],
    deliverables: ['Custom images', 'High-res files', 'Alternative versions', 'Usage guidelines'],
    arabicDeliverables: ['صور مخصصة', 'ملفات عالية الدقة', 'نسخ بديلة', 'إرشادات الاستخدام'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-images', 'illustrations', 'custom-art', 'visuals'],
    arabicTags: ['صور-ذكية', 'رسوم-توضيحية', 'فن-مخصص', 'مرئيات']
  },

  {
    id: 'ai-infographic-design',
    title: 'AI Infographic Design',
    arabicTitle: 'تصميم الانفوجرافيك بالذكاء الاصطناعي',
    description: 'Data-driven infographic design using AI tools to create compelling visual representations of complex information.',
    arabicDescription: 'تصميم انفوجرافيك مدفوع بالبيانات باستخدام أدوات الذكاء الاصطناعي لإنشاء تمثيلات بصرية مقنعة للمعلومات المعقدة.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['design', 'data-visualization', 'communication'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 100,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'Data visualization',
      'Custom icons and graphics',
      'Responsive design',
      'Interactive elements',
      'Print-ready formats'
    ],
    arabicFeatures: [
      'تصور البيانات',
      'أيقونات ورسوم مخصصة',
      'تصميم متجاوب',
      'عناصر تفاعلية',
      'تنسيقات جاهزة للطباعة'
    ],
    requirements: ['Data/information', 'Target audience', 'Style preference', 'Usage purpose'],
    arabicRequirements: ['البيانات/المعلومات', 'الجمهور المستهدف', 'تفضيل الأسلوب', 'غرض الاستخدام'],
    deliverables: ['Infographic design', 'Source files', 'Web version', 'Print version'],
    arabicDeliverables: ['تصميم الانفوجرافيك', 'ملفات المصدر', 'نسخة الويب', 'نسخة الطباعة'],
    popular: true,
    whatsappEnabled: true,
    tags: ['infographic', 'data-viz', 'ai-design', 'visual-communication'],
    arabicTags: ['انفوجرافيك', 'تصور-بيانات', 'تصميم-ذكي', 'تواصل-بصري']
  },

  {
    id: 'ai-marketing-content',
    title: 'AI Marketing Content Writing',
    arabicTitle: 'كتابة المحتوى التسويقي بـ AI',
    description: 'AI-powered marketing content creation including copy, social media posts, and promotional materials.',
    arabicDescription: 'إنشاء محتوى تسويقي بالذكاء الاصطناعي يشمل النصوص ومنشورات وسائل التواصل والمواد الترويجية.',
    category: 'ai',
    serviceType: 'ai-content',
    specialization: ['marketing', 'business', 'communication'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 80,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '1-2 days',
      urgent: '12 hours',
      emergency: '6 hours'
    },
    features: [
      'SEO-optimized content',
      'Brand voice consistency',
      'Multiple platform adaptation',
      'Call-to-action optimization',
      'A/B testing variations'
    ],
    arabicFeatures: [
      'محتوى محسن لمحركات البحث',
      'اتساق صوت العلامة التجارية',
      'التكيف مع منصات متعددة',
      'تحسين دعوة العمل',
      'تنويعات اختبار A/B'
    ],
    requirements: ['Brand information', 'Target audience', 'Content type', 'Key messages'],
    arabicRequirements: ['معلومات العلامة التجارية', 'الجمهور المستهدف', 'نوع المحتوى', 'الرسائل الأساسية'],
    deliverables: ['Marketing copy', 'Social media posts', 'Email templates', 'Content calendar'],
    arabicDeliverables: ['نصوص تسويقية', 'منشورات وسائل التواصل', 'قوالب البريد الإلكتروني', 'تقويم المحتوى'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-content', 'marketing', 'copywriting', 'social-media'],
    arabicTags: ['محتوى-ذكي', 'تسويق', 'كتابة-إعلانية', 'وسائل-تواصل']
  },

  {
    id: 'ai-educational-videos',
    title: 'AI Educational Video Creation',
    arabicTitle: 'إنشاء الفيديوهات التعليمية بـ AI',
    description: 'AI-powered educational video creation with animations, voiceovers, and interactive elements for learning.',
    arabicDescription: 'إنشاء فيديوهات تعليمية بالذكاء الاصطناعي مع الحركات والتعليقات الصوتية والعناصر التفاعلية للتعلم.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['education', 'multimedia', 'training'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 250,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '3-4 days',
      emergency: '2-3 days'
    },
    features: [
      'Animated explanations',
      'AI voice generation',
      'Interactive elements',
      'Multi-language support',
      'Mobile optimization'
    ],
    arabicFeatures: [
      'شروحات متحركة',
      'توليد الصوت بالذكاء الاصطناعي',
      'عناصر تفاعلية',
      'دعم متعدد اللغات',
      'تحسين للجوال'
    ],
    requirements: ['Content outline', 'Learning objectives', 'Target audience', 'Duration preference'],
    arabicRequirements: ['مخطط المحتوى', 'أهداف التعلم', 'الجمهور المستهدف', 'تفضيل المدة'],
    deliverables: ['Educational video', 'Script/storyboard', 'Subtitle files', 'Interactive elements'],
    arabicDeliverables: ['فيديو تعليمي', 'نص/لوحة القصة', 'ملفات الترجمة', 'عناصر تفاعلية'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-video', 'education', 'animation', 'e-learning'],
    arabicTags: ['فيديو-ذكي', 'تعليم', 'حركة', 'تعلم-إلكتروني']
  },

  {
    id: 'ai-instant-translation',
    title: 'AI Instant Translation',
    arabicTitle: 'ترجمة فورية بالذكاء الاصطناعي',
    description: 'High-quality instant translation between Arabic and English using advanced AI language models.',
    arabicDescription: 'ترجمة فورية عالية الجودة بين العربية والإنجليزية باستخدام نماذج لغة الذكاء الاصطناعي المتقدمة.',
    category: 'ai',
    serviceType: 'ai-content',
    specialization: ['languages', 'communication', 'all-fields'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 15,
    priceUnit: 'per_page',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '2-4 hours',
      urgent: '1 hour',
      emergency: '30 minutes'
    },
    features: [
      'Context-aware translation',
      'Technical terminology',
      'Cultural adaptation',
      'Quality assurance',
      'Formatting preservation'
    ],
    arabicFeatures: [
      'ترجمة واعية للسياق',
      'المصطلحات التقنية',
      'التكيف الثقافي',
      'ضمان الجودة',
      'الحفاظ على التنسيق'
    ],
    requirements: ['Source document', 'Target language', 'Subject area', 'Urgency level'],
    arabicRequirements: ['الوثيقة المصدر', 'اللغة المستهدفة', 'مجال الموضوع', 'مستوى الاستعجال'],
    deliverables: ['Translated document', 'Quality report', 'Terminology glossary', 'Original formatting'],
    arabicDeliverables: ['الوثيقة المترجمة', 'تقرير الجودة', 'معجم المصطلحات', 'التنسيق الأصلي'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-translation', 'instant', 'arabic', 'english'],
    arabicTags: ['ترجمة-ذكية', 'فورية', 'عربي', 'إنجليزي']
  },

  {
    id: 'ai-text-to-speech',
    title: 'AI Text-to-Speech Natural Voice',
    arabicTitle: 'تحويل النص لصوت طبيعي بـ AI',
    description: 'Convert text to natural-sounding speech in multiple languages and voices using advanced AI technology.',
    arabicDescription: 'تحويل النص إلى كلام طبيعي بلغات وأصوات متعددة باستخدام تقنية الذكاء الاصطناعي المتقدمة.',
    category: 'ai',
    serviceType: 'ai-technical',
    specialization: ['multimedia', 'accessibility', 'education'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 50,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 2,
    deliveryTime: {
      standard: '1-2 days',
      urgent: '12 hours',
      emergency: '6 hours'
    },
    features: [
      'Natural voice quality',
      'Multiple voice options',
      'Pronunciation control',
      'Speed adjustment',
      'High-quality audio'
    ],
    arabicFeatures: [
      'جودة صوت طبيعية',
      'خيارات صوت متعددة',
      'تحكم في النطق',
      'تعديل السرعة',
      'صوت عالي الجودة'
    ],
    requirements: ['Text content', 'Voice preference', 'Language selection', 'Audio format'],
    arabicRequirements: ['محتوى النص', 'تفضيل الصوت', 'اختيار اللغة', 'تنسيق الصوت'],
    deliverables: ['Audio file', 'Multiple formats', 'Timestamp file', 'Voice options'],
    arabicDeliverables: ['ملف صوتي', 'تنسيقات متعددة', 'ملف الطوابع الزمنية', 'خيارات الصوت'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-voice', 'text-to-speech', 'audio', 'accessibility'],
    arabicTags: ['صوت-ذكي', 'نص-لصوت', 'صوت', 'إمكانية-وصول']
  },

  {
    id: 'ai-custom-music',
    title: 'AI Custom Background Music',
    arabicTitle: 'إنشاء موسيقى خلفية مخصصة بـ AI',
    description: 'Create custom background music and soundtracks using AI for presentations, videos, and projects.',
    arabicDescription: 'إنشاء موسيقى خلفية مخصصة وموسيقى تصويرية باستخدام الذكاء الاصطناعي للعروض والفيديوهات والمشاريع.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['multimedia', 'audio', 'creative'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 120,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'Custom composition',
      'Multiple genres',
      'Loop-ready tracks',
      'Royalty-free usage',
      'High-quality audio'
    ],
    arabicFeatures: [
      'تأليف مخصص',
      'أنواع موسيقية متعددة',
      'مقطوعات جاهزة للتكرار',
      'استخدام خالي من حقوق الملكية',
      'صوت عالي الجودة'
    ],
    requirements: ['Music style', 'Duration needed', 'Mood/emotion', 'Usage purpose'],
    arabicRequirements: ['نمط الموسيقى', 'المدة المطلوبة', 'المزاج/العاطفة', 'غرض الاستخدام'],
    deliverables: ['Custom music track', 'Multiple versions', 'Loop variations', 'License certificate'],
    arabicDeliverables: ['مقطوعة موسيقية مخصصة', 'نسخ متعددة', 'تنويعات التكرار', 'شهادة الترخيص'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-music', 'soundtrack', 'background-music', 'royalty-free'],
    arabicTags: ['موسيقى-ذكية', 'موسيقى-تصويرية', 'موسيقى-خلفية', 'خالية-حقوق']
  },

  {
    id: 'ai-video-editing',
    title: 'AI Video Editing & Enhancement',
    arabicTitle: 'تحرير وتحسين الفيديوهات بـ AI',
    description: 'Professional video editing and enhancement using AI tools for automatic cutting, effects, and optimization.',
    arabicDescription: 'تحرير وتحسين فيديوهات مهني باستخدام أدوات الذكاء الاصطناعي للقطع التلقائي والتأثيرات والتحسين.',
    category: 'ai',
    serviceType: 'ai-technical',
    specialization: ['multimedia', 'video-production', 'creative'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 200,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '3-5 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Automatic editing',
      'Quality enhancement',
      'Noise reduction',
      'Color correction',
      'Multiple formats'
    ],
    arabicFeatures: [
      'تحرير تلقائي',
      'تحسين الجودة',
      'تقليل الضوضاء',
      'تصحيح الألوان',
      'تنسيقات متعددة'
    ],
    requirements: ['Raw video files', 'Editing requirements', 'Output format', 'Quality preferences'],
    arabicRequirements: ['ملفات الفيديو الخام', 'متطلبات التحرير', 'تنسيق المخرج', 'تفضيلات الجودة'],
    deliverables: ['Edited video', 'Multiple formats', 'Project file', 'Enhancement report'],
    arabicDeliverables: ['فيديو محرر', 'تنسيقات متعددة', 'ملف المشروع', 'تقرير التحسين'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-video', 'video-editing', 'enhancement', 'post-production'],
    arabicTags: ['فيديو-ذكي', 'تحرير-فيديو', 'تحسين', 'ما-بعد-الإنتاج']
  },

  {
    id: 'ai-website-ui-design',
    title: 'AI Website Interface Design',
    arabicTitle: 'تصميم واجهات المواقع بـ AI',
    description: 'AI-powered website and app interface design with user experience optimization and responsive layouts.',
    arabicDescription: 'تصميم واجهات المواقع والتطبيقات بالذكاء الاصطناعي مع تحسين تجربة المستخدم والتخطيطات المتجاوبة.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['web-design', 'ui-ux', 'technology'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 300,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '3-4 days',
      emergency: '2-3 days'
    },
    features: [
      'Responsive design',
      'User experience optimization',
      'Modern aesthetics',
      'Interactive prototypes',
      'Cross-platform compatibility'
    ],
    arabicFeatures: [
      'تصميم متجاوب',
      'تحسين تجربة المستخدم',
      'جماليات حديثة',
      'نماذج أولية تفاعلية',
      'التوافق عبر المنصات'
    ],
    requirements: ['Website purpose', 'Target audience', 'Feature requirements', 'Design preferences'],
    arabicRequirements: ['غرض الموقع', 'الجمهور المستهدف', 'متطلبات الميزات', 'تفضيلات التصميم'],
    deliverables: ['UI/UX design', 'Interactive prototype', 'Design system', 'Development guidelines'],
    arabicDeliverables: ['تصميم واجهة المستخدم', 'نموذج أولي تفاعلي', 'نظام التصميم', 'إرشادات التطوير'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-ui', 'web-design', 'ux-design', 'interface'],
    arabicTags: ['واجهة-ذكية', 'تصميم-ويب', 'تصميم-تجربة', 'واجهة']
  },

  {
    id: 'ai-sketch-to-digital',
    title: 'AI Sketch to Digital Conversion',
    arabicTitle: 'تحويل الرسوم اليدوية لرقمية بـ AI',
    description: 'Convert hand-drawn sketches and drawings into high-quality digital artwork using AI enhancement technology.',
    arabicDescription: 'تحويل الرسومات والمخططات اليدوية إلى أعمال فنية رقمية عالية الجودة باستخدام تقنية التحسين بالذكاء الاصطناعي.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['design', 'art', 'digitization'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 80,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '2-3 days',
      urgent: '24 hours',
      emergency: '12 hours'
    },
    features: [
      'High-resolution output',
      'Style enhancement',
      'Color addition options',
      'Vector conversion',
      'Multiple format export'
    ],
    arabicFeatures: [
      'مخرجات عالية الدقة',
      'تحسين الأسلوب',
      'خيارات إضافة الألوان',
      'تحويل للمتجهات',
      'تصدير بتنسيقات متعددة'
    ],
    requirements: ['Sketch/drawing image', 'Enhancement preferences', 'Color requirements', 'Output format'],
    arabicRequirements: ['صورة الرسم/المخطط', 'تفضيلات التحسين', 'متطلبات الألوان', 'تنسيق المخرج'],
    deliverables: ['Digital artwork', 'Vector version', 'Color variations', 'Source files'],
    arabicDeliverables: ['عمل فني رقمي', 'نسخة متجهة', 'تنويعات ألوان', 'ملفات المصدر'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-conversion', 'sketch-digital', 'artwork', 'digitization'],
    arabicTags: ['تحويل-ذكي', 'رسم-رقمي', 'عمل-فني', 'رقمنة']
  },

  {
    id: 'ai-character-creation',
    title: 'AI Cartoon Character Creation',
    arabicTitle: 'إنشاء شخصيات كرتونية بـ AI',
    description: 'Create unique cartoon characters and mascots using AI for educational materials, presentations, and branding.',
    arabicDescription: 'إنشاء شخصيات كرتونية وتمائم فريدة باستخدام الذكاء الاصطناعي للمواد التعليمية والعروض والعلامة التجارية.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['character-design', 'animation', 'creative'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 150,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '3-4 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Custom character design',
      'Multiple expressions',
      'Pose variations',
      'Style consistency',
      'Commercial usage rights'
    ],
    arabicFeatures: [
      'تصميم شخصية مخصصة',
      'تعبيرات متعددة',
      'تنويعات الوضعيات',
      'اتساق الأسلوب',
      'حقوق الاستخدام التجاري'
    ],
    requirements: ['Character concept', 'Style reference', 'Usage purpose', 'Expression needs'],
    arabicRequirements: ['مفهوم الشخصية', 'مرجع الأسلوب', 'غرض الاستخدام', 'احتياجات التعبير'],
    deliverables: ['Character designs', 'Expression sheet', 'Pose variations', 'Usage guidelines'],
    arabicDeliverables: ['تصاميم الشخصيات', 'ورقة التعبيرات', 'تنويعات الوضعيات', 'إرشادات الاستخدام'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-character', 'cartoon', 'mascot', 'character-design'],
    arabicTags: ['شخصية-ذكية', 'كرتون', 'تميمة', 'تصميم-شخصيات']
  },

  {
    id: 'ai-scriptwriting',
    title: 'AI Script & Screenplay Writing',
    arabicTitle: 'كتابة السيناريوهات بـ AI',
    description: 'Professional script and screenplay writing using AI for educational videos, presentations, and creative projects.',
    arabicDescription: 'كتابة سيناريوهات ونصوص مهنية باستخدام الذكاء الاصطناعي للفيديوهات التعليمية والعروض والمشاريع الإبداعية.',
    category: 'ai',
    serviceType: 'ai-content',
    specialization: ['creative-writing', 'multimedia', 'storytelling'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 100,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '3-5 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Professional formatting',
      'Character development',
      'Dialogue optimization',
      'Scene descriptions',
      'Multiple genres'
    ],
    arabicFeatures: [
      'تنسيق مهني',
      'تطوير الشخصيات',
      'تحسين الحوار',
      'وصف المشاهد',
      'أنواع متعددة'
    ],
    requirements: ['Story concept', 'Genre preference', 'Target audience', 'Duration/length'],
    arabicRequirements: ['مفهوم القصة', 'تفضيل النوع', 'الجمهور المستهدف', 'المدة/الطول'],
    deliverables: ['Complete script', 'Character sheets', 'Scene breakdown', 'Director notes'],
    arabicDeliverables: ['السيناريو الكامل', 'أوراق الشخصيات', 'تقسيم المشاهد', 'ملاحظات الإخراج'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-writing', 'screenplay', 'script', 'creative'],
    arabicTags: ['كتابة-ذكية', 'سيناريو', 'نص', 'إبداعي']
  },

  {
    id: 'ai-animated-logos',
    title: 'AI Animated Logo Creation',
    arabicTitle: 'إنشاء الشعارات المتحركة بـ AI',
    description: 'Create professional animated logos and motion graphics using AI tools for enhanced brand presentation.',
    arabicDescription: 'إنشاء شعارات متحركة ورسوم متحركة مهنية باستخدام أدوات الذكاء الاصطناعي لتحسين عرض العلامة التجارية.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['animation', 'branding', 'motion-graphics'],
    academicLevels: ['undergraduate', 'masters'],
    basePrice: 250,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '4-5 days',
      urgent: '2-3 days',
      emergency: '24-48 hours'
    },
    features: [
      'Professional animation',
      'Multiple animation styles',
      'Various durations',
      'High-quality output',
      'Multiple formats'
    ],
    arabicFeatures: [
      'حركة مهنية',
      'أنماط حركة متعددة',
      'مدد متنوعة',
      'مخرجات عالية الجودة',
      'تنسيقات متعددة'
    ],
    requirements: ['Logo design/concept', 'Animation style', 'Duration preference', 'Usage platform'],
    arabicRequirements: ['تصميم/مفهوم الشعار', 'نمط الحركة', 'تفضيل المدة', 'منصة الاستخدام'],
    deliverables: ['Animated logo', 'Static version', 'Multiple formats', 'Usage guidelines'],
    arabicDeliverables: ['شعار متحرك', 'نسخة ثابتة', 'تنسيقات متعددة', 'إرشادات الاستخدام'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-animation', 'animated-logo', 'motion-graphics', 'branding'],
    arabicTags: ['حركة-ذكية', 'شعار-متحرك', 'رسوم-متحركة', 'علامة-تجارية']
  },

  {
    id: 'ai-book-covers',
    title: 'AI Book Cover Design',
    arabicTitle: 'تصميم أغلفة الكتب بـ AI',
    description: 'Professional book cover design using AI tools with typography, imagery, and genre-appropriate aesthetics.',
    arabicDescription: 'تصميم أغلفة كتب مهنية باستخدام أدوات الذكاء الاصطناعي مع الطباعة والصور والجماليات المناسبة للنوع.',
    category: 'ai',
    serviceType: 'ai-creative',
    specialization: ['book-design', 'publishing', 'graphic-design'],
    academicLevels: ['undergraduate', 'masters', 'phd'],
    basePrice: 180,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 3,
    deliveryTime: {
      standard: '3-4 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Genre-appropriate design',
      'Typography optimization',
      'Print-ready quality',
      'Multiple format sizes',
      'Spine and back design'
    ],
    arabicFeatures: [
      'تصميم مناسب للنوع',
      'تحسين الطباعة',
      'جودة جاهزة للطباعة',
      'أحجام تنسيقات متعددة',
      'تصميم الكعب والظهر'
    ],
    requirements: ['Book title/author', 'Genre/category', 'Design preferences', 'Size specifications'],
    arabicRequirements: ['عنوان/مؤلف الكتاب', 'النوع/الفئة', 'تفضيلات التصميم', 'مواصفات الحجم'],
    deliverables: ['Front cover design', 'Full cover design', 'Print files', 'Web version'],
    arabicDeliverables: ['تصميم الغلاف الأمامي', 'تصميم الغلاف الكامل', 'ملفات الطباعة', 'نسخة الويب'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-design', 'book-cover', 'publishing', 'graphic-design'],
    arabicTags: ['تصميم-ذكي', 'غلاف-كتاب', 'نشر', 'تصميم-جرافيك']
  },

  {
    id: 'ai-chatbot-creation',
    title: 'AI Chatbot Development',
    arabicTitle: 'إنشاء ChatBot ذكي',
    description: 'Custom AI chatbot development for websites, customer service, and educational purposes with natural language processing.',
    arabicDescription: 'تطوير روبوت محادثة ذكي مخصص للمواقع وخدمة العملاء والأغراض التعليمية مع معالجة اللغة الطبيعية.',
    category: 'ai',
    serviceType: 'ai-technical',
    specialization: ['ai-development', 'customer-service', 'automation'],
    academicLevels: ['masters', 'phd'],
    basePrice: 400,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 5,
    deliveryTime: {
      standard: '1-2 weeks',
      urgent: '5-7 days',
      emergency: '3-4 days'
    },
    features: [
      'Natural language understanding',
      'Multi-language support',
      'Integration capabilities',
      'Learning algorithms',
      'Analytics dashboard'
    ],
    arabicFeatures: [
      'فهم اللغة الطبيعية',
      'دعم متعدد اللغات',
      'قدرات التكامل',
      'خوارزميات التعلم',
      'لوحة تحليلات'
    ],
    requirements: ['Use case definition', 'Platform integration', 'Language requirements', 'Functionality scope'],
    arabicRequirements: ['تعريف حالة الاستخدام', 'تكامل المنصة', 'متطلبات اللغة', 'نطاق الوظائف'],
    deliverables: ['Chatbot system', 'Integration code', 'Admin dashboard', 'Documentation'],
    arabicDeliverables: ['نظام روبوت المحادثة', 'كود التكامل', 'لوحة الإدارة', 'التوثيق'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-chatbot', 'automation', 'nlp', 'customer-service'],
    arabicTags: ['روبوت-ذكي', 'أتمتة', 'معالجة-لغة', 'خدمة-عملاء']
  },

  {
    id: 'ai-sentiment-analysis',
    title: 'AI Text Sentiment Analysis',
    arabicTitle: 'تحليل المشاعر في النصوص بـ AI',
    description: 'Advanced sentiment analysis of texts, surveys, and social media content using AI for research and business insights.',
    arabicDescription: 'تحليل متقدم للمشاعر في النصوص والاستطلاعات ومحتوى وسائل التواصل الاجتماعي باستخدام الذكاء الاصطناعي للبحث والرؤى التجارية.',
    category: 'ai',
    serviceType: 'ai-technical',
    specialization: ['data-analysis', 'research', 'social-media'],
    academicLevels: ['masters', 'phd'],
    basePrice: 200,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 4,
    deliveryTime: {
      standard: '3-5 days',
      urgent: '1-2 days',
      emergency: '24 hours'
    },
    features: [
      'Emotion detection',
      'Polarity analysis',
      'Confidence scoring',
      'Trend identification',
      'Visualization reports'
    ],
    arabicFeatures: [
      'اكتشاف العاطفة',
      'تحليل القطبية',
      'تسجيل الثقة',
      'تحديد الاتجاهات',
      'تقارير التصور'
    ],
    requirements: ['Text data source', 'Analysis scope', 'Output format', 'Research objectives'],
    arabicRequirements: ['مصدر البيانات النصية', 'نطاق التحليل', 'تنسيق المخرج', 'أهداف البحث'],
    deliverables: ['Analysis results', 'Sentiment scores', 'Visualization charts', 'Insights report'],
    arabicDeliverables: ['نتائج التحليل', 'درجات المشاعر', 'مخططات التصور', 'تقرير الرؤى'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-analysis', 'sentiment', 'nlp', 'research'],
    arabicTags: ['تحليل-ذكي', 'مشاعر', 'معالجة-لغة', 'بحث']
  },

  {
    id: 'ai-content-generator',
    title: 'AI Custom Content Generator',
    arabicTitle: 'إنشاء مولد محتوى مخصص بـ AI',
    description: 'Custom AI content generation system for automated writing, marketing materials, and educational content.',
    arabicDescription: 'نظام توليد محتوى ذكي مخصص للكتابة التلقائية والمواد التسويقية والمحتوى التعليمي.',
    category: 'ai',
    serviceType: 'ai-technical',
    specialization: ['content-automation', 'marketing', 'education'],
    academicLevels: ['masters', 'phd'],
    basePrice: 500,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 5,
    deliveryTime: {
      standard: '1-2 weeks',
      urgent: '5-7 days',
      emergency: '3-4 days'
    },
    features: [
      'Custom AI model',
      'Template system',
      'Quality control',
      'Multi-format output',
      'Integration API'
    ],
    arabicFeatures: [
      'نموذج ذكاء اصطناعي مخصص',
      'نظام القوالب',
      'مراقبة الجودة',
      'مخرجات متعددة التنسيقات',
      'API التكامل'
    ],
    requirements: ['Content type specification', 'Use case scenarios', 'Quality standards', 'Integration needs'],
    arabicRequirements: ['تحديد نوع المحتوى', 'سيناريوهات الاستخدام', 'معايير الجودة', 'احتياجات التكامل'],
    deliverables: ['Content generation system', 'API documentation', 'Admin interface', 'Training materials'],
    arabicDeliverables: ['نظام توليد المحتوى', 'توثيق API', 'واجهة الإدارة', 'مواد التدريب'],
    popular: false,
    whatsappEnabled: true,
    tags: ['ai-generator', 'automation', 'content-creation', 'custom-ai'],
    arabicTags: ['مولد-ذكي', 'أتمتة', 'إنشاء-محتوى', 'ذكاء-مخصص']
  },

  {
    id: 'ai-data-analysis-reports',
    title: 'AI Data Analysis & Report Generation',
    arabicTitle: 'تحليل البيانات وإنشاء التقارير بـ AI',
    description: 'Automated data analysis and intelligent report generation using AI for research, business, and academic purposes.',
    arabicDescription: 'تحليل آلي للبيانات وتوليد تقارير ذكي باستخدام الذكاء الاصطناعي للبحوث والأعمال والأغراض الأكاديمية.',
    category: 'ai',
    serviceType: 'ai-technical',
    specialization: ['data-science', 'business-intelligence', 'research'],
    academicLevels: ['masters', 'phd'],
    basePrice: 300,
    priceUnit: 'per_project',
    currency: 'SAR',
    complexity: 5,
    deliveryTime: {
      standard: '5-7 days',
      urgent: '3-4 days',
      emergency: '2-3 days'
    },
    features: [
      'Automated data processing',
      'Statistical analysis',
      'Predictive modeling',
      'Interactive visualizations',
      'Executive summaries'
    ],
    arabicFeatures: [
      'معالجة البيانات التلقائية',
      'التحليل الإحصائي',
      'النمذجة التنبؤية',
      'التصورات التفاعلية',
      'الملخصات التنفيذية'
    ],
    requirements: ['Data files', 'Analysis objectives', 'Report requirements', 'Audience specification'],
    arabicRequirements: ['ملفات البيانات', 'أهداف التحليل', 'متطلبات التقرير', 'تحديد الجمهور'],
    deliverables: ['Analysis results', 'Interactive dashboard', 'Executive report', 'Technical documentation'],
    arabicDeliverables: ['نتائج التحليل', 'لوحة تحكم تفاعلية', 'تقرير تنفيذي', 'توثيق تقني'],
    popular: true,
    whatsappEnabled: true,
    tags: ['ai-analysis', 'data-science', 'reporting', 'business-intelligence'],
    arabicTags: ['تحليل-ذكي', 'علم-بيانات', 'تقارير', 'ذكاء-أعمال']
  }
];

// Service Categories
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'traditional-academic',
    name: 'Traditional Academic Services',
    arabicName: 'الخدمات الأكاديمية التقليدية',
    description: 'Comprehensive academic writing, research, and educational support services',
    arabicDescription: 'خدمات شاملة للكتابة الأكاديمية والبحث والدعم التعليمي',
    icon: '📚',
    color: '#3B82F6',
    servicesCount: 20,
    popular: true
  },
  {
    id: 'ai-powered-services',
    name: 'AI-Powered Services',
    arabicName: 'خدمات مدعومة بالذكاء الاصطناعي',
    description: 'Cutting-edge AI services for creative and technical solutions',
    arabicDescription: 'خدمات ذكاء اصطناعي متطورة للحلول الإبداعية والتقنية',
    icon: '🤖',
    color: '#8B5CF6',
    servicesCount: 19,
    popular: true
  }
];

// Pricing Calculator Configuration
export const servicePricingCalculator: ServicePricingCalculator = {
  basePrice: 50,
  academicLevelMultiplier: {
    undergraduate: 1.0,
    masters: 1.5,
    phd: 2.5
  },
  complexityMultiplier: {
    1: 0.8,
    2: 1.0,
    3: 1.3,
    4: 1.7,
    5: 2.2
  },
  urgencyMultiplier: {
    standard: 1.0,
    urgent: 1.5,
    emergency: 2.0
  },
  pageMultiplier: 1.0,
  minimumOrder: 50
};

// Combined services array
export const allAcademicServices: AcademicService[] = [
  ...traditionalServices,
  ...aiServices
];

// Helper functions
export const getServiceById = (id: string): AcademicService | undefined => {
  return allAcademicServices.find(service => service.id === id);
};

export const getServicesByCategory = (category: 'traditional' | 'ai'): AcademicService[] => {
  return allAcademicServices.filter(service => service.category === category);
};

export const getServicesBySpecialization = (specialization: string): AcademicService[] => {
  return allAcademicServices.filter(service => 
    service.specialization.includes(specialization) || 
    service.specialization.includes('all-fields')
  );
};

export const getPopularServices = (): AcademicService[] => {
  return allAcademicServices.filter(service => service.popular);
};

export const calculateServicePrice = (
  basePrice: number,
  academicLevel: 'undergraduate' | 'masters' | 'phd',
  complexity: 1 | 2 | 3 | 4 | 5,
  urgency: 'standard' | 'urgent' | 'emergency',
  pages: number = 1
): number => {
  const calculator = servicePricingCalculator;
  
  let totalPrice = basePrice;
  totalPrice *= calculator.academicLevelMultiplier[academicLevel];
  totalPrice *= calculator.complexityMultiplier[complexity];
  totalPrice *= calculator.urgencyMultiplier[urgency];
  totalPrice *= pages;
  
  return Math.max(totalPrice, calculator.minimumOrder);
};

export const getWhatsAppMessage = (
  service: AcademicService,
  academicLevel?: string,
  additionalInfo?: string
): string => {
  const phoneNumber = '966532296438';
  const baseMessage = `السلام عليكم، أرغب في الاستفسار عن خدمة: ${service.arabicTitle}`;
  const levelMessage = academicLevel ? ` - المستوى الأكاديمي: ${academicLevel}` : '';
  const additionalMessage = additionalInfo ? ` - تفاصيل إضافية: ${additionalInfo}` : '';
  const fullMessage = `${baseMessage}${levelMessage}${additionalMessage}`;
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
};