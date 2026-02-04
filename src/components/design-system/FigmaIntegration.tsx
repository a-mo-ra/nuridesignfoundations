import React, { useState } from 'react';
import { Download, Copy, Check, ExternalLink, Plug, Settings, FileJson, Palette, Type, Grid3X3, Square } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const FigmaIntegration = () => {
  const [copied, setCopied] = useState(false);

  // NDS Design Tokens for Tokens Studio
  const designTokens = {
    "$themes": [],
    "$metadata": {
      "tokenSetOrder": ["core", "semantic-light", "semantic-dark"]
    },
    "core": {
      "colors": {
        "nds": {
          "50": { "value": "#f5f0ff", "type": "color" },
          "100": { "value": "#ede5ff", "type": "color" },
          "200": { "value": "#dcceff", "type": "color" },
          "300": { "value": "#c4a8ff", "type": "color" },
          "400": { "value": "#a873ff", "type": "color" },
          "500": { "value": "#4D0C83", "type": "color" },
          "600": { "value": "#5b0da3", "type": "color" },
          "700": { "value": "#4a0c83", "type": "color" },
          "800": { "value": "#2e0652", "type": "color" },
          "900": { "value": "#1a0336", "type": "color" }
        },
        "neutral": {
          "white": { "value": "#ffffff", "type": "color" },
          "black": { "value": "#0a0a0a", "type": "color" },
          "50": { "value": "#fafafa", "type": "color" },
          "100": { "value": "#f5f5f5", "type": "color" },
          "200": { "value": "#e5e5e5", "type": "color" },
          "300": { "value": "#d4d4d4", "type": "color" },
          "400": { "value": "#a3a3a3", "type": "color" },
          "500": { "value": "#737373", "type": "color" },
          "600": { "value": "#525252", "type": "color" },
          "700": { "value": "#404040", "type": "color" },
          "800": { "value": "#262626", "type": "color" },
          "900": { "value": "#171717", "type": "color" }
        },
        "semantic": {
          "success": { "value": "#22c55e", "type": "color" },
          "warning": { "value": "#f59e0b", "type": "color" },
          "error": { "value": "#ef4444", "type": "color" },
          "info": { "value": "#3b82f6", "type": "color" }
        }
      },
      "spacing": {
        "0": { "value": "0", "type": "spacing" },
        "1": { "value": "4px", "type": "spacing" },
        "2": { "value": "8px", "type": "spacing" },
        "3": { "value": "12px", "type": "spacing" },
        "4": { "value": "16px", "type": "spacing" },
        "5": { "value": "20px", "type": "spacing" },
        "6": { "value": "24px", "type": "spacing" },
        "8": { "value": "32px", "type": "spacing" },
        "10": { "value": "40px", "type": "spacing" },
        "12": { "value": "48px", "type": "spacing" },
        "16": { "value": "64px", "type": "spacing" },
        "20": { "value": "80px", "type": "spacing" },
        "24": { "value": "96px", "type": "spacing" }
      },
      "borderRadius": {
        "none": { "value": "0", "type": "borderRadius" },
        "sm": { "value": "4px", "type": "borderRadius" },
        "md": { "value": "8px", "type": "borderRadius" },
        "lg": { "value": "12px", "type": "borderRadius" },
        "xl": { "value": "16px", "type": "borderRadius" },
        "2xl": { "value": "24px", "type": "borderRadius" },
        "full": { "value": "9999px", "type": "borderRadius" }
      },
      "fontFamilies": {
        "display": { "value": "Inter", "type": "fontFamilies" },
        "body": { "value": "Inter", "type": "fontFamilies" },
        "mono": { "value": "JetBrains Mono", "type": "fontFamilies" }
      },
      "fontWeights": {
        "light": { "value": "300", "type": "fontWeights" },
        "regular": { "value": "400", "type": "fontWeights" },
        "medium": { "value": "500", "type": "fontWeights" },
        "semibold": { "value": "600", "type": "fontWeights" },
        "bold": { "value": "700", "type": "fontWeights" }
      },
      "fontSizes": {
        "xs": { "value": "12px", "type": "fontSizes" },
        "sm": { "value": "14px", "type": "fontSizes" },
        "base": { "value": "16px", "type": "fontSizes" },
        "lg": { "value": "18px", "type": "fontSizes" },
        "xl": { "value": "20px", "type": "fontSizes" },
        "2xl": { "value": "24px", "type": "fontSizes" },
        "3xl": { "value": "30px", "type": "fontSizes" },
        "4xl": { "value": "36px", "type": "fontSizes" },
        "5xl": { "value": "48px", "type": "fontSizes" },
        "6xl": { "value": "60px", "type": "fontSizes" }
      },
      "lineHeights": {
        "none": { "value": "1", "type": "lineHeights" },
        "tight": { "value": "1.25", "type": "lineHeights" },
        "snug": { "value": "1.375", "type": "lineHeights" },
        "normal": { "value": "1.5", "type": "lineHeights" },
        "relaxed": { "value": "1.625", "type": "lineHeights" },
        "loose": { "value": "2", "type": "lineHeights" }
      },
      "boxShadow": {
        "sm": { "value": "0 1px 2px 0 rgba(0, 0, 0, 0.05)", "type": "boxShadow" },
        "md": { "value": "0 4px 6px -1px rgba(0, 0, 0, 0.1)", "type": "boxShadow" },
        "lg": { "value": "0 10px 15px -3px rgba(0, 0, 0, 0.1)", "type": "boxShadow" },
        "xl": { "value": "0 20px 25px -5px rgba(0, 0, 0, 0.1)", "type": "boxShadow" }
      }
    },
    "semantic-light": {
      "background": { "value": "{core.colors.neutral.white}", "type": "color" },
      "foreground": { "value": "{core.colors.neutral.black}", "type": "color" },
      "card": { "value": "{core.colors.neutral.white}", "type": "color" },
      "cardForeground": { "value": "{core.colors.neutral.black}", "type": "color" },
      "primary": { "value": "{core.colors.nds.500}", "type": "color" },
      "primaryForeground": { "value": "{core.colors.neutral.white}", "type": "color" },
      "secondary": { "value": "{core.colors.neutral.100}", "type": "color" },
      "secondaryForeground": { "value": "{core.colors.neutral.900}", "type": "color" },
      "muted": { "value": "{core.colors.neutral.100}", "type": "color" },
      "mutedForeground": { "value": "{core.colors.neutral.500}", "type": "color" },
      "accent": { "value": "{core.colors.nds.500}", "type": "color" },
      "accentForeground": { "value": "{core.colors.neutral.white}", "type": "color" },
      "border": { "value": "{core.colors.neutral.200}", "type": "color" },
      "input": { "value": "{core.colors.neutral.200}", "type": "color" },
      "ring": { "value": "{core.colors.nds.500}", "type": "color" }
    },
    "semantic-dark": {
      "background": { "value": "{core.colors.neutral.black}", "type": "color" },
      "foreground": { "value": "{core.colors.neutral.50}", "type": "color" },
      "card": { "value": "{core.colors.neutral.900}", "type": "color" },
      "cardForeground": { "value": "{core.colors.neutral.50}", "type": "color" },
      "primary": { "value": "{core.colors.nds.300}", "type": "color" },
      "primaryForeground": { "value": "{core.colors.neutral.black}", "type": "color" },
      "secondary": { "value": "{core.colors.neutral.800}", "type": "color" },
      "secondaryForeground": { "value": "{core.colors.neutral.50}", "type": "color" },
      "muted": { "value": "{core.colors.neutral.800}", "type": "color" },
      "mutedForeground": { "value": "{core.colors.neutral.400}", "type": "color" },
      "accent": { "value": "{core.colors.nds.300}", "type": "color" },
      "accentForeground": { "value": "{core.colors.neutral.black}", "type": "color" },
      "border": { "value": "{core.colors.neutral.800}", "type": "color" },
      "input": { "value": "{core.colors.neutral.800}", "type": "color" },
      "ring": { "value": "{core.colors.nds.300}", "type": "color" }
    }
  };

  const jsonString = JSON.stringify(designTokens, null, 2);

  const downloadJSON = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nds-tokens.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download iniciado!",
      description: "O arquivo nds-tokens.json foi baixado.",
    });
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(jsonString);
    setCopied(true);
    toast({
      title: "Copiado!",
      description: "Tokens copiados para a área de transferência.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      step: 1,
      title: 'Instalar o Plugin',
      description: 'Abra o Figma e vá em Plugins > Browse plugins. Pesquise por "Tokens Studio for Figma" e instale.',
      icon: Plug
    },
    {
      step: 2,
      title: 'Baixar os Tokens',
      description: 'Clique no botão abaixo para baixar o arquivo JSON com todos os tokens do NDS.',
      icon: Download
    },
    {
      step: 3,
      title: 'Importar no Plugin',
      description: 'No Figma, abra o Tokens Studio (Plugins > Tokens Studio). Clique em "Load" e selecione o arquivo JSON baixado.',
      icon: FileJson
    },
    {
      step: 4,
      title: 'Configurar Temas',
      description: 'Ative os token sets "core" + "semantic-light" para tema claro, ou "core" + "semantic-dark" para tema escuro.',
      icon: Settings
    }
  ];

  const tokenCategories = [
    { icon: Palette, name: 'Cores', count: '30+ tokens', desc: 'NDS palette, neutros, semânticos' },
    { icon: Type, name: 'Tipografia', count: '20+ tokens', desc: 'Famílias, tamanhos, pesos' },
    { icon: Grid3X3, name: 'Espaçamentos', count: '13 tokens', desc: 'Escala de 0 a 96px' },
    { icon: Square, name: 'Bordas', count: '7 tokens', desc: 'Radius de none a full' }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          Integração Figma
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Sincronize os tokens do NDS com seu arquivo Figma usando o plugin Tokens Studio. 
          Mantenha consistência entre design e código.
        </p>
      </div>

      {/* Download Section */}
      <div className="bg-foreground text-background rounded-lg p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Download dos Tokens</h2>
            <p className="text-background/70">
              Arquivo JSON compatível com Tokens Studio contendo cores, tipografia, espaçamentos e mais.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-5 py-3 bg-background/10 hover:bg-background/20 rounded-lg font-medium transition-colors"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copiado!' : 'Copiar JSON'}
            </button>
            <button
              onClick={downloadJSON}
              className="flex items-center gap-2 px-5 py-3 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-colors"
            >
              <Download size={18} />
              Baixar JSON
            </button>
          </div>
        </div>
      </div>

      {/* Token Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tokenCategories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <div key={cat.name} className="bg-card border border-border rounded-lg p-5">
              <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center mb-4">
                <IconComponent className="text-background" size={20} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{cat.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{cat.count}</p>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Steps */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Passo a Passo</h2>
        
        <div className="grid gap-4">
          {steps.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.step}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-foreground text-background rounded-lg flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="hidden sm:flex items-center">
                  <IconComponent className="text-muted-foreground" size={24} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* JSON Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Preview do JSON</h2>
          <a 
            href="https://tokens.studio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Documentação Tokens Studio
            <ExternalLink size={14} />
          </a>
        </div>
        
        <div className="bg-foreground text-background rounded-lg p-6 overflow-auto max-h-[400px]">
          <pre className="text-sm font-mono whitespace-pre">
            {jsonString}
          </pre>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-muted rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">💡 Dicas</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            Use "Apply to document" no Tokens Studio para criar estilos Figma automaticamente.
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            Sincronize com GitHub ou GitLab para versionamento dos tokens.
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            Exporte em diferentes formatos (CSS, SCSS, JSON) para uso no código.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FigmaIntegration;
