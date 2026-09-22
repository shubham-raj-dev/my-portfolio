import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { socialLinks, navLinks } from '../data/portfolioData';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1); // removes the '/'
    
    if (location.pathname !== href) {
      navigate(href);
    }
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="relative z-10 border-t border-white/5 liquid-glass py-12 text-center text-zinc-400">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <h3 className="text-xl font-bold text-white tracking-tight">Shubham Raj</h3>
        <p className="text-sm max-w-md mx-auto">
          Building scalable, elegant web experiences. Thank you for visiting my portfolio.
        </p>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex gap-4 mb-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:-translate-y-1 transition-all"
                title={link.name}
              >
                <Icon className="h-5 w-5 text-zinc-300" />
              </a>
            );
          })}
        </div>
        
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Shubham Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
