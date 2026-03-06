import React, { useState } from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { FileText, Copy, Check, ChevronRight, Layers, Tag } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const NamingConventions = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string, itemName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemName);
      toast({
        title: "Copiado!",
        description: `${itemName} copiado para a área de transferência.`,
      });
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o texto.",
        variant: "destructive"
      });
    }
  };

  const layerNamingRules = [
    {
      category: "Botões",
      pattern: "Button/[Variant]/[State]",
      examples: [
        "Button/Primary/Default",
        "Button/Primary/Hover",
        "Button/Secondary/Disabled",
        "Button/Ghost/Focus"
      ],
      description: "Organização hierárquica por tipo, variante e estado para facilitar a identificação e manutenção."
    },
    {
      category: "Cards",
      pattern: "Card-[Purpose]-[Number]",
      examples: [
        "Card-Product-01",
        "Card-Feature-02",
        "Card-Testimonial-03",
        "Card-Pricing-01"
      ],
      description: "Nomenclatura específica por propósito com numeração sequencial para variações."
    },
    {
      category: "Inputs",
      pattern: "Input/[Type]/[State]",
      examples: [
        "Input/Text/Default",
        "Input/Email/Error",
        "Input/Search/Focus",
        "Input/Password/Filled"
      ],
      description: "Categorização por tipo de input e estado atual para organização clara."
    },
    {
      category: "Ícones",
      pattern: "Icon/[Category]/[Name]",
      examples: [
        "Icon/Navigation/Arrow-Right",
        "Icon/Action/Delete",
        "Icon/Status/Success",
        "Icon/Social/Facebook"
      ],
      description: "Agrupamento por categoria funcional seguido do nome específico do ícone."
    }
  ];

  const tokenConventions = [
    {
      category: "Superfícies",
      prefix: "ndf-surface",
      examples: [
        {
          name: "ndf-surface-background",
          usage: "Background principal da aplicação",
          value: "Neutral 50 / White"
        },
        {
          name: "ndf-surface-card",
          usage: "Background de cards e containers",
          value: "White / Neutral 800"
        },
        {
          name: "ndf-surface-primary",
          usage: "Botões primários e elementos principais",
          value: "Brand 500"
        },
        {
          name: "ndf-surface-elevated",
          usage: "Elementos com elevação (modais, dropdowns)",
          value: "White + Shadow / Neutral 900"
        }
      ]
    },
    {
      category: "Texto",
      prefix: "ndf-text",
      examples: [
        {
          name: "ndf-text-primary",
          usage: "Texto principal e headlines",
          value: "Neutral 900 / White"
        },
        {
          name: "ndf-text-secondary",
          usage: "Texto secundário e descrições",
          value: "Neutral 600 / Neutral 300"
        },
        {
          name: "ndf-text-inverse",
          usage: "Texto sobre backgrounds escuros",
          value: "White / Neutral 900"
        },
        {
          name: "ndf-text-brand",
          usage: "Texto destacado com cor da marca",
          value: "Brand 600"
        }
      ]
    },
    {
      category: "Espaçamento",
      prefix: "ndf-space",
      examples: [
        {
          name: "ndf-space-xs",
          usage: "Espaçamento mínimo entre elementos",
          value: "4px"
        },
        {
          name: "ndf-space-sm",
          usage: "Espaçamento pequeno para elementos relacionados",
          value: "8px"
        },
        {
          name: "ndf-space-md",
          usage: "Espaçamento padrão entre componentes",
          value: "16px"
        },
        {
          name: "ndf-space-lg",
          usage: "Espaçamento entre seções",
          value: "24px"
        },
        {
          name: "ndf-space-xl",
          usage: "Espaçamento entre blocos principais",
          value: "32px"
        }
      ]
    },
    {
      category: "Interação",
      prefix: "ndf-interaction",
      examples: [
        {
          name: "ndf-interaction-hover",
          usage: "Estado de hover em elementos interativos",
          value: "Brand 600 / Neutral 700"
        },
        {
          name: "ndf-interaction-active",
          usage: "Estado ativo/pressionado",
          value: "Brand 700 / Neutral 800"
        },
        {
          name: "ndf-interaction-focus",
          usage: "Estado de foco para acessibilidade",
          value: "Brand 500 + Ring"
        },
        {
          name: "ndf-interaction-disabled",
          usage: "Estado desabilitado",
          value: "Neutral 300 / Neutral 600"
        }
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Consistência e Escalabilidade",
      content: "Adote convenções desde o início do projeto. Uma nomenclatura consistente facilita a colaboração entre designers e desenvolvedores, reduz erros e acelera o processo de desenvolvimento. Quando toda a equipe segue as mesmas regras, novos membros conseguem entender e contribuir mais rapidamente."
    },
    {
      title: "Hierarquia Clara",
      content: "Use estruturas hierárquicas que reflitam a organização lógica dos componentes. Por exemplo, 'Button/Primary/Hover' deixa claro que se trata de um botão, na variante primária, no estado hover. Isso facilita a busca e organização no Figma."
    },
    {
      title: "Prefixos Identificadores",
      content: "O prefixo 'ndf' (Nuri Design Foundations) identifica imediatamente que o token pertence ao seu design system. Isso evita conflitos com outras bibliotecas e deixa clara a origem do componente durante o desenvolvimento."
    },
    {
      title: "Versionamento e Documentação",
      content: "Mantenha documentação atualizada sobre as convenções adotadas. Quando mudanças forem necessárias, versione adequadamente para não quebrar projetos existentes. Use descrições claras nos tokens do Figma para explicar quando e onde usar cada elemento."
    },
    {
      title: "Tokens Semânticos vs Literais",
      content: "Prefira tokens semânticos ('surface-primary') a literais ('purple-500'). Tokens semânticos permitem mudanças de tema mais fáceis e comunicam a intenção de uso, não apenas a aparência visual."
    },
    {
      title: "Estrutura de Arquivos",
      content: "Organize layers e componentes em grupos lógicos. Use páginas separadas no Figma para diferentes categorias (Foundations, Components, Patterns). Mantenha uma página master com todos os tokens para referência rápida."
    }
  ];

  const figmaSetupGuide = [
    {
      step: "1. Configuração de Variables",
      content: "Crie Collections organizadas por categoria: Colors, Typography, Spacing, Effects. Configure modes para Light/Dark themes. Use primitive tokens (gray-100) como base e semantic tokens (surface-primary) para aplicação."
    },
    {
      step: "2. Organização de Layers",
      content: "Estruture suas páginas: 📚 Foundations (cores, tipografia, espaçamento), 🧩 Components (botões, inputs, cards), 📋 Templates (layouts complexos), 📖 Documentation (guias de uso)."
    },
    {
      step: "3. Nomenclatura de Componentes",
      content: "Use master components com variantes bem definidas. Exemplo: Button component com variants (Primary, Secondary, Ghost) e boolean properties (Disabled, Loading). Sempre inclua descrições explicativas."
    },
    {
      step: "4. Auto Layout e Constraints",
      content: "Configure Auto Layout em todos os componentes para facilitar responsividade. Use constraints adequados (Left & Right para inputs, Center para botões). Teste redimensionamento antes de publicar."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">Nomenclatura</h1>
        <p className="text-lg text-muted-foreground">Organização, padronização e boas práticas para design systems</p>
      </div>

      {/* Layer Naming Conventions */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <Layers size={16} className="text-background" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Convenções para Layers no Figma</h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {layerNamingRules.map((rule, index) => (
            <AccordionItem key={index} value={`layer-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full mr-4">
                  <span className="font-medium text-foreground">{rule.category}</span>
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded text-primary">
                    {rule.pattern}
                  </code>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p className="text-sm text-muted-foreground">{rule.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground text-sm">Exemplos:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {rule.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-muted rounded-lg p-3">
                          <code className="text-xs font-mono text-foreground">{example}</code>
                          <button
                            onClick={() => copyToClipboard(example, example)}
                            className="p-1 hover:bg-primary/10 rounded transition-colors"
                          >
                            {copiedItem === example ? (
                              <Check size={12} className="text-green-500" />
                            ) : (
                              <Copy size={12} className="text-muted-foreground" />
                            )}
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

      {/* Token Conventions */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <Tag size={16} className="text-background" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Convenções para Design Tokens</h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {tokenConventions.map((category, index) => (
            <AccordionItem key={index} value={`token-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center justify-between w-full mr-4">
                  <span className="font-medium text-foreground">{category.category}</span>
                  <code className="text-xs bg-primary/10 px-2 py-1 rounded text-primary">
                    {category.prefix}
                  </code>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="grid gap-3">
                    {category.examples.map((token, idx) => (
                      <div key={idx} className="bg-muted rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <code className="text-sm font-mono font-medium text-primary">
                            {token.name}
                          </code>
                          <button
                            onClick={() => copyToClipboard(token.name, token.name)}
                            className="p-1 hover:bg-primary/10 rounded transition-colors"
                          >
                            {copiedItem === token.name ? (
                              <Check size={12} className="text-green-500" />
                            ) : (
                              <Copy size={12} className="text-muted-foreground" />
                            )}
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

      {/* Figma Setup Guide */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Guia de Configuração no Figma</h3>
        
        <Accordion type="single" collapsible className="w-full">
          {figmaSetupGuide.map((guide, index) => (
            <AccordionItem key={index} value={`setup-${index}`}>
              <AccordionTrigger className="text-left">
                <span className="font-medium text-foreground">{guide.step}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground pt-2">{guide.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Best Practices */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Boas Práticas e Importância</h3>
        
        <Accordion type="single" collapsible className="w-full">
          {bestPractices.map((practice, index) => (
            <AccordionItem key={index} value={`practice-${index}`}>
              <AccordionTrigger className="text-left">
                <span className="font-medium text-foreground">{practice.title}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground pt-2 leading-relaxed">{practice.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Benefits Overview */}
      <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Por que Adotar Convenções?</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <ChevronRight size={16} className="text-primary" />
              Benefícios Imediatos
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Redução de 60% no tempo de busca por componentes</li>
              <li>• Menor chance de inconsistências visuais</li>
              <li>• Facilita onboarding de novos designers</li>
              <li>• Melhora comunicação entre design e desenvolvimento</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <ChevronRight size={16} className="text-primary" />
              Benefícios a Longo Prazo
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Escalabilidade do design system</li>
              <li>• Manutenção mais eficiente</li>
              <li>• Facilita mudanças de tema/rebrand</li>
              <li>• Base sólida para automações</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default NamingConventions;
