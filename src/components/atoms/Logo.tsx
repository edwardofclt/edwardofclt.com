interface LogoProps {
  name: string;
  className?: string;
}

export const Logo = ({ name, className }: LogoProps) => (
  <div className={className}>
    <span className="logo-bracket">&lt;</span>
    <span className="logo-text">{name}</span>
    <span className="logo-bracket">/&gt;</span>
  </div>
);
