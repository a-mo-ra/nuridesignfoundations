import React from 'react';
import { ExternalLink, FileText, ArrowRight, Layers, BookOpen, Code, CheckCircle, AlertTriangle } from 'lucide-react';

const UXDocumentation = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
          Documentação UX
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Como e por que documentar processos de UX. Boas práticas de handoff, documentação de componentes e ferramentas essenciais.
        </p>
      </div>

      {/* Por que documentar */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Por que documentar processos de UX?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Documentar processos de UX garante que decisões de design sejam rastreáveis, replicáveis e compreensíveis por toda a equipe. 
          Sem documentação, o conhecimento fica concentrado em indivíduos e se perde com a rotatividade da equipe.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={16} className="text-green-600" />
              <span className="font-semibold text-green-800 dark:text-green-300">Benefícios</span>
            </div>
            <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
              <li>• Onboarding acelerado de novos membros</li>
              <li>• Decisões de design rastreáveis</li>
              <li>• Redução de retrabalho entre times</li>
              <li>• Base para evolução do produto</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-red-600" />
              <span className="font-semibold text-red-800 dark:text-red-300">Riscos sem documentação</span>
            </div>
            <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
              <li>• Perda de contexto em decisões</li>
              <li>• Inconsistências entre entregas</li>
              <li>• Dependência de pessoas específicas</li>
              <li>• Retrabalho constante</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Como documentar */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Como documentar</h2>
        <p className="text-muted-foreground leading-relaxed">
          Uma boa documentação de UX deve conter: contexto do problema, pesquisas realizadas, decisões de design, iterações e resultados.
        </p>

        {/* Exemplo de documentação */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground text-background px-6 py-3 flex items-center gap-2">
            <FileText size={16} />
            <span className="font-medium text-sm">Exemplo: Documentação de Fluxo de Checkout</span>
          </div>
          <div className="p-6 space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-1">📋 Contexto</h4>
              <p className="text-muted-foreground">Taxa de abandono de carrinho em 68%. Necessidade de simplificar o fluxo de checkout.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">🔍 Pesquisa</h4>
              <p className="text-muted-foreground">Testes de usabilidade com 12 participantes. Heatmaps via Hotjar. Análise de funil no GA4.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">💡 Decisões de Design</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Reduzir etapas de 5 para 3</li>
                <li>• Adicionar progress bar visual</li>
                <li>• Implementar auto-fill de endereço via CEP</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">📊 Resultados</h4>
              <p className="text-muted-foreground">Abandono reduziu para 42% (-26pp). Tempo médio de checkout de 4min para 1min45s.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Handoff */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Handoff: Design → Desenvolvimento</h2>
        <p className="text-muted-foreground leading-relaxed">
          Handoff é o processo de transferência de especificações de design para a equipe de desenvolvimento. 
          Um bom handoff reduz interpretações erradas e garante fidelidade ao design original.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-3">1</div>
            <h4 className="font-semibold text-foreground mb-2">Preparação</h4>
            <p className="text-sm text-muted-foreground">Organize layers, nomeie componentes, documente estados e variações.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-3">2</div>
            <h4 className="font-semibold text-foreground mb-2">Especificação</h4>
            <p className="text-sm text-muted-foreground">Tokens de cor, tipografia, espaçamentos, breakpoints e comportamentos interativos.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-3">3</div>
            <h4 className="font-semibold text-foreground mb-2">Validação</h4>
            <p className="text-sm text-muted-foreground">Review conjunto entre designer e dev. QA visual antes do deploy.</p>
          </div>
        </div>

        {/* Exemplo de handoff doc */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground text-background px-6 py-3 flex items-center gap-2">
            <Layers size={16} />
            <span className="font-medium text-sm">Exemplo: Especificação de Handoff - Botão Primário</span>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div><span className="font-medium text-foreground">Componente:</span> <span className="text-muted-foreground">Button/Primary</span></div>
              <div><span className="font-medium text-foreground">Padding:</span> <span className="text-muted-foreground">12px 24px</span></div>
              <div><span className="font-medium text-foreground">Border Radius:</span> <span className="text-muted-foreground">8px</span></div>
              <div><span className="font-medium text-foreground">Font:</span> <span className="text-muted-foreground">Inter Semi Bold 14px/20px</span></div>
            </div>
            <div className="space-y-3">
              <div><span className="font-medium text-foreground">Background:</span> <span className="text-muted-foreground">var(--primary) #4D0C83</span></div>
              <div><span className="font-medium text-foreground">Hover:</span> <span className="text-muted-foreground">var(--primary-hover) darken 10%</span></div>
              <div><span className="font-medium text-foreground">Disabled:</span> <span className="text-muted-foreground">opacity 0.5, cursor not-allowed</span></div>
              <div><span className="font-medium text-foreground">Focus:</span> <span className="text-muted-foreground">ring 2px offset 2px var(--primary)</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Storybook */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Documentação de Componentes com Storybook</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Storybook</strong> é uma ferramenta open-source para desenvolvimento e documentação de componentes UI isolados. 
          Permite visualizar, testar e documentar cada variação de um componente de forma independente.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">O que é?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Um ambiente de desenvolvimento isolado que roda ao lado da aplicação. Cada componente é documentado em "stories" 
              que representam seus diferentes estados e variações.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">Por que usar?</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Desenvolvimento isolado sem dependências</li>
              <li>• Documentação viva e sempre atualizada</li>
              <li>• Testes visuais automatizados</li>
              <li>• Catálogo interativo de componentes</li>
            </ul>
          </div>
        </div>

        {/* Exemplo de story */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground text-background px-6 py-3 flex items-center gap-2">
            <Code size={16} />
            <span className="font-medium text-sm">Exemplo: Button.stories.tsx</span>
          </div>
          <div className="p-6">
            <pre className="text-xs text-muted-foreground bg-muted p-4 rounded-lg overflow-x-auto font-mono">
{`import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};`}
            </pre>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-3">Como começar com Storybook</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-2">1</div>
              <p className="text-sm text-muted-foreground">Instale com <code className="bg-muted px-1.5 py-0.5 rounded text-xs">npx storybook@latest init</code></p>
            </div>
            <div>
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-2">2</div>
              <p className="text-sm text-muted-foreground">Crie arquivos <code className="bg-muted px-1.5 py-0.5 rounded text-xs">.stories.tsx</code> para cada componente</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-2">3</div>
              <p className="text-sm text-muted-foreground">Execute <code className="bg-muted px-1.5 py-0.5 rounded text-xs">npm run storybook</code> para visualizar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Artigos de Referência */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Artigos de Referência</h2>
        <div className="grid gap-4">
          {[
            {
              title: "Design Documentation: Best Practices",
              url: "https://www.nngroup.com/articles/design-documentation/",
              description: "Nielsen Norman Group - Melhores práticas de documentação de design"
            },
            {
              title: "The Complete Guide to UX Documentation",
              url: "https://www.interaction-design.org/literature/article/the-complete-guide-to-ux-documentation",
              description: "IxDF - Guia completo sobre documentação UX"
            },
            {
              title: "Design Handoff Best Practices",
              url: "https://www.figma.com/best-practices/guide-to-developer-handoff/",
              description: "Figma - Guia oficial de handoff para desenvolvedores"
            },
            {
              title: "Introduction to Storybook",
              url: "https://storybook.js.org/docs/get-started/introduction",
              description: "Documentação oficial do Storybook - Introdução"
            },
            {
              title: "Component Documentation with Storybook",
              url: "https://storybook.js.org/docs/writing-docs",
              description: "Como escrever documentação de componentes no Storybook"
            },
            {
              title: "Documenting Components - Brad Frost",
              url: "https://bradfrost.com/blog/post/documenting-components/",
              description: "Brad Frost - Boas práticas para documentar componentes de design system"
            }
          ].map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-card rounded-lg border border-border hover:bg-muted/50 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Diretrizes */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Boas Práticas de Documentação</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">Faça</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Documente decisões, não só resultados</li>
              <li>• Mantenha documentação próxima ao código</li>
              <li>• Use templates padronizados</li>
              <li>• Inclua contexto e justificativas</li>
              <li>• Atualize sempre que houver mudanças</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">Evite</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Documentar por documentar (sem propósito)</li>
              <li>• Deixar documentação desatualizada</li>
              <li>• Ser genérico demais nas descrições</li>
              <li>• Ignorar edge cases e estados de erro</li>
              <li>• Espalhar informação em múltiplas ferramentas</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default UXDocumentation;
