import React from 'react';
import { Code, GitBranch, FileCode, CheckCircle, AlertTriangle, Lightbulb, Users, BookOpen, Wrench } from 'lucide-react';

const DeveloperGuide = () => {
  const bestPractices = [
    {
      title: 'Use Tokens, Não Valores Fixos',
      description: 'Sempre utilize os tokens de design (cores, espaçamentos, tipografia) ao invés de valores hardcoded. Isso garante consistência e facilita manutenção.',
      icon: Code,
      doExample: 'className="text-primary bg-muted p-4"',
      dontExample: 'className="text-blue-500 bg-gray-100 p-[16px]"'
    },
    {
      title: 'Componentes Semânticos',
      description: 'Utilize os componentes do design system ao invés de criar elementos do zero. Eles já possuem acessibilidade e responsividade incorporadas.',
      icon: FileCode,
      doExample: '<Button variant="primary">Enviar</Button>',
      dontExample: '<button className="custom-btn">Enviar</button>'
    },
    {
      title: 'Respeite a Hierarquia',
      description: 'Siga a estrutura Atomic Design: átomos → moléculas → organismos. Não pule níveis ou crie componentes monolíticos.',
      icon: GitBranch,
      doExample: 'Card > CardHeader > Avatar + Title',
      dontExample: 'MegaCardWithEverything'
    }
  ];

  const collaborationTips = [
    {
      icon: Users,
      title: 'Comunicação Contínua',
      description: 'Mantenha um canal aberto com designers. Tire dúvidas antes de implementar e compartilhe limitações técnicas cedo.'
    },
    {
      icon: BookOpen,
      title: 'Documente Variações',
      description: 'Se precisar criar uma variação de componente, documente o motivo e avise o time de design para manter o sistema sincronizado.'
    },
    {
      icon: Wrench,
      title: 'Proponha Melhorias',
      description: 'Identifique padrões repetitivos no código e sugira novos componentes ou tokens ao design system.'
    }
  ];

  const codeGuidelines = [
    {
      title: 'Estrutura de Arquivos',
      items: [
        'Componentes em /components com subpastas por domínio',
        'Hooks customizados em /hooks',
        'Tokens e styles globais em /styles ou index.css',
        'Tipos e interfaces em /types ou junto ao componente'
      ]
    },
    {
      title: 'Nomenclatura',
      items: [
        'Componentes em PascalCase: Button, CardHeader',
        'Hooks com prefixo use: useModal, useToast',
        'Variáveis e funções em camelCase: handleClick, isActive',
        'Constantes em SCREAMING_SNAKE: MAX_ITEMS, API_URL'
      ]
    },
    {
      title: 'Acessibilidade',
      items: [
        'Sempre adicione aria-labels em botões com apenas ícone',
        'Use elementos semânticos: <nav>, <main>, <section>',
        'Garanta contraste mínimo de 4.5:1 para texto',
        'Teste navegação por teclado em todos os componentes interativos'
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          Guia para Desenvolvedores
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Boas práticas para implementar o Nuri Design System e colaborar 
          efetivamente com o time de design.
        </p>
      </div>

      {/* Best Practices */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">Boas Práticas</h2>
        
        <div className="space-y-6">
          {bestPractices.map((practice) => {
            const IconComponent = practice.icon;
            return (
              <div 
                key={practice.title}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center shrink-0">
                    <IconComponent className="text-background" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{practice.title}</h3>
                    <p className="text-muted-foreground mb-4">{practice.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-success-50 dark:bg-success-500/10 border border-success-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle size={16} className="text-success-600" />
                          <span className="text-sm font-medium text-success-700 dark:text-success-500">Faça</span>
                        </div>
                        <code className="text-xs font-mono text-foreground/80 break-all">
                          {practice.doExample}
                        </code>
                      </div>
                      
                      <div className="bg-error-50 dark:bg-error-500/10 border border-error-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle size={16} className="text-error-600" />
                          <span className="text-sm font-medium text-error-700 dark:text-error-500">Evite</span>
                        </div>
                        <code className="text-xs font-mono text-foreground/80 break-all">
                          {practice.dontExample}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Code Guidelines */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">Diretrizes de Código</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {codeGuidelines.map((guideline) => (
            <div 
              key={guideline.title}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{guideline.title}</h3>
              <ul className="space-y-3">
                {guideline.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">Colaboração com Designers</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {collaborationTips.map((tip) => {
            const IconComponent = tip.icon;
            return (
              <div 
                key={tip.title}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="text-background" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pro Tips */}
      <div className="bg-foreground text-background rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb size={24} />
          <h2 className="text-2xl font-semibold">Dicas Pro</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: 'Crie Storybook', 
              desc: 'Documente componentes isoladamente para facilitar testes e revisões com designers.' 
            },
            { 
              title: 'Automatize Tokens', 
              desc: 'Use ferramentas como Style Dictionary para gerar tokens automaticamente do Figma.' 
            },
            { 
              title: 'Teste de Regressão Visual', 
              desc: 'Implemente testes visuais para detectar mudanças não intencionais no design.' 
            },
            { 
              title: 'Design Review em PR', 
              desc: 'Convide designers para revisar PRs que afetam componentes do design system.' 
            }
          ].map((tip) => (
            <div key={tip.title}>
              <h3 className="font-semibold mb-2">{tip.title}</h3>
              <p className="text-background/70 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workflow */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">Workflow Recomendado</h2>
        
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-6">
            {[
              { step: 1, title: 'Receba o Design', desc: 'Analise o layout no Figma, identifique componentes existentes e novos.' },
              { step: 2, title: 'Planeje a Estrutura', desc: 'Defina quais componentes usar e se há necessidade de novos tokens.' },
              { step: 3, title: 'Implemente com Tokens', desc: 'Use sempre tokens do design system, nunca valores diretos.' },
              { step: 4, title: 'Revise com Designer', desc: 'Solicite review visual antes de finalizar o PR.' },
              { step: 5, title: 'Documente', desc: 'Atualize a documentação se criar variações ou novos padrões.' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 ml-2">
                <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold shrink-0 relative z-10">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperGuide;
