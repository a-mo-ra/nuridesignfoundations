import React, { useState } from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { FileText, Copy, Check, ChevronRight, Layers, Tag } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const NamingConventions = () => {
  const { l } = useLanguage();
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, itemName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      toast({ title: l("Copiado!", "Copied!"), description: l(`${itemName} copiado para a área de transferência.`, `${itemName} copied to clipboard.`) });
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast({ title: l("Erro", "Error"), description: l("Não foi possível copiar o texto.", "Could not copy text."), variant: "destructive" });
    }
  };

  const layerNamingRules = [
    {
      category: l("Botões", "Buttons"),
      pattern: "Button/[Variant]/[State]",
      examples: ["Button/Primary/Default", "Button/Primary/Hover", "Button/Secondary/Disabled", "Button/Ghost/Focus"],
      description: l("Organização hierárquica por tipo, variante e estado para facilitar a identificação e manutenção.", "Hierarchical organization by type, variant and state for easy identification and maintenance.")
    },
    {
      category: "Cards",
      pattern: "Card-[Purpose]-[Number]",
      examples: ["Card-Product-01", "Card-Feature-02", "Card-Testimonial-03", "Card-Pricing-01"],
      description: l("Nomenclatura específica por propósito com numeração sequencial para variações.", "Purpose-specific naming with sequential numbering for variations.")
    },
    {
      category: "Inputs",
      pattern: "Input/[Type]/[State]",
      examples: ["Input/Text/Default", "Input/Email/Error", "Input/Search/Focus", "Input/Password/Filled"],
      description: l("Categorização por tipo de input e estado atual para organização clara.", "Categorization by input type and current state for clear organization.")
    },
    {
      category: l("Ícones", "Icons"),
      pattern: "Icon/[Category]/[Name]",
      examples: ["Icon/Navigation/Arrow-Right", "Icon/Action/Delete", "Icon/Status/Success", "Icon/Social/Facebook"],
      description: l("Agrupamento por categoria funcional seguido do nome específico do ícone.", "Grouping by functional category followed by the specific icon name.")
    }
  ];

  const tokenConventions = [
    {
      category: l("Superfícies", "Surfaces"),
      prefix: "ndf-surface",
      examples: [
        { name: "ndf-surface-background", usage: l("Background principal da aplicação", "Main application background"), value: "Neutral 50 / White" },
        { name: "ndf-surface-card", usage: l("Background de cards e containers", "Card and container backgrounds"), value: "White / Neutral 800" },
        { name: "ndf-surface-primary", usage: l("Botões primários e elementos principais", "Primary buttons and main elements"), value: "Brand 500" },
        { name: "ndf-surface-elevated", usage: l("Elementos com elevação (modais, dropdowns)", "Elevated elements (modals, dropdowns)"), value: "White + Shadow / Neutral 900" }
      ]
    },
    {
      category: l("Texto", "Text"),
      prefix: "ndf-text",
      examples: [
        { name: "ndf-text-primary", usage: l("Texto principal e headlines", "Main text and headlines"), value: "Neutral 900 / White" },
        { name: "ndf-text-secondary", usage: l("Texto secundário e descrições", "Secondary text and descriptions"), value: "Neutral 600 / Neutral 300" },
        { name: "ndf-text-inverse", usage: l("Texto sobre backgrounds escuros", "Text on dark backgrounds"), value: "White / Neutral 900" },
        { name: "ndf-text-brand", usage: l("Texto destacado com cor da marca", "Text highlighted with brand color"), value: "Brand 600" }
      ]
    },
    {
      category: l("Espaçamento", "Spacing"),
      prefix: "ndf-space",
      examples: [
        { name: "ndf-space-xs", usage: l("Espaçamento mínimo entre elementos", "Minimum spacing between elements"), value: "4px" },
        { name: "ndf-space-sm", usage: l("Espaçamento pequeno para elementos relacionados", "Small spacing for related elements"), value: "8px" },
        { name: "ndf-space-md", usage: l("Espaçamento padrão entre componentes", "Default spacing between components"), value: "16px" },
        { name: "ndf-space-lg", usage: l("Espaçamento entre seções", "Spacing between sections"), value: "24px" },
        { name: "ndf-space-xl", usage: l("Espaçamento entre blocos principais", "Spacing between main blocks"), value: "32px" }
      ]
    },
    {
      category: l("Interação", "Interaction"),
      prefix: "ndf-interaction",
      examples: [
        { name: "ndf-interaction-hover", usage: l("Estado de hover em elementos interativos", "Hover state on interactive elements"), value: "Brand 600 / Neutral 700" },
        { name: "ndf-interaction-active", usage: l("Estado ativo/pressionado", "Active/pressed state"), value: "Brand 700 / Neutral 800" },
        { name: "ndf-interaction-focus", usage: l("Estado de foco para acessibilidade", "Focus state for accessibility"), value: "Brand 500 + Ring" },
        { name: "ndf-interaction-disabled", usage: l("Estado desabilitado", "Disabled state"), value: "Neutral 300 / Neutral 600" }
      ]
    }
  ];

  const bestPractices = [
    { title: l("Consistência e Escalabilidade", "Consistency and Scalability"), content: l("Adote convenções desde o início do projeto. Uma nomenclatura consistente facilita a colaboração entre designers e desenvolvedores, reduz erros e acelera o processo de desenvolvimento.", "Adopt conventions from the beginning of the project. Consistent naming facilitates collaboration between designers and developers, reduces errors and accelerates development.") },
    { title: l("Hierarquia Clara", "Clear Hierarchy"), content: l("Use estruturas hierárquicas que reflitam a organização lógica dos componentes. Por exemplo, 'Button/Primary/Hover' deixa claro que se trata de um botão, na variante primária, no estado hover.", "Use hierarchical structures that reflect the logical organization of components. For example, 'Button/Primary/Hover' makes it clear it's a button, in the primary variant, in hover state.") },
    { title: l("Prefixos Identificadores", "Identifier Prefixes"), content: l("O prefixo 'ndf' (Nuri Design Foundations) identifica imediatamente que o token pertence ao seu design system. Isso evita conflitos com outras bibliotecas.", "The 'ndf' prefix (Nuri Design Foundations) immediately identifies that the token belongs to your design system. This avoids conflicts with other libraries.") },
    { title: l("Versionamento e Documentação", "Versioning and Documentation"), content: l("Mantenha documentação atualizada sobre as convenções adotadas. Quando mudanças forem necessárias, versione adequadamente para não quebrar projetos existentes.", "Keep documentation updated on adopted conventions. When changes are needed, version appropriately to not break existing projects.") },
    { title: l("Tokens Semânticos vs Literais", "Semantic vs Literal Tokens"), content: l("Prefira tokens semânticos ('surface-primary') a literais ('purple-500'). Tokens semânticos permitem mudanças de tema mais fáceis e comunicam a intenção de uso.", "Prefer semantic tokens ('surface-primary') over literal ones ('purple-500'). Semantic tokens allow easier theme changes and communicate usage intent.") },
    { title: l("Estrutura de Arquivos", "File Structure"), content: l("Organize layers e componentes em grupos lógicos. Use páginas separadas no Figma para diferentes categorias (Foundations, Components, Patterns).", "Organize layers and components in logical groups. Use separate pages in Figma for different categories (Foundations, Components, Patterns).") }
  ];

  const figmaSetupGuide = [
    { step: l("1. Configuração de Variables", "1. Variables Setup"), content: l("Crie Collections organizadas por categoria: Colors, Typography, Spacing, Effects. Configure modes para Light/Dark themes.", "Create Collections organized by category: Colors, Typography, Spacing, Effects. Configure modes for Light/Dark themes.") },
    { step: l("2. Organização de Layers", "2. Layer Organization"), content: l("Estruture suas páginas: 📚 Foundations (cores, tipografia, espaçamento), 🧩 Components (botões, inputs, cards), 📋 Templates (layouts complexos), 📖 Documentation (guias de uso).", "Structure your pages: 📚 Foundations (colors, typography, spacing), 🧩 Components (buttons, inputs, cards), 📋 Templates (complex layouts), 📖 Documentation (usage guides).") },
    { step: l("3. Nomenclatura de Componentes", "3. Component Naming"), content: l("Use master components com variantes bem definidas. Exemplo: Button component com variants (Primary, Secondary, Ghost) e boolean properties (Disabled, Loading).", "Use master components with well-defined variants. Example: Button component with variants (Primary, Secondary, Ghost) and boolean properties (Disabled, Loading).") },
    { step: l("4. Auto Layout e Constraints", "4. Auto Layout and Constraints"), content: l("Configure Auto Layout em todos os componentes para facilitar responsividade. Use constraints adequados. Teste redimensionamento antes de publicar.", "Configure Auto Layout on all components for responsiveness. Use appropriate constraints. Test resizing before publishing.") }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">{l('Nomenclatura', 'Naming Conventions')}</h1>
        <p className="text-lg text-muted-foreground">{l('Organização, padronização e boas práticas para design systems', 'Organization, standardization and best practices for design systems')}</p>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center"><Layers size={16} className="text-background" /></div>
          <h3 className="text-lg font-semibold text-foreground">{l('Convenções para Layers no Figma', 'Figma Layer Conventions')}</h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {layerNamingRules.map((rule, index) => (
            <AccordionItem key={index} value={`layer-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full mr-4">
                  <span className="font-medium text-foreground">{rule.category}</span>
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded text-primary">{rule.pattern}</code>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground text-sm">{l('Exemplos:', 'Examples:')}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {rule.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-muted rounded-lg p-3">
                          <code className="text-xs font-mono text-foreground">{example}</code>
                          <button onClick={() => copyToClipboard(example, example)} className="p-1 hover:bg-primary/10 rounded transition-colors">
                            {copiedItem === example ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="text-muted-foreground" />}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center"><Tag size={16} className="text-background" /></div>
          <h3 className="text-lg font-semibold text-foreground">{l('Convenções para Design Tokens', 'Design Token Conventions')}</h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {tokenConventions.map((category, index) => (
            <AccordionItem key={index} value={`token-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full mr-4">
                  <span className="font-medium text-foreground">{category.category}</span>
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded text-primary">{category.prefix}</code>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="grid gap-3">
                    {category.examples.map((token, idx) => (
                      <div key={idx} className="bg-muted rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <code className="text-sm font-mono font-medium text-primary">{token.name}</code>
                          <button onClick={() => copyToClipboard(token.name, token.name)} className="p-1 hover:bg-primary/10 rounded transition-colors">
                            {copiedItem === token.name ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="text-muted-foreground" />}
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{token.usage}</p>
                        <p className="text-xs text-primary/70 font-medium">{token.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">{l('Guia de Configuração no Figma', 'Figma Setup Guide')}</h3>
        <Accordion type="single" collapsible className="w-full">
          {figmaSetupGuide.map((guide, index) => (
            <AccordionItem key={index} value={`setup-${index}`}>
              <AccordionTrigger className="text-left"><span className="font-medium text-foreground">{guide.step}</span></AccordionTrigger>
              <AccordionContent><p className="text-sm text-muted-foreground pt-2">{guide.content}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">{l('Boas Práticas e Importância', 'Best Practices and Importance')}</h3>
        <Accordion type="single" collapsible className="w-full">
          {bestPractices.map((practice, index) => (
            <AccordionItem key={index} value={`practice-${index}`}>
              <AccordionTrigger className="text-left"><span className="font-medium text-foreground">{practice.title}</span></AccordionTrigger>
              <AccordionContent><p className="text-sm text-muted-foreground pt-2 leading-relaxed">{practice.content}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">{l('Por que Adotar Convenções?', 'Why Adopt Conventions?')}</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <ChevronRight size={16} className="text-primary" />
              {l('Benefícios Imediatos', 'Immediate Benefits')}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {l('Redução de 60% no tempo de busca por componentes', '60% reduction in component search time')}</li>
              <li>• {l('Menor chance de inconsistências visuais', 'Lower chance of visual inconsistencies')}</li>
              <li>• {l('Facilita onboarding de novos designers', 'Facilitates onboarding of new designers')}</li>
              <li>• {l('Melhora comunicação entre design e desenvolvimento', 'Improves communication between design and development')}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <ChevronRight size={16} className="text-primary" />
              {l('Benefícios a Longo Prazo', 'Long-term Benefits')}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• {l('Escalabilidade do design system', 'Design system scalability')}</li>
              <li>• {l('Manutenção mais eficiente', 'More efficient maintenance')}</li>
              <li>• {l('Facilita mudanças de tema/rebrand', 'Facilitates theme changes/rebrand')}</li>
              <li>• {l('Base sólida para automações', 'Solid foundation for automation')}</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default NamingConventions;
