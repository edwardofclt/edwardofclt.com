import { SectionHeader } from '../atoms/SectionHeader';
import { SkillBox } from '../molecules/SkillBox';
import type { TechnicalSkills, Certification } from '../../types/resume';

interface SkillsSectionProps {
  skills: TechnicalSkills;
  certifications: Certification[];
}

export const SkillsSection = ({ skills, certifications }: SkillsSectionProps) => (
  <section id="skills" className="section">
    <SectionHeader title="skills" />
    <div className="skills-grid">
      <SkillBox title="Languages" skills={skills.languages} />
      <SkillBox title="Tools" skills={skills.tools} />
      <SkillBox title="Platforms" skills={skills.platforms} />
      <SkillBox 
        title="Certifications" 
        skills={certifications.map((cert) => cert.name)} 
      />
    </div>
  </section>
);
