import React, { useState } from 'react';
import { Play, Smartphone, Tablet, Monitor, Zap, Clock, MousePointer, ExternalLink, Sparkles, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MotionSystem = () => {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const motionPrinciples = [
    {
      title: 'Feedback Imediato',
      description: 'Toda ação do usuário deve ter uma resposta visual imediata, confirmando que a interação foi reconhecida.',
      icon: Zap
    },
    {
      title: 'Orientação Espacial',
      description: 'Animações ajudam a entender a hierarquia e relação entre elementos na interface.',
      icon: Sparkles
    },
    {
      title: 'Suavidade Natural',
      description: 'Movimentos devem imitar física real, com aceleração e desaceleração naturais.',
      icon: Play
    },
    {
      title: 'Economia de Tempo',
      description: 'Animações devem ser rápidas o suficiente para não atrasar o fluxo do usuário.',
      icon: Clock
    }
  ];

  const timingValues = [
    { name: 'Instant', duration: '0-100ms', usage: 'Hover states, toggles', easing: 'linear' },
    { name: 'Quick', duration: '100-200ms', usage: 'Buttons, small elements', easing: 'ease-out' },
    { name: 'Normal', duration: '200-300ms', usage: 'Modals, dropdowns', easing: 'ease-in-out' },
    { name: 'Slow', duration: '300-500ms', usage: 'Page transitions', easing: 'ease-in-out' },
    { name: 'Deliberate', duration: '500ms+', usage: 'Complex animations', easing: 'cubic-bezier' }
  ];

  // Separated sections for Motion and Microinteractions
  const motionExamples = [
    {
      name: 'Page Transition',
      description: 'Transição suave entre páginas com fade e slide',
      demo: 'page-transition',
      category: 'motion'
    },
    {
      name: 'Scroll Reveal',
      description: 'Elementos surgem conforme o scroll da página',
      demo: 'scroll-reveal',
      category: 'motion'
    },
    {
      name: 'Loading Skeleton',
      description: 'Shimmer effect para estados de carregamento',
      demo: 'skeleton',
      category: 'motion'
    },
    {
      name: 'Modal Enter/Exit',
      description: 'Scale + fade para abertura e fechamento de modais',
      demo: 'modal',
      category: 'motion'
    }
  ];

  const microinteractionExamples = [
    {
      name: 'Button Press',
      description: 'Scale down on press, scale up on release',
      demo: 'button-press',
      css: 'transform: scale(0.95); transition: transform 100ms ease-out;'
    },
    {
      name: 'Hover Glow',
      description: 'Subtle glow effect on hover',
      demo: 'hover-glow',
      css: 'box-shadow: 0 0 20px rgba(77, 12, 131, 0.4); transition: box-shadow 200ms ease-out;'
    },
    {
      name: 'Input Focus',
      description: 'Border color and ring animation',
      demo: 'input-focus',
      css: 'border-color: var(--primary); box-shadow: 0 0 0 3px rgba(77, 12, 131, 0.2);'
    },
    {
      name: 'Card Lift',
      description: 'Elevate card on hover with shadow',
      demo: 'card-lift',
      css: 'transform: translateY(-4px); box-shadow: var(--shadow-elevation-3);'
    },
    {
      name: 'Toggle Switch',
      description: 'Smooth toggle with spring-like motion',
      demo: 'toggle',
      css: 'transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);'
    },
    {
      name: 'Checkbox Check',
      description: 'Satisfying check animation with bounce',
      demo: 'checkbox',
      css: 'transform: scale(1.1); animation: check-bounce 200ms ease-out;'
    }
  ];

  const deviceExamples = {
    mobile: {
      interactions: [
        { name: 'Pull to Refresh', description: 'Gesture-based refresh with elastic bounce' },
        { name: 'Swipe Actions', description: 'Reveal actions with horizontal swipe' },
        { name: 'Bottom Sheet', description: 'Drag to expand/dismiss modal' },
        { name: 'Tab Bar Bounce', description: 'Icon bounce on tap' }
      ]
    },
    tablet: {
      interactions: [
        { name: 'Split View Resize', description: 'Smooth panel resizing with drag' },
        { name: 'Hover States', description: 'Stylus and touch hover feedback' },
        { name: 'Contextual Menu', description: 'Long-press reveal with haptic feedback' },
        { name: 'Multi-touch Gestures', description: 'Pinch to zoom, rotate' }
      ]
    },
    desktop: {
      interactions: [
        { name: 'Mouse Trail', description: 'Custom cursor effects' },
        { name: 'Scroll Animations', description: 'Elements animate as they enter viewport' },
        { name: 'Drag and Drop', description: 'Visual feedback during drag operations' },
        { name: 'Keyboard Focus', description: 'Clear focus indicators for navigation' }
      ]
    }
  };

  const references = [
    {
      title: 'Material Design Motion',
      url: 'https://m3.material.io/styles/motion/overview',
      description: 'Guia completo de motion do Material Design 3'
    },
    {
      title: 'Apple HIG - Motion',
      url: 'https://developer.apple.com/design/human-interface-guidelines/motion',
      description: 'Princípios de animação da Apple'
    },
    {
      title: 'Framer Motion Docs',
      url: 'https://www.framer.com/motion/',
      description: 'Biblioteca de animações para React'
    },
    {
      title: '12 Principles of Animation',
      url: 'https://www.creativebloq.com/advice/understand-the-12-principles-of-animation',
      description: 'Princípios clássicos da Disney aplicados a UI'
    },
    {
      title: 'Animation Handbook',
      url: 'https://www.designbetter.co/animation-handbook',
      description: 'Guia prático de animação para designers'
    },
    {
      title: 'Web Animations API - MDN',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API',
      description: 'API nativa de animações do browser'
    }
  ];

  const renderDevicePreview = (device: string) => {
    if (device === 'mobile') {
      return (
        <div className="w-[200px] h-[400px] bg-foreground rounded-[32px] p-3 shadow-elevation-4 mx-auto">
          <div className="w-full h-full bg-background rounded-[24px] overflow-hidden flex flex-col">
            <div className="h-8 bg-muted flex items-center justify-center">
              <div className="w-16 h-3 bg-foreground/20 rounded-full" />
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="w-full h-24 bg-primary/20 rounded-xl animate-pulse flex items-center justify-center">
                <span className="text-xs text-primary font-medium">Pull ↓</span>
              </div>
              <div className="space-y-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-muted rounded-lg animate-fade-in flex items-center gap-3 px-3" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-primary/15" />
                    <div className="flex-1 space-y-1">
                      <div className="h-3 bg-primary/10 rounded w-3/4" />
                      <div className="h-2 bg-muted-foreground/10 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-14 bg-muted/50 border-t border-border flex items-center justify-around px-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`w-6 h-6 rounded-full transition-all duration-200 ${i === 1 ? 'bg-primary scale-110' : 'bg-muted hover:bg-primary/20'}`} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (device === 'tablet') {
      return (
        <div className="w-[320px] h-[240px] bg-foreground rounded-2xl p-2 shadow-elevation-4 mx-auto">
          <div className="w-full h-full bg-background rounded-xl overflow-hidden flex">
            <div className="w-20 bg-muted/50 border-r border-border p-2 space-y-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`h-8 rounded-lg transition-all duration-200 ${i === 1 ? 'bg-primary/20 scale-105' : 'bg-muted hover:bg-primary/10'}`} />
              ))}
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="grid grid-cols-2 gap-2 flex-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-16 bg-muted rounded-lg animate-fade-in hover:bg-primary/10 hover:-translate-y-0.5 transition-all cursor-pointer" style={{ animationDelay: `${i * 80}ms` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="w-[400px] h-[260px] bg-foreground rounded-xl p-2 shadow-elevation-4 mx-auto">
        <div className="w-full h-full bg-background rounded-lg overflow-hidden flex flex-col">
          <div className="h-8 bg-muted flex items-center justify-between px-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="w-40 h-5 bg-muted-foreground/20 rounded" />
            <div className="w-8" />
          </div>
          <div className="flex-1 flex">
            <div className="w-48 bg-muted/30 border-r border-border p-2 space-y-1">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`h-6 rounded transition-all duration-200 ${i === 1 ? 'bg-primary/20' : 'bg-muted'} hover:bg-primary/10 cursor-pointer hover:translate-x-1`} />
              ))}
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="h-8 bg-muted rounded w-1/3" />
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div 
                    key={i} 
                    className="h-12 bg-muted rounded-lg hover:scale-105 hover:shadow-lg hover:bg-primary/10 transition-all cursor-pointer"
                    style={{ animationDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          {t('motion.title')}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t('motion.subtitle')}
        </p>
      </div>

      {/* Motion Principles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t('motion.principles')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {motionPrinciples.map((principle) => {
            const IconComponent = principle.icon;
            return (
              <div key={principle.title} className="bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center mb-4">
                  <IconComponent size={20} className="text-background" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timing & Easing */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t('motion.timing')}</h2>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="grid grid-cols-5 bg-muted/50 p-4 font-medium text-sm text-foreground border-b border-border">
            <span>Nome</span>
            <span>Duração</span>
            <span>Uso</span>
            <span>Easing</span>
            <span>Preview</span>
          </div>
          {timingValues.map((timing, index) => (
            <div 
              key={timing.name}
              className={`grid grid-cols-5 p-4 items-center text-sm ${index !== timingValues.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="font-medium text-foreground">{timing.name}</span>
              <span className="text-muted-foreground">{timing.duration}</span>
              <span className="text-muted-foreground">{timing.usage}</span>
              <code className="text-xs bg-muted px-2 py-1 rounded">{timing.easing}</code>
              <div className="flex items-center gap-2">
                <div 
                  className="w-8 h-8 bg-primary rounded-lg transition-transform hover:scale-110 cursor-pointer"
                  style={{ 
                    transitionDuration: timing.duration.split('-')[0] || timing.duration.replace('ms', '') + 'ms',
                    transitionTimingFunction: timing.easing
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Motion Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Motion (Transições)</h2>
        <p className="text-muted-foreground">Animações de maior escala que guiam o usuário entre estados e contextos da interface.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {motionExamples.map((example) => (
            <div key={example.name} className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Demo Area */}
              <div className="bg-muted/30 border-b border-border p-6 flex items-center justify-center min-h-[140px]">
                {example.demo === 'page-transition' && (
                  <div className="w-full max-w-[240px] h-[120px] bg-background border border-border rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/5 animate-[fade-in_1s_ease-out_infinite_alternate] flex items-center justify-center">
                      <div className="space-y-2 w-3/4">
                        <div className="h-4 bg-primary/20 rounded animate-[fade-in_0.6s_ease-out]" />
                        <div className="h-3 bg-primary/10 rounded w-2/3" />
                        <div className="h-8 bg-primary/15 rounded mt-3" />
                      </div>
                    </div>
                  </div>
                )}
                {example.demo === 'scroll-reveal' && (
                  <div className="w-full max-w-[240px] space-y-2">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="h-10 bg-primary/10 border border-primary/20 rounded-lg animate-fade-in flex items-center px-3" style={{ animationDelay: `${i * 200}ms`, animationFillMode: 'both' }}>
                        <div className="w-6 h-6 rounded bg-primary/20 mr-2" />
                        <div className="h-2 bg-primary/15 rounded flex-1" />
                      </div>
                    ))}
                  </div>
                )}
                {example.demo === 'skeleton' && (
                  <div className="w-full max-w-[240px] space-y-3 p-2">
                    <div className="h-20 bg-muted rounded-lg animate-pulse" />
                    <div className="h-4 bg-muted rounded animate-pulse" />
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                  </div>
                )}
                {example.demo === 'modal' && (
                  <div className="relative w-full max-w-[240px] h-[120px]">
                    <div className="absolute inset-0 bg-foreground/10 rounded-lg" />
                    <div className="absolute inset-4 bg-background border border-border rounded-xl shadow-elevation-3 animate-[scale-in_0.3s_ease-out] flex flex-col items-center justify-center p-3">
                      <div className="h-3 bg-primary/20 rounded w-2/3 mb-2" />
                      <div className="h-2 bg-muted rounded w-1/2 mb-3" />
                      <div className="h-6 bg-primary rounded w-16" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{example.name}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Microinteractions Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t('motion.microinteractions')}</h2>
        <p className="text-muted-foreground">Pequenas animações pontuais que proporcionam feedback instantâneo e deleite ao usuário.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {microinteractionExamples.map((micro) => (
            <div 
              key={micro.name}
              className="bg-card border border-border rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{micro.name}</h3>
                <MousePointer size={16} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{micro.description}</p>
              
              {/* Demo Area */}
              <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-center justify-center min-h-[100px]">
                {micro.demo === 'button-press' && (
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-transform duration-100 active:scale-95 hover:bg-primary/90">
                    Clique aqui
                  </button>
                )}
                {micro.demo === 'hover-glow' && (
                  <div className="w-16 h-16 bg-primary rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(77,12,131,0.5)]" />
                )}
                {micro.demo === 'input-focus' && (
                  <input 
                    type="text" 
                    placeholder="Focus me..."
                    className="px-4 py-2 border-2 border-border rounded-lg bg-background text-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                )}
                {micro.demo === 'card-lift' && (
                  <div className="w-24 h-24 bg-card border border-border rounded-xl shadow-elevation-1 transition-all duration-200 hover:shadow-elevation-3 hover:-translate-y-1 cursor-pointer flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Hover</span>
                  </div>
                )}
                {micro.demo === 'toggle' && (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-14 h-7 bg-muted rounded-full peer peer-checked:bg-primary transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-background after:rounded-full after:h-6 after:w-6 after:transition-all after:duration-200 peer-checked:after:translate-x-7 shadow-inner" />
                  </label>
                )}
                {micro.demo === 'checkbox' && (
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 accent-primary transition-transform duration-100 checked:scale-110" />
                    <span className="text-sm text-foreground">Check me</span>
                  </label>
                )}
              </div>
              
              <code className="text-xs bg-foreground text-background p-3 rounded-lg block overflow-x-auto">
                {micro.css}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Examples by Device */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t('motion.examples')}</h2>
        
        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="bg-muted p-1 rounded-lg w-fit">
            <TabsTrigger value="mobile" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Smartphone size={16} />
              Mobile
            </TabsTrigger>
            <TabsTrigger value="tablet" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Tablet size={16} />
              Tablet
            </TabsTrigger>
            <TabsTrigger value="desktop" className="flex items-center gap-2 data-[state=active]:bg-background">
              <Monitor size={16} />
              Desktop
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(deviceExamples).map(([device, data]) => (
            <TabsContent key={device} value={device} className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Device Preview */}
                <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center min-h-[400px]">
                  {renderDevicePreview(device)}
                </div>
                
                {/* Interactions List */}
                <div className="space-y-3">
                  {data.interactions.map((example, index) => (
                    <div key={example.name} className="bg-card border border-border rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{example.name}</h4>
                          <p className="text-sm text-muted-foreground">{example.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Best Practices - Standardized alerts */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t('motion.bestPractices')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Do - Green */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={18} className="text-green-600" />
              <h3 className="font-semibold text-green-800 dark:text-green-300 text-lg">Faça</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-400">
              <li>• Use animações para comunicar, não decorar</li>
              <li>• Mantenha durações curtas (100-300ms)</li>
              <li>• Respeite preferências de movimento reduzido</li>
              <li>• Teste em dispositivos reais</li>
              <li>• Use easing natural (ease-out, ease-in-out)</li>
            </ul>
          </div>
          {/* Don't - Red */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={18} className="text-red-600" />
              <h3 className="font-semibold text-red-800 dark:text-red-300 text-lg">Evite</h3>
            </div>
            <ul className="space-y-2 text-sm text-red-700 dark:text-red-400">
              <li>• Animações que bloqueiam interação</li>
              <li>• Efeitos que causam motion sickness</li>
              <li>• Loops infinitos sem propósito</li>
              <li>• Muitas animações simultâneas</li>
              <li>• Ignorar acessibilidade</li>
            </ul>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle size={16} className="text-amber-600" />
            <span className="font-semibold text-amber-800 dark:text-amber-300">Atenção: Acessibilidade</span>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-400">
            Sempre implemente <code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">prefers-reduced-motion</code> para respeitar as preferências de movimento do sistema operacional do usuário. Animações excessivas podem causar desconforto em pessoas com sensibilidade a movimento.
          </p>
        </div>
      </section>

      {/* References */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t('motion.references')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {references.map((ref) => (
            <a
              key={ref.title}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-elevation-2 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {ref.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground">{ref.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MotionSystem;
