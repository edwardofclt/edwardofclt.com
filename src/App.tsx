import './App.css';
import { resumeData } from './data/resumeData';
import {
  DecorativeDots,
  SocialSidebar,
  Navigation,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
  Footer,
  QuoteBox,
} from './components';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site">
      <SocialSidebar contact={resumeData.contact} />
      
      <Navigation 
        name={resumeData.name} 
        onNavigate={scrollToSection} 
      />

      <DecorativeDots className="dots-1" />
      <DecorativeDots className="dots-2" />

      <HeroSection
        fullName={resumeData.fullName}
        title={resumeData.title}
        titleHighlight={resumeData.titleHighlight}
        tagline={resumeData.tagline}
        onContactClick={() => scrollToSection('contact')}
      />

      <QuoteBox quote={resumeData.quote} />

      <AboutSection
        fullName={resumeData.fullName}
        summary={resumeData.summary}
      />

      <SkillsSection
        skills={resumeData.technicalSkills}
        certifications={resumeData.certifications}
      />

      <ExperienceSection experiences={resumeData.experience} />

      <ContactSection contact={resumeData.contact} />

      <Footer
        name={resumeData.name}
        fullName={resumeData.fullName}
        email={resumeData.contact.email}
      />
    </div>
  );
}

export default App;
