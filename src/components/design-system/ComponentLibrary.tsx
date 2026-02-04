import React, { useState } from 'react';
import { Grid, Copy, Check, Heart, Star, User, Search, Figma } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const ComponentLibrary = () => {
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null);

  const copyToClipboard = async (code: string, componentName: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedComponent(componentName);
      toast({
        title: "Copiado!",
        description: `Código do ${componentName} copiado para a área de transferência.`,
      });
      setTimeout(() => setCopiedComponent(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o código.",
        variant: "destructive"
      });
    }
  };

  const buttonVariants = [
    {
      name: 'Primary Button',
      component: (
        <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25">
          Botão Primário
        </button>
      ),
      code: `<button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25">
  Botão Primário
</button>`
    },
    {
      name: 'Secondary Button',
      component: (
        <button className="px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:bg-muted transition-all duration-200">
          Botão Secundário
        </button>
      ),
      code: `<button className="px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border hover:bg-muted transition-all duration-200">
  Botão Secundário
</button>`
    },
    {
      name: 'Icon Button',
      component: (
        <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25">
          <Heart size={16} />
        </button>
      ),
      code: `<button className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25">
  <Heart size={16} />
</button>`
    }
  ];

  const inputVariants = [
    {
      name: 'Text Input',
      component: (
        <div className="w-full max-w-xs">
          <label className="block text-sm font-medium text-foreground mb-2">
            Nome completo
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          />
        </div>
      ),
      code: `<input
  type="text"
  placeholder="Digite seu nome"
  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
/>`
    },
    {
      name: 'Search Input',
      component: (
        <div className="w-full max-w-xs relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full pl-9 pr-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          />
        </div>
      ),
      code: `<div className="relative">
  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
  <input
    type="text"
    placeholder="Pesquisar..."
    className="w-full pl-9 pr-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
  />
</div>`
    }
  ];

  const cardVariants = [
    {
      name: 'Basic Card',
      component: (
        <div className="bg-card rounded-xl p-4 shadow-lg border border-border max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <User size={16} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">João Silva</h3>
              <p className="text-sm text-muted-foreground">Designer UX</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Criando experiências digitais incríveis.
          </p>
        </div>
      ),
      code: `<div className="bg-card rounded-xl p-4 shadow-lg border border-border">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
      <User size={16} className="text-primary-foreground" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground">João Silva</h3>
      <p className="text-sm text-muted-foreground">Designer UX</p>
    </div>
  </div>
  <p className="text-muted-foreground text-sm">
    Criando experiências digitais incríveis.
  </p>
</div>`
    },
    {
      name: 'Feature Card',
      component: (
        <div className="bg-card rounded-xl p-4 border border-border max-w-xs hover:shadow-xl hover:shadow-primary/10 transition-all duration-200 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
            <Star size={20} className="text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Componentes Premium
          </h3>
          <p className="text-muted-foreground text-sm mb-3">
            Biblioteca completa com mais de 100 componentes.
          </p>
          <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
            Saiba mais →
          </button>
        </div>
      ),
      code: `<div className="bg-card rounded-xl p-4 border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-200 group">
  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
    <Star size={20} className="text-primary-foreground" />
  </div>
  <h3 className="text-lg font-semibold text-foreground mb-2">
    Componentes Premium
  </h3>
  <p className="text-muted-foreground text-sm mb-3">
    Biblioteca completa com mais de 100 componentes.
  </p>
  <button className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
    Saiba mais →
  </button>
</div>`
    }
  ];

  const renderComponentSection = (title: string, components: any[]) => (
    <div className="bg-card rounded-xl p-6 border border-border shadow-elevation-2 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <div className="space-y-8">
        {components.map((item) => (
          <div key={item.name} className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-foreground">{item.name}</h4>
              <button
                onClick={() => copyToClipboard(item.code, item.name)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-foreground text-background hover:bg-foreground/90 rounded-lg transition-all duration-200"
              >
                {copiedComponent === item.name ? (
                  <Check size={14} />
                ) : (
                  <Copy size={14} />
                )}
                Copiar código
              </button>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-6 border border-border flex items-center justify-center min-h-[120px]">
              {item.component}
            </div>
            
            <Accordion type="single" collapsible>
              <AccordionItem value="code">
                <AccordionTrigger className="text-left font-medium text-foreground">
                  Código CSS
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-foreground rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-background whitespace-pre-wrap break-all">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="page-header-icon">
          <Grid size={16} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Biblioteca de Componentes</h2>
          <p className="text-muted-foreground">Componentes prontos para usar em seus projetos</p>
        </div>
      </div>

      {renderComponentSection('Botões', buttonVariants)}
      {renderComponentSection('Inputs', inputVariants)}
      {renderComponentSection('Cards', cardVariants)}

      {/* Configuration Guidelines */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <Figma size={16} className="text-background" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Figma Specifications</h3>
        </div>
        <Separator className="mb-6" />
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-medium text-foreground mb-3">Auto Layout - Componentes</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><strong className="text-foreground">Botões:</strong> Largura: Hug contents | Altura: Hug contents</div>
              <div><strong className="text-foreground">Cards:</strong> Largura: Fill container | Altura: Hug contents</div>
              <div><strong className="text-foreground">Inputs:</strong> Largura: Fill container | Altura: Fixed (40px)</div>
              <div><strong className="text-foreground">Ícones:</strong> Largura: Fixed | Altura: Fixed</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3">Configuração de Sombras</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><strong className="text-foreground">Elevação 1:</strong> X:0 Y:1 Blur:3 Spread:0 Color:rgba(0,0,0,0.1)</div>
              <div><strong className="text-foreground">Elevação 2:</strong> X:0 Y:4 Blur:6 Spread:-1 Color:rgba(0,0,0,0.1)</div>
              <div><strong className="text-foreground">Purple Glow:</strong> X:0 Y:4 Blur:14 Color:rgba(77,12,131,0.25)</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-foreground mb-3">Sistema de Grid por Dispositivo</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <strong className="text-foreground">Mobile (320-768px):</strong><br/>
              Colunas: 4-6 | Gutter: 16px | Margin: 16px
            </div>
            <div>
              <strong className="text-foreground">Tablet (768-1024px):</strong><br/>
              Colunas: 8-12 | Gutter: 24px | Margin: 24px
            </div>
            <div>
              <strong className="text-foreground">Desktop (1024px+):</strong><br/>
              Colunas: 12+ | Gutter: 32px | Margin: 48px
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-muted/50 rounded-xl p-6 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Diretrizes de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-3">Componentes</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mantenha consistência visual</li>
              <li>• Use estados interativos (hover, focus)</li>
              <li>• Implemente acessibilidade (ARIA)</li>
              <li>• Teste responsividade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-3">Customização</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Modifique cores usando tokens</li>
              <li>• Ajuste espaçamentos proporcionalmente</li>
              <li>• Mantenha hierarquia visual</li>
              <li>• Documente mudanças</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
