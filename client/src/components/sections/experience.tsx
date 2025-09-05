import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Runner-up in Gencraft-2024 Hackathon',
    company: 'M.Kumarasamy College of Engineering, Karur',
    period: '2024',
    description: 'Secured second position in the prestigious Gencraft-2024 Hackathon, demonstrating strong problem-solving skills and innovative thinking in technology solutions.',
    type: 'work'
  },
  {
    title: 'Third Prize in Paper Presentation',
    company: 'Sona College of Technology',
    period: '2024',
    description: 'Achieved third place in Intra College Level Paper Presentation, showcasing research skills and effective communication of technical concepts.',
    type: 'work'
  },
  {
    title: 'Dr. Kalam Young Achiever Award Participant',
    company: 'E-commerce Project',
    period: '2023',
    description: 'Participated in the prestigious Dr. Kalam Young Achiever Award for an innovative E-commerce project, demonstrating entrepreneurial spirit and technical excellence.',
    type: 'work'
  }
];

const education: ExperienceItem[] = [
  {
    title: 'B.Tech - Information Technology',
    company: 'M.Kumarasamy College of Engineering',
    period: '2023 - 2027',
    description: 'Currently pursuing Bachelor of Technology in Information Technology with CGPA of 7.4 (till 4th Semester). Focused on Data Science, Software Development, and Web Technologies.',
    type: 'education'
  },
  {
    title: 'NPTEL Certifications',
    company: 'Indian Institute of Technology',
    period: '2023 - 2024',
    description: 'Completed multiple NPTEL courses: Introduction to Internet of Things, Human Computing Interaction, and Industrial IoT 4.0, gaining expertise in emerging technologies.',
    type: 'education'
  },
  {
    title: 'Higher Secondary Certificate',
    company: 'South Indian Matric Higher Secondary School',
    period: '2021 - 2023',
    description: 'Completed higher secondary education with focus on science and mathematics, building strong foundation for engineering studies.',
    type: 'education'
  },
  {
    title: 'Workshop on RAG AI',
    company: 'Technology Workshop',
    period: '2024',
    description: 'Attended advanced workshop on Retrieval-Augmented Generation (RAG) AI, staying updated with latest developments in artificial intelligence and machine learning.',
    type: 'education'
  }
];

function TimelineItem({ item, index, isWork }: { item: ExperienceItem; index: number; isWork: boolean }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`relative pl-8 border-l-2 ${isWork ? 'border-primary/30' : 'border-secondary/30'} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
        index % 2 === 0 
          ? (isWork ? 'bg-primary' : 'bg-secondary')
          : (isWork ? 'bg-secondary' : 'bg-primary')
      }`} />
      <div className="bg-card p-6 rounded-lg border border-border" data-testid={`${isWork ? 'work' : 'education'}-item-${index}`}>
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-semibold" data-testid={`${isWork ? 'work' : 'education'}-title-${index}`}>{item.title}</h4>
          <span className="text-sm text-muted-foreground" data-testid={`${isWork ? 'work' : 'education'}-period-${index}`}>{item.period}</span>
        </div>
        <p className={`${isWork ? 'text-secondary' : 'text-primary'} font-medium mb-3`} data-testid={`${isWork ? 'work' : 'education'}-company-${index}`}>
          {item.company}
        </p>
        <p className="text-muted-foreground" data-testid={`${isWork ? 'work' : 'education'}-description-${index}`}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="experience-title">Experience & Education</h2>
          <p className="text-xl text-muted-foreground" data-testid="experience-subtitle">My professional journey and continuous learning</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary" data-testid="work-experience-title">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} isWork={true} />
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-secondary" data-testid="education-title">Education & Certifications</h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} isWork={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
