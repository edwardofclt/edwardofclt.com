import type { Experience } from '../../types/resume';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <div className="experience-card">
    <div className="experience-header">
      <h3 className="company-name">{experience.company}</h3>
    </div>
    {experience.roles.map((role, j) => (
      <div key={j} className="role-item">
        <div className="role-meta">
          <span className="role-title">{role.title}</span>
          <span className="role-period">{role.period}</span>
        </div>
        <ul className="role-highlights">
          {role.highlights.map((highlight, k) => (
            <li key={k}>{highlight}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
