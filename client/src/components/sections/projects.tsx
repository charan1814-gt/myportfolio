import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'all' | 'fullstack' | 'frontend' | 'mobile';
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Book Club Management System',
    description: 'A comprehensive web application for managing book clubs built using HTML, CSS, SQL, and PHP. Features include member management, book tracking, and club activities.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['HTML', 'CSS', 'PHP', 'SQL'],
    category: 'fullstack',
    demoUrl: 'https://github.com/charan1814-gt',
    githubUrl: 'https://github.com/charan1814-gt'
  },
  {
    id: 2,
    title: 'Mini OLX Platform',
    description: 'An online marketplace platform similar to OLX built with HTML, CSS, and SQL. Allows users to buy and sell products with user-friendly interface and database management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['HTML', 'CSS', 'SQL', 'Web Design'],
    category: 'fullstack',
    demoUrl: 'https://github.com/charan1814-gt',
    githubUrl: 'https://github.com/charan1814-gt'
  },
  {
    id: 3,
    title: 'Digital Wallet System',
    description: 'A secure digital wallet application for managing financial transactions. Includes features for money transfers, transaction history, and account management.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['Python', 'Database Management', 'Security'],
    category: 'frontend',
    demoUrl: 'https://github.com/charan1814-gt',
    githubUrl: 'https://github.com/charan1814-gt'
  },
  {
    id: 4,
    title: 'Shelter Management System',
    description: 'An innovative system using Data Structures and Algorithms to track animal health status in shelters. Helps in efficient management and monitoring of animal welfare.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
    technologies: ['Data Structures', 'Algorithms', 'Python', 'Analytics'],
    category: 'frontend',
    demoUrl: 'https://github.com/charan1814-gt',
    githubUrl: 'https://github.com/charan1814-gt'
  }
];

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'fullstack', label: 'Web Development' },
  { value: 'frontend', label: 'Data Science' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="projects-subtitle">A showcase of my recent work and side projects</p>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleFilterChange(filter.value)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeFilter === filter.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
                data-testid={`filter-${filter.value}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card bg-card rounded-xl border border-border overflow-hidden shadow-lg"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image}
                alt={`${project.title} Interface`}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`project-title-${project.id}`}>{project.title}</h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={tech}
                      className={`px-2 py-1 text-xs rounded ${
                        index % 2 === 0 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary/10 text-secondary'
                      }`}
                      data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoUrl}
                    className="text-primary hover:text-primary/80 transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-github-${project.id}`}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
