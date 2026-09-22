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
    <footer className="relative z-10 border-t border-white/5 liquid-glass py-6 text-center text-zinc-400">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <h3 className="text-lg font-bold text-white tracking-tight">Shubham Raj</h3>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:-translate-y-1 transition-all"
                title={link.name}
              >
                <Icon className="h-4 w-4 text-zinc-300" />
              </a>
            );
          })}
        </div>
        
        <p className="text-[10px] text-zinc-500 mt-1">
          © {new Date().getFullYear()} Shubham Raj. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
