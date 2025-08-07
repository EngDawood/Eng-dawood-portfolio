export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  available: boolean;
  serviceHours: {
    timezone: string;
    workDays: string[];
    startTime: string;
    endTime: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    whatsapp: string;
    website?: string;
  };
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'design' | 'soft' | 'tools' | 'languages';
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface ServiceOffering {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  image?: string;
}

export interface Statistics {
  yearsExperience: number;
  projectsCompleted: number;
  happyClients: number;
  awardsWon: number;
}

export const personalInfo: PersonalInfo = {
  name: "Academic Excellence Hub",
  title: "Leading Academic Services Platform",
  bio: "Academic Excellence Hub is the premier academic services platform specializing in comprehensive support for students across all academic levels and disciplines. We provide expert assistance in research, writing, project development, and academic consultation with a focus on quality, originality, and academic integrity. Our team of experienced academic consultants serves Arabic-speaking students globally while maintaining the highest standards of educational excellence.",
  shortBio: "Leading Academic Services Platform specializing in comprehensive academic support across all disciplines and levels for Arabic-speaking students worldwide.",
  email: "eng.dawoodsaleh@gmail.com",
  phone: "+966532296438",
  whatsapp: "+966532296438",
  location: "Makkah - Riyadh, Saudi Arabia",
  available: true,
  serviceHours: {
    timezone: "Asia/Riyadh",
    workDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    startTime: "09:00",
    endTime: "22:00"
  },
  socialLinks: {
    github: "https://github.com/engdawood",
    linkedin: "https://linkedin.com/dawood-h-567276191",
    twitter: "https://x.com/EngDawood7/",
    instagram: "https://instagram.com/EngDawood7",
    whatsapp: "https://wa.me/966532296438",
    website: "https://academicexcellencehub.com"
  }
};

