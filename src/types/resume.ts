export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface TechnicalSkills {
  languages: string[];
  tools: string[];
  platforms: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Role {
  title: string;
  period: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  roles: Role[];
}

export interface ResumeData {
  name: string;
  fullName: string;
  location: string;
  title: string;
  titleHighlight: string;
  contact: ContactInfo;
  tagline: string;
  summary: string;
  quote: Quote;
  technicalSkills: TechnicalSkills;
  certifications: Certification[];
  experience: Experience[];
}
