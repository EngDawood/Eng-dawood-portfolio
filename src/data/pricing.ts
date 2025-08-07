// Academic Services Pricing Structure
// Dynamic pricing models for the academic services platform

export interface PricingRule {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  arabicDescription: string;
  multiplier: number;
  applicable: string[];
}

export interface ServicePricing {
  serviceId: string;
  basePriceRange: {
    min: number;
    max: number;
  };
  currency: 'SAR';
  pricingUnit: 'per_page' | 'per_project' | 'per_hour' | 'fixed';
  estimatedHours?: {
    min: number;
    max: number;
  };
  additionalCosts?: {
    urgentDelivery: number;
    emergencyDelivery: number;
    additionalRevisions: number;
    formatConversion: number;
  };
}

export interface PricingCalculatorConfig {
  // Academic Level Multipliers
  academicLevelMultipliers: {
    undergraduate: {
      multiplier: number;
      arabicLabel: string;
      description: string;
      arabicDescription: string;
    };
    masters: {
      multiplier: number;
      arabicLabel: string;
      description: string;
      arabicDescription: string;
    };
    phd: {
      multiplier: number;
      arabicLabel: string;
      description: string;
      arabicDescription: string;
    };
  };

  // Complexity Multipliers
  complexityMultipliers: {
    1: { multiplier: number; label: string; arabicLabel: string; };
    2: { multiplier: number; label: string; arabicLabel: string; };
    3: { multiplier: number; label: string; arabicLabel: string; };
    4: { multiplier: number; label: string; arabicLabel: string; };
    5: { multiplier: number; label: string; arabicLabel: string; };
  };

  // Urgency Multipliers
  urgencyMultipliers: {
    standard: {
      multiplier: number;
      label: string;
      arabicLabel: string;
      deliveryTime: string;
      arabicDeliveryTime: string;
    };
    urgent: {
      multiplier: number;
      label: string;
      arabicLabel: string;
      deliveryTime: string;
      arabicDeliveryTime: string;
    };
    emergency: {
      multiplier: number;
      label: string;
      arabicLabel: string;
      deliveryTime: string;
      arabicDeliveryTime: string;
    };
  };

  // Specialization Multipliers
  specializationMultipliers: {
    [key: string]: {
      multiplier: number;
      label: string;
      arabicLabel: string;
      demandLevel: 'low' | 'medium' | 'high' | 'very-high';
    };
  };

  // Additional Service Costs
  additionalServices: {
    plagiarismReport: { cost: number; arabicLabel: string; };
    formatConversion: { cost: number; arabicLabel: string; };
    rushDelivery: { costPercentage: number; arabicLabel: string; };
    additionalRevision: { cost: number; arabicLabel: string; };
    phoneConsultation: { costPerHour: number; arabicLabel: string; };
    videoCall: { costPerHour: number; arabicLabel: string; };
  };

  // Discounts and Promotions
  discounts: {
    bulkOrder: {
      threshold: number;
      discountPercentage: number;
      arabicLabel: string;
    };
    returnCustomer: {
      discountPercentage: number;
      arabicLabel: string;
    };
    earlyPayment: {
      discountPercentage: number;
      arabicLabel: string;
    };
  };

  minimumOrderValue: number;
  currency: 'SAR';
  vatPercentage: number;
}

