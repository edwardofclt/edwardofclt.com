import type { Quote } from '../../types/resume';

interface QuoteBoxProps {
  quote: Quote;
}

export const QuoteBox = ({ quote }: QuoteBoxProps) => (
  <section className="quote-section">
    <div className="quote-container">
      <div className="quote-box">
        <span className="quote-mark quote-open">"</span>
        <p className="quote-text">{quote.text}</p>
        <span className="quote-mark quote-close">"</span>
      </div>
      <p className="quote-author">- {quote.author}</p>
    </div>
  </section>
);
