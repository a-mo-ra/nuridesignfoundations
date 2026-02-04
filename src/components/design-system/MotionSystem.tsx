import React, { useState } from 'react';
import { Play, Smartphone, Tablet, Monitor, Zap, Clock, MousePointer, ExternalLink, Sparkles } from 'lucide-react';
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

  const microinteractions = [
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
      css: 'box-shadow: 0 0 20px rgba(138, 43, 226, 0.4); transition: box-shadow 200ms ease-out;'
    },
    {
      name: 'Input Focus',
      description: 'Border color and ring animation',
      demo: 'input-focus',
      css: 'border-color: var(--primary); box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.2);'
    },
    {
      name: 'Card Lift',
      description: 'Elevate card on hover with shadow',
      demo: 'card-lift',
      css: 'transform: translateY(-4px); box-shadow: var(--shadow-elevation-3);'
    },
    {
      name: 'Skeleton Loading',
      description: 'Shimmer effect for loading states',
      demo: 'skeleton',
      css: 'background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); animation: shimmer 1.5s infinite;'
    },
    {
      name: 'Checkbox Check',
      description: 'Satisfying check animation',
      demo: 'checkbox',
      css: 'transform: scale(1.1); animation: check-bounce 200ms ease-out;'
    }
  ];

  const deviceExamples = {
    mobile: [
      { name: 'Pull to Refresh', description: 'Gesture-based refresh with elastic bounce' },
      { name: 'Swipe Actions', description: 'Reveal actions with horizontal swipe' },
      { name: 'Bottom Sheet', description: 'Drag to expand/dismiss modal' },
      { name: 'Tab Bar Bounce', description: 'Icon bounce on tap' }
    ],
    tablet: [
      { name: 'Split View Resize', description: 'Smooth panel resizing with drag' },
      { name: 'Hover States', description: 'Stylus and touch hover feedback' },
      { name: 'Contextual Menu', description: 'Long-press reveal with haptic feedback' }
    ],
    desktop: [
      { name: 'Mouse Trail', description: 'Custom cursor effects' },
      { name: 'Scroll Animations', description: 'Elements animate as they enter viewport' },
      { name: 'Drag and Drop', description: 'Visual feedback during drag operations' },
      { name: 'Keyboard Focus', description: 'Clear focus indicators for navigation' }
    ]
  };

  const references = [
    {
      title: 'Material Design Motion',
      url: 'https://m3.material.io/styles/motion/overview',
      description: 'Guia completo de motion do Material Design 3'
    },
    {
      title: 'Apple Human Interface Guidelines - Motion',
      url: 'https://developer.apple.com/design/human-interface-guidelines/motion',
      description: 'Princípios de animação da Apple'
    },
    {
      title: 'Framer Motion Documentation',
      url: 'https://www.framer.com/motion/',
      description: 'Biblioteca de animações para React'
    },
    {
      title: 'The 12 Principles of Animation',
      url: 'https://www.creativebloq.com/advice/understand-the-12-principles-of-animation',
      description: 'Princípios clássicos da Disney aplicados a UI'
    },
    {
      title: 'Animation Handbook by Ryan McLeod',
      url: 'https://www.designbetter.co/animation-handbook',
      description: 'Guia prático de animação para designers'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
            <Play size={20} className="text-background" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground tracking-tight">
              {t('motion.title')}
            </h1>
          </div>
        </div>
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

      {/* Microinteractions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t('motion.microinteractions')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {microinteractions.map((micro) => (
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
                  <div className="w-16 h-16 bg-primary rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(138,43,226,0.5)]" />
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
                {micro.demo === 'skeleton' && (
                  <div className="w-full max-w-[200px] space-y-2">
                    <div className="h-4 bg-muted rounded animate-pulse" />
                    <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                  </div>
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
          
          {Object.entries(deviceExamples).map(([device, examples]) => (
            <TabsContent key={device} value={device} className="mt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Device Preview */}
                <div className="bg-card border border-border rounded-xl p-6 flex items-center justify-center min-h-[400px]">
                  {device === 'mobile' && (
                    <div className="w-[200px] h-[400px] bg-foreground rounded-[32px] p-3 shadow-elevation-4">
                      <div className="w-full h-full bg-background rounded-[24px] overflow-hidden flex flex-col">
                        <div className="h-8 bg-muted flex items-center justify-center">
                          <div className="w-16 h-3 bg-foreground/20 rounded-full" />
                        </div>
                        <div className="flex-1 p-3 space-y-2">
                          <div className="w-full h-24 bg-primary/20 rounded-xl animate-pulse flex items-center justify-center">
                            <span className="text-xs text-primary">Pull ↓</span>
                          </div>
                          <div className="space-y-2">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-16 bg-muted rounded-lg animate-fade-in" style={{ animationDelay: `${i * 100}ms` }} />
                            ))}
                          </div>
                        </div>
                        <div className="h-14 bg-muted/50 border-t border-border flex items-center justify-around px-4">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-primary' : 'bg-muted'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {device === 'tablet' && (
                    <div className="w-[320px] h-[240px] bg-foreground rounded-2xl p-2 shadow-elevation-4">
                      <div className="w-full h-full bg-background rounded-xl overflow-hidden flex">
                        <div className="w-20 bg-muted/50 border-r border-border p-2 space-y-2">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-primary/20' : 'bg-muted'}`} />
                          ))}
                        </div>
                        <div className="flex-1 p-3 space-y-2">
                          <div className="h-6 bg-muted rounded w-1/2" />
                          <div className="grid grid-cols-2 gap-2 flex-1">
                            {[1, 2, 3, 4].map(i => (
                              <div key={i} className="h-16 bg-muted rounded-lg animate-fade-in hover:bg-primary/20 transition-colors cursor-pointer" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {device === 'desktop' && (
                    <div className="w-[400px] h-[260px] bg-foreground rounded-xl p-2 shadow-elevation-4">
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
                              <div key={i} className={`h-6 rounded ${i === 1 ? 'bg-primary/20' : 'bg-muted'} hover:bg-primary/10 transition-colors cursor-pointer`} />
                            ))}
                          </div>
                          <div className="flex-1 p-3 space-y-2">
                            <div className="h-8 bg-muted rounded w-1/3" />
                            <div className="grid grid-cols-3 gap-2">
                              {[1, 2, 3, 4, 5, 6].map(i => (
                                <div 
                                  key={i} 
                                  className="h-12 bg-muted rounded-lg hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Examples List */}
                <div className="space-y-3">
                  {examples.map((example, index) => (
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

      {/* Best Practices */}
      <section className="bg-foreground text-background rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6">{t('motion.bestPractices')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-lg">✓ Faça</h3>
            <ul className="space-y-2 text-background/80">
              <li>• Use animações para comunicar, não decorar</li>
              <li>• Mantenha durações curtas (100-300ms)</li>
              <li>• Respeite preferências de movimento reduzido</li>
              <li>• Teste em dispositivos reais</li>
              <li>• Use easing natural (ease-out, ease-in-out)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">✗ Evite</h3>
            <ul className="space-y-2 text-background/80">
              <li>• Animações que bloqueiam interação</li>
              <li>• Efeitos que causam motion sickness</li>
              <li>• Loops infinitos sem propósito</li>
              <li>• Muitas animações simultâneas</li>
              <li>• Ignorar acessibilidade</li>
            </ul>
          </div>
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