// Main Pricing Calculator Configuration
export const pricingCalculatorConfig: PricingCalculatorConfig = {
  academicLevelMultipliers: {
    undergraduate: {
      multiplier: 1.0,
      arabicLabel: 'البكالوريوس',
      description: 'Bachelor\'s degree level assignments and projects',
      arabicDescription: 'مهام ومشاريع مستوى درجة البكالوريوس'
    },
    masters: {
      multiplier: 1.5,
      arabicLabel: 'الماجستير',
      description: 'Master\'s degree level research and thesis work',
      arabicDescription: 'البحوث وأطروحات مستوى الماجستير'
    },
    phd: {
      multiplier: 2.5,
      arabicLabel: 'الدكتوراه',
      description: 'Doctoral level dissertation and advanced research',
      arabicDescription: 'رسائل الدكتوراه والبحوث المتقدمة'
    }
  },

  complexityMultipliers: {
    1: { multiplier: 0.8, label: 'Basic', arabicLabel: 'أساسي' },
    2: { multiplier: 1.0, label: 'Standard', arabicLabel: 'قياسي' },
    3: { multiplier: 1.3, label: 'Intermediate', arabicLabel: 'متوسط' },
    4: { multiplier: 1.7, label: 'Advanced', arabicLabel: 'متقدم' },
    5: { multiplier: 2.2, label: 'Expert', arabicLabel: 'خبير' }
  },

  urgencyMultipliers: {
    standard: {
      multiplier: 1.0,
      label: 'Standard Delivery',
      arabicLabel: 'التسليم القياسي',
      deliveryTime: '5-7 days',
      arabicDeliveryTime: '5-7 أيام'
    },
    urgent: {
      multiplier: 1.5,
      label: 'Urgent Delivery',
      arabicLabel: 'التسليم العاجل',
      deliveryTime: '2-3 days',
      arabicDeliveryTime: '2-3 أيام'
    },
    emergency: {
      multiplier: 2.0,
      label: 'Emergency Delivery',
      arabicLabel: 'التسليم الطارئ',
      deliveryTime: '24-48 hours',
      arabicDeliveryTime: '24-48 ساعة'
    }
  },

  specializationMultipliers: {
    'computer-science': {
      multiplier: 1.4,
      label: 'Computer Science',
      arabicLabel: 'علوم الحاسب',
      demandLevel: 'very-high'
    },
    'engineering': {
      multiplier: 1.3,
      label: 'Engineering',
      arabicLabel: 'هندسة',
      demandLevel: 'high'
    },
    'medical-sciences': {
      multiplier: 1.5,
      label: 'Medical Sciences',
      arabicLabel: 'العلوم الطبية',
      demandLevel: 'very-high'
    },
    'business': {
      multiplier: 1.1,
      label: 'Business Studies',
      arabicLabel: 'دراسات الأعمال',
      demandLevel: 'high'
    },
    'mathematics': {
      multiplier: 1.3,
      label: 'Mathematics',
      arabicLabel: 'رياضيات',
      demandLevel: 'high'
    },
    'natural-sciences': {
      multiplier: 1.2,
      label: 'Natural Sciences',
      arabicLabel: 'العلوم الطبيعية',
      demandLevel: 'medium'
    },
    'social-sciences': {
      multiplier: 1.0,
      label: 'Social Sciences',
      arabicLabel: 'العلوم الاجتماعية',
      demandLevel: 'medium'
    },
    'humanities': {
      multiplier: 0.9,
      label: 'Humanities',
      arabicLabel: 'العلوم الإنسانية',
      demandLevel: 'medium'
    },
    'education': {
      multiplier: 1.0,
      label: 'Education',
      arabicLabel: 'التعليم',
      demandLevel: 'medium'
    },
    'law': {
      multiplier: 1.4,
      label: 'Law',
      arabicLabel: 'القانون',
      demandLevel: 'high'
    },
    'economics': {
      multiplier: 1.2,
      label: 'Economics',
      arabicLabel: 'الاقتصاد',
      demandLevel: 'high'
    },
    'all-fields': {
      multiplier: 1.0,
      label: 'All Fields',
      arabicLabel: 'جميع المجالات',
      demandLevel: 'medium'
    }
  },

  additionalServices: {
    plagiarismReport: { cost: 30, arabicLabel: 'تقرير فحص الانتحال' },
    formatConversion: { cost: 20, arabicLabel: 'تحويل التنسيق' },
    rushDelivery: { costPercentage: 50, arabicLabel: 'التسليم المستعجل' },
    additionalRevision: { cost: 50, arabicLabel: 'مراجعة إضافية' },
    phoneConsultation: { costPerHour: 100, arabicLabel: 'استشارة هاتفية' },
    videoCall: { costPerHour: 120, arabicLabel: 'مكالمة فيديو' }
  },

  discounts: {
    bulkOrder: {
      threshold: 1000,
      discountPercentage: 10,
      arabicLabel: 'خصم الطلبات المتعددة'
    },
    returnCustomer: {
      discountPercentage: 5,
      arabicLabel: 'خصم العملاء العائدين'
    },
    earlyPayment: {
      discountPercentage: 3,
      arabicLabel: 'خصم الدفع المبكر'
    }
  },

  minimumOrderValue: 50,
  currency: 'SAR',
  vatPercentage: 15
};

