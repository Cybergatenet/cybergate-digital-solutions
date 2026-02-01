// Core interfaces for the application
export interface CourseModule {
  id: number;
  title: string;
  topics: string[];
  duration?: string;
}

export interface TrainingSession {
  type: 'regular' | 'afternoon' | 'evening' | 'weekend';
  time: string;
  days: string[];
}

export interface AdditionalFees {
  registration: number;
  studyKit: number;
  studioPractical?: number;
  workshopPractical?: number;
  executivePremium?: number;
}

export interface TrainingProgram {
  id: string;
  title: string;
  code: string;
  category: 'certificate' | 'diploma' | 'special-package' | 'executive';
  duration: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  description: string;
  outline: CourseModule[];
  sessions: TrainingSession[];
  prerequisites?: string[];
  additionalFees?: AdditionalFees;
  isActive: boolean;
  forCorpers?: boolean;
  forStudents?: boolean;
  createdAt: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: 'laptop' | 'accessory' | 'component';
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  warranty: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  image: string;
  sku: string;
}

export interface User {
  id?: string;
  email: string;
  fullName: string;
  phone: string;
  userType: 'student' | 'customer' | 'admin';
  registrationDate: string;
  profileImage?: string;
}

export interface RegistrationData {
  userType: 'student' | 'customer';
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    dateOfBirth?: string;
  };
  studentInfo?: {
    programId: string;
    sessionType: TrainingSession['type'];
    educationalBackground: string;
    emergencyContact: string;
  };
  customerInfo?: {
    company?: string;
    interest: string[];
  };
  agreement: {
    acceptTerms: boolean;
    acceptRegistrationFee: boolean;
    acceptStudyKit: boolean;
  };
}

export interface Feedback {
  id: string;
  userName: string;
  userEmail: string;
  rating: number;
  message: string;
  programId?: string;
  isApproved: boolean;
  createdAt: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}