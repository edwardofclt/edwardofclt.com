import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  name: "Eddie",
  fullName: "Eddie Herbert",
  location: "Fort Mill, South Carolina",
  title: "Platform Engineering Leader",
  titleHighlight: "Senior Platform Engineer",
  contact: {
    email: "me@edwardofclt.com",
    phone: "+1-336-772-3771",
    linkedin: "https://www.linkedin.com/in/eddie-herbert-72237682",
    github: "https://github.com/edwardofclt"
  },
  tagline: "Building platforms where technology meets developer experience",
  summary: "Platform engineering leader with deep hands-on experience building internal developer platforms, self-service infrastructure, and automation systems that reduce engineering toil and accelerate delivery. Proven track record leading multi-disciplinary teams, modernizing legacy systems, and delivering scalable, secure cloud-native solutions.",
  quote: {
    text: "The best platform is the one developers actually want to use",
    author: "Platform Engineering Philosophy"
  },
  technicalSkills: {
    languages: ["Go", "TypeScript", "JavaScript", "Node.js", "Python", "PHP"],
    tools: ["Terraform", "GitHub Actions", "Docker", "Backstage", "Ansible", "Jenkins"],
    platforms: ["AWS", "Kubernetes", "Databricks"]
  },
  certifications: [
    { name: "Terraform Associate", issuer: "HashiCorp" },
    { name: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services" }
  ],
  experience: [
    {
      company: "Booz Allen Hamilton",
      roles: [{
        title: "Lead Associate, Senior Lead Technologist",
        period: "Dec 2024 - Present",
        highlights: [
          "Lead multiple engineering teams across multiple domains",
          "Build and evolve platforms for engineers and consumers",
          "Partner with senior technical leadership on strategy and security"
        ]
      }]
    },
    {
      company: "Red Ventures",
      roles: [
        {
          title: "Platform & Software Engineering Manager",
          period: "Feb 2024 - Dec 2024",
          highlights: [
            "Led engineering team for Coverage.com platform",
            "Delivered consumer-facing platforms for insurance comparison",
            "Managed engineers across platform and application domains"
          ]
        },
        {
          title: "Platform Engineering Manager",
          period: "Mar 2023 - Apr 2024",
          highlights: [
            "Built internal developer portal reducing engineering toil",
            "Established CI/CD and Terraform best practices",
            "Designed quarterly and annual platform roadmaps"
          ]
        },
        {
          title: "Senior Platform Engineer",
          period: "Jan 2020 - Mar 2023",
          highlights: [
            "Migrated ~100 on-prem applications to AWS",
            "Built tooling to detect security violations",
            "Delivered AWS training to ~50 engineers"
          ]
        }
      ]
    },
    {
      company: "Atomized",
      roles: [{
        title: "Co-Founder & CTO",
        period: "Jan 2021 - Jun 2021",
        highlights: [
          "Built Heroku-style deployment platform",
          "Led engineering team and technical strategy",
          "Implemented SSO/SAML authentication"
        ]
      }]
    },
    {
      company: "Samaritan's Purse",
      roles: [{
        title: "DevOps Engineer",
        period: "Aug 2017 - Aug 2018",
        highlights: [
          "Built private cloud using KVM and OpenStack",
          "Automated infrastructure with Ansible",
          "Managed Docker Swarms and ELK stacks"
        ]
      }]
    }
  ]
};
