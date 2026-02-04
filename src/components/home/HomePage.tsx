import React from 'react';
import { 
  Palette, 
  Type, 
  Layers, 
  Smile, 
  Grid3X3, 
  LayoutGrid, 
  Navigation, 
  FormInput, 
  Atom, 
  Tag,
  Figma,
  Plug,
  Code,
  Play,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: 'nav.foundations',
      descriptionKey: 'home.foundationsDesc',
      cards: [
        { id: 'colors', labelKey: 'nav.colors', icon: Palette, animation: 'icon-animate-glow' },
        { id: 'typography', labelKey: 'nav.typography', icon: Type, animation: 'icon-animate-bounce' },
        { id: 'shadows', labelKey: 'nav.shadows', icon: Layers, animation: 'icon-animate-layers' },
        { id: 'icons', labelKey: 'nav.icons', icon: Smile, animation: 'icon-animate-smile' },
        { id: 'grid', labelKey: 'nav.grid', icon: Grid3X3, animation: 'icon-animate-rotate' }
      ]
    },
    {
      titleKey: 'nav.components',
      descriptionKey: 'home.componentsDesc',
      cards: [
        { id: 'components', labelKey: 'nav.components.ui', icon: LayoutGrid, animation: 'icon-animate-wiggle' },
        { id: 'navigation', labelKey: 'nav.navigation', icon: Navigation, animation: 'icon-animate-bounce' },
        { id: 'forms', labelKey: 'nav.forms', icon: FormInput, animation: 'icon-animate-glow' }
      ]
    },
    {
      titleKey: 'nav.patterns',
      descriptionKey: 'home.patternsDesc',
      cards: [
        { id: 'atomic', labelKey: 'nav.atomic', icon: Atom, animation: 'icon-animate-rotate' },
        { id: 'naming', labelKey: 'nav.naming', icon: Tag, animation: 'icon-animate-wiggle' },
        { id: 'motion', labelKey: 'nav.motion', icon: Play, animation: 'icon-animate-bounce' }
      ]
    },
    {
      titleKey: 'nav.resources',
      descriptionKey: 'home.resourcesDesc',
      cards: [
        { id: 'figma', labelKey: 'nav.figma', icon: Figma, animation: 'icon-animate-bounce' },
        { id: 'figma-integration', labelKey: 'nav.figmaIntegration', icon: Plug, animation: 'icon-animate-glow' },
        { id: 'developer-guide', labelKey: 'nav.developerGuide', icon: Code, animation: 'icon-animate-rotate' }
      ]
    },
    {
      titleKey: 'nav.quickAccess',
      descriptionKey: 'home.quickAccessDesc',
      cards: [
        { id: 'quick-access', labelKey: 'nav.externalLinks', icon: ExternalLink, animation: 'icon-animate-wiggle' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-6">
          <span>{t('home.version')}</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
          {t('home.title1')}
          <br />
          {t('home.title2')}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
          {t('home.subtitle')}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-20 pb-20">
        {sections.map((section) => (
          <div key={section.titleKey}>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-foreground">{t(section.titleKey)}</h2>
              <p className="text-muted-foreground max-w-md lg:text-right">
                {t(section.descriptionKey)}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => onNavigate(card.id)}
                    className={`group text-left ${card.animation}`}
                  >
                    <div className="ndf-card mb-3">
                      <IconComponent size={32} strokeWidth={1.5} className="text-background" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {t(card.labelKey)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
