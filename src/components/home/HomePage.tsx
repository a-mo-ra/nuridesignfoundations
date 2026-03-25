import React, { useState, useRef } from 'react';
import { 
  Palette, Type, Layers, Smile, Grid3X3, LayoutGrid, Navigation, FormInput, 
  Atom, Tag, Figma, Plug, Code, Sparkles, ArrowRight, Rocket, Globe2,
  Compass, BookOpen, Wand2, Lightbulb, ExternalLink, Play, FileText,
  Linkedin, Github, Globe
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import brendaPhoto from '@/assets/brenda-photo.png';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

/* ──────────────── Animated Section Wrapper ──────────────── */
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ──────────────── Card Info for "What you'll find" ──────────────── */
interface CardInfo {
  id: string;
  labelKey: string;
  icon: React.ElementType;
  previewKey: string;
}

const sections = [
  {
    titleKey: 'nav.foundations',
    cards: [
      { id: 'colors', labelKey: 'nav.colors', icon: Palette, previewKey: 'home.preview.colors' },
      { id: 'typography', labelKey: 'nav.typography', icon: Type, previewKey: 'home.preview.typography' },
      { id: 'shadows', labelKey: 'nav.shadows', icon: Layers, previewKey: 'home.preview.shadows' },
      { id: 'icons', labelKey: 'nav.icons', icon: Smile, previewKey: 'home.preview.icons' },
      { id: 'grid', labelKey: 'nav.grid', icon: Grid3X3, previewKey: 'home.preview.grid' },
    ],
  },
  {
    titleKey: 'nav.components',
    cards: [
      { id: 'components', labelKey: 'nav.components.ui', icon: LayoutGrid, previewKey: 'home.preview.components' },
      { id: 'navigation', labelKey: 'nav.navigation', icon: Navigation, previewKey: 'home.preview.navigation' },
      { id: 'forms', labelKey: 'nav.forms', icon: FormInput, previewKey: 'home.preview.forms' },
    ],
  },
  {
    titleKey: 'nav.patterns',
    cards: [
      { id: 'atomic', labelKey: 'nav.atomic', icon: Atom, previewKey: 'home.preview.atomic' },
      { id: 'naming', labelKey: 'nav.naming', icon: Tag, previewKey: 'home.preview.naming' },
      { id: 'microinteractions', labelKey: 'nav.microinteractions', icon: Play, previewKey: 'home.preview.microinteractions' },
      { id: 'ux-documentation', labelKey: 'nav.uxDocumentation', icon: FileText, previewKey: 'home.preview.uxDocumentation' },
    ],
  },
  {
    titleKey: 'nav.resources',
    cards: [
      { id: 'figma', labelKey: 'nav.figma', icon: Figma, previewKey: 'home.preview.figma' },
      { id: 'figma-integration', labelKey: 'nav.figmaIntegration', icon: Plug, previewKey: 'home.preview.figmaIntegration' },
      { id: 'developer-guide', labelKey: 'nav.developerGuide', icon: Code, previewKey: 'home.preview.developerGuide' },
      { id: 'ai-guide', labelKey: 'nav.aiGuide', icon: Sparkles, previewKey: 'home.preview.aiGuide' },
    ],
  },
  {
    titleKey: 'nav.quickAccess',
    cards: [
      { id: 'quick-access', labelKey: 'nav.externalLinks', icon: ExternalLink, previewKey: 'home.preview.quickAccess' },
    ],
  },
];

/* ──────────────── Explore Card ──────────────── */
const ExploreCard = ({ card, onNavigate, t }: { card: CardInfo; onNavigate: (id: string) => void; t: (k: string) => string }) => {
  const [hovered, setHovered] = useState(false);
  const IconComponent = card.icon;

  return (
    <button
      onClick={() => onNavigate(card.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group text-left"
    >
      <div className="ndf-card mb-3 relative overflow-hidden">
        <div className={`transition-opacity duration-200 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <IconComponent size={32} strokeWidth={1.5} className="text-background" />
        </div>
        <div className={`absolute inset-0 flex flex-col items-start justify-between p-4 transition-opacity duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-background/80 text-xs leading-relaxed line-clamp-3">{t(card.previewKey)}</p>
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

/* ──────────────── MAIN HOMEPAGE ──────────────── */
const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t } = useLanguage();

  const whatIsNuriItems = [
    { icon: Palette, titleKey: 'home.whatIsNuri.tokens.title', descKey: 'home.whatIsNuri.tokens.desc' },
    { icon: LayoutGrid, titleKey: 'home.whatIsNuri.components.title', descKey: 'home.whatIsNuri.components.desc' },
    { icon: FileText, titleKey: 'home.whatIsNuri.patterns.title', descKey: 'home.whatIsNuri.patterns.desc' },
    { icon: Sparkles, titleKey: 'home.whatIsNuri.ai.title', descKey: 'home.whatIsNuri.ai.desc' },
  ];

  const howToUseSteps = [
    { num: '01', icon: Compass, titleKey: 'home.howToUse.explore.title', descKey: 'home.howToUse.explore.desc' },
    { num: '02', icon: BookOpen, titleKey: 'home.howToUse.understand.title', descKey: 'home.howToUse.understand.desc' },
    { num: '03', icon: Wand2, titleKey: 'home.howToUse.apply.title', descKey: 'home.howToUse.apply.desc' },
    { num: '04', icon: Lightbulb, titleKey: 'home.howToUse.build.title', descKey: 'home.howToUse.build.desc' },
  ];

  return (
    <div className="min-h-screen">
      {/* ═══════ 1. HERO ═══════ */}
      <AnimatedSection className="pb-40 md:pb-52">
        <div className="py-20 text-center max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-8">
            <Rocket size={14} />
            <span>{t('home.version')}</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            {t('home.title1')}<br />{t('home.title2')}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
        </div>
      </AnimatedSection>

      {/* ═══════ 2. O QUE É A NURI ═══════ */}
      <AnimatedSection className="pb-40 md:pb-52 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
              <Globe2 size={14} />
              <span>{t('home.whatIsNuri')}</span>
            </div>
          </div>

          <div className="space-y-4">
            {whatIsNuriItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 border border-border rounded-lg"
                >
                  <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t(item.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════ 3. COMO USAR ═══════ */}
      <AnimatedSection className="pb-40 md:pb-52 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('home.howToUse')}</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">{t('home.howToUse.subtitle')}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howToUseSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative border border-border rounded-lg p-6 text-left h-full flex flex-col"
                >
                  <span className="absolute top-4 right-4 text-4xl font-bold text-foreground/10">{step.num}</span>
                  <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} className="text-background" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.num} — {t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{t(step.descKey)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════ 4. O QUE VOCÊ VAI ENCONTRAR ═══════ */}
      <AnimatedSection className="pb-40 md:pb-52 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('home.whatYouFind')}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">{t('home.whatYouFind.subtitle')}</p>
          </div>

          <div className="space-y-16">
            {sections.map((section) => (
              <div key={section.titleKey}>
                <h3 className="text-xl font-bold text-foreground mb-6">{t(section.titleKey)}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {section.cards.map((card) => (
                    <ExploreCard key={card.id} card={card} onNavigate={onNavigate} t={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════ 5. A HISTÓRIA POR TRÁS ═══════ */}
      <AnimatedSection className="pb-40 md:pb-52 px-6">
        <div className="max-w-5xl mx-auto border border-border rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Left - 3 cols */}
            <div className="md:col-span-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-6">
                <Rocket size={14} />
                <span>{t('home.story.badge')}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{t('home.story.title')}</h2>

              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>{t('home.story.p1')}</p>
                <p>{t('home.story.p2')}</p>
                <p>{t('home.story.p3')}</p>
              </div>

              <blockquote className="mt-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground italic">
                🌏 {t('home.story.quote')}
              </blockquote>
            </div>

            {/* Right - 2 cols */}
            <div className="md:col-span-2 flex flex-col items-center justify-center text-center">
              <img
                src={brendaPhoto}
                alt="Brenda Moreno"
                className="w-32 h-32 rounded-full border-2 border-border object-cover mb-4"
              />
              <h3 className="font-semibold text-foreground">{t('home.story.name')}</h3>
              <p className="text-primary text-sm font-medium mb-3">{t('home.story.role')}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4 max-w-xs">
                {t('home.story.bio')}
              </p>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/in/be-moreno/" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Linkedin size={16} className="text-background" />
                </a>
                <a href="https://github.com/a-mo-ra" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Github size={16} className="text-background" />
                </a>
                <a href="https://brenda-moreno-ux.webnode.page/" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Globe size={16} className="text-background" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ═══════ 6. CTA FINAL ═══════ */}
      <AnimatedSection className="pb-40 md:pb-52 px-6">
        <div className="max-w-3xl mx-auto bg-foreground rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-4">{t('home.cta.title')}</h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">{t('home.cta.subtitle')}</p>
          <button
            onClick={() => onNavigate('colors')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('home.cta.button')} <ArrowRight size={16} />
          </button>
        </div>
      </AnimatedSection>

      {/* ═══════ 7. COPYRIGHT ═══════ */}
      <div className="text-center pb-8 text-sm text-muted-foreground">
        {t('home.copyright')}
      </div>
    </div>
  );
};

export default HomePage;
