interface SectionHeaderProps {
  title: string;
  prefix?: string;
}

export const SectionHeader = ({ title, prefix = '#' }: SectionHeaderProps) => (
  <div className="section-header">
    <h2 className="section-title">
      <span className="hash">{prefix}</span>{title}
    </h2>
    <span className="section-line"></span>
  </div>
);
