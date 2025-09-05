import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground" data-testid="about-subtitle">Get to know the person behind the code</p>
        </div>
        
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4" data-testid="about-section-title">Aspiring Data Scientist & Developer</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="about-description-1">
              Currently pursuing B.Tech in Information Technology at M.Kumarasamy College of Engineering 
              with a CGPA of 7.4. I specialize in Data Analytics, Software Development, and Web Design 
              using technologies like Python, Java, HTML, CSS, and SQL.
            </p>
            
            <p className="text-muted-foreground leading-relaxed" data-testid="about-description-2">
              I'm passionate about analyzing data to uncover actionable insights and developing efficient, 
              maintainable code. I bring analytical skills, attention to detail, and creativity in problem-solving. 
              Always eager to learn new technologies and contribute to innovative projects.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm" data-testid="trait-problem-solver">Data Analytics</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm" data-testid="trait-team-player">Critical Thinking</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm" data-testid="trait-continuous-learner">Continuous Learner</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm" data-testid="trait-open-source">Web Development</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-xl border border-border" data-testid="stat-projects">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border" data-testid="stat-experience">
              <div className="text-3xl font-bold text-secondary mb-2">7.4</div>
              <div className="text-muted-foreground">Current CGPA</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border" data-testid="stat-clients">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Hackathon Wins</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border" data-testid="stat-technologies">
              <div className="text-3xl font-bold text-secondary mb-2">8+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
