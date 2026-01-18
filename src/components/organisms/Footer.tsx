import { Logo } from '../atoms/Logo';

interface FooterProps {
  name: string;
  fullName: string;
  email: string;
}

export const Footer = ({ name, fullName, email }: FooterProps) => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-info">
        <Logo name={name} className="footer-logo" />
        <p>{email}</p>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} {fullName}</p>
    </div>
  </footer>
);
