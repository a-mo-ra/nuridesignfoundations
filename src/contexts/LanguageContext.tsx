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
    'nav.foundations': 'Foundations',
    'nav.components': 'Components',
    'nav.patterns': 'Patterns',
    'nav.resources': 'Resources',
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
    'motion.subtitle': 'Animações e transições que melhoram a experiência do usuário através de feedback visual.',
    'motion.principles': 'Princípios de Motion',
    'motion.timing': 'Timing & Easing',
    'motion.microinteractions': 'Microinterações',
    'motion.examples': 'Exemplos por Dispositivo',
    'motion.bestPractices': 'Boas Práticas',
    'motion.references': 'Referências',
    
    // Common
    'common.copied': 'Copiado!',
    'common.copy': 'Copiar',
    'common.download': 'Baixar',
    'common.seeMore': 'Saiba mais',
    'common.close': 'Fechar',
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
    'motion.subtitle': 'Animations and transitions that enhance user experience through visual feedback.',
    'motion.principles': 'Motion Principles',
    'motion.timing': 'Timing & Easing',
    'motion.microinteractions': 'Microinteractions',
    'motion.examples': 'Examples by Device',
    'motion.bestPractices': 'Best Practices',
    'motion.references': 'References',
    
    // Common
    'common.copied': 'Copied!',
    'common.copy': 'Copy',
    'common.download': 'Download',
    'common.seeMore': 'Learn more',
    'common.close': 'Close',
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
