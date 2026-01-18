import { Logo } from '../atoms/Logo';

interface NavItem {
  id: string;
  label: string;
}

interface NavigationProps {
  name: string;
  items?: NavItem[];
  onNavigate: (id: string) => void;
}

const defaultNavItems: NavItem[] = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about-me' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
];

export const Navigation = ({ name, items = defaultNavItems, onNavigate }: NavigationProps) => (
  <nav className="nav">
    <Logo name={name} className="nav-logo" />
    <div className="nav-links">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="nav-link"
        >
          <span className="hash">#</span>{item.label}
        </button>
      ))}
    </div>
  </nav>
);
