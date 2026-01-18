interface DecorativeDotsProps {
  count?: number;
  className?: string;
}

export const DecorativeDots = ({ count = 25, className }: DecorativeDotsProps) => (
  <div className={`dots-decoration ${className ?? ''}`}>
    {[...Array(count)].map((_, i) => (
      <span key={i} className="dot" />
    ))}
  </div>
);