export const experiences: Experience[] = [
  {
    company: "Academic Excellence Hub",
    position: "Lead Academic Consultant & Platform Director",
    duration: "7 years",
    startDate: "2017",
    endDate: "Present",
    description: "Founded and led Academic Excellence Hub, providing comprehensive academic support services to students across all disciplines and academic levels. Specialized in academic research, project development, and educational consultation with focus on Arabic-speaking students globally.",
    technologies: ["Academic Research", "Educational Consulting", "Project Management", "Academic Writing"],
    achievements: [
      "Successfully served over 2,847 students across 6 academic specializations",
      "Completed 3,920+ academic projects with 96% success rate",
      "Achieved 4.8/5 average rating from student testimonials",
      "Established leading academic services platform in MENA region"
    ]
  },
  {
    company: "Various Universities",
    position: "Academic Research Consultant",
    duration: "5 years",
    startDate: "2019",
    endDate: "Present",
    description: "Provided specialized academic consultation and research support to graduate and postgraduate students. Expertise in research methodology, statistical analysis, and academic writing across multiple disciplines.",
    technologies: ["Research Methodology", "Statistical Analysis", "Academic Writing", "Literature Review"],
    achievements: [
      "Guided 500+ students through successful thesis and dissertation completion",
      "Specialized consultation in Computer Science, Engineering, and Business disciplines",
      "Developed academic writing frameworks adopted by multiple universities"
    ]
  },
  {
    company: "Educational Technology Projects",
    position: "Academic Technology Specialist",
    duration: "4 years",
    startDate: "2020",
    endDate: "Present",
    description: "Applied technical expertise to develop educational solutions and academic project management systems. Integrated technology with academic research to enhance student learning outcomes.",
    technologies: ["Educational Technology", "Academic Project Management", "Digital Learning Solutions"],
    achievements: [
      "Developed digital academic support tools used by 1000+ students",
      "Implemented technology-enhanced learning solutions for academic projects",
      "Created automated academic progress tracking and quality assurance systems"
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Umm Al-Qura University",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    startDate: "2016",
    endDate: "2022",
    description: "Bachelor of Computer Science with specialization in educational technology and academic research methodologies. Focused on applying technical expertise to educational solutions and academic support systems.",
    achievements: [
      "Specialized in educational technology and academic research methodologies",
      "Completed comprehensive computer science curriculum with academic focus",
      "Developed thesis on 'Technology-Enhanced Academic Support Systems'"
    ]
  }
];

export const skills: Skill[] = [
  // Academic Research Skills
  { name: "Academic Writing", level: 5, category: "programming" },
  { name: "Research Methodology", level: 5, category: "programming" },
  { name: "Statistical Analysis", level: 4, category: "programming" },
  { name: "Literature Review", level: 5, category: "programming" },
  { name: "Data Analysis", level: 4, category: "programming" },
  { name: "Citation Management", level: 5, category: "programming" },
  { name: "Academic Formatting", level: 5, category: "programming" },
  { name: "Thesis Development", level: 5, category: "programming" },
  { name: "Case Study Analysis", level: 4, category: "programming" },
  
  // Subject Matter Expertise
  { name: "Computer Science", level: 5, category: "design" },
  { name: "Engineering", level: 4, category: "design" },
  { name: "Business & Economics", level: 4, category: "design" },
  { name: "Natural Sciences", level: 3, category: "design" },
  { name: "Medical Sciences", level: 3, category: "design" },
  { name: "Humanities", level: 4, category: "design" },
  
  // Academic Tools
  { name: "SPSS/R", level: 4, category: "tools" },
  { name: "Academic Databases", level: 5, category: "tools" },
  { name: "Plagiarism Detection", level: 5, category: "tools" },
  { name: "Project Management", level: 5, category: "tools" },
  { name: "Quality Assurance", level: 5, category: "tools" },
  { name: "Academic Standards", level: 5, category: "tools" },
  
  // Soft Skills
  { name: "Academic Mentoring", level: 5, category: "soft" },
  { name: "Critical Thinking", level: 5, category: "soft" },
  { name: "Problem Solving", level: 5, category: "soft" },
  { name: "Time Management", level: 5, category: "soft" },
  { name: "Student Communication", level: 5, category: "soft" },
  { name: "Academic Ethics", level: 5, category: "soft" },
  
  // Languages
  { name: "Arabic", level: 5, category: "languages" },
  { name: "English", level: 4, category: "languages" }
];

export const certificates: Certificate[] = [
  {
    title: "Academic Research Excellence Certification",
    issuer: "International Academic Standards Board",
    date: "2023",
    image: "/certificates/academic-research.png"
  },
  {
    title: "Advanced Academic Writing Specialist",
    issuer: "Academic Writing Institute",
    date: "2022",
    image: "/certificates/academic-writing.png"
  },
  {
    title: "Statistical Analysis for Academic Research",
    issuer: "Research Methodology Institute",
    date: "2022",
    image: "/certificates/statistical-analysis.png"
  },
  {
    title: "Quality Assurance in Academic Services",
    issuer: "Educational Quality Board",
    date: "2023"
  },
  {
    title: "Academic Ethics and Integrity",
    issuer: "International Ethics Committee",
    date: "2021"
  },
  {
    title: "STEP English Proficiency Test",
    issuer: "National Center for Assessment",
    date: "October 2022"
  },
  {
    title: "Academic Project Management",
    issuer: "Educational Leadership Institute",
    date: "2020-2023"
  },
  {
    title: "Certified Ethical Hacker (CEH V11)",
    issuer: "EC-Council",
    date: "September 2022",
    image: "/certificates/ceh.png"
  }
];

export const services: ServiceOffering[] = [
  {
    title: "Computer Science & Programming",
    description: "Expert assistance in programming assignments, software development projects, algorithms, data structures, AI/ML, and computer science research.",
    icon: "/services/ai.png",
    features: [
      "Programming assignments in multiple languages",
      "Software development projects",
      "Algorithm design and analysis",
      "Database design and implementation",
      "AI/ML model development",
      "Mobile and web application development",
      "Technical documentation and reports"
    ]
  },
  {
    title: "Engineering Services",
    description: "Comprehensive support for engineering students across all disciplines including civil, mechanical, electrical, chemical, and industrial engineering projects.",
    icon: "/services/mangment.png",
    features: [
      "Technical calculations and analysis",
      "Engineering design projects",
      "CAD drawings and modeling",
      "Feasibility studies",
      "Project management plans",
      "Technical reports and presentations",
      "Research in emerging technologies"
    ]
  },
  {
    title: "Medical & Health Sciences",
    description: "Specialized academic support for medical students and healthcare professionals including research papers, case studies, and clinical documentation.",
    icon: "/services/consultation.png",
    features: [
      "Medical research papers",
      "Clinical case studies",
      "Literature reviews in healthcare",
      "Public health policy analysis",
      "Medical ethics discussions",
      "Pharmaceutical research",
      "Healthcare management studies"
    ]
  },
  {
    title: "Natural Sciences & Mathematics",
    description: "Academic assistance in mathematics, physics, chemistry, biology, and environmental sciences with focus on problem-solving and research methodologies.",
    icon: "/services/web.png",
    features: [
      "Mathematical problem solving",
      "Laboratory report writing",
      "Statistical data analysis",
      "Scientific research methodology",
      "Environmental impact studies",
      "Theoretical physics problems",
      "Chemistry lab experiments analysis"
    ]
  },
  {
    title: "Business & Economics",
    description: "Professional support for business studies, economic analysis, financial modeling, and strategic planning across various business disciplines.",
    icon: "/services/training.png",
    features: [
      "Business plan development",
      "Financial analysis and modeling",
      "Market research and analysis",
      "Strategic management plans",
      "Economic policy analysis",
      "Case study analysis",
      "Investment portfolio analysis"
    ]
  },
  {
    title: "Humanities & Social Sciences",
    description: "Comprehensive academic support for humanities and social sciences including literature, history, psychology, sociology, and Islamic studies.",
    icon: "/services/ui.png",
    features: [
      "Research papers and essays",
      "Literature analysis and reviews",
      "Historical research projects",
      "Psychological case studies",
      "Sociological surveys and analysis",
      "Islamic studies research",
      "Legal document analysis"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "أحمد المالكي",
    position: "Masters Student",
    company: "King Saud University",
    text: "خدمة متميزة! ساعدني مركز التميز الأكاديمي في إنجاز مشروع تخرجي في الذكاء الاصطناعي بأعلى المعايير. الفريق محترف ويفهم المتطلبات الأكاديمية بشكل ممتاز."
  },
  {
    name: "فاطمة الزهراني",
    position: "PhD Candidate",
    company: "King Abdulaziz University",
    text: "المساعدة في البحث الأكاديمي كانت لا تقدر بثمن. فريق مركز التميز الأكاديمي قدم لي دعماً شاملاً في منهجية البحث والتحليل الإحصائي لرسالة الدكتوراه."
  },
  {
    name: "محمد العتيبي",
    position: "Undergraduate Student",
    company: "King Fahd University",
    text: "تعاملت مع المركز لأكثر من مشروع هندسي. الجودة عالية والالتزام بالمواعيد ممتاز. أنصح كل طالب يريد التميز الأكاديمي بالتعامل معهم."
  }
];

export const statistics: Statistics = {
  yearsExperience: 7,
  projectsCompleted: 3920,
  happyClients: 2847,
  awardsWon: 6
};

// Service Integration Interfaces
export interface ContactMethod {
  type: 'whatsapp' | 'email' | 'phone' | 'form';
  label: string;
  arabicLabel: string;
  value: string;
  icon: string;
  primary: boolean;
  available: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  arabicName: string;
  serviceIds: string[];
  featured: boolean;
}

// Contact Methods Configuration
export const contactMethods: ContactMethod[] = [
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    arabicLabel: 'واتساب',
    value: '+966532296438',
    icon: '💬',
    primary: true,
    available: true
  },
  {
    type: 'email',
    label: 'Email',
    arabicLabel: 'البريد الإلكتروني',
    value: 'eng.dawoodsaleh@gmail.com',
    icon: '📧',
    primary: false,
    available: true
  },
  {
    type: 'phone',
    label: 'Phone',
    arabicLabel: 'الهاتف',
    value: '+966532296438',
    icon: '📞',
    primary: false,
    available: true
  }
];

// Service Categories Configuration
export const platformServiceCategories: ServiceCategory[] = [
  {
    id: 'traditional-academic',
    name: 'Traditional Academic Services',
    arabicName: 'الخدمات الأكاديمية التقليدية',
    serviceIds: [
      'university-assignments',
      'computer-programming', 
      'thesis-dissertation',
      'graduation-projects',
      'website-development',
      'powerpoint-presentations',
      'online-tutoring',
      'study-summaries',
      'academic-sources',
      'academic-proposals',
      'research-review',
      'citation-formatting',
      'academic-translation',
      'statistical-analysis',
      'references-citations',
      'survey-questionnaire',
      'research-methodology',
      'literature-review',
      'data-analysis',
      'academic-presentations'
    ],
    featured: true
  },
  {
    id: 'ai-powered-services',
    name: 'AI-Powered Services',
    arabicName: 'خدمات مدعومة بالذكاء الاصطناعي',
    serviceIds: [
      'ai-logo-design',
      'ai-image-creation',
      'ai-infographic-design',
      'ai-marketing-content',
      'ai-educational-videos',
      'ai-instant-translation',
      'ai-text-to-speech',
      'ai-custom-music',
      'ai-video-editing',
      'ai-website-ui-design',
      'ai-sketch-to-digital',
      'ai-character-creation',
      'ai-scriptwriting',
      'ai-animated-logos',
      'ai-book-covers',
      'ai-chatbot-creation',
      'ai-sentiment-analysis',
      'ai-content-generator',
      'ai-data-analysis-reports'
    ],
    featured: true
  }
];

// WhatsApp Integration Utilities
export const generateWhatsAppUrl = (
  message: string,
  phoneNumber: string = '+966532296438'
): string => {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};

export const getServiceInquiryWhatsAppMessage = (
  serviceName: string,
  arabicServiceName: string,
  additionalInfo?: string
): string => {
  let message = `السلام عليكم، أرغب في الاستفسار عن خدمة: ${arabicServiceName} (${serviceName})`;
  
  if (additionalInfo) {
    message += `\n\nتفاصيل إضافية: ${additionalInfo}`;
  }
  
  message += '\n\nأتطلع لسماع رأيكم والتعاون معكم.';
  message += '\nشكراً لكم';
  
  return message;
};

export const getGeneralInquiryWhatsAppMessage = (): string => {
  return `السلام عليكم،

أرغب في الاستفسار عن خدماتكم الأكاديمية.

أتطلع لسماع رأيكم والتعاون معكم.
شكراً لكم`;
};

// Platform Configuration
export const platformConfig = {
  name: 'Academic Excellence Hub',
  arabicName: 'مركز التميز الأكاديمي',
  tagline: 'Empowering Academic Success Worldwide',
  arabicTagline: 'نمكن النجاح الأكاديمي عالمياً',
  whatsappNumber: '+966532296438',
  supportedLanguages: ['ar', 'en'],
  primaryLanguage: 'ar',
  serviceRegions: ['Saudi Arabia', 'Gulf Region', 'MENA Region'],
  currency: 'SAR',
  timezone: 'Asia/Riyadh'
};