// Service-specific pricing configurations
export const servicePricing: { [serviceId: string]: ServicePricing } = {
  // Traditional Services Pricing
  'university-assignments': {
    serviceId: 'university-assignments',
    basePriceRange: { min: 50, max: 150 },
    currency: 'SAR',
    pricingUnit: 'per_page',
    estimatedHours: { min: 2, max: 6 },
    additionalCosts: {
      urgentDelivery: 25,
      emergencyDelivery: 50,
      additionalRevisions: 30,
      formatConversion: 15
    }
  },

  'computer-programming': {
    serviceId: 'computer-programming',
    basePriceRange: { min: 200, max: 800 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 8, max: 40 },
    additionalCosts: {
      urgentDelivery: 100,
      emergencyDelivery: 200,
      additionalRevisions: 80,
      formatConversion: 30
    }
  },

  'thesis-dissertation': {
    serviceId: 'thesis-dissertation',
    basePriceRange: { min: 80, max: 200 },
    currency: 'SAR',
    pricingUnit: 'per_page',
    estimatedHours: { min: 3, max: 8 },
    additionalCosts: {
      urgentDelivery: 40,
      emergencyDelivery: 80,
      additionalRevisions: 50,
      formatConversion: 25
    }
  },

  'graduation-projects': {
    serviceId: 'graduation-projects',
    basePriceRange: { min: 60, max: 180 },
    currency: 'SAR',
    pricingUnit: 'per_page',
    estimatedHours: { min: 2, max: 7 },
    additionalCosts: {
      urgentDelivery: 30,
      emergencyDelivery: 60,
      additionalRevisions: 40,
      formatConversion: 20
    }
  },

  'website-development': {
    serviceId: 'website-development',
    basePriceRange: { min: 500, max: 2000 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 20, max: 80 },
    additionalCosts: {
      urgentDelivery: 200,
      emergencyDelivery: 400,
      additionalRevisions: 150,
      formatConversion: 50
    }
  },

  'powerpoint-presentations': {
    serviceId: 'powerpoint-presentations',
    basePriceRange: { min: 25, max: 75 },
    currency: 'SAR',
    pricingUnit: 'per_page',
    estimatedHours: { min: 1, max: 3 },
    additionalCosts: {
      urgentDelivery: 15,
      emergencyDelivery: 30,
      additionalRevisions: 20,
      formatConversion: 10
    }
  },

  'online-tutoring': {
    serviceId: 'online-tutoring',
    basePriceRange: { min: 100, max: 200 },
    currency: 'SAR',
    pricingUnit: 'per_hour',
    estimatedHours: { min: 1, max: 1 },
    additionalCosts: {
      urgentDelivery: 50,
      emergencyDelivery: 100,
      additionalRevisions: 0,
      formatConversion: 0
    }
  },

  'statistical-analysis': {
    serviceId: 'statistical-analysis',
    basePriceRange: { min: 150, max: 500 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 6, max: 20 },
    additionalCosts: {
      urgentDelivery: 75,
      emergencyDelivery: 150,
      additionalRevisions: 60,
      formatConversion: 25
    }
  },

  // AI Services Pricing
  'ai-logo-design': {
    serviceId: 'ai-logo-design',
    basePriceRange: { min: 200, max: 400 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 3, max: 8 },
    additionalCosts: {
      urgentDelivery: 50,
      emergencyDelivery: 100,
      additionalRevisions: 40,
      formatConversion: 20
    }
  },

  'ai-image-creation': {
    serviceId: 'ai-image-creation',
    basePriceRange: { min: 25, max: 100 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 1, max: 3 },
    additionalCosts: {
      urgentDelivery: 15,
      emergencyDelivery: 30,
      additionalRevisions: 20,
      formatConversion: 10
    }
  },

  'ai-educational-videos': {
    serviceId: 'ai-educational-videos',
    basePriceRange: { min: 250, max: 800 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 10, max: 30 },
    additionalCosts: {
      urgentDelivery: 100,
      emergencyDelivery: 200,
      additionalRevisions: 80,
      formatConversion: 40
    }
  },

  'ai-chatbot-creation': {
    serviceId: 'ai-chatbot-creation',
    basePriceRange: { min: 400, max: 1200 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 20, max: 60 },
    additionalCosts: {
      urgentDelivery: 200,
      emergencyDelivery: 400,
      additionalRevisions: 150,
      formatConversion: 50
    }
  },

  'ai-data-analysis-reports': {
    serviceId: 'ai-data-analysis-reports',
    basePriceRange: { min: 300, max: 800 },
    currency: 'SAR',
    pricingUnit: 'per_project',
    estimatedHours: { min: 12, max: 32 },
    additionalCosts: {
      urgentDelivery: 120,
      emergencyDelivery: 240,
      additionalRevisions: 100,
      formatConversion: 40
    }
  }
};

