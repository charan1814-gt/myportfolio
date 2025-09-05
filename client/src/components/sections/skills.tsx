import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  color: 'primary' | 'secondary';
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    color: 'primary',
    skills: [
      { name: 'Python', percentage: 85 },
      { name: 'Java', percentage: 80 },
      { name: 'C', percentage: 75 },
      { name: 'SQL', percentage: 80 },
    ],
  },
  {
    title: 'Web Development',
    color: 'secondary',
    skills: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 85 },
      { name: 'PHP', percentage: 70 },
      { name: 'Web Design', percentage: 75 },
    ],
  },
  {
    title: 'Data & Analytics',
    color: 'primary',
    skills: [
      { name: 'Data Science', percentage: 75 },
      { name: 'Data Analytics', percentage: 80 },
      { name: 'Data Structures', percentage: 75 },
      { name: 'Algorithms', percentage: 70 },
    ],
  },
];

function SkillBar({ skill, isVisible, delay }: { skill: Skill; isVisible: boolean; delay: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedWidth(skill.percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage, delay]);

  return (
    <div className="skill-item" data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between mb-2">
        <span>{skill.name}</span>
        <span className="text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="skill-bar h-2 rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="skills-title">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">Technologies I work with on a daily basis</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-card p-6 rounded-xl border border-border ${categoryIndex === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              data-testid={`skill-category-${category.title.toLowerCase()}`}
            >
              <h3 className={`text-xl font-semibold mb-6 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill}
                    isVisible={isVisible}
                    delay={skillIndex * 200}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
