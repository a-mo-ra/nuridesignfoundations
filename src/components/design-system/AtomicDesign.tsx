import React from 'react';
import { Circle, Square, Hexagon, Box, Layout, Layers, ChevronRight } from 'lucide-react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';

const AtomicDesign = () => {
  const atomicLevels = [
    {
      name: 'Átomos',
      icon: Circle,
      description: 'Os blocos de construção fundamentais. Elementos HTML básicos como labels, inputs, botões e cores que não podem ser divididos sem perder seu significado.',
      examples: ['Botões', 'Inputs', 'Labels', 'Ícones', 'Cores', 'Tipografia'],
      visual: (
        <div className="flex items-center justify-center gap-4 p-6">
          <div className="w-8 h-8 rounded-full bg-primary" />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">Button</button>
          <div className="w-20 h-8 bg-primary/20 rounded border border-primary/30" />
        </div>
      )
    },
    {
      name: 'Moléculas',
      icon: Hexagon,
      description: 'Grupos de átomos funcionando juntos como uma unidade. Por exemplo, um campo de busca que combina label, input e botão.',
      examples: ['Campo de busca', 'Card de produto', 'Item de menu', 'Avatar com nome', 'Toggle com label'],
      visual: (
        <div className="flex items-center justify-center p-6">
          <div className="flex items-center bg-primary/10 rounded-lg border border-primary/20 overflow-hidden">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 bg-transparent text-sm outline-none w-40"
              readOnly
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium">
              Buscar
            </button>
          </div>
        </div>
      )
    },
    {
      name: 'Organismos',
      icon: Box,
      description: 'Grupos de moléculas formando seções distintas da interface. São componentes relativamente complexos e autossuficientes.',
      examples: ['Header', 'Footer', 'Card de artigo', 'Formulário completo', 'Sidebar', 'Modal'],
      visual: (
        <div className="p-4">
          <div className="bg-card border border-primary/20 rounded-lg overflow-hidden">
            <div className="h-20 bg-primary/10 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg" />
            </div>
            <div className="p-4 space-y-2">
              <div className="h-4 bg-primary/15 rounded w-3/4" />
              <div className="h-3 bg-primary/10 rounded w-1/2" />
              <div className="flex gap-2 mt-3">
                <div className="h-8 bg-primary rounded-lg flex-1" />
                <div className="h-8 bg-primary/20 rounded-lg w-8" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Templates',
      icon: Layout,
      description: 'Estruturas de página que organizam organismos em layouts. Focam na estrutura de conteúdo, não no conteúdo real.',
      examples: ['Layout de página', 'Grid de produtos', 'Layout de dashboard', 'Layout de blog'],
      visual: (
        <div className="p-4">
          <div className="bg-card border border-primary/20 rounded-lg overflow-hidden">
            <div className="h-6 bg-primary/15 border-b border-primary/20" />
            <div className="flex">
              <div className="w-1/4 bg-primary/5 p-2 space-y-1 border-r border-primary/20">
                <div className="h-2 bg-primary/20 rounded" />
                <div className="h-2 bg-primary/15 rounded w-3/4" />
                <div className="h-2 bg-primary/10 rounded w-1/2" />
              </div>
              <div className="flex-1 p-2 grid grid-cols-2 gap-1">
                <div className="h-8 bg-primary/10 rounded" />
                <div className="h-8 bg-primary/10 rounded" />
                <div className="h-8 bg-primary/10 rounded" />
                <div className="h-8 bg-primary/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Páginas',
      icon: Layers,
      description: 'Instâncias específicas de templates com conteúdo real. São o resultado final que os usuários visualizam e interagem.',
      examples: ['Home page', 'Página de produto', 'Dashboard do usuário', 'Página de checkout'],
      visual: (
        <div className="p-4">
          <div className="bg-card border border-primary/20 rounded-lg overflow-hidden">
            <div className="h-6 bg-primary flex items-center px-2 gap-1">
              <div className="w-2 h-2 bg-primary-foreground/30 rounded-full" />
              <div className="w-2 h-2 bg-primary-foreground/30 rounded-full" />
              <div className="w-2 h-2 bg-primary-foreground/30 rounded-full" />
            </div>
            <div className="p-2 space-y-2">
              <div className="h-12 bg-primary/20 rounded flex items-center justify-center">
                <span className="text-[8px] text-primary font-medium">HERO</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-6 bg-primary/10 rounded" />
                <div className="h-6 bg-primary/10 rounded" />
                <div className="h-6 bg-primary/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const buildProcess = [
    {
      step: 1,
      title: 'Inventário de Interface',
      description: 'Faça um levantamento de todos os elementos existentes no produto ou defina os elementos necessários para o novo produto.'
    },
    {
      step: 2,
      title: 'Definir Átomos',
      description: 'Identifique os elementos mais básicos: cores, tipografia, espaçamentos, ícones, botões simples e inputs.'
    },
    {
      step: 3,
      title: 'Criar Moléculas',
      description: 'Combine átomos para criar componentes funcionais como campos de formulário, cards simples e navegação básica.'
    },
    {
      step: 4,
      title: 'Montar Organismos',
      description: 'Agrupe moléculas em seções maiores da interface como headers, footers, sidebars e formulários completos.'
    },
    {
      step: 5,
      title: 'Estruturar Templates',
      description: 'Defina layouts de página que organizam os organismos, criando a estrutura sem conteúdo específico.'
    },
    {
      step: 6,
      title: 'Construir Páginas',
      description: 'Preencha os templates com conteúdo real, criando as páginas finais que os usuários irão utilizar.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          Atomic Design
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Atomic Design é uma metodologia criada por Brad Frost para criar sistemas de design de forma modular e escalável. 
          A abordagem divide a interface em cinco níveis distintos de abstração.
        </p>
      </div>

      {/* Atomic Levels */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">Os 5 Níveis</h2>
        
        <div className="grid gap-6">
          {atomicLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <div 
                key={level.name}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <div className="grid lg:grid-cols-[1fr,300px]">
                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
                        <IconComponent className="text-background" size={20} />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-medium">Nível {index + 1}</span>
                        <h3 className="text-xl font-semibold text-foreground">{level.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {level.description}
                    </p>
                    
                    <div>
                      <span className="text-sm font-medium text-foreground mb-2 block">Exemplos:</span>
                      <div className="flex flex-wrap gap-2">
                        {level.examples.map((example) => (
                          <span 
                            key={example}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual Example */}
                  <div className="bg-primary/5 border-t lg:border-t-0 lg:border-l border-primary/20 flex items-center justify-center min-h-[200px]">
                    {level.visual}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Build Process */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">Processo de Construção</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {buildProcess.map((item) => (
            <div 
              key={item.step}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits - styled like reference with light purple background and collapsible */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Por que usar Atomic Design?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChevronRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">Benefícios Imediatos</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Componentes reutilizáveis garantem uma UI consistente</li>
              <li>• Redução de 60% no tempo de busca por componentes</li>
              <li>• Menor chance de inconsistências visuais</li>
              <li>• Facilita onboarding de novos designers</li>
              <li>• Melhora comunicação entre design e desenvolvimento</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChevronRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">Benefícios a Longo Prazo</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Escalabilidade do design system</li>
              <li>• Manutenção mais eficiente</li>
              <li>• Facilita mudanças de tema/rebrand</li>
              <li>• Base sólida para automações</li>
              <li>• Vocabulário comum entre designers e desenvolvedores</li>
            </ul>
          </div>
        </div>
      </div>

      <DigitalChecklist />
    </div>
  );
};

export default AtomicDesign;
