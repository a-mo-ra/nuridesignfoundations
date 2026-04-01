import React from 'react';
import { Circle, Square, Hexagon, Box, Layout, Layers, ChevronRight } from 'lucide-react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { useLanguage } from '@/contexts/LanguageContext';

const AtomicDesign = () => {
  const { l } = useLanguage();

  const atomicLevels = [
    {
      name: l('Átomos', 'Atoms'),
      icon: Circle,
      description: l('Os blocos de construção fundamentais. Elementos HTML básicos como labels, inputs, botões e cores que não podem ser divididos sem perder seu significado.', 'The fundamental building blocks. Basic HTML elements like labels, inputs, buttons and colors that cannot be broken down without losing their meaning.'),
      examples: l('Botões,Inputs,Labels,Ícones,Cores,Tipografia', 'Buttons,Inputs,Labels,Icons,Colors,Typography').split(','),
      visual: (
        <div className="flex items-center justify-center gap-4 p-6">
          <div className="w-8 h-8 rounded-full bg-primary" />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">Button</button>
          <div className="w-20 h-8 bg-primary/20 rounded border border-primary/30" />
        </div>
      )
    },
    {
      name: l('Moléculas', 'Molecules'),
      icon: Hexagon,
      description: l('Grupos de átomos funcionando juntos como uma unidade. Por exemplo, um campo de busca que combina label, input e botão.', 'Groups of atoms working together as a unit. For example, a search field that combines label, input and button.'),
      examples: l('Campo de busca,Card de produto,Item de menu,Avatar com nome,Toggle com label', 'Search field,Product card,Menu item,Avatar with name,Toggle with label').split(','),
      visual: (
        <div className="flex items-center justify-center p-6">
          <div className="flex items-center bg-primary/10 rounded-lg border border-primary/20 overflow-hidden">
            <input type="text" placeholder="Search..." className="px-4 py-2 bg-transparent text-sm outline-none w-40" readOnly />
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium">{l('Buscar', 'Search')}</button>
          </div>
        </div>
      )
    },
    {
      name: l('Organismos', 'Organisms'),
      icon: Box,
      description: l('Grupos de moléculas formando seções distintas da interface. São componentes relativamente complexos e autossuficientes.', 'Groups of molecules forming distinct interface sections. They are relatively complex, self-sufficient components.'),
      examples: ['Header', 'Footer', l('Card de artigo', 'Article card'), l('Formulário completo', 'Complete form'), 'Sidebar', 'Modal'],
      visual: (
        <div className="p-4">
          <div className="bg-card border border-primary/20 rounded-lg overflow-hidden">
            <div className="h-20 bg-primary/10 flex items-center justify-center"><div className="w-16 h-16 bg-primary/20 rounded-lg" /></div>
            <div className="p-4 space-y-2">
              <div className="h-4 bg-primary/15 rounded w-3/4" />
              <div className="h-3 bg-primary/10 rounded w-1/2" />
              <div className="flex gap-2 mt-3"><div className="h-8 bg-primary rounded-lg flex-1" /><div className="h-8 bg-primary/20 rounded-lg w-8" /></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'Templates',
      icon: Layout,
      description: l('Estruturas de página que organizam organismos em layouts. Focam na estrutura de conteúdo, não no conteúdo real.', 'Page structures that organize organisms into layouts. They focus on content structure, not actual content.'),
      examples: [l('Layout de página', 'Page layout'), l('Grid de produtos', 'Product grid'), l('Layout de dashboard', 'Dashboard layout'), l('Layout de blog', 'Blog layout')],
      visual: (
        <div className="p-4">
          <div className="bg-card border border-primary/20 rounded-lg overflow-hidden">
            <div className="h-6 bg-primary/15 border-b border-primary/20" />
            <div className="flex">
              <div className="w-1/4 bg-primary/5 p-2 space-y-1 border-r border-primary/20"><div className="h-2 bg-primary/20 rounded" /><div className="h-2 bg-primary/15 rounded w-3/4" /><div className="h-2 bg-primary/10 rounded w-1/2" /></div>
              <div className="flex-1 p-2 grid grid-cols-2 gap-1"><div className="h-8 bg-primary/10 rounded" /><div className="h-8 bg-primary/10 rounded" /><div className="h-8 bg-primary/10 rounded" /><div className="h-8 bg-primary/10 rounded" /></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: l('Páginas', 'Pages'),
      icon: Layers,
      description: l('Instâncias específicas de templates com conteúdo real. São o resultado final que os usuários visualizam e interagem.', 'Specific template instances with real content. They are the final result that users view and interact with.'),
      examples: ['Home page', l('Página de produto', 'Product page'), l('Dashboard do usuário', 'User dashboard'), l('Página de checkout', 'Checkout page')],
      visual: (
        <div className="p-4">
          <div className="bg-card border border-primary/20 rounded-lg overflow-hidden">
            <div className="h-6 bg-primary flex items-center px-2 gap-1"><div className="w-2 h-2 bg-primary-foreground/30 rounded-full" /><div className="w-2 h-2 bg-primary-foreground/30 rounded-full" /><div className="w-2 h-2 bg-primary-foreground/30 rounded-full" /></div>
            <div className="p-2 space-y-2">
              <div className="h-12 bg-primary/20 rounded flex items-center justify-center"><span className="text-[8px] text-primary font-medium">HERO</span></div>
              <div className="grid grid-cols-3 gap-1"><div className="h-6 bg-primary/10 rounded" /><div className="h-6 bg-primary/10 rounded" /><div className="h-6 bg-primary/10 rounded" /></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const buildProcess = [
    { step: 1, title: l('Inventário de Interface', 'Interface Inventory'), description: l('Faça um levantamento de todos os elementos existentes no produto ou defina os elementos necessários para o novo produto.', 'Survey all existing elements in the product or define the necessary elements for the new product.') },
    { step: 2, title: l('Definir Átomos', 'Define Atoms'), description: l('Identifique os elementos mais básicos: cores, tipografia, espaçamentos, ícones, botões simples e inputs.', 'Identify the most basic elements: colors, typography, spacing, icons, simple buttons and inputs.') },
    { step: 3, title: l('Criar Moléculas', 'Create Molecules'), description: l('Combine átomos para criar componentes funcionais como campos de formulário, cards simples e navegação básica.', 'Combine atoms to create functional components like form fields, simple cards and basic navigation.') },
    { step: 4, title: l('Montar Organismos', 'Build Organisms'), description: l('Agrupe moléculas em seções maiores da interface como headers, footers, sidebars e formulários completos.', 'Group molecules into larger interface sections like headers, footers, sidebars and complete forms.') },
    { step: 5, title: l('Estruturar Templates', 'Structure Templates'), description: l('Defina layouts de página que organizam os organismos, criando a estrutura sem conteúdo específico.', 'Define page layouts that organize organisms, creating the structure without specific content.') },
    { step: 6, title: l('Construir Páginas', 'Build Pages'), description: l('Preencha os templates com conteúdo real, criando as páginas finais que os usuários irão utilizar.', 'Fill templates with real content, creating the final pages that users will use.') }
  ];

  return (
    <div className="space-y-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">Atomic Design</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {l('Atomic Design é uma metodologia criada por Brad Frost para criar sistemas de design de forma modular e escalável. A abordagem divide a interface em cinco níveis distintos de abstração.',
             'Atomic Design is a methodology created by Brad Frost to create design systems in a modular and scalable way. The approach divides the interface into five distinct levels of abstraction.')}
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">{l('Os 5 Níveis', 'The 5 Levels')}</h2>
        <div className="grid gap-6">
          {atomicLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <div key={level.name} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="grid lg:grid-cols-[1fr,300px]">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center"><IconComponent className="text-background" size={20} /></div>
                      <div>
                        <span className="text-xs text-muted-foreground font-medium">{l('Nível', 'Level')} {index + 1}</span>
                        <h3 className="text-xl font-semibold text-foreground">{level.name}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{level.description}</p>
                    <div>
                      <span className="text-sm font-medium text-foreground mb-2 block">{l('Exemplos:', 'Examples:')}</span>
                      <div className="flex flex-wrap gap-2">
                        {level.examples.map((example) => (
                          <span key={example} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">{example}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/5 border-t lg:border-t-0 lg:border-l border-primary/20 flex items-center justify-center min-h-[200px]">{level.visual}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-foreground">{l('Processo de Construção', 'Build Process')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {buildProcess.map((item) => (
            <div key={item.step} className="bg-card border border-border rounded-lg p-6">
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-4">{item.step}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">{l('Por que usar Atomic Design?', 'Why use Atomic Design?')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChevronRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">{l('Benefícios Imediatos', 'Immediate Benefits')}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {l('Componentes reutilizáveis garantem uma UI consistente', 'Reusable components ensure a consistent UI')}</li>
              <li>• {l('Redução de 60% no tempo de busca por componentes', '60% reduction in component search time')}</li>
              <li>• {l('Menor chance de inconsistências visuais', 'Lower chance of visual inconsistencies')}</li>
              <li>• {l('Facilita onboarding de novos designers', 'Facilitates onboarding of new designers')}</li>
              <li>• {l('Melhora comunicação entre design e desenvolvimento', 'Improves communication between design and development')}</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChevronRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">{l('Benefícios a Longo Prazo', 'Long-term Benefits')}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {l('Escalabilidade do design system', 'Design system scalability')}</li>
              <li>• {l('Manutenção mais eficiente', 'More efficient maintenance')}</li>
              <li>• {l('Facilita mudanças de tema/rebrand', 'Facilitates theme changes/rebrand')}</li>
              <li>• {l('Base sólida para automações', 'Solid foundation for automation')}</li>
              <li>• {l('Vocabulário comum entre designers e desenvolvedores', 'Common vocabulary between designers and developers')}</li>
            </ul>
          </div>
        </div>
      </div>

      <DigitalChecklist />
    </div>
  );
};

export default AtomicDesign;
