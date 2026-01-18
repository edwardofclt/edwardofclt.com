import { SectionHeader } from '../atoms/SectionHeader';
import { ExperienceCard } from '../molecules/ExperienceCard';
import type { Experience } from '../../types/resume';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => (
  <section id="experience" className="section">
    <SectionHeader title="experience" />
    <div className="experience-grid">
      {experiences.map((experience, i) => (
        <ExperienceCard key={i} experience={experience} />
      ))}
    </div>
  </section>
);
