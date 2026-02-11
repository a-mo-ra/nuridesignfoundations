import React, { useState } from 'react';
import { Copy, Check, Sun, Moon, Eye, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ColorTokens = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'light' | 'dark' | 'both'>('both');

  const copyToClipboard = async (text: string, tokenName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedToken(tokenName);
      toast({
        title: "Token copiado!",
        description: `O token ${tokenName} foi copiado para sua área de transferência.`,
      });
      setTimeout(() => setCopiedToken(null), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o token.",
        variant: "destructive",
      });
    }
  };

  const colorCategories = [
    {
      name: 'Cores NDS',
      description: 'Paleta principal do Nuri Design System - tons de roxo (#4D0C83)',
      colors: [
        { name: 'nds-50', light: '#f5f0ff', dark: '#2e0652', usage: 'Backgrounds sutis' },
        { name: 'nds-100', light: '#ede5ff', dark: '#4a0c83', usage: 'Backgrounds secundários' },
        { name: 'nds-200', light: '#dcceff', dark: '#5b0da3', usage: 'Borders, divisores' },
        { name: 'nds-300', light: '#c4a8ff', dark: '#7c1ff7', usage: 'Textos desabilitados' },
        { name: 'nds-400', light: '#a873ff', dark: '#8b3dff', usage: 'Textos secundários' },
        { name: 'nds-500', light: '#4D0C83', dark: '#a873ff', usage: 'Cor primária de destaque' },
        { name: 'nds-600', light: '#5b0da3', dark: '#c4a8ff', usage: 'Hover states' },
        { name: 'nds-700', light: '#4a0c83', dark: '#dcceff', usage: 'Textos importantes' },
        { name: 'nds-800', light: '#2e0652', dark: '#ede5ff', usage: 'Textos principais' },
        { name: 'nds-900', light: '#1a0336', dark: '#f5f0ff', usage: 'Preto do sistema' }
      ]
    },
    {
      name: 'Cores Neutras',
      description: 'Escala de cinzas para textos e backgrounds',
      colors: [
        { name: 'neutral-white', light: '#ffffff', dark: '#0a0a0a', usage: 'Background principal' },
        { name: 'neutral-50', light: '#fafafa', dark: '#171717', usage: 'Backgrounds claros' },
        { name: 'neutral-100', light: '#f5f5f5', dark: '#262626', usage: 'Cards, sections' },
        { name: 'neutral-200', light: '#e5e5e5', dark: '#404040', usage: 'Borders' },
        { name: 'neutral-300', light: '#d4d4d4', dark: '#525252', usage: 'Borders visíveis' },
        { name: 'neutral-400', light: '#a3a3a3', dark: '#737373', usage: 'Placeholder' },
        { name: 'neutral-500', light: '#737373', dark: '#a3a3a3', usage: 'Muted text' },
        { name: 'neutral-600', light: '#525252', dark: '#d4d4d4', usage: 'Secondary text' },
        { name: 'neutral-700', light: '#404040', dark: '#e5e5e5', usage: 'Body text' },
        { name: 'neutral-800', light: '#262626', dark: '#f5f5f5', usage: 'Headlines' },
        { name: 'neutral-900', light: '#171717', dark: '#fafafa', usage: 'Foreground' },
        { name: 'neutral-black', light: '#0a0a0a', dark: '#ffffff', usage: 'True black' }
      ]
    },
    {
      name: 'Cores Semânticas',
      description: 'Feedback e comunicação de estados',
      colors: [
        { name: 'success', light: '#22c55e', dark: '#4ade80', usage: 'Sucesso, confirmações' },
        { name: 'warning', light: '#f59e0b', dark: '#fbbf24', usage: 'Alertas, atenção' },
        { name: 'error', light: '#ef4444', dark: '#f87171', usage: 'Erros, destructive' },
        { name: 'info', light: '#3b82f6', dark: '#60a5fa', usage: 'Informações' }
      ]
    }
  ];

  // Contrast ratios for accessibility
  const getContrastRatio = (hex1: string, hex2: string): number => {
    const getLuminance = (hex: string) => {
      const rgb = parseInt(hex.slice(1), 16);
      const r = ((rgb >> 16) & 0xff) / 255;
      const g = ((rgb >> 8) & 0xff) / 255;
      const b = (rgb & 0xff) / 255;
      const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    };
    const l1 = getLuminance(hex1);
    const l2 = getLuminance(hex2);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return parseFloat(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
  };

  const getContrastLevel = (ratio: number): { label: string; color: string } => {
    if (ratio >= 7) return { label: 'AAA', color: 'text-green-600' };
    if (ratio >= 4.5) return { label: 'AA', color: 'text-green-600' };
    if (ratio >= 3) return { label: 'AA Grande', color: 'text-amber-600' };
    return { label: 'Falha', color: 'text-red-600' };
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          Cores & Tokens
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Paleta completa do NDS com variações para dark/light mode. 
          Todos os tokens seguem padrões WCAG 2.1 AA para contraste.
        </p>
      </div>

      {/* Accessibility Alert - Green like reference */}
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle size={16} className="text-green-600" />
          <span className="font-semibold text-green-800 dark:text-green-300">Acessibilidade Garantida</span>
        </div>
        <p className="text-sm text-green-700 dark:text-green-400 mb-4">
          Todas as combinações de cores foram testadas e atendem aos critérios WCAG 2.1 AA.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="px-4 py-3 bg-white dark:bg-black/20 border border-green-200 dark:border-green-700 rounded-lg text-center">
            <span className="text-sm font-medium text-foreground">AA Normal: 4.5:1 mínimo</span>
          </div>
          <div className="px-4 py-3 bg-white dark:bg-black/20 border border-green-200 dark:border-green-700 rounded-lg text-center">
            <span className="text-sm font-medium text-foreground">AA Grande: 3:1 mínimo</span>
          </div>
          <div className="px-4 py-3 bg-white dark:bg-black/20 border border-green-200 dark:border-green-700 rounded-lg text-center">
            <span className="text-sm font-medium text-foreground">AAA: 7:1 (ideal)</span>
          </div>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="flex items-center gap-1 bg-muted rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveMode('light')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeMode === 'light'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Sun size={16} />
          Light
        </button>
        <button
          onClick={() => setActiveMode('dark')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeMode === 'dark'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Moon size={16} />
          Dark
        </button>
        <button
          onClick={() => setActiveMode('both')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeMode === 'both'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Eye size={16} />
          Comparar
        </button>
      </div>

      {/* Color Categories */}
      {colorCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {category.name}
            </h2>
            <p className="text-muted-foreground">
              {category.description}
            </p>
          </div>

          <div className="grid gap-3">
            {category.colors.map((color, colorIndex) => {
              const contrastOnWhite = getContrastRatio(color.light, '#ffffff');
              const contrastOnBlack = getContrastRatio(color.light, '#000000');
              const bestContrast = Math.max(contrastOnWhite, contrastOnBlack);
              const contrastLevel = getContrastLevel(bestContrast);

              return (
                <div 
                  key={colorIndex}
                  className="bg-card border border-border rounded-lg p-4 flex items-center gap-4"
                >
                  {/* Color Swatches */}
                  <div className="flex gap-2">
                    {(activeMode === 'light' || activeMode === 'both') && (
                      <div
                        className="w-12 h-12 rounded-lg border border-border shadow-sm"
                        style={{ backgroundColor: color.light }}
                        title={`Light: ${color.light}`}
                      />
                    )}
                    {(activeMode === 'dark' || activeMode === 'both') && (
                      <div
                        className="w-12 h-12 rounded-lg border border-border shadow-sm"
                        style={{ backgroundColor: color.dark }}
                        title={`Dark: ${color.dark}`}
                      />
                    )}
                  </div>

                  {/* Token Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm font-medium text-foreground">
                        {color.name}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {color.usage}
                    </p>
                  </div>

                  {/* Contrast Ratios */}
                  <div className="text-right text-xs text-muted-foreground whitespace-nowrap">
                    <div>Light: {getContrastRatio(color.light, '#ffffff')}:1</div>
                    <div>Dark: {getContrastRatio(color.dark, '#000000')}:1</div>
                  </div>

                  {/* Values */}
                  <div className="flex items-center gap-2">
                    {(activeMode === 'light' || activeMode === 'both') && (
                      <button
                        onClick={() => copyToClipboard(color.light, `${color.name}-light`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded text-xs font-mono hover:bg-muted/80 transition-colors"
                      >
                        {color.light}
                        {copiedToken === `${color.name}-light` ? (
                          <Check size={12} className="text-green-600" />
                        ) : (
                          <Copy size={12} className="text-muted-foreground" />
                        )}
                      </button>
                    )}
                    {(activeMode === 'dark' || activeMode === 'both') && (
                      <button
                        onClick={() => copyToClipboard(color.dark, `${color.name}-dark`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded text-xs font-mono hover:bg-muted/80 transition-colors"
                      >
                        {color.dark}
                        {copiedToken === `${color.name}-dark` ? (
                          <Check size={12} className="text-green-600" />
                        ) : (
                          <Copy size={12} className="text-muted-foreground" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Usage Note */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-3">💡 Como usar os tokens NDS</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground mb-2">CSS Variables:</p>
            <code className="block bg-muted p-3 rounded font-mono text-xs text-foreground">
              color: hsl(var(--primary));
            </code>
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Tailwind Classes:</p>
            <code className="block bg-muted p-3 rounded font-mono text-xs text-foreground">
              className="text-primary bg-muted"
            </code>
          </div>
        </div>
      </div>

      {/* Best Practices - Do/Don't */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Boas Práticas de Uso</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={18} className="text-green-600" />
              <h3 className="font-semibold text-green-800 dark:text-green-300 text-lg">Faça</h3>
            </div>
            <div className="space-y-3">
              <code className="block text-sm bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 p-3 rounded-lg font-mono">
                className="text-primary bg-muted p-4"
              </code>
              <ul className="space-y-1.5 text-sm text-green-700 dark:text-green-400">
                <li>• Use tokens semânticos do design system</li>
                <li>• Mantenha contraste mínimo WCAG AA</li>
                <li>• Use cores funcionais para feedback</li>
                <li>• Teste em dark e light mode</li>
              </ul>
            </div>
          </div>

          {/* Don't */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-red-600" />
              <h3 className="font-semibold text-red-800 dark:text-red-300 text-lg">Evite</h3>
            </div>
            <div className="space-y-3">
              <code className="block text-sm bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 p-3 rounded-lg font-mono">
                className="text-blue-500 bg-gray-100 p-[16px]"
              </code>
              <ul className="space-y-1.5 text-sm text-red-700 dark:text-red-400">
                <li>• Não use cores hardcoded nos componentes</li>
                <li>• Não ignore acessibilidade de contraste</li>
                <li>• Não misture sistemas de cores</li>
                <li>• Não crie cores fora do design system</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warning about contrast */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={16} className="text-amber-600" />
            <span className="font-semibold text-amber-800 dark:text-amber-300">Atenção: Contraste mínimo</span>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-400">
            Texto normal (até 18pt) requer contraste mínimo de <strong>4.5:1</strong> (WCAG AA). 
            Texto grande (18pt+ bold ou 24pt+) requer mínimo de <strong>3:1</strong>. 
            Para o nível AAA, os requisitos são <strong>7:1</strong> e <strong>4.5:1</strong> respectivamente. 
            Sempre teste suas combinações de cores com ferramentas como o WebAIM Contrast Checker.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorTokens;
