import React, { useState } from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { Sparkles, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ShadowSystem = () => {
  const { l } = useLanguage();
  const [copiedShadow, setCopiedShadow] = useState<string | null>(null);

  const copyToClipboard = async (css: string, shadowName: string) => {
    try {
      await navigator.clipboard.writeText(css);
      setCopiedShadow(shadowName);
      toast({ title: l("Copiado!", "Copied!"), description: l(`CSS da ${shadowName} copiado para área de transferência.`, `${shadowName} CSS copied to clipboard.`) });
      setTimeout(() => setCopiedShadow(null), 2000);
    } catch (err) {
      toast({ title: l("Erro", "Error"), description: l("Não foi possível copiar o CSS.", "Could not copy CSS."), variant: "destructive" });
    }
  };

  const shadowLevels = [
    { name: 'Elevation 1', class: 'shadow-elevation-1', usage: l('Cards básicos, elementos sutis', 'Basic cards, subtle elements'), description: l('Sombra muito sutil para elementos próximos ao background', 'Very subtle shadow for elements close to background') },
    { name: 'Elevation 2', class: 'shadow-elevation-2', usage: l('Cards principais, botões em repouso', 'Main cards, resting buttons'), description: l('Sombra padrão para a maioria dos componentes', 'Default shadow for most components') },
    { name: 'Elevation 3', class: 'shadow-elevation-3', usage: l('Elementos hover, dropdowns', 'Hover elements, dropdowns'), description: l('Sombra mais pronunciada para estados interativos', 'More pronounced shadow for interactive states') },
    { name: 'Elevation 4', class: 'shadow-elevation-4', usage: l('Modais, popups importantes', 'Modals, important popups'), description: l('Sombra forte para elementos que se destacam', 'Strong shadow for standout elements') },
    { name: 'Elevation 5', class: 'shadow-elevation-5', usage: l('Elementos críticos, tooltips', 'Critical elements, tooltips'), description: l('Máxima elevação para elementos prioritários', 'Maximum elevation for priority elements') }
  ];

  const specialShadows = [
    { name: 'Brand Glow', class: 'shadow-glow', usage: l('Botões primários, elementos de marca', 'Primary buttons, brand elements'), description: l('Sombra colorida com a cor da marca', 'Colored shadow with brand color') },
    { name: 'Brand Glow Large', class: 'shadow-glow-lg', usage: l('CTAs importantes, elementos hero', 'Important CTAs, hero elements'), description: l('Sombra colorida maior para máximo impacto', 'Larger colored shadow for maximum impact') },
    { name: 'Brand Shadow', class: 'shadow-brand', usage: l('Cards especiais, elementos destacados', 'Special cards, highlighted elements'), description: l('Sombra sutil com toque da cor da marca', 'Subtle shadow with brand color touch') }
  ];

  const renderShadowGrid = (shadows: any[], title: string) => (
    <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shadows.map((shadow) => (
          <div key={shadow.class} className="group">
            <div className="bg-muted/30 p-8 rounded-xl border border-border mb-4 flex items-center justify-center">
              <div className={`w-20 h-20 bg-card rounded-xl ${shadow.class} flex items-center justify-center border border-border`}>
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-foreground">{shadow.name}</h4>
                <button onClick={() => copyToClipboard(shadow.class, shadow.name)} className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-muted transition-all duration-200" title={l("Copiar classe", "Copy class")}>
                  {copiedShadow === shadow.class ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-muted-foreground" />}
                </button>
              </div>
              <code className="text-xs bg-muted px-2 py-1 rounded font-mono text-muted-foreground block">{shadow.class}</code>
              <p className="text-xs text-muted-foreground font-medium">{shadow.usage}</p>
              <p className="text-xs text-muted-foreground">{shadow.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">{l('Sombras', 'Shadows')}</h1>
        <p className="text-lg text-muted-foreground">{l('Elevação e profundidade através de sombras consistentes', 'Elevation and depth through consistent shadows')}</p>
      </div>

      {renderShadowGrid(shadowLevels, l('Elevação Padrão', 'Standard Elevation'))}
      {renderShadowGrid(specialShadows, l('Sombras Especiais', 'Special Shadows'))}

      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">{l('Demonstração Interativa', 'Interactive Demo')}</h3>
        <div className="bg-muted/30 p-12 rounded-xl border border-border">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {shadowLevels.map((shadow, index) => (
              <div key={shadow.class} className="text-center">
                <div className={`w-16 h-16 bg-card rounded-xl ${shadow.class} mx-auto mb-3 border border-border hover:scale-110 transition-transform duration-200 cursor-pointer flex items-center justify-center`} onClick={() => copyToClipboard(shadow.class, shadow.name)}>
                  <span className="text-sm font-semibold text-muted-foreground">{index + 1}</span>
                </div>
                <p className="text-xs text-muted-foreground">{shadow.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">{l('Diretrizes de Uso', 'Usage Guidelines')}</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-3">{l('Hierarquia', 'Hierarchy')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {l('Use elevação crescente para importância', 'Use increasing elevation for importance')}</li>
              <li>• {l('Mantenha consistência entre componentes', 'Maintain consistency across components')}</li>
              <li>• {l('Evite muitos níveis na mesma tela', 'Avoid too many levels on the same screen')}</li>
              <li>• {l('Teste em diferentes backgrounds', 'Test on different backgrounds')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-3">Performance</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {l('Prefira box-shadow a filter', 'Prefer box-shadow over filter')}</li>
              <li>• {l('Use transform para animações', 'Use transform for animations')}</li>
              <li>• {l('Evite sombras em elementos móveis', 'Avoid shadows on moving elements')}</li>
              <li>• {l('Considere modo escuro', 'Consider dark mode')}</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default ShadowSystem;
