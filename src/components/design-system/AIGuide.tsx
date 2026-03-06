import React from 'react';
import { Sparkles, Lightbulb, FileText, Palette, PenTool, Terminal, Plug, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import DigitalChecklist from '@/components/shared/DigitalChecklist';

const AIGuide = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-16">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-3">{t('ai.title')}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">{t('ai.subtitle')}</p>
      </div>

      {/* What is AI in Design */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">{t('ai.whatIs')}</h2>
        <p className="text-muted-foreground leading-relaxed">{t('ai.whatIsDesc')}</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { icon: Palette, titleKey: 'ai.area.design', descKey: 'ai.area.designDesc' },
            { icon: FileText, titleKey: 'ai.area.docs', descKey: 'ai.area.docsDesc' },
            { icon: PenTool, titleKey: 'ai.area.copy', descKey: 'ai.area.copyDesc' },
          ].map((item) => (
            <div key={item.titleKey} className="p-5 border border-border rounded-lg">
              <item.icon size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{t(item.titleKey)}</h3>
              <p className="text-sm text-muted-foreground">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">{t('ai.bestPractices')}</h2>
        <div className="space-y-4">
          {(['prototyping', 'documentation', 'designSystem', 'copywriting'] as const).map((area) => (
            <div key={area} className="p-5 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">{t(`ai.bp.${area}`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`ai.bp.${area}Desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt Engineering */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">{t('ai.prompts')}</h2>
        <p className="text-muted-foreground">{t('ai.promptsDesc')}</p>
        
        <div className="space-y-4">
          {(['chatgpt', 'gemini', 'claude', 'figmaMake'] as const).map((model) => (
            <div key={model} className="border border-border rounded-lg overflow-hidden">
              <div className="px-5 py-3 bg-muted/50 flex items-center gap-2">
                <Terminal size={16} className="text-primary" />
                <span className="font-semibold text-foreground text-sm">{t(`ai.model.${model}`)}</span>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm text-muted-foreground">{t(`ai.model.${model}Desc`)}</p>
                <div className="bg-muted p-4 rounded-lg font-mono text-xs text-foreground whitespace-pre-wrap">
                  {t(`ai.model.${model}Prompt`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MCP */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">{t('ai.mcp')}</h2>
        <p className="text-muted-foreground leading-relaxed">{t('ai.mcpDesc')}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">{t('ai.mcpWhat')}</h3>
            <p className="text-sm text-muted-foreground">{t('ai.mcpWhatDesc')}</p>
          </div>
          <div className="p-5 border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">{t('ai.mcpWhen')}</h3>
            <p className="text-sm text-muted-foreground">{t('ai.mcpWhenDesc')}</p>
          </div>
        </div>
      </section>

      {/* Reference Articles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">{t('ai.references')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Nielsen Norman Group – AI in UX Design', url: 'https://www.nngroup.com/articles/ai-ux-getting-started/' },
            { title: 'Figma – AI and the Future of Design', url: 'https://www.figma.com/blog/ai-and-design/' },
            { title: 'Anthropic – Prompt Engineering Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering' },
            { title: 'OpenAI – Best Practices for Prompt Engineering', url: 'https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api' },
            { title: 'Google – Generative AI for Designers', url: 'https://design.google/library/ai-design-tools' },
            { title: 'MCP Protocol Documentation', url: 'https://modelcontextprotocol.io/' },
          ].map((ref) => (
            <a
              key={ref.url}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{ref.title}</span>
              <ExternalLink size={14} className="text-muted-foreground" />
            </a>
          ))}
        </div>
      </section>

      {/* Guidelines */}
      <div className="bg-primary/5 rounded-xl p-8 space-y-4">
        <h3 className="text-lg font-bold text-foreground">{t('ai.guidelines')}</h3>
        <ul className="space-y-2">
          {[1,2,3,4,5].map((i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              {t(`ai.guideline${i}`)}
            </li>
          ))}
        </ul>
      </div>

      <DigitalChecklist />
    </div>
  );
};

export default AIGuide;
