import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    'header.search': 'Pesquisar...',
    'header.noResults': 'Nenhum resultado encontrado',
    
    // Navigation groups
    'nav.foundations': 'Fundamentos',
    'nav.components': 'Componentes',
    'nav.patterns': 'Padrões',
    'nav.resources': 'Recursos',
    'nav.quickAccess': 'Acesso Rápido',
    'nav.externalLinks': 'Links Externos',
    
    // Navigation items
    'nav.colors': 'Cores',
    'nav.typography': 'Tipografia',
    'nav.shadows': 'Sombras',
    'nav.icons': 'Ícones',
    'nav.grid': 'Grid System',
    'nav.components.ui': 'UI Components',
    'nav.navigation': 'Navegação',
    'nav.forms': 'Formulários',
    'nav.atomic': 'Atomic Design',
    'nav.naming': 'Nomenclatura',
    'nav.motion': 'Motion',
    'nav.figma': 'Figma Plus',
    'nav.figmaIntegration': 'Integração Figma',
    'nav.developerGuide': 'Guia Dev',
    'nav.documentation': 'Manual de Uso',
    'nav.guidelines': 'Diretrizes Nuri',
    
    // Home page
    'home.version': 'DESIGN SYSTEM v2.0',
    'home.title1': 'Aprenda. Construa.',
    'home.title2': 'Evolua.',
    'home.subtitle': 'Sistema de componentes, padrões e tokens para apoiar o aprendizado e a criação de interfaces acessíveis e escaláveis.',
    'home.foundationsDesc': 'Os princípios fundamentais que moldam o design system, desde cores e tipografia até layout e interação.',
    'home.componentsDesc': 'Componentes reutilizáveis que garantem consistência visual e funcional em todo o produto.',
    'home.patternsDesc': 'Padrões e metodologias para construir interfaces escaláveis e bem documentadas.',
    'home.resourcesDesc': 'Ferramentas e recursos para integrar o design system ao seu workflow.',
    'home.quickAccessDesc': 'Links rápidos para as principais ferramentas utilizadas no desenvolvimento e design.',
    
    // Quick Access
    'quickAccess.title': 'Acesso Rápido',
    'quickAccess.subtitle': 'Links rápidos para as principais ferramentas utilizadas no desenvolvimento e design.',
    'quickAccess.externalLinks': 'Links Externos',
    'quickAccess.figma': 'Figma',
    'quickAccess.figmaDesc': 'Prototipação e design de interfaces',
    'quickAccess.github': 'GitHub',
    'quickAccess.githubDesc': 'Versionamento e colaboração de código',
    'quickAccess.gemini': 'Gemini',
    'quickAccess.geminiDesc': 'IA do Google para produtividade',
    'quickAccess.chatgpt': 'ChatGPT',
    'quickAccess.chatgptDesc': 'Assistente de IA da OpenAI',
    'quickAccess.zeroheight': 'ZeroHeight',
    'quickAccess.zeroheightDesc': 'Documentação de design systems',
    'quickAccess.notion': 'Notion',
    'quickAccess.notionDesc': 'Workspace colaborativo e documentação',
    
    // Motion page
    'motion.title': 'Motion & Microinterações',
    'motion.subtitle': 'Animações e transições que elevam a experiência do usuário através de feedback visual, orientação e deleite.',
    'motion.principles': 'Princípios de Motion',
    'motion.timing': 'Timing & Easing',
    'motion.microinteractions': 'Biblioteca de Microinterações',
    'motion.examples': 'Exemplos por Dispositivo',
    'motion.bestPractices': 'Boas Práticas',
    'motion.references': 'Artigos de Referência',
    
    // Colors page
    'colors.title': 'Cores & Tokens',
    'colors.subtitle': 'Paleta completa do NDS com variações para dark/light mode. Todos os tokens seguem padrões WCAG 2.1 AA para contraste.',
    'colors.nds': 'Cores NDS',
    'colors.ndsDesc': 'Paleta principal do Nuri Design System - tons de roxo (#4D0C83)',
    'colors.neutral': 'Cores Neutras',
    'colors.neutralDesc': 'Escala de cinzas para textos e backgrounds',
    'colors.semantic': 'Cores Semânticas',
    'colors.semanticDesc': 'Feedback e comunicação de estados',
    'colors.light': 'Light',
    'colors.dark': 'Dark',
    'colors.compare': 'Comparar',
    'colors.howToUse': 'Como usar os tokens NDS',
    
    // Typography page
    'typography.title': 'Tipografia',
    'typography.subtitle': 'Escala tipográfica hierárquica responsiva com especificações para Figma',
    
    // Shadows page
    'shadows.title': 'Sombras',
    'shadows.subtitle': 'Elevação e profundidade através de sombras consistentes',
    
    // Icons page
    'icons.title': 'Ícones',
    'icons.subtitle': 'Coleção completa com Lucide React e ícones customizados',
    
    // Grid page
    'grid.title': 'Grid System',
    'grid.subtitle': 'Layouts responsivos e sistemas de espaçamento',
    
    // Components page
    'components.title': 'UI Components',
    'components.subtitle': 'Componentes prontos para usar em seus projetos',
    
    // Navigation page
    'navigation.title': 'Navegação',
    'navigation.subtitle': 'Headers, navbars, bottom navigation e sidebars responsivos',
    
    // Forms page
    'forms.title': 'Formulários',
    'forms.subtitle': 'Inputs, modais, toasts, accordions e componentes interativos',
    
    // Atomic Design page
    'atomic.title': 'Atomic Design',
    'atomic.subtitle': 'Atomic Design é uma metodologia criada por Brad Frost para criar sistemas de design de forma modular e escalável.',
    
    // Naming page
    'naming.title': 'Nomenclatura',
    'naming.subtitle': 'Organização, padronização e boas práticas para design systems',
    
    // Guidelines page
    'guidelines.title': 'Diretrizes Nuri',
    'guidelines.subtitle': 'Princípios fundamentais e melhores práticas para experiência do usuário',
    
    // Documentation page
    'documentation.title': 'Manual de Uso',
    'documentation.subtitle': 'Como usar este design system de forma eficaz',
    
    // Developer Guide page
    'developer.title': 'Guia para Desenvolvedores',
    'developer.subtitle': 'Boas práticas para implementar o Nuri Design System e colaborar efetivamente com o time de design.',
    
    // Figma pages
    'figma.title': 'Figma Plus',
    'figma.subtitle': 'Templates e recursos para Figma',
    'figmaIntegration.title': 'Integração Figma',
    'figmaIntegration.subtitle': 'Sincronize os tokens do NDS com seu arquivo Figma usando o plugin Tokens Studio.',
    
    // Common
    'common.copied': 'Copiado!',
    'common.copy': 'Copiar',
    'common.copyCode': 'Copiar código',
    'common.download': 'Baixar',
    'common.seeMore': 'Saiba mais',
    'common.close': 'Fechar',
    'common.search': 'Pesquisar',
    'common.filter': 'Filtrar',
    'common.all': 'Todos',
  },
  en: {
    // Header
    'header.search': 'Search...',
    'header.noResults': 'No results found',
    
    // Navigation groups
    'nav.foundations': 'Foundations',
    'nav.components': 'Components',
    'nav.patterns': 'Patterns',
    'nav.resources': 'Resources',
    'nav.quickAccess': 'Quick Access',
    'nav.externalLinks': 'External Links',
    
    // Navigation items
    'nav.colors': 'Colors',
    'nav.typography': 'Typography',
    'nav.shadows': 'Shadows',
    'nav.icons': 'Icons',
    'nav.grid': 'Grid System',
    'nav.components.ui': 'UI Components',
    'nav.navigation': 'Navigation',
    'nav.forms': 'Forms',
    'nav.atomic': 'Atomic Design',
    'nav.naming': 'Naming Conventions',
    'nav.motion': 'Motion',
    'nav.figma': 'Figma Plus',
    'nav.figmaIntegration': 'Figma Integration',
    'nav.developerGuide': 'Dev Guide',
    'nav.documentation': 'User Manual',
    'nav.guidelines': 'Nuri Guidelines',
    
    // Home page
    'home.version': 'DESIGN SYSTEM v2.0',
    'home.title1': 'Learn. Build.',
    'home.title2': 'Evolve.',
    'home.subtitle': 'Component system, patterns and tokens to support learning and creating accessible and scalable interfaces.',
    'home.foundationsDesc': 'The fundamental principles that shape the design system, from colors and typography to layout and interaction.',
    'home.componentsDesc': 'Reusable components that ensure visual and functional consistency throughout the product.',
    'home.patternsDesc': 'Patterns and methodologies to build scalable and well-documented interfaces.',
    'home.resourcesDesc': 'Tools and resources to integrate the design system into your workflow.',
    'home.quickAccessDesc': 'Quick links to the main tools used in development and design.',
    
    // Quick Access
    'quickAccess.title': 'Quick Access',
    'quickAccess.subtitle': 'Quick links to the main tools used in development and design.',
    'quickAccess.externalLinks': 'External Links',
    'quickAccess.figma': 'Figma',
    'quickAccess.figmaDesc': 'Interface prototyping and design',
    'quickAccess.github': 'GitHub',
    'quickAccess.githubDesc': 'Code versioning and collaboration',
    'quickAccess.gemini': 'Gemini',
    'quickAccess.geminiDesc': 'Google AI for productivity',
    'quickAccess.chatgpt': 'ChatGPT',
    'quickAccess.chatgptDesc': 'OpenAI AI assistant',
    'quickAccess.zeroheight': 'ZeroHeight',
    'quickAccess.zeroheightDesc': 'Design systems documentation',
    'quickAccess.notion': 'Notion',
    'quickAccess.notionDesc': 'Collaborative workspace and documentation',
    
    // Motion page
    'motion.title': 'Motion & Microinteractions',
    'motion.subtitle': 'Animations and transitions that enhance user experience through visual feedback, guidance and delight.',
    'motion.principles': 'Motion Principles',
    'motion.timing': 'Timing & Easing',
    'motion.microinteractions': 'Microinteractions Library',
    'motion.examples': 'Examples by Device',
    'motion.bestPractices': 'Best Practices',
    'motion.references': 'Reference Articles',
    
    // Colors page
    'colors.title': 'Colors & Tokens',
    'colors.subtitle': 'Complete NDS palette with dark/light mode variations. All tokens follow WCAG 2.1 AA contrast standards.',
    'colors.nds': 'NDS Colors',
    'colors.ndsDesc': 'Nuri Design System main palette - purple tones (#4D0C83)',
    'colors.neutral': 'Neutral Colors',
    'colors.neutralDesc': 'Gray scale for text and backgrounds',
    'colors.semantic': 'Semantic Colors',
    'colors.semanticDesc': 'Feedback and state communication',
    'colors.light': 'Light',
    'colors.dark': 'Dark',
    'colors.compare': 'Compare',
    'colors.howToUse': 'How to use NDS tokens',
    
    // Typography page
    'typography.title': 'Typography',
    'typography.subtitle': 'Responsive hierarchical typography scale with Figma specifications',
    
    // Shadows page
    'shadows.title': 'Shadows',
    'shadows.subtitle': 'Elevation and depth through consistent shadows',
    
    // Icons page
    'icons.title': 'Icons',
    'icons.subtitle': 'Complete collection with Lucide React and custom icons',
    
    // Grid page
    'grid.title': 'Grid System',
    'grid.subtitle': 'Responsive layouts and spacing systems',
    
    // Components page
    'components.title': 'UI Components',
    'components.subtitle': 'Ready-to-use components for your projects',
    
    // Navigation page
    'navigation.title': 'Navigation',
    'navigation.subtitle': 'Responsive headers, navbars, bottom navigation and sidebars',
    
    // Forms page
    'forms.title': 'Forms',
    'forms.subtitle': 'Inputs, modals, toasts, accordions and interactive components',
    
    // Atomic Design page
    'atomic.title': 'Atomic Design',
    'atomic.subtitle': 'Atomic Design is a methodology created by Brad Frost to create design systems in a modular and scalable way.',
    
    // Naming page
    'naming.title': 'Naming Conventions',
    'naming.subtitle': 'Organization, standardization and best practices for design systems',
    
    // Guidelines page
    'guidelines.title': 'Nuri Guidelines',
    'guidelines.subtitle': 'Fundamental principles and best practices for user experience',
    
    // Documentation page
    'documentation.title': 'User Manual',
    'documentation.subtitle': 'How to use this design system effectively',
    
    // Developer Guide page
    'developer.title': 'Developer Guide',
    'developer.subtitle': 'Best practices for implementing the Nuri Design System and collaborating effectively with the design team.',
    
    // Figma pages
    'figma.title': 'Figma Plus',
    'figma.subtitle': 'Templates and resources for Figma',
    'figmaIntegration.title': 'Figma Integration',
    'figmaIntegration.subtitle': 'Sync NDS tokens with your Figma file using the Tokens Studio plugin.',
    
    // Common
    'common.copied': 'Copied!',
    'common.copy': 'Copy',
    'common.copyCode': 'Copy code',
    'common.download': 'Download',
    'common.seeMore': 'Learn more',
    'common.close': 'Close',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
