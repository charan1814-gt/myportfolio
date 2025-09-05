import { useTypingEffect } from '@/hooks/use-typing-effect';
import { ChevronDown } from 'lucide-react';
import profilePhoto from '@assets/photo_1756999567270.jpg';

export default function Hero() {
  const typedText = useTypingEffect([
    'Data Science Enthusiast',
    'Web Developer',
    'Python Developer',
    'IT Student',
    'Problem Solver'
  ]);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-down">
          <img
            src={profilePhoto}
            alt="Charan G T - Professional headshot"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary/20 shadow-xl object-cover"
            data-testid="profile-image"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" data-testid="hero-title">
          Hi, I'm <span className="text-primary">Charan G T</span>
        </h1>
        
        <div className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <span className="typing-cursor" data-testid="hero-subtitle">{typedText}</span>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}} data-testid="hero-description">
          Motivated IT student with strong interest in Data Analytics, Software Development, and Web Design. 
          Passionate about analyzing data to uncover insights and creating user-friendly applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <button
            onClick={handleScrollToProjects}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            data-testid="button-view-work"
          >
            View My Work
          </button>
          <button
            onClick={handleScrollToContact}
            className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="w-6 h-6 text-muted-foreground" data-testid="scroll-indicator" />
      </div>
    </section>
  );
}
