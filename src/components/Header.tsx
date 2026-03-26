import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Search, X, Globe, Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import nuriLogoLight from '@/assets/logo-light.png';
import nuriLogoDark from '@/assets/logo-dark.png';

interface HeaderProps {
  onGuidelinesClick: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
  onLogoClick?: () => void;
  onNavigate?: (section: string) => void;
  isHome?: boolean;
}

interface SearchResult {
  id: string;
  label: string;
  labelEn: string;
  category: string;
}

const searchData: SearchResult[] = [
  { id: 'colors', label: 'Cores', labelEn: 'Colors', category: 'Foundations' },
  { id: 'typography', label: 'Tipografia', labelEn: 'Typography', category: 'Foundations' },
  { id: 'shadows', label: 'Sombras', labelEn: 'Shadows', category: 'Foundations' },
  { id: 'icons', label: 'Ícones', labelEn: 'Icons', category: 'Foundations' },
  { id: 'grid', label: 'Grid System', labelEn: 'Grid System', category: 'Foundations' },
  { id: 'components', label: 'UI Components', labelEn: 'UI Components', category: 'Components' },
  { id: 'navigation', label: 'Navegação', labelEn: 'Navigation', category: 'Components' },
  { id: 'forms', label: 'Formulários', labelEn: 'Forms', category: 'Components' },
  { id: 'atomic', label: 'Atomic Design', labelEn: 'Atomic Design', category: 'Patterns' },
  { id: 'naming', label: 'Nomenclatura', labelEn: 'Naming Conventions', category: 'Patterns' },
  { id: 'ux-documentation', label: 'Documentação UX', labelEn: 'UX Documentation', category: 'Patterns' },
  { id: 'microinteractions', label: 'Microinterações', labelEn: 'Microinteractions', category: 'Patterns' },
  { id: 'figma', label: 'Figma Plus', labelEn: 'Figma Plus', category: 'Resources' },
  { id: 'figma-integration', label: 'Integração Figma', labelEn: 'Figma Integration', category: 'Resources' },
  { id: 'developer-guide', label: 'Guia Dev', labelEn: 'Dev Guide', category: 'Resources' },
  { id: 'quick-access', label: 'Links Externos', labelEn: 'External Links', category: 'Quick Access' },
  { id: 'ai-guide', label: 'IA para Design', labelEn: 'AI for Design', category: 'Resources' },
];

const navLinks = [
  { labelKey: 'nav.foundations', firstSection: 'colors' },
  { labelKey: 'nav.components', firstSection: 'components' },
  { labelKey: 'nav.patterns', firstSection: 'atomic' },
  { labelKey: 'nav.resources', firstSection: 'figma' },
  { labelKey: 'nav.quickAccess', firstSection: 'quick-access' },
];

const Header = ({ onGuidelinesClick, darkMode, onDarkModeToggle, onLogoClick, onNavigate, isHome }: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = searchData.filter(item => {
        const label = language === 'pt' ? item.label : item.labelEn;
        return label.toLowerCase().startsWith(query) ||
          label.toLowerCase().split(' ').some(word => word.startsWith(query));
      });
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  }, [searchQuery, language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (id: string) => {
    if (onNavigate) onNavigate(id);
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredResults([]);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const handleNavClick = (firstSection: string) => {
    if (onNavigate) onNavigate(firstSection);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={onLogoClick}
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity shrink-0"
            >
              <img 
                src={darkMode ? nuriLogoDark : nuriLogoLight} 
                alt="Nuri Design Foundations" 
                className="w-8 h-8 object-contain" 
              />
              <span className="text-base font-semibold text-foreground tracking-tight hidden sm:inline">Nuri Design Foundations</span>
            </button>

            {/* Center Nav Links - visible on home or always */}
            {isHome && (
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.labelKey}
                    onClick={() => handleNavClick(link.firstSection)}
                    className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    {t(link.labelKey)}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-0.5 bg-primary transition-all duration-300" />
                  </button>
                ))}
              </nav>
            )}

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search icon with expandable input */}
              <div ref={searchRef} className="relative hidden md:block">
                <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 text-sm text-muted-foreground w-48 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
                  <Search size={16} />
                  <input
                    type="text"
                    placeholder={t('header.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="bg-transparent outline-none flex-1 placeholder:text-muted-foreground text-foreground"
                  />
                  {searchQuery && (
                    <button onClick={clearSearch} className="hover:text-foreground">
                      <X size={14} />
                    </button>
                  )}
                </div>
                
                {isSearchFocused && filteredResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-elevation-3 overflow-hidden z-50">
                    {filteredResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleResultClick(result.id)}
                        className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium text-foreground">
                          {language === 'pt' ? result.label : result.labelEn}
                        </span>
                        <span className="text-xs text-muted-foreground">{result.category}</span>
                      </button>
                    ))}
                  </div>
                )}

                {isSearchFocused && searchQuery && filteredResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-elevation-3 p-4 z-50">
                    <p className="text-sm text-muted-foreground text-center">{t('header.noResults')}</p>
                  </div>
                )}
              </div>
              
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span className="uppercase">{language}</span>
              </button>
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={onDarkModeToggle}
                className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile menu button */}
              {isHome && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  aria-label="Menu"
                >
                  <Menu size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isHome && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16 lg:hidden">
          <nav className="flex flex-col items-center gap-2 p-8">
            {navLinks.map((link) => (
              <button
                key={link.labelKey}
                onClick={() => handleNavClick(link.firstSection)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3"
              >
                {t(link.labelKey)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
