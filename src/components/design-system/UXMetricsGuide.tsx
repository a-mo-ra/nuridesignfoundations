import React from 'react';
import { BarChart3, Users, Target, TrendingUp, Clock, ExternalLink, AlertTriangle, CheckCircle, Info, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface UXMetricsGuideProps {
  onBack: () => void;
}

const UXMetricsGuide = ({ onBack }: UXMetricsGuideProps) => {
  const { l } = useLanguage();
  const taskMetrics = [
    {
      name: 'Taxa de Conclusão de Tarefas',
      description: 'Percentual de usuários que completam uma tarefa com sucesso.',
      howToUse: 'Defina tarefas-chave e meça quantos usuários as completam sem ajuda.',
      whenToUse: 'Em testes de usabilidade, avaliações de fluxo e validação de redesign.',
      whyToUse: 'Indica diretamente se o produto é funcional e intuitivo.',
      benchmark: '≥ 78% (média segundo NNGroup)'
    },
    {
      name: 'Tempo para Completar Tarefa',
      description: 'Tempo médio que os usuários levam para finalizar uma tarefa.',
      howToUse: 'Cronometre desde o início da tarefa até a conclusão. Compare com benchmarks.',
      whenToUse: 'Ao comparar versões de um fluxo ou ao validar otimizações.',
      whyToUse: 'Quanto menor o tempo, mais eficiente é a experiência.',
      benchmark: 'Varia por tarefa – compare com versões anteriores'
    },
    {
      name: 'Taxa de Erro',
      description: 'Percentual de ações incorretas ou problemas encontrados.',
      howToUse: 'Registre erros durante testes de usabilidade ou via analytics.',
      whenToUse: 'Ao identificar pontos de fricção ou validar melhorias.',
      whyToUse: 'Erros frequentes indicam problemas de usabilidade críticos.',
      benchmark: '< 10% para fluxos críticos'
    },
    {
      name: 'Cliques para Conclusão',
      description: 'Número de interações necessárias para completar uma tarefa.',
      howToUse: 'Conte ações do usuário (cliques, taps, inputs) para cada tarefa.',
      whenToUse: 'Ao simplificar fluxos ou reduzir complexidade.',
      whyToUse: 'Mais cliques = mais fricção = maior taxa de abandono.',
      benchmark: 'Buscar reduzir 20-30% entre iterações'
    }
  ];

  const engagementMetrics = [
    {
      name: 'Tempo na Página',
      description: 'Duração média da sessão do usuário.',
      howToUse: 'Use Google Analytics, Mixpanel ou Amplitude para rastrear.',
      whenToUse: 'Para entender engajamento com conteúdo ou funcionalidades.',
      whyToUse: 'Tempo alto pode indicar engajamento OU confusão – analise o contexto.'
    },
    {
      name: 'Taxa de Retorno',
      description: 'Percentual de usuários que voltam ao produto.',
      howToUse: 'Meça Cohort Retention – D1, D7, D30.',
      whenToUse: 'Após lançamentos ou mudanças significativas.',
      whyToUse: 'Indica se o produto cria valor recorrente.'
    },
    {
      name: 'Páginas por Sessão',
      description: 'Número médio de páginas visitadas por sessão.',
      howToUse: 'Configure eventos de pageview em analytics.',
      whenToUse: 'Para entender profundidade de navegação.',
      whyToUse: 'Indica se os usuários exploram o produto ou abandonam rápido.'
    },
    {
      name: 'Taxa de Conversão',
      description: 'Percentual de visitantes que executam a ação desejada.',
      howToUse: 'Defina metas (signup, compra, download) e rastreie com funnel analytics.',
      whenToUse: 'Ao otimizar funis de conversão.',
      whyToUse: 'KPI direto de eficácia do produto.'
    }
  ];

  const satisfactionMetrics = [
    {
      name: 'Net Promoter Score (NPS)',
      description: 'Mede a probabilidade do usuário recomendar o produto (0-10).',
      howToUse: 'Pergunta: "Qual a probabilidade de recomendar?" → Promotores (9-10) - Detratores (0-6).',
      whenToUse: 'Trimestralmente ou após grandes releases.',
      whyToUse: 'Métrica padrão de mercado para satisfação.'
    },
    {
      name: 'Customer Satisfaction (CSAT)',
      description: 'Avaliação direta da satisfação (1-5 ou 1-7).',
      howToUse: 'Survey pós-interação com escala simples.',
      whenToUse: 'Após interações específicas (suporte, compra, onboarding).',
      whyToUse: 'Feedback pontual e contextualizado.'
    },
    {
      name: 'System Usability Scale (SUS)',
      description: 'Questionário padronizado de 10 perguntas (score 0-100).',
      howToUse: 'Aplique o questionário SUS após teste de usabilidade.',
      whenToUse: 'Em avaliações comparativas e benchmarks.',
      whyToUse: 'Métrica validada cientificamente com benchmarks estabelecidos. Score > 68 = acima da média.'
    }
  ];

  const businessMetrics = [
    {
      name: 'Customer Lifetime Value (CLV)',
      description: 'Receita total esperada de um cliente durante todo o relacionamento.',
      howToUse: 'CLV = Valor Médio de Compra × Frequência de Compra × Tempo de Retenção.',
      whenToUse: 'Para justificar investimentos em UX e priorizar features.',
      whyToUse: 'UX melhor → maior retenção → maior CLV.'
    },
    {
      name: 'Customer Acquisition Cost (CAC)',
      description: 'Custo total para adquirir um novo cliente.',
      howToUse: 'CAC = Investimento Total em Marketing e Vendas ÷ Número de Novos Clientes.',
      whenToUse: 'Ao avaliar eficiência de onboarding e primeiras interações.',
      whyToUse: 'UX otimizada reduz fricção no onboarding e reduz CAC.'
    },
    {
      name: 'Churn Rate',
      description: 'Taxa de cancelamento ou abandono de clientes.',
      howToUse: 'Churn = Clientes perdidos no período ÷ Clientes no início do período.',
      whenToUse: 'Mensalmente. Correlacione com mudanças de UX.',
      whyToUse: 'Problemas de usabilidade são uma das principais causas de churn.'
    },
    {
      name: 'Revenue per User (ARPU)',
      description: 'Receita média por usuário ativo.',
      howToUse: 'ARPU = Receita Total ÷ Número de Usuários Ativos.',
      whenToUse: 'Para medir impacto de UX em monetização.',
      whyToUse: 'Experiências melhores levam a maior engajamento e conversão.'
    }
  ];

  const tools = [
    {
      category: 'Analytics Quantitativo',
      items: [
        { name: 'Google Analytics 4', description: 'Analytics web/app gratuito com eventos e funis', url: 'https://analytics.google.com' },
        { name: 'Mixpanel', description: 'Analytics de produto com foco em eventos e cohorts', url: 'https://mixpanel.com' },
        { name: 'Amplitude', description: 'Analytics avançado com mapas de jornada', url: 'https://amplitude.com' },
        { name: 'PostHog', description: 'Analytics open-source com session replay', url: 'https://posthog.com' }
      ]
    },
    {
      category: 'Analytics Qualitativo',
      items: [
        { name: 'Hotjar', description: 'Heatmaps, gravações de sessão e surveys', url: 'https://hotjar.com' },
        { name: 'FullStory', description: 'Session replay com busca por frustração', url: 'https://fullstory.com' },
        { name: 'Maze', description: 'Testes de usabilidade remotos com métricas', url: 'https://maze.co' },
        { name: 'UserTesting', description: 'Plataforma de pesquisa com participantes reais', url: 'https://usertesting.com' }
      ]
    },
    {
      category: 'Surveys e Feedback',
      items: [
        { name: 'Typeform', description: 'Surveys conversacionais com alta taxa de resposta', url: 'https://typeform.com' },
        { name: 'SurveyMonkey', description: 'Pesquisas com templates NPS, CSAT, SUS', url: 'https://surveymonkey.com' },
        { name: 'Canny', description: 'Coleta de feedback e roadmap público', url: 'https://canny.io' }
      ]
    },
    {
      category: 'Performance e Acessibilidade',
      items: [
        { name: 'Lighthouse', description: 'Auditoria de performance, acessibilidade e SEO', url: 'https://developer.chrome.com/docs/lighthouse' },
        { name: 'axe DevTools', description: 'Teste de acessibilidade automatizado', url: 'https://www.deque.com/axe/' },
        { name: 'WebPageTest', description: 'Análise detalhada de performance web', url: 'https://webpagetest.org' }
      ]
    }
  ];

  const referenceArticles = [
    {
      title: 'Measuring UX and ROI - Nielsen Norman Group',
      url: 'https://www.nngroup.com/articles/usability-roi-declining-returns/',
      description: 'Como calcular o ROI de investimentos em UX'
    },
    {
      title: 'HEART Framework - Google',
      url: 'https://research.google/pubs/pub36299/',
      description: 'Framework de métricas UX do Google: Happiness, Engagement, Adoption, Retention, Task Success'
    },
    {
      title: 'Product Metrics That Matter - Amplitude',
      url: 'https://amplitude.com/blog/product-metrics',
      description: 'Como escolher e implementar métricas de produto'
    },
    {
      title: 'The Psychology of Design - Laws of UX',
      url: 'https://lawsofux.com/',
      description: 'Princípios psicológicos aplicados ao design de interfaces'
    },
    {
      title: 'Measuring Design System Success',
      url: 'https://www.designsystems.com/measuring-design-system-success/',
      description: 'Como medir o impacto de um design system na organização'
    }
  ];

  const renderMetricCard = (metric: any, index: number) => (
    <div key={index} className="bg-card border border-border rounded-xl p-6 space-y-3">
      <h4 className="font-semibold text-foreground text-lg">{metric.name}</h4>
      <p className="text-sm text-muted-foreground">{metric.description}</p>
      {metric.benchmark && (
        <div className="bg-primary/10 border border-primary/20 rounded-lg px-3 py-2">
          <span className="text-xs font-medium text-primary">Benchmark: {metric.benchmark}</span>
        </div>
      )}
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-foreground">Como usar:</span>
          <p className="text-muted-foreground">{metric.howToUse}</p>
        </div>
        <div>
          <span className="font-medium text-foreground">Quando usar:</span>
          <p className="text-muted-foreground">{metric.whenToUse}</p>
        </div>
        <div>
          <span className="font-medium text-foreground">Por que usar:</span>
          <p className="text-muted-foreground">{metric.whyToUse}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-16">
      {/* Header with back button */}
      <div>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Voltar para Diretrizes
        </button>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">
            Guia Completo de Métricas UX
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Todas as métricas essenciais para medir a qualidade da experiência do usuário e o impacto no negócio. 
            Inclui métricas de tarefa, engajamento, satisfação e negócio.
          </p>
        </div>
      </div>

      {/* Info alert */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={16} className="text-amber-600" />
          <span className="font-semibold text-amber-800 dark:text-amber-300">Dica importante</span>
        </div>
        <p className="text-sm text-amber-700 dark:text-amber-400">
          Não tente medir tudo ao mesmo tempo. Escolha 3-5 métricas alinhadas com seus objetivos de negócio e acompanhe-as consistentemente. Métricas sem contexto podem levar a decisões erradas.
        </p>
      </div>

      {/* Task Metrics */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
            <Target size={20} className="text-background" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Métricas de Tarefa</h2>
            <p className="text-sm text-muted-foreground">Medem a capacidade do usuário de completar objetivos</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {taskMetrics.map(renderMetricCard)}
        </div>
      </section>

      {/* Engagement Metrics */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
            <TrendingUp size={20} className="text-background" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Métricas de Engajamento</h2>
            <p className="text-sm text-muted-foreground">Medem como os usuários interagem com o produto</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {engagementMetrics.map(renderMetricCard)}
        </div>
      </section>

      {/* Satisfaction Metrics */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
            <Users size={20} className="text-background" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Métricas de Satisfação</h2>
            <p className="text-sm text-muted-foreground">Medem a percepção subjetiva do usuário</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {satisfactionMetrics.map(renderMetricCard)}
        </div>
      </section>

      {/* Business Metrics */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
            <BarChart3 size={20} className="text-background" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Métricas de Negócio</h2>
            <p className="text-sm text-muted-foreground">Conectam UX ao impacto financeiro e estratégico</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {businessMetrics.map(renderMetricCard)}
        </div>

        {/* Success alert */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={16} className="text-green-600" />
            <span className="font-semibold text-green-800 dark:text-green-300">Boa prática</span>
          </div>
          <p className="text-sm text-green-700 dark:text-green-400">
            Correlacione métricas de UX com métricas de negócio para demonstrar ROI. Por exemplo: "Ao reduzir o tempo de checkout em 30%, aumentamos a conversão em 15% e o ARPU em 8%."
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Ferramentas para Insights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((category) => (
            <div key={category.category} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">{tool.name}</span>
                      <p className="text-xs text-muted-foreground">{tool.description}</p>
                    </div>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reference Articles */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Artigos de Referência</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {referenceArticles.map((ref) => (
            <a
              key={ref.title}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-elevation-2 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {ref.title}
                </h3>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
              </div>
              <p className="text-xs text-muted-foreground">{ref.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UXMetricsGuide;