// Pricing calculation utility functions
export class PricingCalculator {
  static calculateBasePrice(
    serviceId: string,
    academicLevel: 'undergraduate' | 'masters' | 'phd',
    complexity: 1 | 2 | 3 | 4 | 5,
    urgency: 'standard' | 'urgent' | 'emergency',
    quantity: number = 1,
    specialization: string = 'all-fields'
  ): number {
    const serviceConfig = servicePricing[serviceId];
    if (!serviceConfig) {
      throw new Error(`Service pricing configuration not found for: ${serviceId}`);
    }

    // Start with average base price
    let basePrice = (serviceConfig.basePriceRange.min + serviceConfig.basePriceRange.max) / 2;

    // Apply academic level multiplier
    const academicMultiplier = pricingCalculatorConfig.academicLevelMultipliers[academicLevel].multiplier;
    basePrice *= academicMultiplier;

    // Apply complexity multiplier
    const complexityMultiplier = pricingCalculatorConfig.complexityMultipliers[complexity].multiplier;
    basePrice *= complexityMultiplier;

    // Apply urgency multiplier
    const urgencyMultiplier = pricingCalculatorConfig.urgencyMultipliers[urgency].multiplier;
    basePrice *= urgencyMultiplier;

    // Apply specialization multiplier
    const specMultiplier = pricingCalculatorConfig.specializationMultipliers[specialization]?.multiplier || 1.0;
    basePrice *= specMultiplier;

    // Multiply by quantity
    basePrice *= quantity;

    // Apply minimum order value
    basePrice = Math.max(basePrice, pricingCalculatorConfig.minimumOrderValue);

    return Math.round(basePrice);
  }

  static calculateWithAddOns(
    basePrice: number,
    addOns: {
      plagiarismReport?: boolean;
      formatConversion?: boolean;
      additionalRevisions?: number;
      phoneConsultation?: number;
      videoCall?: number;
    } = {}
  ): {
    subtotal: number;
    addOnCosts: { [key: string]: number };
    vatAmount: number;
    totalAmount: number;
  } {
    let addOnCosts: { [key: string]: number } = {};
    let addOnTotal = 0;

    // Calculate add-on costs
    if (addOns.plagiarismReport) {
      const cost = pricingCalculatorConfig.additionalServices.plagiarismReport.cost;
      addOnCosts['plagiarismReport'] = cost;
      addOnTotal += cost;
    }

    if (addOns.formatConversion) {
      const cost = pricingCalculatorConfig.additionalServices.formatConversion.cost;
      addOnCosts['formatConversion'] = cost;
      addOnTotal += cost;
    }

    if (addOns.additionalRevisions && addOns.additionalRevisions > 0) {
      const cost = pricingCalculatorConfig.additionalServices.additionalRevision.cost * addOns.additionalRevisions;
      addOnCosts['additionalRevisions'] = cost;
      addOnTotal += cost;
    }

    if (addOns.phoneConsultation && addOns.phoneConsultation > 0) {
      const cost = pricingCalculatorConfig.additionalServices.phoneConsultation.costPerHour * addOns.phoneConsultation;
      addOnCosts['phoneConsultation'] = cost;
      addOnTotal += cost;
    }

    if (addOns.videoCall && addOns.videoCall > 0) {
      const cost = pricingCalculatorConfig.additionalServices.videoCall.costPerHour * addOns.videoCall;
      addOnCosts['videoCall'] = cost;
      addOnTotal += cost;
    }

    const subtotal = basePrice + addOnTotal;
    const vatAmount = subtotal * (pricingCalculatorConfig.vatPercentage / 100);
    const totalAmount = subtotal + vatAmount;

    return {
      subtotal: Math.round(subtotal),
      addOnCosts,
      vatAmount: Math.round(vatAmount),
      totalAmount: Math.round(totalAmount)
    };
  }

