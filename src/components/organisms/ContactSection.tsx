import { SectionHeader } from '../atoms/SectionHeader';
import { ContactBox } from '../molecules/ContactBox';
import type { ContactInfo } from '../../types/resume';

interface ContactSectionProps {
  contact: ContactInfo;
}

export const ContactSection = ({ contact }: ContactSectionProps) => (
  <section id="contact" className="section contact-section">
    <SectionHeader title="contact" />
    <div className="contact-content">
      <p className="contact-text">
        I'm always interested in hearing about new opportunities, interesting projects, 
        or just chatting about platform engineering and developer experience.
      </p>
      <ContactBox contact={contact} />
    </div>
  </section>
);
