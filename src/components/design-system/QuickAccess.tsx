import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

import figmaLogo from '@/assets/logos/figma.png';
import githubLogo from '@/assets/logos/github.png';
import geminiLogo from '@/assets/logos/gemini.png';
import chatgptLogo from '@/assets/logos/chatgpt.png';
import zeroheightLogo from '@/assets/logos/zeroheight.jpg';
import notionLogo from '@/assets/logos/notion.png';

const QuickAccess = () => {
  const { t } = useLanguage();

  const externalLinks = [
    {
      name: t('quickAccess.figma'),
      description: t('quickAccess.figmaDesc'),
      logo: figmaLogo,
      url: 'https://www.figma.com'
    },
    {
      name: t('quickAccess.github'),
      description: t('quickAccess.githubDesc'),
      logo: githubLogo,
      url: 'https://github.com'
    },
    {
      name: t('quickAccess.gemini'),
      description: t('quickAccess.geminiDesc'),
      logo: geminiLogo,
      url: 'https://gemini.google.com'
    },
    {
      name: t('quickAccess.chatgpt'),
      description: t('quickAccess.chatgptDesc'),
      logo: chatgptLogo,
      url: 'https://chat.openai.com'
    },
    {
      name: t('quickAccess.zeroheight'),
      description: t('quickAccess.zeroheightDesc'),
      logo: zeroheightLogo,
      url: 'https://zeroheight.com'
    },
    {
      name: t('quickAccess.notion'),
      description: t('quickAccess.notionDesc'),
      logo: notionLogo,
      url: 'https://www.notion.so'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          {t('quickAccess.title')}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t('quickAccess.subtitle')}
        </p>
      </div>

      {/* External Links Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">
          {t('quickAccess.externalLinks')}
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {externalLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-elevation-3 hover:border-primary/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <img 
                  src={link.logo} 
                  alt={link.name}
                  className="w-12 h-12 object-contain rounded-lg"
                />
                <ExternalLink 
                  size={18} 
                  className="text-muted-foreground group-hover:text-primary transition-colors" 
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {link.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