  static applyDiscounts(
    totalAmount: number,
    discounts: {
      isBulkOrder?: boolean;
      isReturnCustomer?: boolean;
      isEarlyPayment?: boolean;
    } = {}
  ): {
    originalAmount: number;
    appliedDiscounts: { [key: string]: number };
    finalAmount: number;
    totalDiscount: number;
  } {
    let appliedDiscounts: { [key: string]: number } = {};
    let totalDiscount = 0;

    // Apply bulk order discount
    if (discounts.isBulkOrder && totalAmount >= pricingCalculatorConfig.discounts.bulkOrder.threshold) {
      const discount = totalAmount * (pricingCalculatorConfig.discounts.bulkOrder.discountPercentage / 100);
      appliedDiscounts['bulkOrder'] = discount;
      totalDiscount += discount;
    }

    // Apply return customer discount
    if (discounts.isReturnCustomer) {
      const discount = totalAmount * (pricingCalculatorConfig.discounts.returnCustomer.discountPercentage / 100);
      appliedDiscounts['returnCustomer'] = discount;
      totalDiscount += discount;
    }

    // Apply early payment discount
    if (discounts.isEarlyPayment) {
      const discount = totalAmount * (pricingCalculatorConfig.discounts.earlyPayment.discountPercentage / 100);
      appliedDiscounts['earlyPayment'] = discount;
      totalDiscount += discount;
    }

    const finalAmount = totalAmount - totalDiscount;

    return {
      originalAmount: totalAmount,
      appliedDiscounts,
      finalAmount: Math.round(finalAmount),
      totalDiscount: Math.round(totalDiscount)
    };
  }

  static getEstimatedTimeToComplete(serviceId: string, complexity: 1 | 2 | 3 | 4 | 5, quantity: number = 1): {
    minHours: number;
    maxHours: number;
    minDays: number;
    maxDays: number;
  } {
    const serviceConfig = servicePricing[serviceId];
    if (!serviceConfig || !serviceConfig.estimatedHours) {
      return { minHours: 0, maxHours: 0, minDays: 0, maxDays: 0 };
    }

    const complexityMultiplier = pricingCalculatorConfig.complexityMultipliers[complexity].multiplier;
    
    const minHours = Math.round(serviceConfig.estimatedHours.min * complexityMultiplier * quantity);
    const maxHours = Math.round(serviceConfig.estimatedHours.max * complexityMultiplier * quantity);
    
    const minDays = Math.ceil(minHours / 8); // Assuming 8-hour work days
    const maxDays = Math.ceil(maxHours / 8);

    return { minHours, maxHours, minDays, maxDays };
  }
}

// WhatsApp message generator for pricing inquiries
export const generatePricingWhatsAppMessage = (
  serviceId: string,
  academicLevel?: string,
  estimatedPrice?: number,
  additionalInfo?: string
): string => {
  const phoneNumber = '966532296438';
  const serviceName = servicePricing[serviceId] ? serviceId : 'خدمة أكاديمية';
  
  let message = `السلام عليكم، أرغب في الاستفسار عن الأسعار لخدمة: ${serviceName}`;
  
  if (academicLevel) {
    message += `\nالمستوى الأكاديمي: ${academicLevel}`;
  }
  
  if (estimatedPrice) {
    message += `\nالتكلفة المقدرة: ${estimatedPrice} ريال سعودي`;
  }
  
  if (additionalInfo) {
    message += `\nتفاصيل إضافية: ${additionalInfo}`;
  }
  
  message += '\n\nشكراً لكم';
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

export default PricingCalculator;