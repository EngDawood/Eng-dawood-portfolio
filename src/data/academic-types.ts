// Academic Services Platform Types
export interface CompanyProfile {
  name: string;
  arabicName: string;
  tagline: string;
  arabicTagline: string;
  description: string;
  arabicDescription: string;
  mission: string;
  arabicMission: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  arabicLocation: string;
  established: string;
  languages: string[];
  socialLinks: {
    website?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    whatsapp: string;
  };
}

export interface AcademicSpecialization {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  icon: string;
  category: 'stem' | 'business' | 'humanities' | 'medical' | 'engineering';
  features: string[];
  arabicFeatures: string[];
  academicLevels: AcademicLevel[];
  deliveryTime: {
    standard: string;
    urgent: string;
    emergency: string;
  };
  complexity: 1 | 2 | 3 | 4 | 5; // Pricing multiplier
  popular: boolean;
}

export interface AcademicLevel {
  level: 'undergraduate' | 'masters' | 'phd';
  arabicLevel: string;
  priceMultiplier: number;
  description: string;
  arabicDescription: string;
}

export interface AcademicProject {
  id: string;
  title: string;
  arabicTitle: string;
  specialization: string;
  academicLevel: AcademicLevel['level'];
  university?: string;
  subject: string;
  arabicSubject: string;
  description: string;
  arabicDescription: string;
  methodology: string;
  arabicMethodology: string;
  results: string;
  arabicResults: string;
  duration: string;
  completionDate: string;
  grade?: string;
  images: string[];
  featured: boolean;
  anonymous: boolean;
  testimonial?: {
    text: string;
    arabicText: string;
    rating: number;
    level: string;
  };
}

export interface StudentTestimonial {
  id: string;
  studentLevel: AcademicLevel['level'];
  specialization: string;
  text: string;
  arabicText: string;
  rating: number;
  projectType: string;
  arabicProjectType: string;
  completionTime: string;
  grade?: string;
  university?: string; // Anonymized if needed
  date: string;
  verified: boolean;
}

export interface ExpertProfile {
  name: string;
  arabicName: string;
  title: string;
  arabicTitle: string;
  specializations: string[];
  experience: number;
  education: {
    degree: string;
    arabicDegree: string;
    institution: string;
    arabicInstitution: string;
    field: string;
  }[];
  bio: string;
  arabicBio: string;
  image?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  arabicName: string;
  basePrice: number;
  currency: 'SAR' | 'USD';
  academicLevel: AcademicLevel['level'];
  features: string[];
  arabicFeatures: string[];
  deliveryTime: string;
  revisions: number;
  support: string;
  arabicSupport: string;
  popular?: boolean;
}

export interface ServiceRequest {
  academicLevel: AcademicLevel['level'];
  specialization: string;
  pages: number;
  words: number;
  urgency: 'standard' | 'urgent' | 'emergency';
  complexity: 1 | 2 | 3 | 4 | 5;
  requirements: string;
  deadline: string;
  contactMethod: 'whatsapp' | 'email' | 'phone';
}

export interface AcademicResource {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  arabicDescription: string;
  category: 'guide' | 'template' | 'tutorial' | 'tool' | 'tips';
  arabicCategory: string;
  specializations: string[];
  academicLevels: AcademicLevel['level'][];
  content: string;
  arabicContent: string;
  downloadable: boolean;
  downloadUrl?: string;
  free: boolean;
  publishedAt: string;
  readingTime: number;
  views: number;
  likes: number;
  featured: boolean;
  tags: string[];
  arabicTags: string[];
}

export interface ServiceReview {
  id: string;
  rating: number;
  title: string;
  arabicTitle: string;
  content: string;
  arabicContent: string;
  studentLevel: AcademicLevel['level'];
  specialization: string;
  projectType: string;
  completionDate: string;
  verified: boolean;
  helpful: number;
}

export interface PlatformStatistics {
  studentsServed: number;
  projectsCompleted: number;
  averageRating: number;
  successRate: number;
  specializations: number;
  averageGrade: string;
  yearsOfService: number;
  expertTeamSize: number;
}