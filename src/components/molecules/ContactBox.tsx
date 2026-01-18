import { EmailIcon, LinkedInIcon } from '../atoms/Icons';
import type { ContactInfo } from '../../types/resume';

interface ContactBoxProps {
  contact: ContactInfo;
}

export const ContactBox = ({ contact }: ContactBoxProps) => (
  <div className="contact-box">
    <h3>Message me here</h3>
    <a href={`mailto:${contact.email}`} className="contact-item">
      <EmailIcon size={20} />
      {contact.email}
    </a>
    <a
      href={contact.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-item"
    >
      <LinkedInIcon size={20} />
      LinkedIn
    </a>
  </div>
);
