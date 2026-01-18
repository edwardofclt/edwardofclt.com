interface SkillBoxProps {
  title: string;
  skills: string[];
}

export const SkillBox = ({ title, skills }: SkillBoxProps) => (
  <div className="skill-box">
    <h3 className="skill-box-title">{title}</h3>
    <div className="skill-list">
      {skills.map((skill, i) => (
        <span key={i} className="skill-item">{skill}</span>
      ))}
    </div>
  </div>
);
