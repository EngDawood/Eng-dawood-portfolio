import { Language } from '@/translations';

export interface PersonalInfoTranslation {
  name: string;
  title: string;
  bioParagraph1: string;
  bioParagraph2: string;
  bioParagraph3: string;
  bioParagraph4: string;
  poetryQuote: string;
  poetryAuthor: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  available: boolean;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    dribbble?: string;
    behance?: string;
  };
}

export interface ExperienceTranslation {
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface EducationTranslation {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface SkillTranslation {
  name: string;
  level: number; // 1-5
  category: 'programming' | 'design' | 'soft' | 'tools' | 'languages';
}

export interface CertificateTranslation {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface ServiceOfferingTranslation {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface TestimonialTranslation {
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

export interface FAQTranslation {
  question: string;
  answer: string;
}


export const personalInfoTranslations: Record<Language, PersonalInfoTranslation> = {
  en: {
    name: "Academic Excellence Hub",
    title: "Comprehensive Academic Services for Arabic-Speaking Students Worldwide",
    bioParagraph1: "Leading academic support platform serving Arabic-speaking students worldwide with exceptional support from undergraduate to PhD level across all major disciplines.",
    bioParagraph2: "Our team of academic experts specializes in Computer Science, Engineering, Medical Sciences, Natural Sciences, Business, and Humanities, ensuring top-quality assistance tailored to each field of study.",
    bioParagraph3: "With over 8 years of experience and 2,500+ satisfied students, we combine deep subject matter expertise with cultural understanding to deliver exceptional academic results.",
    bioParagraph4: "We believe in empowering Arabic-speaking students to achieve their academic dreams through personalized support, cutting-edge resources, and unwavering commitment to excellence.",
    poetryQuote: "If you dare to pursue an honor sought, do not settle for anything less than the stars",
    poetryAuthor: "Al-Mutanabbi",
    shortBio: "Providing comprehensive academic services for Arabic-speaking students worldwide, from research assistance to thesis development, ensuring academic success with the highest quality standards.",
    email: "info@academicexcellencehub.com",
    phone: "+966-50-123-4567",
    location: "Serving Arabic-Speaking Students Globally",
    available: true,
    socialLinks: {
      github: "https://github.com/academicexcellencehub",
      linkedin: "https://www.linkedin.com/company/academic-excellence-hub",
      twitter: "https://twitter.com/academichub_ar"
    }
  },
  ar: {
    name: "مركز التميز الأكاديمي",
    title: "خدمات أكاديمية شاملة للطلاب العرب حول العالم",
    bioParagraph1: "منصة رائدة للدعم الأكاديمي تخدم الطلاب العرب حول العالم بدعم استثنائي من المرحلة الجامعية حتى الدكتوراه في جميع التخصصات الرئيسية.",
    bioParagraph2: "يتخصص فريقنا من الخبراء الأكاديميين في علوم الحاسب والهندسة والعلوم الطبية والعلوم الطبيعية والأعمال والعلوم الإنسانية، مما يضمن مساعدة عالية الجودة مخصصة لكل مجال دراسي.",
    bioParagraph3: "بخبرة تزيد عن 8 سنوات وأكثر من 2500 طالب راضٍ، نجمع بين الخبرة العميقة في المواد الدراسية والفهم الثقافي لتقديم نتائج أكاديمية استثنائية.",
    bioParagraph4: "نؤمن بتمكين الطلاب العرب لتحقيق أحلامهم الأكاديمية من خلال الدعم الشخصي والموارد المتطورة والالتزام الثابت بالتميز الأكاديمي.",
    poetryQuote: "إذا غامرتَ في شرفٍ مرومِ، فلا تقنعْ بما دونَ النجومِ",
    poetryAuthor: "المتنبي",
    shortBio: "نقدم خدمات أكاديمية شاملة للطلاب العرب حول العالم، من المساعدة البحثية إلى تطوير الأطروحات، لضمان النجاح الأكاديمي بأعلى معايير الجودة.",
    email: "info@academicexcellencehub.com",
    phone: "٤٦٧-٤٥٦٧-٠٥٠-٩٦٦+",
    location: "نخدم الطلاب العرب في جميع أنحاء العالم",
    available: true,
    socialLinks: {
      github: "https://github.com/academicexcellencehub",
      linkedin: "https://www.linkedin.com/company/academic-excellence-hub",
      twitter: "https://twitter.com/academichub_ar"
    }
  }
};
export const experiencesTranslations: Record<Language, ExperienceTranslation[]> = {
  en: [
    {
      company: "Al-Sabaan Contracting Co.",
      position: "IT Project Manager",
      duration: "1 year",
      startDate: "2023",
      endDate: "2024",
      description: "Led and managed comprehensive IT infrastructure project at Public Security Training City. Developed and implemented IT strategies to optimize operational efficiency. Orchestrated technical infrastructure deployment ensuring alignment with project requirements. Established IT governance frameworks and security protocols.",
      technologies: ["Project Management", "IT Infrastructure", "Security Protocols", "Systems Integration"],
      achievements: [
        "Successfully led IT infrastructure project at Public Security Training City",
        "Developed and implemented IT strategies to optimize operational efficiency",
        "Established comprehensive IT governance frameworks and security protocols"
      ]
    },
    {
      company: "Ministry of Hajj",
      position: "Administrative & Field Coordinator",
      duration: "Seasonal",
      startDate: "2023",
      endDate: "Present",
      description: "Coordinated and managed field operations during Hajj season. Implemented technical solutions to enhance administrative efficiency. Utilized technical expertise to streamline processes and improve service delivery.",
      technologies: ["Field Operations Management", "Process Optimization", "Administrative Systems"],
      achievements: [
        "Coordinated field operations for thousands of pilgrims during Hajj season",
        "Implemented technical solutions that enhanced administrative efficiency",
        "Streamlined processes and improved service delivery systems"
      ]
    },
    {
      company: "Al-Jazeera Construction Co.",
      position: "IT Department Supervisor",
      duration: "6 years",
      startDate: "2017",
      endDate: "2023",
      description: "Supervised IT department operations and managed technical staff. Planned and executed hardware/software maintenance and upgrade strategies. Managed IT procurement processes and resource optimization.",
      technologies: ["IT Management", "Hardware/Software Maintenance", "Team Leadership", "Resource Optimization"],
      achievements: [
        "Successfully supervised IT department operations for 6+ years",
        "Managed and developed technical staff capabilities",
        "Implemented cost-effective IT procurement and resource optimization strategies"
      ]
    }
  ],
  ar: [
    {
      company: "شركة الصبان للمقاولات",
      position: "مدير مشاريع تقنية المعلومات",
      duration: "سنة واحدة",
      startDate: "2023",
      endDate: "2024",
      description: "قاد وأدار مشروع شامل للبنية التحتية لتقنية المعلومات في مدينة التدريب الأمني. طور ونفذ استراتيجيات تقنية المعلومات لتحسين الكفاءة التشغيلية. نسق نشر البنية التحتية التقنية مع ضمان التوافق مع متطلبات المشروع. وضع أطر حوكمة تقنية المعلومات وبروتوكولات الأمان.",
      technologies: ["إدارة المشاريع", "البنية التحتية لتقنية المعلومات", "بروتوكولات الأمان", "تكامل الأنظمة"],
      achievements: [
        "قاد بنجاح مشروع البنية التحتية لتقنية المعلومات في مدينة التدريب الأمني",
        "طور ونفذ استراتيجيات تقنية المعلومات لتحسين الكفاءة التشغيلية",
        "وضع أطر شاملة لحوكمة تقنية المعلومات وبروتوكولات الأمان"
      ]
    },
    {
      company: "وزارة الحج",
      position: "منسق إداري وميداني",
      duration: "موسمي",
      startDate: "2023",
      endDate: "الحاضر",
      description: "نسق وأدار العمليات الميدانية خلال موسم الحج. نفذ حلول تقنية لتعزيز الكفاءة الإدارية. استخدم الخبرة التقنية لتبسيط العمليات وتحسين تقديم الخدمات.",
      technologies: ["إدارة العمليات الميدانية", "تحسين العمليات", "الأنظمة الإدارية"],
      achievements: [
        "نسق العمليات الميدانية لآلاف الحجاج خلال موسم الحج",
        "نفذ حلول تقنية عززت الكفاءة الإدارية",
        "بسط العمليات وحسن أنظمة تقديم الخدمات"
      ]
    },
    {
      company: "شركة الجزيرة للإنشاءات",
      position: "مشرف قسم تقنية المعلومات",
      duration: "6 سنوات",
      startDate: "2017",
      endDate: "2023",
      description: "أشرف على عمليات قسم تقنية المعلومات وأدار الموظفين التقنيين. خطط ونفذ استراتيجيات صيانة وترقية الأجهزة والبرمجيات. أدار عمليات الشراء لتقنية المعلومات وتحسين الموارد.",
      technologies: ["إدارة تقنية المعلومات", "صيانة الأجهزة والبرمجيات", "قيادة الفرق", "تحسين الموارد"],
      achievements: [
        "أشرف بنجاح على عمليات قسم تقنية المعلومات لأكثر من 6 سنوات",
        "أدار وطور قدرات الموظفين التقنيين",
        "نفذ استراتيجيات فعالة من حيث التكلفة لشراء تقنية المعلومات وتحسين الموارد"
      ]
    }
  ]
};

export const educationTranslations: Record<Language, EducationTranslation[]> = {
  en: [
    {
      institution: "Umm Al-Qura University",
      degree: "Bachelor's Degree",
      field: "Computer Science",
      startDate: "2016",
      endDate: "2022",
      description: "Bachelor of Computer Science from Jamoum University College with focus on software development, systems analysis, and project management.",
      achievements: [
        "Specialized in software development and systems analysis",
        "Completed comprehensive computer science curriculum"
      ]
    }
  ],
  ar: [
    {
      institution: "جامعة أم القرى",
      degree: "درجة البكالوريوس",
      field: "علوم الحاسب",
      startDate: "2016",
      endDate: "2022",
      description: "بكالوريوس علوم الحاسب من كلية الجموم الجامعية مع التركيز على تطوير البرمجيات وتحليل الأنظمة وإدارة المشاريع.",
      achievements: [
        "تخصص في تطوير البرمجيات وتحليل الأنظمة",
        "أكمل منهج شامل في علوم الحاسب"
      ]
    }
  ]
};

export const skillsTranslations: Record<Language, SkillTranslation[]> = {
  en: [
    // Programming Skills
    { name: "JavaScript", level: 4, category: "programming" },
    { name: "TypeScript", level: 4, category: "programming" },
    { name: "HTML/CSS", level: 5, category: "programming" },
    { name: "Flutter", level: 5, category: "programming" },
    { name: "Dart", level: 5, category: "programming" },
    { name: "Next.js", level: 4, category: "programming" },
    { name: "React", level: 4, category: "programming" },
    { name: "Firebase", level: 4, category: "programming" },
    { name: "API Integration", level: 4, category: "programming" },
    
    // Design Skills
    { name: "UI/UX Development", level: 4, category: "design" },
    { name: "Responsive Design", level: 4, category: "design" },
    { name: "Figma", level: 3, category: "design" },
    
    // Tools
    { name: "Git", level: 4, category: "tools" },
    { name: "GitHub", level: 4, category: "tools" },
    { name: "Project Management", level: 5, category: "tools" },
    { name: "Systems Analysis & Design", level: 4, category: "tools" },
    { name: "Web & Mobile Development", level: 5, category: "tools" },
    
    // Soft Skills
    { name: "Problem Solving", level: 5, category: "soft" },
    { name: "Analytical Thinking", level: 5, category: "soft" },
    { name: "Time Management", level: 4, category: "soft" },
    { name: "Project Coordination", level: 5, category: "soft" },
    { name: "Rapid Learning and Adaptability", level: 5, category: "soft" },
    
    // Languages
    { name: "Arabic", level: 5, category: "languages" },
    { name: "English", level: 4, category: "languages" }
  ],
  ar: [
    // مهارات البرمجة
    { name: "جافاسكريبت", level: 4, category: "programming" },
    { name: "تايب سكريبت", level: 4, category: "programming" },
    { name: "HTML/CSS", level: 5, category: "programming" },
    { name: "فلاتر", level: 5, category: "programming" },
    { name: "دارت", level: 5, category: "programming" },
    { name: "Next.js", level: 4, category: "programming" },
    { name: "ريأكت", level: 4, category: "programming" },
    { name: "فايربيس", level: 4, category: "programming" },
    { name: "تكامل واجهات البرمجة", level: 4, category: "programming" },
    
    // مهارات التصميم
    { name: "تطوير واجهات المستخدم وتجربة المستخدم", level: 4, category: "design" },
    { name: "التصميم المتجاوب", level: 4, category: "design" },
    { name: "فيجما", level: 3, category: "design" },
    
    // الأدوات
    { name: "جت", level: 4, category: "tools" },
    { name: "جت هاب", level: 4, category: "tools" },
    { name: "إدارة المشاريع", level: 5, category: "tools" },
    { name: "تحليل وتصميم الأنظمة", level: 4, category: "tools" },
    { name: "تطوير الويب والهاتف المحمول", level: 5, category: "tools" },
    
    // المهارات الشخصية
    { name: "حل المشكلات", level: 5, category: "soft" },
    { name: "التفكير التحليلي", level: 5, category: "soft" },
    { name: "إدارة الوقت", level: 4, category: "soft" },
    { name: "تنسيق المشاريع", level: 5, category: "soft" },
    { name: "التعلم السريع والتكيف", level: 5, category: "soft" },
    
    // اللغات
    { name: "العربية", level: 5, category: "languages" },
    { name: "الإنجليزية", level: 4, category: "languages" }
  ]
};

export const certificatesTranslations: Record<Language, CertificateTranslation[]> = {
  en: [
    {
      title: "Certified Ethical Hacker (CEH V11)",
      issuer: "EC-Council",
      date: "September 2022",
      image: "/certificates/ceh.png"
    },
    {
      title: "Certified Application Developer",
      issuer: "Tuwaiq Academy",
      date: "2023",
      image: "/certificates/tuwaiq-developer.png"
    },
    {
      title: "Flutter Mobile App Development",
      issuer: "Tuwaiq Academy",
      date: "January 2023",
      image: "/certificates/tuwaiq-flutter.png"
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2022"
    },
    {
      title: "IoT Fundamentals",
      issuer: "Cisco",
      date: "2022"
    },
    {
      title: "STEP English Proficiency Test",
      issuer: "National Center for Assessment",
      date: "October 2022"
    },
    {
      title: "Multiple Programming Certificates",
      issuer: "Ministry of Communications",
      date: "2021-2023"
    }
  ],
  ar: [
    {
      title: "مخترق أخلاقي معتمد (CEH V11)",
      issuer: "EC-Council",
      date: "سبتمبر 2022",
      image: "/certificates/ceh.png"
    },
    {
      title: "مطور تطبيقات معتمد",
      issuer: "أكاديمية طويق",
      date: "2023",
      image: "/certificates/tuwaiq-developer.png"
    },
    {
      title: "تطوير تطبيقات الهاتف المحمول بالفلاتر",
      issuer: "أكاديمية طويق",
      date: "يناير 2023",
      image: "/certificates/tuwaiq-flutter.png"
    },
    {
      title: "مقدمة في الأمن السيبراني",
      issuer: "سيسكو",
      date: "2022"
    },
    {
      title: "أساسيات إنترنت الأشياء",
      issuer: "سيسكو",
      date: "2022"
    },
    {
      title: "اختبار الكفاءة في اللغة الإنجليزية STEP",
      issuer: "المركز الوطني للقياس",
      date: "أكتوبر 2022"
    },
    {
      title: "شهادات متعددة في البرمجة",
      issuer: "وزارة الاتصالات",
      date: "2021-2023"
    }
  ]
};

export const servicesTranslations: Record<Language, ServiceOfferingTranslation[]> = {
en: [
  {
    title: "Computer Science & Programming",
    description: "Comprehensive academic support for computer science students at all levels, from basic programming to advanced AI and software engineering projects.",
    icon: "/services/computer-science.png",
    features: [
      "Programming in Java, Python, C++, JavaScript, React, Node.js",
      "Mobile development with Flutter, React Native, Android, iOS",
      "AI/ML projects using TensorFlow, PyTorch, Data Science tools",
      "Database systems: MySQL, PostgreSQL, MongoDB, Oracle",
      "Web development, software engineering, and system design"
    ],
    href: "/services/computer-science-programming"
  },
  {
    title: "Engineering Services",
    description: "Expert assistance for engineering students across multiple disciplines, providing comprehensive support for projects, assignments, and research.",
    icon: "/services/engineering.png",
    features: [
      "Civil Engineering: Structural Analysis, AutoCAD, Civil 3D projects",
      "Electrical Engineering: Circuit Design, MATLAB, Power Systems",
      "Mechanical Engineering: SolidWorks, Thermodynamics, CFD analysis",
      "Industrial Engineering: Operations Research, Optimization studies",
      "Chemical Engineering: Process Design, Simulation, Plant design"
    ],
    href: "/services/engineering-services"
  },
  {
    title: "Medical & Health Sciences",
    description: "Specialized academic support for medical and health sciences students, covering clinical studies, research projects, and healthcare management.",
    icon: "/services/medical.png",
    features: [
      "Human Medicine: Case Studies, Clinical Research, Medical Documentation",
      "Dentistry: Treatment Plans, Oral Pathology, Dental Practice Management",
      "Pharmacy: Drug Development, Pharmacology, Pharmaceutical Research",
      "Nursing: Care Plans, Healthcare Management, Patient Safety Studies",
      "Public Health: Epidemiological Studies, Health Policy Analysis"
    ],
    href: "/services/medical-health-sciences"
  }
],
 ar: [
  {
    title: "علوم الحاسب والبرمجة",
    description: "دعم أكاديمي شامل لطلاب علوم الحاسب في جميع المستويات، من أساسيات البرمجة إلى مشاريع الذكاء الاصطناعي المتقدمة وهندسة البرمجيات.",
    icon: "/services/computer-science.png",
    features: [
      "البرمجة بجافا، بايثون، سي++، جافاسكريبت، رياكت، نود.جي إس",
      "تطوير تطبيقات الهاتف بفلاتر، رياكت نيتيف، أندرويد، آي أو إس",
      "مشاريع الذكاء الاصطناعي والتعلم الآلي بتنسرفلو، بايتورش، علوم البيانات",
      "أنظمة قواعد البيانات: ماي إس كيو إل، بوستجريس، مونجو، أوراكل",
      "تطوير الويب، هندسة البرمجيات، وتصميم الأنظمة"
    ],
    href: "/services/computer-science-programming"
  },
  {
    title: "الخدمات الهندسية",
    description: "مساعدة متخصصة لطلاب الهندسة في مختلف التخصصات، نقدم دعم شامل للمشاريع والواجبات والأبحاث الهندسية.",
    icon: "/services/engineering.png",
    features: [
      "الهندسة المدنية: التحليل الإنشائي، أوتوكاد، سيفيل ثري دي",
      "الهندسة الكهربائية: تصميم الدوائر، ماتلاب، أنظمة القوى",
      "الهندسة الميكانيكية: سوليدوركس، الديناميكا الحرارية، تحليل السوائل",
      "الهندسة الصناعية: بحوث العمليات، دراسات التحسين والأمثلة",
      "الهندسة الكيميائية: تصميم العمليات، المحاكاة، تصميم المصانع"
    ],
    href: "/services/engineering-services"
  },
  {
    title: "العلوم الطبية والصحية",
    description: "دعم أكاديمي متخصص لطلاب العلوم الطبية والصحية، يغطي الدراسات السريرية والمشاريع البحثية وإدارة الرعاية الصحية.",
    icon: "/services/medical.png",
    features: [
      "الطب البشري: دراسات الحالات، البحوث السريرية، التوثيق الطبي",
      "طب الأسنان: خطط العلاج، أمراض الفم، إدارة العيادات السنية",
      "الصيدلة: تطوير الأدوية، علم الأدوية، البحوث الصيدلانية",
      "التمريض: خطط الرعاية، إدارة الرعاية الصحية، دراسات سلامة المرضى",
      "الصحة العامة: الدراسات الوبائية، تحليل السياسات الصحية"
    ],
    href: "/services/medical-health-sciences"
  }
]
};

export const testimonialsTranslations: Record<Language, TestimonialTranslation[]> = {
  en: [
    {
      name: "Mohammed Al-Otaibi",
      position: "Project Manager",
      company: "Public Security Training City",
      text: "EngDawood demonstrated exceptional skills in managing the IT infrastructure project. His ability to coordinate technical teams and implement best practices was key to the project's success."
    },
    {
      name: "Sarah Al-Harbi",
      position: "IT Director",
      company: "Al-Jazeera Construction Co.",
      text: "During EngDawood's tenure as IT Department Supervisor, he showed outstanding leadership and ability to develop the technical team. His contributions to process improvement were remarkable."
    },
    {
      name: "Ahmed Al-Qahtani",
      position: "Student",
      company: "Tuwaiq Academy",
      text: "The applications that EngDawood developed during the training program show a high level of creativity and technical skill. Especially the 'Raseem' app which solves a real problem in technical documentation."
    }
  ],
  ar: [
    {
      name: "محمد العتيبي",
      position: "مدير مشروع",
      company: "مدينة التدريب الأمني",
      text: "عبدالله أظهر مهارات استثنائية في إدارة مشروع البنية التحتية لتقنية المعلومات. قدرته على تنسيق الفرق التقنية وتطبيق أفضل الممارسات كانت مفتاح نجاح المشروع."
    },
    {
      name: "سارة الحربي",
      position: "مديرة تقنية المعلومات",
      company: "شركة الجزيرة للإنشاءات",
      text: "خلال فترة عمل عبدالله كمشرف قسم تقنية المعلومات، أظهر قيادة متميزة وقدرة على تطوير الفريق التقني. إسهاماته في تحسين العمليات كانت ملحوظة."
    },
    {
      name: "أحمد القحطاني",
      position: "طالب",
      company: "أكاديمية طويق",
      text: "التطبيقات التي طورها عبدالله خلال البرنامج التدريبي تظهر مستوى عالي من الإبداع والتقنية. خاصة تطبيق 'رسيم' الذي يحل مشكلة حقيقية في مجال التوثيق التقني."
    }
  ]
};

export const statistics: Statistics = {
  yearsExperience: 5,
  projectsCompleted: 57,
  happyClients: 76,
  awardsWon: 2
};
export const faqTranslations: Record<Language, FAQTranslation[]> = {
  en: [
    {
      question: "What is your typical project timeline?",
      answer: "It depends on the complexity and scope. Custom software or AI-powered solutions can take between 4–12 weeks. Lighter systems or feature additions may take 1–3 weeks."
    },
    {
      question: "Do you work with clients outside Saudi Arabia?",
      answer: "Absolutely. I collaborate with clients across different time zones and regions, and I adapt to their preferred communication methods."
    },
    {
      question: "Do you offer technical consulting?",
      answer: "Yes. I provide tailored consulting sessions to help companies validate ideas, choose the right tech stack, or architect scalable systems and AI-driven workflows."
    },
    {
      question: "Can you help with both frontend and backend development?",
      answer: "Yes, I develop full-stack solutions, from the user interface to backend logic and database design. I also integrate APIs and AI models where needed."
    },
    {
      question: "Do you work alone or with a team?",
      answer: "I lead development personally, but I also collaborate with a trusted network of designers and engineers for larger or multidisciplinary projects."
    }
  ],
  ar: [
    {
      question: "ما هو الجدول الزمني المعتاد لمشاريعك؟",
      answer: "يعتمد على حجم وتعقيد المشروع. الحلول البرمجية المتكاملة أو المعززة بالذكاء الاصطناعي تستغرق عادة من 4 إلى 12 أسبوعًا، بينما المهام البسيطة أو الإضافات قد تنجز خلال أسبوع إلى ثلاثة."
    },
    {
      question: "هل تعمل مع عملاء خارج السعودية؟",
      answer: "بالتأكيد. أتعامل مع عملاء من مختلف الدول والمناطق الزمنية، وأتكيف مع طرق التواصل التي يفضلونها."
    },
    {
      question: "هل تقدم خدمة الاستشارات التقنية؟",
      answer: "نعم. أقدّم جلسات استشارية مخصصة لمساعدة الشركات على تقييم أفكارها، واختيار التقنية المناسبة، وتصميم بنية أنظمة قابلة للتوسع أو مدعومة بالذكاء الاصطناعي."
    },
    {
      question: "هل تتولى تطوير الواجهة الخلفية والواجهة الأمامية؟",
      answer: "نعم، أطور الحلول البرمجية الكاملة بدءًا من واجهة المستخدم وحتى المنطق الخلفي وقواعد البيانات، بالإضافة إلى التكامل مع الـ APIs والنماذج الذكية."
    },
    {
      question: "هل تعمل بشكل فردي أم ضمن فريق؟",
      answer: "أقود تنفيذ المشاريع بنفسي، وأتعاون عند الحاجة مع شبكة موثوقة من المصممين والمهندسين في المشاريع الكبرى أو متعددة التخصصات."
    }
  ]
};