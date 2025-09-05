import { Mail, Github, Phone } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="mailto:charanthirupathi18@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="footer-email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/charan-g-t-1b561432a/" 
            className="text-muted-foreground hover:text-secondary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/charan1814-gt" 
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-github"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="tel:6385865484" 
            className="text-muted-foreground hover:text-secondary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-phone"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            © 2024 Charan G T. All rights reserved. Built with passion for Data Science and Web Development.
          </p>
        </div>
      </div>
    </footer>
  );
}
