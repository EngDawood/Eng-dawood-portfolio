'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Clock, Star, Award, Eye, MessageSquare } from 'lucide-react';
import { FadeIn, StaggerChildren } from '@/components/Animations';
import { useLanguage } from '@/context/LanguageContext';
import { academicProjects, academicSpecializations } from '@/data/academic-data';
// Academic types imported for type checking

interface AcademicProjectsGridProps {
  className?: string;
  limit?: number;
  showFilters?: boolean;
}

export default function AcademicProjectsGrid({ 
  className = '', 
  limit,
  showFilters = true 
}: AcademicProjectsGridProps) {
  const { isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  // Create filter options
  const filterOptions = [
    { id: 'all', nameEn: 'All Projects', nameAr: 'جميع المشاريع' },
    ...academicSpecializations.map(spec => ({
      id: spec.id,
      nameEn: spec.title,
      nameAr: spec.arabicTitle
    }))
  ];

  // Filter projects
  let filteredProjects = activeFilter === 'all' 
    ? academicProjects 
    : academicProjects.filter(project => project.specialization === activeFilter);

  // Apply limit if specified
  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  const getSpecializationInfo = (specializationId: string) => {
    return academicSpecializations.find(spec => spec.id === specializationId);
  };

  const formatGrade = (grade?: string) => {
    if (!grade) return null;
    
    // Convert letter grade to star rating for visual appeal
    const gradeToStars: { [key: string]: number } = {
      'A+': 5, 'A': 4, 'A-': 4, 'B+': 3, 'B': 3, 'B-': 2, 'C+': 2, 'C': 1
    };
    
    return gradeToStars[grade] || 3;
  };

  return (
    <div className={className}>
      {/* Filter Buttons */}
      {showFilters && (
        <FadeIn direction="up" delay={0.1}>
          <div className="mb-8">
            <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <GraduationCap size={16} style={{ color: 'var(--muted-foreground)' }} />
              <span className={`text-sm font-medium ${isRTL ? 'font-arabic' : ''}`} style={{ color: 'var(--foreground)' }}>
                {isRTL ? 'تصفية حسب التخصص:' : 'Filter by specialization:'}
              </span>
            </div>
            <StaggerChildren staggerDelay={0.05}>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveFilter(option.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isRTL ? 'font-arabic' : ''}`}
                    style={{
                      backgroundColor: activeFilter === option.id 
                        ? 'var(--primary)' 
                        : hoveredElement === `filter-${option.id}` 
                          ? 'var(--muted)' 
                          : 'var(--card)',
                      color: activeFilter === option.id 
                        ? 'white' 
                        : 'var(--muted-foreground)',
                      border: activeFilter === option.id 
                        ? 'none' 
                        : '1px solid var(--border)',
                      boxShadow: activeFilter === option.id ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                    onMouseEnter={() => setHoveredElement(`filter-${option.id}`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  >
                    {isRTL ? option.nameAr : option.nameEn}
                  </button>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </FadeIn>
      )}

      {/* Projects Grid */}
      <StaggerChildren staggerDelay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const specializationInfo = getSpecializationInfo(project.specialization);
            const stars = formatGrade(project.grade);
            
            return (
              <div 
                key={project.id} 
                className={`group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className={`flex items-start justify-between gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <h3 className={`font-bold text-lg mb-1 text-foreground line-clamp-2 group-hover:text-primary transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? project.arabicTitle : project.title}
                      </h3>
                      {project.university && (
                        <p className={`text-sm text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
                          {project.university}
                        </p>
                      )}
                    </div>
                    
                    {/* Specialization Badge */}
                    {specializationInfo && (
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Image 
                            src={specializationInfo.icon} 
                            alt={specializationInfo.title}
                            width={20}
                            height={20}
                            className="opacity-80"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Metadata */}
                  <div className={`flex items-center gap-4 text-xs text-muted-foreground mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <GraduationCap size={12} />
                      <span className={isRTL ? 'font-arabic' : ''}>
                        {project.academicLevel === 'undergraduate' && (isRTL ? 'بكالوريوس' : 'Bachelor')}
                        {project.academicLevel === 'masters' && (isRTL ? 'ماجستير' : 'Masters')}
                        {project.academicLevel === 'phd' && (isRTL ? 'دكتوراه' : 'PhD')}
                      </span>
                    </div>
                    
                    {project.duration && (
                      <>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Clock size={12} />
                          <span>{project.duration}</span>
                        </div>
                      </>
                    )}
                    
                    {stars && (
                      <>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <div className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <Award size={12} />
                          <div className="flex">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star 
                                key={i} 
                                size={10} 
                                className={i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project Description */}
                  <p className={`text-sm text-muted-foreground line-clamp-3 leading-relaxed ${isRTL ? 'font-arabic text-right' : ''}`}>
                    {isRTL ? project.arabicDescription : project.description}
                  </p>
                </div>

                {/* Project Image/Visual */}
                {project.images && project.images.length > 0 && (
                  <div className="aspect-video relative mx-6 mb-4 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={project.images[0]}
                      alt={isRTL ? project.arabicTitle : project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        {isRTL ? 'مميز' : 'Featured'}
                      </div>
                    )}
                  </div>
                )}

                {/* Methodology/Results Preview */}
                {(project.methodology || project.results) && (
                  <div className="px-6 pb-4">
                    <div className="bg-muted/30 rounded-lg p-3 text-xs">
                      {project.methodology && (
                        <div className="mb-2">
                          <span className={`font-medium text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                            {isRTL ? 'المنهجية: ' : 'Methodology: '}
                          </span>
                          <span className={`text-muted-foreground line-clamp-2 ${isRTL ? 'font-arabic' : ''}`}>
                            {isRTL ? project.arabicMethodology : project.methodology}
                          </span>
                        </div>
                      )}
                      {project.results && (
                        <div>
                          <span className={`font-medium text-foreground ${isRTL ? 'font-arabic' : ''}`}>
                            {isRTL ? 'النتائج: ' : 'Results: '}
                          </span>
                          <span className={`text-muted-foreground line-clamp-2 ${isRTL ? 'font-arabic' : ''}`}>
                            {isRTL ? project.arabicResults : project.results}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Testimonial Preview */}
                {project.testimonial && (
                  <div className="px-6 pb-4">
                    <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-lg p-3">
                      <div className={`flex items-center gap-2 mb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <MessageSquare size={12} className="text-green-600" />
                        <span className={`text-xs font-medium text-green-800 dark:text-green-400 ${isRTL ? 'font-arabic' : ''}`}>
                          {isRTL ? 'تقييم الطالب' : 'Student Review'}
                        </span>
                        <div className="flex ml-auto">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star 
                              key={i} 
                              size={10} 
                              className={i < project.testimonial!.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className={`text-xs text-green-700 dark:text-green-300 line-clamp-2 ${isRTL ? 'font-arabic text-right' : ''}`}>
                        &ldquo;{isRTL ? project.testimonial.arabicText : project.testimonial.text}&rdquo;
                      </p>
                    </div>
                  </div>
                )}

                {/* Action Footer */}
                <div className="px-6 pb-6">
                  <div className={`flex items-center gap-3 pt-4 border-t border-border ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <button
                      className={`flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}
                      onClick={() => {
                        const message = isRTL 
                          ? `مرحباً! أريد الاستفسار عن مشروع أكاديمي مشابه لـ "${project.arabicTitle}" في تخصص ${specializationInfo?.arabicTitle}`
                          : `Hello! I'd like to inquire about an academic project similar to "${project.title}" in ${specializationInfo?.title}`;
                        
                        const encodedMessage = encodeURIComponent(message);
                        const whatsappUrl = `https://wa.me/966532296438?text=${encodedMessage}`;
                        
                        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <MessageSquare size={14} />
                      {isRTL ? 'استفسار مشابه' : 'Similar Project'}
                    </button>
                    
                    <button
                      className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      title={isRTL ? 'عرض التفاصيل' : 'View Details'}
                    >
                      <Eye size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </StaggerChildren>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="mb-4" style={{ color: 'var(--muted-foreground)' }}>
            <GraduationCap size={48} className="mx-auto" />
          </div>
          <h3 className={`text-lg font-medium mb-2 text-foreground ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'لا توجد مشاريع' : 'No projects found'}
          </h3>
          <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : ''}`}>
            {isRTL ? 'جرب اختيار تخصص مختلف لرؤية المزيد من المشاريع.' : 'Try selecting a different specialization to see more projects.'}
          </p>
        </div>
      )}
    </div>
  );
}