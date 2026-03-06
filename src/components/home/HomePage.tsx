import React, { useState } from 'react';
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
  ExternalLink,
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

interface CardInfo {
  id: string;
  labelKey: string;
  icon: React.ElementType;
  animation: string;
  previewKey: string;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t } = useLanguage();

  const sections: { titleKey: string; cards: CardInfo[] }[] = [
    {
      titleKey: 'nav.foundations',
      cards: [
        { id: 'colors', labelKey: 'nav.colors', icon: Palette, animation: 'icon-animate-glow', previewKey: 'home.preview.colors' },
        { id: 'typography', labelKey: 'nav.typography', icon: Type, animation: 'icon-animate-bounce', previewKey: 'home.preview.typography' },
        { id: 'shadows', labelKey: 'nav.shadows', icon: Layers, animation: 'icon-animate-layers', previewKey: 'home.preview.shadows' },
        { id: 'icons', labelKey: 'nav.icons', icon: Smile, animation: 'icon-animate-smile', previewKey: 'home.preview.icons' },
        { id: 'grid', labelKey: 'nav.grid', icon: Grid3X3, animation: 'icon-animate-rotate', previewKey: 'home.preview.grid' }
      ]
    },
    {
      titleKey: 'nav.components',
      cards: [
        { id: 'components', labelKey: 'nav.components.ui', icon: LayoutGrid, animation: 'icon-animate-wiggle', previewKey: 'home.preview.components' },
        { id: 'navigation', labelKey: 'nav.navigation', icon: Navigation, animation: 'icon-animate-bounce', previewKey: 'home.preview.navigation' },
        { id: 'forms', labelKey: 'nav.forms', icon: FormInput, animation: 'icon-animate-glow', previewKey: 'home.preview.forms' }
      ]
    },
    {
      titleKey: 'nav.patterns',
      cards: [
        { id: 'atomic', labelKey: 'nav.atomic', icon: Atom, animation: 'icon-animate-rotate', previewKey: 'home.preview.atomic' },
        { id: 'naming', labelKey: 'nav.naming', icon: Tag, animation: 'icon-animate-wiggle', previewKey: 'home.preview.naming' },
        { id: 'microinteractions', labelKey: 'nav.microinteractions', icon: Play, animation: 'icon-animate-bounce', previewKey: 'home.preview.microinteractions' },
        { id: 'ux-documentation', labelKey: 'nav.uxDocumentation', icon: FileText, animation: 'icon-animate-glow', previewKey: 'home.preview.uxDocumentation' }
      ]
    },
    {
      titleKey: 'nav.resources',
      cards: [
        { id: 'figma', labelKey: 'nav.figma', icon: Figma, animation: 'icon-animate-bounce', previewKey: 'home.preview.figma' },
        { id: 'figma-integration', labelKey: 'nav.figmaIntegration', icon: Plug, animation: 'icon-animate-glow', previewKey: 'home.preview.figmaIntegration' },
        { id: 'developer-guide', labelKey: 'nav.developerGuide', icon: Code, animation: 'icon-animate-rotate', previewKey: 'home.preview.developerGuide' },
        { id: 'ai-guide', labelKey: 'nav.aiGuide', icon: Sparkles, animation: 'icon-animate-wiggle', previewKey: 'home.preview.aiGuide' }
      ]
    },
    {
      titleKey: 'nav.quickAccess',
      cards: [
        { id: 'quick-access', labelKey: 'nav.externalLinks', icon: ExternalLink, animation: 'icon-animate-wiggle', previewKey: 'home.preview.quickAccess' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-6">
          <span>v2.0</span>
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
            <h2 className="text-3xl font-bold text-foreground mb-8">{t(section.titleKey)}</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <HomeCard
                    key={card.id}
                    card={card}
                    IconComponent={IconComponent}
                    onNavigate={onNavigate}
                    t={t}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeCard = ({ card, IconComponent, onNavigate, t }: {
  card: CardInfo;
  IconComponent: React.ElementType;
  onNavigate: (section: string) => void;
  t: (key: string) => string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => onNavigate(card.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group text-left ${card.animation} relative`}
    >
      <div className="ndf-card mb-3 relative overflow-hidden">
        {/* Default: icon */}
        <div className={`transition-opacity duration-200 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <IconComponent size={32} strokeWidth={1.5} className="text-background" />
        </div>
        {/* Hover: preview text */}
        <div className={`absolute inset-0 flex flex-col items-start justify-between p-4 transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-background/80 text-xs leading-relaxed line-clamp-3">
            {t(card.previewKey)}
          </p>
          <span className="flex items-center gap-1 text-background text-xs font-medium mt-auto">
            {t('home.explore')} <ArrowRight size={12} />
          </span>
        </div>
      </div>
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {t(card.labelKey)}
      </span>
    </button>
  );
};

export default HomePage;
