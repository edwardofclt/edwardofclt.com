import { GitHubIcon, LinkedInIcon, EmailIcon } from '../atoms/Icons';
import type { ContactInfo } from '../../types/resume';

interface SocialSidebarProps {
  contact: ContactInfo;
}

export const SocialSidebar = ({ contact }: SocialSidebarProps) => (
  <aside className="social-sidebar">
    <a
      href={contact.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <GitHubIcon />
    </a>
    <a
      href={contact.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <LinkedInIcon />
    </a>
    <a href={`mailto:${contact.email}`} aria-label="Email">
      <EmailIcon />
    </a>
    <div className="sidebar-line" />
  </aside>
);
