import React, { useState } from 'react';
import { Type, Copy, Check, Smartphone, Tablet, Monitor } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const TypographyScale = () => {
  const [copiedClass, setCopiedClass] = useState<string | null>(null);

  const typographyScale = [
    {
      name: 'Display 2XL',
      class: 'text-display-2xl',
      size: '72px / 4.5rem',
      lineHeight: '1.1 (79px)',
      letterSpacing: '-0.02em',
      wordSpacing: 'normal',
      usage: 'Hero headings, landing pages',
      example: 'Design que Inspira',
      figmaSpecs: {
        fontSize: 72,
        lineHeight: 79,
        letterSpacing: -1.44,
        fontWeight: 600
      }
    },
    {
      name: 'Display XL',
      class: 'text-display-xl',
      size: '60px / 3.75rem',
      lineHeight: '1.1 (66px)',
      letterSpacing: '-0.02em',
      wordSpacing: 'normal',
      usage: 'Títulos principais, seções importantes',
      example: 'Biblioteca de Componentes',
      figmaSpecs: {
        fontSize: 60,
        lineHeight: 66,
        letterSpacing: -1.2,
        fontWeight: 600
      }
    },
    {
      name: 'Display LG',
      class: 'text-display-lg',
      size: '48px / 3rem',
      lineHeight: '1.2 (58px)',
      letterSpacing: '-0.02em',
      wordSpacing: 'normal',
      usage: 'Títulos de página, headers',
      example: 'Sistema de Design',
      figmaSpecs: {
        fontSize: 48,
        lineHeight: 58,
        letterSpacing: -0.96,
        fontWeight: 600
      }
    },
    {
      name: 'Display MD',
      class: 'text-display-md',
      size: '36px / 2.25rem',
      lineHeight: '1.2 (43px)',
      letterSpacing: '-0.02em',
      wordSpacing: 'normal',
      usage: 'Títulos de seção',
      example: 'Componentes UI',
      figmaSpecs: {
        fontSize: 36,
        lineHeight: 43,
        letterSpacing: -0.72,
        fontWeight: 600
      }
    },
    {
      name: 'Display SM',
      class: 'text-display-sm',
      size: '30px / 1.875rem',
      lineHeight: '1.3 (39px)',
      letterSpacing: '-0.01em',
      wordSpacing: 'normal',
      usage: 'Subtítulos importantes',
      example: 'Tokens de Design',
      figmaSpecs: {
        fontSize: 30,
        lineHeight: 39,
        letterSpacing: -0.3,
        fontWeight: 600
      }
    },
    {
      name: 'Display XS',
      class: 'text-display-xs',
      size: '24px / 1.5rem',
      lineHeight: '1.3 (31px)',
      letterSpacing: '-0.01em',
      wordSpacing: 'normal',
      usage: 'Títulos de cards, modais',
      example: 'Guia de Estilo',
      figmaSpecs: {
        fontSize: 24,
        lineHeight: 31,
        letterSpacing: -0.24,
        fontWeight: 600
      }
    }
  ];

  const textSizes = [
    {
      name: 'Text XL',
      class: 'text-xl',
      size: '20px',
      lineHeight: '1.4 (28px)',
      letterSpacing: '0em',
      wordSpacing: 'normal',
      usage: 'Lead paragraphs, introducoes',
      example: 'Este é um parágrafo introdutório que apresenta o conteúdo.',
      figmaSpecs: {
        fontSize: 20,
        lineHeight: 28,
        letterSpacing: 0,
        fontWeight: 400
      }
    },
    {
      name: 'Text LG',
      class: 'text-lg',
      size: '18px',
      lineHeight: '1.4 (25px)',
      letterSpacing: '0em',
      wordSpacing: 'normal',
      usage: 'Texto destacado, subtítulos',
      example: 'Texto destacado para chamar atenção do usuário.',
      figmaSpecs: {
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: 0,
        fontWeight: 400
      }
    },
    {
      name: 'Text Base',
      class: 'text-base',
      size: '16px',
      lineHeight: '1.5 (24px)',
      letterSpacing: '0em',
      wordSpacing: 'normal',
      usage: 'Texto padrão, corpo do conteúdo',
      example: 'Este é o texto padrão usado na maioria dos conteúdos.',
      figmaSpecs: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        fontWeight: 400
      }
    },
    {
      name: 'Text SM',
      class: 'text-sm',
      size: '14px',
      lineHeight: '1.4 (20px)',
      letterSpacing: '0em',
      wordSpacing: 'normal',
      usage: 'Texto secundário, labels',
      example: 'Informações secundárias e rótulos de formulários.',
      figmaSpecs: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0,
        fontWeight: 400
      }
    },
    {
      name: 'Text XS',
      class: 'text-xs',
      size: '12px',
      lineHeight: '1.3 (16px)',
      letterSpacing: '0.01em',
      wordSpacing: 'normal',
      usage: 'Captions, metadados',
      example: 'Legendas, timestamps e informações auxiliares.',
      figmaSpecs: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.12,
        fontWeight: 400
      }
    }
  ];

  const copyToClipboard = async (className: string) => {
    try {
      await navigator.clipboard.writeText(className);
      setCopiedClass(className);
      toast({
        title: "Copiado!",
        description: `Classe ${className} copiada para a área de transferência.`,
      });
      setTimeout(() => setCopiedClass(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar a classe.",
        variant: "destructive"
      });
    }
  };

  const copyFigmaSpecs = async (specs: any, name: string) => {
    const figmaText = `${name} - Figma Specs:
Font Size: ${specs.fontSize}px
Line Height: ${specs.lineHeight}px
Letter Spacing: ${specs.letterSpacing}px
Font Weight: ${specs.fontWeight}
Font Family: Inter`;
    
    try {
      await navigator.clipboard.writeText(figmaText);
      toast({
        title: "Especificações Figma copiadas!",
        description: `Specs do ${name} copiadas para área de transferência.`,
      });
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar as especificações.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">Tipografia</h1>
        <p className="text-lg text-muted-foreground">Escala tipográfica hierárquica responsiva com especificações para Figma</p>
      </div>

      {/* Font Family Info */}
      <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-black dark:to-black rounded-xl p-6 border border-emerald-200/50 dark:border-emerald-800/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Família de Fonte</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Inter - Font Family</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
              Fonte principal do sistema. Para usar no Figma, instale a fonte Inter do Google Fonts.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
              <code className="text-sm text-neutral-700 dark:text-neutral-300">
                Font Family: Inter<br/>
                Fallback: system-ui, sans-serif<br/>
                Weights: 300, 400, 500, 600, 700, 800
              </code>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Configuração Importante</h4>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
              <p>⚠️ <strong>Mudança de Fonte:</strong> Alterar a família de fonte requer ajustes em:</p>
              <ul className="space-y-1 ml-4">
                <li>• Pesos de fonte (font-weight)</li>
                <li>• Altura de linha (line-height)</li>
                <li>• Espaçamento entre letras</li>
                <li>• Testes de legibilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Display Scale */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Display Scale</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6">
          Para títulos, headings e elementos de destaque visual.
        </p>

        <div className="space-y-6">
          {typographyScale.map((item) => (
            <div key={item.class} className="group p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-elevation-1 transition-all duration-200">
              <div className="grid lg:grid-cols-3 gap-4 mb-4">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-neutral-700 dark:text-white">{item.name}</span>
                    <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded font-mono text-neutral-600 dark:text-neutral-300">
                      {item.size}
                    </code>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                    <div>Line Height: {item.lineHeight}</div>
                    <div>Letter Spacing: {item.letterSpacing}</div>
                    <div>Word Spacing: {item.wordSpacing}</div>
                    <div>Usage: {item.usage}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(item.class)}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900 rounded-lg transition-all duration-200"
                  >
                    {copiedClass === item.class ? (
                      <Check size={12} className="text-success-500" />
                    ) : (
                      <Copy size={12} />
                    )}
                    CSS
                  </button>
                  <button
                    onClick={() => copyFigmaSpecs(item.figmaSpecs, item.name)}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-background bg-foreground hover:bg-foreground/90 rounded-lg transition-all duration-200"
                  >
                    <Copy size={12} />
                    Figma
                  </button>
                </div>
              </div>
              
              <div className={`${item.class} font-display font-semibold text-neutral-900 dark:text-white leading-tight mb-3`}>
                {item.example}
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded text-xs font-mono text-neutral-600 dark:text-neutral-300">
                <div>Figma: {item.figmaSpecs.fontSize}px / {item.figmaSpecs.lineHeight}px / {item.figmaSpecs.letterSpacing}px / {item.figmaSpecs.fontWeight}</div>
                <div>CSS: {item.class} font-display font-semibold</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Scale */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Text Scale</h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6">
          Para corpo de texto, parágrafos e conteúdo geral.
        </p>

        <div className="space-y-6">
          {textSizes.map((item) => (
            <div key={item.class} className="group p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-elevation-1 transition-all duration-200">
              <div className="grid lg:grid-cols-3 gap-4 mb-4">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-neutral-700 dark:text-white">{item.name}</span>
                    <code className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded font-mono text-neutral-600 dark:text-neutral-300">
                      {item.size}
                    </code>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                    <div>Line Height: {item.lineHeight}</div>
                    <div>Letter Spacing: {item.letterSpacing}</div>
                    <div>Word Spacing: {item.wordSpacing}</div>
                    <div>Usage: {item.usage}</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(item.class)}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900 rounded-lg transition-all duration-200"
                  >
                    {copiedClass === item.class ? (
                      <Check size={12} className="text-success-500" />
                    ) : (
                      <Copy size={12} />
                    )}
                    CSS
                  </button>
                  <button
                    onClick={() => copyFigmaSpecs(item.figmaSpecs, item.name)}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-background bg-foreground hover:bg-foreground/90 rounded-lg transition-all duration-200"
                  >
                    <Copy size={12} />
                    Figma
                  </button>
                </div>
              </div>
              
              <div className={`${item.class} text-neutral-700 dark:text-white leading-relaxed mb-3`}>
                {item.example}
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded text-xs font-mono text-neutral-600 dark:text-neutral-300">
                <div>Figma: {item.figmaSpecs.fontSize}px / {item.figmaSpecs.lineHeight}px / {item.figmaSpecs.letterSpacing}px / {item.figmaSpecs.fontWeight}</div>
                <div>CSS: {item.class} text-neutral-700</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Guidelines */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Diretrizes Responsivas</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <Smartphone className="w-8 h-8 text-brand-500 mx-auto mb-3" />
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Mobile (320-768px)</h4>
            <div className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
              <div>Display: Reduzir 1-2 níveis</div>
              <div>Text: Mínimo 16px para leitura</div>
              <div>Line Height: 1.4-1.5</div>
              <div>Max Width: 45-55 caracteres</div>
            </div>
          </div>
          
          <div className="text-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <Tablet className="w-8 h-8 text-brand-500 mx-auto mb-3" />
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Tablet (768-1024px)</h4>
            <div className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
              <div>Display: Reduzir 1 nível</div>
              <div>Text: Padrão ou +1 nível</div>
              <div>Line Height: 1.4-1.6</div>
              <div>Max Width: 60-70 caracteres</div>
            </div>
          </div>
          
          <div className="text-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg">
            <Monitor className="w-8 h-8 text-brand-500 mx-auto mb-3" />
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Desktop (1024px+)</h4>
            <div className="text-xs text-neutral-600 dark:text-neutral-300 space-y-1">
              <div>Display: Tamanho completo</div>
              <div>Text: Padrão recomendado</div>
              <div>Line Height: 1.5-1.6</div>
              <div>Max Width: 70-75 caracteres</div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white dark:from-black dark:to-black rounded-xl p-6 border border-brand-200/50 dark:border-brand-800/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Diretrizes Tipográficas</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Hierarquia Visual</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Use Display scales para títulos principais</li>
              <li>• Mantenha consistência no line-height</li>
              <li>• Contraste visual entre níveis hierárquicos</li>
              <li>• Limite a 3-4 tamanhos por página</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-white mb-3">Legibilidade</h4>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <li>• Mínimo 16px para texto principal</li>
              <li>• Line-height entre 1.4-1.6 para leitura</li>
              <li>• Máximo 75 caracteres por linha</li>
              <li>• Teste em diferentes dispositivos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyScale;
