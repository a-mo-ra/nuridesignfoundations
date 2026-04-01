import React from 'react';
import DigitalChecklist from '@/components/shared/DigitalChecklist';
import { ExternalLink, FileText, ArrowRight, Layers, BookOpen, Code, CheckCircle, AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const UXDocumentation = () => {
  const { l } = useLanguage();

  return (
    <div className="space-y-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">{l('Documentação UX', 'UX Documentation')}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{l('Como e por que documentar processos de UX. Boas práticas de handoff, documentação de componentes e ferramentas essenciais.', 'How and why to document UX processes. Handoff best practices, component documentation and essential tools.')}</p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{l('Por que documentar processos de UX?', 'Why document UX processes?')}</h2>
        <p className="text-muted-foreground leading-relaxed">{l('Documentar processos de UX garante que decisões de design sejam rastreáveis, replicáveis e compreensíveis por toda a equipe. Sem documentação, o conhecimento fica concentrado em indivíduos e se perde com a rotatividade da equipe.', 'Documenting UX processes ensures that design decisions are traceable, replicable and understandable by the entire team. Without documentation, knowledge is concentrated in individuals and lost with team turnover.')}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={16} className="text-green-600" />
              <span className="font-semibold text-green-800 dark:text-green-300">{l('Benefícios', 'Benefits')}</span>
            </div>
            <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
              <li>• {l('Onboarding acelerado de novos membros', 'Faster onboarding of new members')}</li>
              <li>• {l('Decisões de design rastreáveis', 'Traceable design decisions')}</li>
              <li>• {l('Redução de retrabalho entre times', 'Reduced rework between teams')}</li>
              <li>• {l('Base para evolução do produto', 'Foundation for product evolution')}</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-red-600" />
              <span className="font-semibold text-red-800 dark:text-red-300">{l('Riscos sem documentação', 'Risks without documentation')}</span>
            </div>
            <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
              <li>• {l('Perda de contexto em decisões', 'Loss of context in decisions')}</li>
              <li>• {l('Inconsistências entre entregas', 'Inconsistencies between deliveries')}</li>
              <li>• {l('Dependência de pessoas específicas', 'Dependency on specific people')}</li>
              <li>• {l('Retrabalho constante', 'Constant rework')}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{l('Como documentar', 'How to document')}</h2>
        <p className="text-muted-foreground leading-relaxed">{l('Uma boa documentação de UX deve conter: contexto do problema, pesquisas realizadas, decisões de design, iterações e resultados.', 'Good UX documentation should contain: problem context, research conducted, design decisions, iterations and results.')}</p>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground text-background px-6 py-3 flex items-center gap-2">
            <FileText size={16} />
            <span className="font-medium text-sm">{l('Exemplo: Documentação de Fluxo de Checkout', 'Example: Checkout Flow Documentation')}</span>
          </div>
          <div className="p-6 space-y-4 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-1">📋 {l('Contexto', 'Context')}</h4>
              <p className="text-muted-foreground">{l('Taxa de abandono de carrinho em 68%. Necessidade de simplificar o fluxo de checkout.', 'Cart abandonment rate at 68%. Need to simplify the checkout flow.')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">🔍 {l('Pesquisa', 'Research')}</h4>
              <p className="text-muted-foreground">{l('Testes de usabilidade com 12 participantes. Heatmaps via Hotjar. Análise de funil no GA4.', 'Usability tests with 12 participants. Heatmaps via Hotjar. Funnel analysis on GA4.')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">💡 {l('Decisões de Design', 'Design Decisions')}</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• {l('Reduzir etapas de 5 para 3', 'Reduce steps from 5 to 3')}</li>
                <li>• {l('Adicionar progress bar visual', 'Add visual progress bar')}</li>
                <li>• {l('Implementar auto-fill de endereço via CEP', 'Implement address auto-fill via ZIP code')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">📊 {l('Resultados', 'Results')}</h4>
              <p className="text-muted-foreground">{l('Abandono reduziu para 42% (-26pp). Tempo médio de checkout de 4min para 1min45s.', 'Abandonment reduced to 42% (-26pp). Average checkout time from 4min to 1min45s.')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{l('Handoff: Design → Desenvolvimento', 'Handoff: Design → Development')}</h2>
        <p className="text-muted-foreground leading-relaxed">{l('Handoff é o processo de transferência de especificações de design para a equipe de desenvolvimento. Um bom handoff reduz interpretações erradas e garante fidelidade ao design original.', 'Handoff is the process of transferring design specifications to the development team. A good handoff reduces misinterpretations and ensures fidelity to the original design.')}</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-3">1</div>
            <h4 className="font-semibold text-foreground mb-2">{l('Preparação', 'Preparation')}</h4>
            <p className="text-sm text-muted-foreground">{l('Organize layers, nomeie componentes, documente estados e variações.', 'Organize layers, name components, document states and variations.')}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-3">2</div>
            <h4 className="font-semibold text-foreground mb-2">{l('Especificação', 'Specification')}</h4>
            <p className="text-sm text-muted-foreground">{l('Tokens de cor, tipografia, espaçamentos, breakpoints e comportamentos interativos.', 'Color tokens, typography, spacing, breakpoints and interactive behaviors.')}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-3">3</div>
            <h4 className="font-semibold text-foreground mb-2">{l('Validação', 'Validation')}</h4>
            <p className="text-sm text-muted-foreground">{l('Review conjunto entre designer e dev. QA visual antes do deploy.', 'Joint review between designer and dev. Visual QA before deploy.')}</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground text-background px-6 py-3 flex items-center gap-2">
            <Layers size={16} />
            <span className="font-medium text-sm">{l('Exemplo: Especificação de Handoff - Botão Primário', 'Example: Handoff Specification - Primary Button')}</span>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div><span className="font-medium text-foreground">{l('Componente:', 'Component:')}</span> <span className="text-muted-foreground">Button/Primary</span></div>
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

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{l('Documentação de Componentes com Storybook', 'Component Documentation with Storybook')}</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Storybook</strong> {l('é uma ferramenta open-source para desenvolvimento e documentação de componentes UI isolados. Permite visualizar, testar e documentar cada variação de um componente de forma independente.', 'is an open-source tool for developing and documenting isolated UI components. It allows you to view, test and document each component variation independently.')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">{l('O que é?', 'What is it?')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{l('Um ambiente de desenvolvimento isolado que roda ao lado da aplicação. Cada componente é documentado em "stories" que representam seus diferentes estados e variações.', 'An isolated development environment that runs alongside the application. Each component is documented in "stories" that represent its different states and variations.')}</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">{l('Por que usar?', 'Why use it?')}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {l('Desenvolvimento isolado sem dependências', 'Isolated development without dependencies')}</li>
              <li>• {l('Documentação viva e sempre atualizada', 'Living documentation, always up to date')}</li>
              <li>• {l('Testes visuais automatizados', 'Automated visual testing')}</li>
              <li>• {l('Catálogo interativo de componentes', 'Interactive component catalog')}</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-foreground text-background px-6 py-3 flex items-center gap-2">
            <Code size={16} />
            <span className="font-medium text-sm">{l('Exemplo:', 'Example:')} Button.stories.tsx</span>
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
          <h3 className="font-semibold text-foreground mb-3">{l('Como começar com Storybook', 'Getting started with Storybook')}</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-2">1</div>
              <p className="text-sm text-muted-foreground">{l('Instale com', 'Install with')} <code className="bg-muted px-1.5 py-0.5 rounded text-xs">npx storybook@latest init</code></p>
            </div>
            <div>
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-2">2</div>
              <p className="text-sm text-muted-foreground">{l('Crie arquivos', 'Create')} <code className="bg-muted px-1.5 py-0.5 rounded text-xs">.stories.tsx</code> {l('para cada componente', 'files for each component')}</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold mb-2">3</div>
              <p className="text-sm text-muted-foreground">{l('Execute', 'Run')} <code className="bg-muted px-1.5 py-0.5 rounded text-xs">npm run storybook</code> {l('para visualizar', 'to preview')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{l('Artigos de Referência', 'Reference Articles')}</h2>
        <div className="grid gap-4">
          {[
            { title: "Design Documentation: Best Practices", url: "https://www.nngroup.com/articles/design-documentation/", description: l("Nielsen Norman Group - Melhores práticas de documentação de design", "Nielsen Norman Group - Design documentation best practices") },
            { title: "The Complete Guide to UX Documentation", url: "https://www.interaction-design.org/literature/article/the-complete-guide-to-ux-documentation", description: l("IxDF - Guia completo sobre documentação UX", "IxDF - Complete guide to UX documentation") },
            { title: "Design Handoff Best Practices", url: "https://www.figma.com/best-practices/guide-to-developer-handoff/", description: l("Figma - Guia oficial de handoff para desenvolvedores", "Figma - Official developer handoff guide") },
            { title: "Introduction to Storybook", url: "https://storybook.js.org/docs/get-started/introduction", description: l("Documentação oficial do Storybook - Introdução", "Official Storybook documentation - Introduction") },
            { title: "Component Documentation with Storybook", url: "https://storybook.js.org/docs/writing-docs", description: l("Como escrever documentação de componentes no Storybook", "How to write component documentation in Storybook") },
            { title: "Documenting Components - Brad Frost", url: "https://bradfrost.com/blog/post/documenting-components/", description: l("Brad Frost - Boas práticas para documentar componentes de design system", "Brad Frost - Best practices for documenting design system components") }
          ].map((article, index) => (
            <a key={index} href={article.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-card rounded-lg border border-border hover:bg-muted/50 transition-colors group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{article.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{article.description}</p>
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-6">{l('Boas Práticas de Documentação', 'Documentation Best Practices')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">{l('Faça', 'Do')}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {l('Documente decisões, não só resultados', 'Document decisions, not just results')}</li>
              <li>• {l('Mantenha documentação próxima ao código', 'Keep documentation close to the code')}</li>
              <li>• {l('Use templates padronizados', 'Use standardized templates')}</li>
              <li>• {l('Inclua contexto e justificativas', 'Include context and justifications')}</li>
              <li>• {l('Atualize sempre que houver mudanças', 'Update whenever there are changes')}</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight size={16} className="text-foreground" />
              <h3 className="font-semibold text-foreground">{l('Evite', 'Avoid')}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• {l('Documentar por documentar (sem propósito)', 'Document for the sake of documenting (no purpose)')}</li>
              <li>• {l('Deixar documentação desatualizada', 'Leave documentation outdated')}</li>
              <li>• {l('Ser genérico demais nas descrições', 'Be too generic in descriptions')}</li>
              <li>• {l('Ignorar edge cases e estados de erro', 'Ignore edge cases and error states')}</li>
              <li>• {l('Espalhar informação em múltiplas ferramentas', 'Spread information across multiple tools')}</li>
            </ul>
          </div>
        </div>
      </div>
      <DigitalChecklist />
    </div>
  );
};

export default UXDocumentation;
