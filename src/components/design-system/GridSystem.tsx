
import React, { useState } from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { Book, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const GridSystem = () => {
  const { l } = useLanguage();
  const [copiedGrid, setCopiedGrid] = useState<string | null>(null);

  const gridSystems = [
    {
      name: 'Auto Fit 250px',
      class: 'grid-auto-fit-250',
      description: l('Grid responsivo com colunas mínimas de 250px', 'Responsive grid with minimum 250px columns'),
      usage: l('Cards de produtos, galeria de imagens', 'Product cards, image galleries'),
      code: 'grid grid-cols-auto-fit-250 gap-6'
    },
    {
      name: 'Auto Fit 300px',
      class: 'grid-auto-fit-300',
      description: l('Grid responsivo com colunas mínimas de 300px', 'Responsive grid with minimum 300px columns'),
      usage: l('Cards de conteúdo, portfolios', 'Content cards, portfolios'),
      code: 'grid grid-cols-auto-fit-300 gap-6'
    },
    {
      name: 'Auto Fill 200px',
      class: 'grid-auto-fill-200',
      description: l('Grid que preenche com colunas de 200px', 'Grid that fills with 200px columns'),
      usage: l('Thumbnails, ícones, elementos pequenos', 'Thumbnails, icons, small elements'),
      code: 'grid grid-cols-auto-fill-200 gap-4'
    }
  ];

  const responsiveGrids = [
    {
      name: '12 Column Grid',
      class: 'grid grid-cols-12 gap-6',
      description: l('Sistema clássico de 12 colunas', 'Classic 12-column system'),
      usage: l('Layouts complexos, dashboard', 'Complex layouts, dashboards')
    },
    {
      name: 'Responsive Cards',
      class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      description: l('1 coluna mobile, 2 tablet, 3 desktop', '1 column mobile, 2 tablet, 3 desktop'),
      usage: l('Cards de conteúdo, artigos', 'Content cards, articles')
    },
    {
      name: 'Sidebar Layout',
      class: 'grid grid-cols-1 lg:grid-cols-4 gap-6',
      description: l('Layout com sidebar em desktop', 'Layout with sidebar on desktop'),
      usage: l('Páginas de conteúdo com navegação lateral', 'Content pages with side navigation')
    }
  ];

  const spacingSystem = [
    { name: 'Extra Small', class: 'gap-2', value: '8px', usage: l('Elementos muito próximos', 'Very close elements') },
    { name: 'Small', class: 'gap-4', value: '16px', usage: l('Elementos relacionados', 'Related elements') },
    { name: 'Medium', class: 'gap-6', value: '24px', usage: l('Espaçamento padrão', 'Default spacing') },
    { name: 'Large', class: 'gap-8', value: '32px', usage: l('Seções distintas', 'Distinct sections') },
    { name: 'Extra Large', class: 'gap-12', value: '48px', usage: l('Separação de blocos', 'Block separation') }
  ];

  const copyToClipboard = async (code: string, name: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedGrid(name);
      toast({
        title: l('Copiado!', 'Copied!'),
        description: l(`Código do ${name} copiado para a área de transferência.`, `Code for ${name} copied to clipboard.`),
      });
      setTimeout(() => setCopiedGrid(null), 2000);
    } catch (err) {
      toast({
        title: l('Erro', 'Error'),
        description: l('Não foi possível copiar o código.', 'Could not copy the code.'),
        variant: "destructive"
      });
    }
  };

  const renderGridDemo = (gridClass: string, itemCount: number = 6) => (
    <div className={`${gridClass} p-6 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700`}>
      {Array.from({ length: itemCount }, (_, i) => (
        <div
          key={i}
          className="bg-brand-100 dark:bg-brand-900 rounded-lg p-4 flex items-center justify-center text-brand-700 dark:text-brand-300 font-medium text-sm"
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">Grid System</h1>
        <p className="text-lg text-muted-foreground">{l('Layouts responsivos e sistemas de espaçamento', 'Responsive layouts and spacing systems')}</p>
      </div>

      {/* Auto Grid Systems */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{l('Grids Automáticos', 'Automatic Grids')}</h3>
        
        <div className="space-y-8">
          {gridSystems.map((grid) => (
            <div key={grid.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-white mb-1">{grid.name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">{grid.description}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{grid.usage}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(grid.code, grid.name)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900 rounded-lg transition-all duration-200"
                >
                  {copiedGrid === grid.name ? (
                    <Check size={14} className="text-success-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                  {l('Copiar', 'Copy')}
                </button>
              </div>
              
              {renderGridDemo(grid.code)}
              
              <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded block font-mono text-neutral-700 dark:text-neutral-300">
                className="{grid.code}"
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Grids */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{l('Grids Responsivos', 'Responsive Grids')}</h3>
        
        <div className="space-y-8">
          {responsiveGrids.map((grid) => (
            <div key={grid.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800 dark:text-white mb-1">{grid.name}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">{grid.description}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{grid.usage}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(grid.class, grid.name)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900 rounded-lg transition-all duration-200"
                >
                  {copiedGrid === grid.name ? (
                    <Check size={14} className="text-success-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                  {l('Copiar', 'Copy')}
                </button>
              </div>
              
              {renderGridDemo(grid.class, grid.name === '12 Column Grid' ? 12 : 6)}
              
              <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-3 py-2 rounded block font-mono text-neutral-700 dark:text-neutral-300">
                className="{grid.class}"
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing System */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{l('Sistema de Espaçamento', 'Spacing System')}</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spacingSystem.map((spacing) => (
            <div key={spacing.class} className="space-y-4">
              <div>
                <h4 className="font-medium text-neutral-800 dark:text-white mb-1">{spacing.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded font-mono text-neutral-600 dark:text-neutral-300">
                    {spacing.class}
                  </code>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">{spacing.value}</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{spacing.usage}</p>
              </div>
              
              <div className={`grid grid-cols-2 ${spacing.class} p-4 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700`}>
                <div className="bg-brand-100 dark:bg-brand-900 rounded p-2 text-xs text-brand-700 dark:text-brand-300 text-center">A</div>
                <div className="bg-brand-100 dark:bg-brand-900 rounded p-2 text-xs text-brand-700 dark:text-brand-300 text-center">B</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breakpoints Reference */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{l('Breakpoints de Referência', 'Reference Breakpoints')}</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-neutral-800 dark:text-white">{l('Breakpoints Tailwind', 'Tailwind Breakpoints')}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">sm:</code>
                <span className="text-neutral-600 dark:text-neutral-300">640px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">md:</code>
                <span className="text-neutral-600 dark:text-neutral-300">768px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">lg:</code>
                <span className="text-neutral-600 dark:text-neutral-300">1024px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">xl:</code>
                <span className="text-neutral-600 dark:text-neutral-300">1280px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-neutral-700 dark:text-neutral-300">2xl:</code>
                <span className="text-neutral-600 dark:text-neutral-300">1536px+</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-neutral-800 dark:text-white">{l('Uso Recomendado', 'Recommended Usage')}</h4>
            <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div>
                <strong>Mobile First:</strong> {l('Comece com mobile e adicione breakpoints maiores', 'Start with mobile and add larger breakpoints')}
              </div>
              <div>
                <strong>Container:</strong> {l('Use max-width para limitar largura em telas grandes', 'Use max-width to limit width on large screens')}
              </div>
              <div>
                <strong>{l('Flexibilidade', 'Flexibility')}:</strong> {l('Combine grid com flexbox quando necessário', 'Combine grid with flexbox when needed')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white dark:from-neutral-900 dark:to-black rounded-xl p-6 border border-brand-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{l('Diretrizes de Grid', 'Grid Guidelines')}</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">{l('Boas Práticas', 'Best Practices')}</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• {l('Use grids automáticos para conteúdo dinâmico', 'Use automatic grids for dynamic content')}</li>
              <li>• {l('Mantenha espaçamento consistente', 'Maintain consistent spacing')}</li>
              <li>• {l('Teste em diferentes tamanhos de tela', 'Test on different screen sizes')}</li>
              <li>• {l('Priorize legibilidade e usabilidade', 'Prioritize readability and usability')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Performance</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• {l('Evite grids muito complexos', 'Avoid overly complex grids')}</li>
              <li>• {l('Use CSS Grid para layouts 2D', 'Use CSS Grid for 2D layouts')}</li>
              <li>• {l('Prefira Flexbox para layouts 1D', 'Prefer Flexbox for 1D layouts')}</li>
              <li>• {l('Otimize para dispositivos móveis', 'Optimize for mobile devices')}</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default GridSystem;
