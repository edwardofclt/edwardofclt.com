import { SectionHeader } from '../atoms/SectionHeader';

interface AboutSectionProps {
  fullName: string;
  summary: string;
}

export const AboutSection = ({ fullName, summary }: AboutSectionProps) => (
  <section id="about" className="section">
    <SectionHeader title="about-me" prefix="/" />
    <div className="about-content">
      <div className="about-text">
        <p className="subtitle">Who am I?</p>
        <p>Hello, I'm {fullName}!</p>
        <p>{summary}</p>
        <p>
          Transforming engineering challenges into elegant platform solutions has been my passion. 
          I help teams establish their technical presence and enable developers to ship faster with confidence.
        </p>
      </div>
    </div>
  </section>
);
