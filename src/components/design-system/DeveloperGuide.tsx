import React from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { Code, GitBranch, FileCode, CheckCircle, AlertTriangle, Lightbulb, Users, BookOpen, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DeveloperGuide = () => {
  const { l } = useLanguage();

  const bestPractices = [
    {
      title: l('Use Tokens, Não Valores Fixos', 'Use Tokens, Not Fixed Values'),
      description: l('Sempre utilize os tokens de design (cores, espaçamentos, tipografia) ao invés de valores hardcoded. Isso garante consistência e facilita manutenção.', 'Always use design tokens (colors, spacing, typography) instead of hardcoded values. This ensures consistency and easier maintenance.'),
      icon: Code,
      doExample: 'className="text-primary bg-muted p-4"',
      dontExample: 'className="text-blue-500 bg-gray-100 p-[16px]"'
    },
    {
      title: l('Componentes Semânticos', 'Semantic Components'),
      description: l('Utilize os componentes do design system ao invés de criar elementos do zero. Eles já possuem acessibilidade e responsividade incorporadas.', 'Use design system components instead of creating elements from scratch. They already have built-in accessibility and responsiveness.'),
      icon: FileCode,
      doExample: '<Button variant="primary">Submit</Button>',
      dontExample: '<button className="custom-btn">Submit</button>'
    },
    {
      title: l('Respeite a Hierarquia', 'Respect the Hierarchy'),
      description: l('Siga a estrutura Atomic Design: átomos → moléculas → organismos. Não pule níveis ou crie componentes monolíticos.', 'Follow the Atomic Design structure: atoms → molecules → organisms. Don\'t skip levels or create monolithic components.'),
      icon: GitBranch,
      doExample: 'Card > CardHeader > Avatar + Title',
      dontExample: 'MegaCardWithEverything'
    }
  ];

  const collaborationTips = [
    { icon: Users, title: l('Comunicação Contínua', 'Continuous Communication'), description: l('Mantenha um canal aberto com designers. Tire dúvidas antes de implementar e compartilhe limitações técnicas cedo.', 'Keep an open channel with designers. Ask questions before implementing and share technical limitations early.') },
    { icon: BookOpen, title: l('Documente Variações', 'Document Variations'), description: l('Se precisar criar uma variação de componente, documente o motivo e avise o time de design para manter o sistema sincronizado.', 'If you need to create a component variation, document the reason and notify the design team to keep the system in sync.') },
    { icon: Wrench, title: l('Proponha Melhorias', 'Propose Improvements'), description: l('Identifique padrões repetitivos no código e sugira novos componentes ou tokens ao design system.', 'Identify repetitive patterns in code and suggest new components or tokens to the design system.') }
  ];

  const codeGuidelines = [
    {
      title: l('Estrutura de Arquivos', 'File Structure'),
      items: [
        l('Componentes em /components com subpastas por domínio', 'Components in /components with subfolders by domain'),
        l('Hooks customizados em /hooks', 'Custom hooks in /hooks'),
        l('Tokens e styles globais em /styles ou index.css', 'Tokens and global styles in /styles or index.css'),
        l('Tipos e interfaces em /types ou junto ao componente', 'Types and interfaces in /types or alongside the component')
      ]
    },
    {
      title: l('Nomenclatura', 'Naming'),
      items: [
        l('Componentes em PascalCase: Button, CardHeader', 'Components in PascalCase: Button, CardHeader'),
        l('Hooks com prefixo use: useModal, useToast', 'Hooks with use prefix: useModal, useToast'),
        l('Variáveis e funções em camelCase: handleClick, isActive', 'Variables and functions in camelCase: handleClick, isActive'),
        l('Constantes em SCREAMING_SNAKE: MAX_ITEMS, API_URL', 'Constants in SCREAMING_SNAKE: MAX_ITEMS, API_URL')
      ]
    },
    {
      title: l('Acessibilidade', 'Accessibility'),
      items: [
        l('Sempre adicione aria-labels em botões com apenas ícone', 'Always add aria-labels to icon-only buttons'),
        l('Use elementos semânticos: <nav>, <main>, <section>', 'Use semantic elements: <nav>, <main>, <section>'),
        l('Garanta contraste mínimo de 4.5:1 para texto', 'Ensure minimum contrast of 4.5:1 for text'),
        l('Teste navegação por teclado em todos os componentes interativos', 'Test keyboard navigation on all interactive components')
      ]
    }
  ];

  return (
    <div className="space-y-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">{l('Guia para Desenvolvedores', 'Developer Guide')}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{l('Boas práticas para implementar o Nuri Design System e colaborar efetivamente com o time de design.', 'Best practices for implementing the Nuri Design System and collaborating effectively with the design team.')}</p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">{l('Boas Práticas', 'Best Practices')}</h2>
        <div className="space-y-6">
          {bestPractices.map((practice) => {
            const IconComponent = practice.icon;
            return (
              <div key={practice.title} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center shrink-0"><IconComponent className="text-background" size={20} /></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{practice.title}</h3>
                    <p className="text-muted-foreground mb-4">{practice.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-success-50 dark:bg-success-500/10 border border-success-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle size={16} className="text-success-600" />
                          <span className="text-sm font-medium text-success-700 dark:text-success-500">{l('Faça', 'Do')}</span>
                        </div>
                        <code className="text-xs font-mono text-foreground/80 break-all">{practice.doExample}</code>
                      </div>
                      <div className="bg-error-50 dark:bg-error-500/10 border border-error-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle size={16} className="text-error-600" />
                          <span className="text-sm font-medium text-error-700 dark:text-error-500">{l('Evite', 'Avoid')}</span>
                        </div>
                        <code className="text-xs font-mono text-foreground/80 break-all">{practice.dontExample}</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">{l('Diretrizes de Código', 'Code Guidelines')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {codeGuidelines.map((guideline) => (
            <div key={guideline.title} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{guideline.title}</h3>
              <ul className="space-y-3">
                {guideline.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">{l('Colaboração com Designers', 'Collaboration with Designers')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {collaborationTips.map((tip) => {
            const IconComponent = tip.icon;
            return (
              <div key={tip.title} className="bg-card border border-border rounded-lg p-6">
                <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center mb-4"><IconComponent className="text-background" size={20} /></div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-foreground text-background rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb size={24} />
          <h2 className="text-2xl font-semibold">{l('Dicas Pro', 'Pro Tips')}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: l('Crie Storybook', 'Create Storybook'), desc: l('Documente componentes isoladamente para facilitar testes e revisões com designers.', 'Document components in isolation to facilitate testing and reviews with designers.') },
            { title: l('Automatize Tokens', 'Automate Tokens'), desc: l('Use ferramentas como Style Dictionary para gerar tokens automaticamente do Figma.', 'Use tools like Style Dictionary to automatically generate tokens from Figma.') },
            { title: l('Teste de Regressão Visual', 'Visual Regression Testing'), desc: l('Implemente testes visuais para detectar mudanças não intencionais no design.', 'Implement visual tests to detect unintended design changes.') },
            { title: l('Design Review em PR', 'Design Review in PR'), desc: l('Convide designers para revisar PRs que afetam componentes do design system.', 'Invite designers to review PRs that affect design system components.') }
          ].map((tip) => (
            <div key={tip.title}>
              <h3 className="font-semibold mb-2">{tip.title}</h3>
              <p className="text-background/70 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">{l('Workflow Recomendado', 'Recommended Workflow')}</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-6">
            {[
              { step: 1, title: l('Receba o Design', 'Receive the Design'), desc: l('Analise o layout no Figma, identifique componentes existentes e novos.', 'Analyze the layout in Figma, identify existing and new components.') },
              { step: 2, title: l('Planeje a Estrutura', 'Plan the Structure'), desc: l('Defina quais componentes usar e se há necessidade de novos tokens.', 'Define which components to use and if new tokens are needed.') },
              { step: 3, title: l('Implemente com Tokens', 'Implement with Tokens'), desc: l('Use sempre tokens do design system, nunca valores diretos.', 'Always use design system tokens, never direct values.') },
              { step: 4, title: l('Revise com Designer', 'Review with Designer'), desc: l('Solicite review visual antes de finalizar o PR.', 'Request visual review before finalizing the PR.') },
              { step: 5, title: l('Documente', 'Document'), desc: l('Atualize a documentação se criar variações ou novos padrões.', 'Update documentation if creating variations or new patterns.') }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 ml-2">
                <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold shrink-0 relative z-10">{item.step}</div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default DeveloperGuide;
