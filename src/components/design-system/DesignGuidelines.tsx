
import React, { useState } from 'react';
import { BookOpen, Users, Target, Lightbulb, CheckCircle, AlertTriangle, Zap, Eye, Heart, ExternalLink, Shield, Code, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface DesignGuidelinesProps {
  onNavigate?: (section: string) => void;
}

const DesignGuidelines = ({ onNavigate }: DesignGuidelinesProps = {}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('why-design-system');

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const referenceLinks = [
    {
      title: "Design Systems 101: What is a Design System?",
      url: "https://www.figma.com/blog/design-systems-101-what-is-a-design-system/",
      description: "Guia completo da Figma sobre fundamentos de design systems"
    },
    {
      title: "User Interface Design Guidelines: 10 Rules of Thumb",
      url: "https://www.interaction-design.org/literature/article/user-interface-design-guidelines-10-rules-of-thumb",
      description: "Diretrizes essenciais para design de interface do usuário"
    },
    {
      title: "Typography Guides",
      url: "https://www.designsystems.com/typography-guides/",
      description: "Melhores práticas para tipografia em design systems"
    },
    {
      title: "Como as Heurísticas de Nielsen podem ajudar a desenvolver o Design System",
      url: "https://brasil.uxdesign.cc/como-as-heur%C3%ADsticas-de-nielsen-podem-ajudar-a-desenvolver-o-design-system-a6a943bf9d55",
      description: "Aplicação das heurísticas de Nielsen em design systems"
    },
    {
      title: "Design Systems 101",
      url: "https://www.nngroup.com/articles/design-systems-101/",
      description: "Fundamentos de design systems pelo Nielsen Norman Group"
    },
    {
      title: "Atomic Design by Brad Frost",
      url: "https://atomicdesign.bradfrost.com/",
      description: "Metodologia Atomic Design - livro completo online"
    },
    {
      title: "Auto Layout Best Practices - Figma",
      url: "https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout",
      description: "Guia oficial do Figma sobre Auto Layout"
    },
    {
      title: "WCAG 2.2 Guidelines - W3C",
      url: "https://www.w3.org/TR/WCAG22/",
      description: "Diretrizes de Acessibilidade para Conteúdo Web 2.2"
    },
    {
      title: "A11Y Project - Accessibility Checklist",
      url: "https://www.a11yproject.com/checklist/",
      description: "Checklist completo de acessibilidade web"
    },
    {
      title: "Understanding WCAG 2.2",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/",
      description: "Guia de compreensão das diretrizes WCAG 2.2"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-foreground tracking-tight mb-4">Diretrizes Nuri</h1>
        <p className="text-lg text-muted-foreground">Princípios fundamentais e melhores práticas para experiência do usuário</p>
      </div>

      {/* Por que um Sistema de Design? */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <button
          onClick={() => toggleSection('why-design-system')}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <Layers size={16} className="text-background" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Por que um Sistema de Design?</h3>
          </div>
          <div className={`transform transition-transform ${expandedSection === 'why-design-system' ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {expandedSection === 'why-design-system' && (
          <div className="mt-6 space-y-6">
            <p className="text-gray-600 dark:text-gray-400">
              Um design system é fundamental para criar experiências digitais consistentes, eficientes e escaláveis. 
              Segundo pesquisas do Nielsen Norman Group, produtos com sistemas de design bem implementados têm:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-green-600" size={16} />
                  <span className="font-semibold text-green-800 dark:text-green-300 text-lg">38% menos ritmo de desenvolvimento</span>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Componentes reutilizáveis aceleram o processo
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-purple-600" size={16} />
                  <span className="font-semibold text-purple-800 dark:text-purple-300 text-lg">52% de redução de bugs de interface</span>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Padrões testados garantem qualidade
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-blue-600" size={16} />
                  <span className="font-semibold text-blue-800 dark:text-blue-300 text-lg">47% de melhoria na experiência do usuário</span>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Interface consistente reduz a curva de aprendizado
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="text-amber-600" size={16} />
                  <span className="font-semibold text-amber-800 dark:text-amber-300 text-lg">34% economia em manutenção</span>
                </div>
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  Centralização facilita atualizações
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Diretrizes de Acessibilidade WCAG 2.2 */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <button
          onClick={() => toggleSection('accessibility')}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <Shield size={16} className="text-background" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Diretrizes de Acessibilidade WCAG 2.2</h3>
          </div>
          <div className={`transform transition-transform ${expandedSection === 'accessibility' ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {expandedSection === 'accessibility' && (
          <div className="mt-6 space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700 mb-6">
              <p className="text-sm text-purple-800 dark:text-purple-300">
                <strong>WCAG 2.2</strong> foi publicado em outubro de 2023 e adiciona 9 novos critérios de sucesso focados em usuários com deficiências cognitivas e de mobilidade. Seguimos rigorosamente o nível <strong>AA</strong> como padrão mínimo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="text-blue-600" size={16} />
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300">Perceptível</h4>
                  </div>
                  <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                    <li>• Contraste mínimo de 4.5:1 para texto normal</li>
                    <li>• Contraste mínimo 3:1 para texto grande (18pt+)</li>
                    <li>• Contraste 3:1 para componentes UI e gráficos</li>
                    <li>• Alternativas textuais para imagens</li>
                    <li>• Conteúdo adaptável a diferentes apresentações</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="text-green-600" size={16} />
                    <h4 className="font-semibold text-green-800 dark:text-green-300">Operável</h4>
                  </div>
                  <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                    <li>• Navegação por teclado completa</li>
                    <li>• <strong className="text-green-800 dark:text-green-200">2.5.7 Dragging Movements (AA)</strong> - Alternativas para arrastar</li>
                    <li>• <strong className="text-green-800 dark:text-green-200">2.5.8 Target Size Minimum (AA)</strong> - Área de toque mínima 24x24px</li>
                    <li>• Sem conteúdo piscante excessivo</li>
                    <li>• <strong className="text-green-800 dark:text-green-200">2.4.11 Focus Not Obscured (AA)</strong> - Foco sempre visível</li>
                    <li>• <strong className="text-green-800 dark:text-green-200">2.4.13 Focus Appearance (AAA)</strong> - Indicador de foco robusto</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-purple-600" size={16} />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-300">Compreensível</h4>
                  </div>
                  <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                    <li>• Linguagem clara e simples</li>
                    <li>• Comportamento previsível</li>
                    <li>• <strong className="text-purple-800 dark:text-purple-200">3.2.6 Consistent Help (A)</strong> - Ajuda consistente</li>
                    <li>• <strong className="text-purple-800 dark:text-purple-200">3.3.7 Redundant Entry (A)</strong> - Evitar entrada redundante</li>
                    <li>• <strong className="text-purple-800 dark:text-purple-200">3.3.8 Accessible Authentication (AA)</strong> - Login acessível</li>
                    <li>• Identificação e correção de erros</li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="text-amber-600" size={16} />
                    <h4 className="font-semibold text-amber-800 dark:text-amber-300">Robusto</h4>
                  </div>
                  <ul className="text-sm text-amber-700 dark:text-amber-400 space-y-1">
                    <li>• Compatibilidade com tecnologias assistivas</li>
                    <li>• Código semântico válido (HTML5)</li>
                    <li>• Atributos ARIA seguros e bem implementados</li>
                    <li>• Testado com NVDA, JAWS, VoiceOver</li>
                    <li>• Suporte a zoom até 400%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Novos critérios WCAG 2.2 destacados */}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
                ✨ Novos Critérios WCAG 2.2 (Outubro 2023)
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <h5 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">Focus Appearance (2.4.11)</h5>
                  <p className="text-indigo-700 dark:text-indigo-400 text-xs">
                    O indicador de foco deve ter área mínima de 2px de perímetro e contraste 3:1.
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <h5 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">Target Size (2.5.8)</h5>
                  <p className="text-indigo-700 dark:text-indigo-400 text-xs">
                    Alvos interativos devem ter no mínimo 24x24px (ou 44x44px para AAA).
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-black/20 p-3 rounded-lg">
                  <h5 className="font-medium text-indigo-800 dark:text-indigo-300 mb-2">Accessible Auth (3.3.8)</h5>
                  <p className="text-indigo-700 dark:text-indigo-400 text-xs">
                    Login não deve exigir testes cognitivos (ex: resolver CAPTCHA de texto).
                  </p>
                </div>
              </div>
            </div>

            {/* Implementações ARIA */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Implementações ARIA em Código</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Labels e Descrições</h5>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• aria-label para elementos sem texto</li>
                    <li>• aria-labelledby para referências</li>
                    <li>• aria-describedby para informações extras</li>
                    <li>• role para definir função do elemento</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Estados e Propriedades</h5>
                  <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• aria-expanded para elementos expansíveis</li>
                    <li>• aria-selected para seleções</li>
                    <li>• aria-hidden para conteúdo decorativo</li>
                    <li>• aria-live para atualizações dinâmicas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Link para documentação oficial */}
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <a 
                href="https://www.w3.org/TR/WCAG22/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between text-blue-700 dark:text-blue-300 hover:underline"
              >
                <span className="font-medium">📖 Documentação Oficial WCAG 2.2 (W3C)</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Fundamentos */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <button
          onClick={() => toggleSection('fundamentals')}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <Target size={16} className="text-background" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Fundamentos UX</h3>
          </div>
          <div className={`transform transition-transform ${expandedSection === 'fundamentals' ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {expandedSection === 'fundamentals' && (
          <div className="mt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="text-blue-600" size={16} />
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300">Centrado no Usuário</h4>
                </div>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Todas as decisões de design devem ser baseadas nas necessidades reais dos usuários, 
                  validadas através de pesquisa e testes de usabilidade.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-green-600" size={16} />
                  <h4 className="font-semibold text-green-800 dark:text-green-300">Simplicidade</h4>
                </div>
                <p className="text-sm text-green-700 dark:text-green-400">
                  Menos é mais. Remova elementos desnecessários e mantenha apenas o essencial 
                  para que o usuário complete suas tarefas com eficiência.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="text-purple-600" size={16} />
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300">Consistência</h4>
                </div>
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  Mantenha padrões visuais e comportamentais em toda a interface. 
                  Elementos similares devem ter aparência e comportamento similares.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="text-amber-600" size={16} />
                  <h4 className="font-semibold text-amber-800 dark:text-amber-300">Acessibilidade</h4>
                </div>
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  Design inclusivo que funciona para todos, independente de habilidades, 
                  dispositivos ou contextos de uso.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Heurísticas de Nielsen */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <button
          onClick={() => toggleSection('heuristics')}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <Lightbulb size={16} className="text-background" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">10 Heurísticas de Nielsen</h3>
          </div>
          <div className={`transform transition-transform ${expandedSection === 'heuristics' ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {expandedSection === 'heuristics' && (
          <div className="mt-6 space-y-4">
            {[
              {
                title: "1. Visibilidade do Status do Sistema",
                description: "Mantenha os usuários informados sobre o que está acontecendo através de feedback apropriado."
              },
              {
                title: "2. Correspondência entre Sistema e Mundo Real",
                description: "Use linguagem familiar e conceitos que os usuários já conhecem do mundo real."
              },
              {
                title: "3. Controle e Liberdade do Usuário",
                description: "Forneça saídas claras para situações indesejadas, com desfazer e refazer."
              },
              {
                title: "4. Consistência e Padrões",
                description: "Siga convenções estabelecidas e mantenha consistência em toda a interface."
              },
              {
                title: "5. Prevenção de Erros",
                description: "Design que previne problemas antes que eles ocorram."
              },
              {
                title: "6. Reconhecimento ao invés de Lembrança",
                description: "Torne objetos, ações e opções visíveis para reduzir carga cognitiva."
              },
              {
                title: "7. Flexibilidade e Eficiência de Uso",
                description: "Permita personalização para usuários experientes sem prejudicar iniciantes."
              },
              {
                title: "8. Design Estético e Minimalista",
                description: "Diálogos não devem conter informação irrelevante ou raramente necessária."
              },
              {
                title: "9. Ajuda Usuários a Reconhecer, Diagnosticar e Recuperar de Erros",
                description: "Mensagens de erro em linguagem simples que indicam o problema e sugerem soluções."
              },
              {
                title: "10. Ajuda e Documentação",
                description: "Forneça informação que pode ser facilmente pesquisada e focada na tarefa do usuário."
              }
            ].map((heuristic, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">{heuristic.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{heuristic.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Processo de Design */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <button
          onClick={() => toggleSection('process')}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <Heart size={16} className="text-background" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Processo de Design</h3>
          </div>
          <div className={`transform transition-transform ${expandedSection === 'process' ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {expandedSection === 'process' && (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4">
              {[
                {
                  phase: "Descoberta",
                  description: "Pesquisa de usuários, análise de requisitos, definição de problemas",
                  color: "blue"
                },
                {
                  phase: "Ideação",
                  description: "Brainstorming, sketches, wireframes, arquitetura da informação",
                  color: "purple"
                },
                {
                  phase: "Prototipação",
                  description: "Protótipos de baixa e alta fidelidade, testes de conceito",
                  color: "green"
                },
                {
                  phase: "Teste",
                  description: "Testes de usabilidade, validação com usuários reais",
                  color: "amber"
                },
                {
                  phase: "Implementação",
                  description: "Desenvolvimento, documentação, handoff para dev",
                  color: "red"
                },
                {
                  phase: "Iteração",
                  description: "Análise de métricas, feedback dos usuários, melhorias contínuas",
                  color: "indigo"
                }
              ].map((step, index) => (
                <div key={index} className={`bg-${step.color}-50 dark:bg-${step.color}-900/20 p-4 rounded-lg border border-${step.color}-200 dark:border-${step.color}-700`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 bg-${step.color}-600 text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                      {index + 1}
                    </div>
                    <h4 className={`font-semibold text-${step.color}-800 dark:text-${step.color}-300`}>{step.phase}</h4>
                  </div>
                  <p className={`text-sm text-${step.color}-700 dark:text-${step.color}-400 ml-11`}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Checklist de Qualidade */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <button
          onClick={() => toggleSection('checklist')}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <CheckCircle size={16} className="text-background" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Checklist de Qualidade UX</h3>
          </div>
          <div className={`transform transition-transform ${expandedSection === 'checklist' ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {expandedSection === 'checklist' && (
          <div className="mt-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Usabilidade</h4>
                <div className="space-y-2">
                  {[
                    "Navegação intuitiva e clara",
                    "Feedback visual para todas as ações",
                    "Tempo de carregamento otimizado",
                    "Formulários simples e diretos",
                    "Mensagens de erro úteis"
                  ].map((item, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Acessibilidade</h4>
                <div className="space-y-2">
                  {[
                    "Contraste adequado (WCAG AA)",
                    "Navegação por teclado",
                    "Textos alternativos em imagens",
                    "Hierarquia de títulos correta",
                    "Foco visível em elementos interativos"
                  ].map((item, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Performance</h4>
                <div className="space-y-2">
                  {[
                    "Imagens otimizadas",
                    "Lazy loading implementado",
                    "CSS e JS minificados",
                    "Cache adequadamente configurado",
                    "Responsividade testada"
                  ].map((item, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Conteúdo</h4>
                <div className="space-y-2">
                  {[
                    "Linguagem clara e objetiva",
                    "Hierarquia visual bem definida",
                    "Call-to-actions evidentes",
                    "Informações organizadas logicamente",
                    "Microtextos úteis e orientativos"
                  ].map((item, index) => (
                    <label key={index} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Referências e Fontes */}
      <div className="bg-card rounded-xl p-6 shadow-elevation-2 border border-border">
        <button
          onClick={() => toggleSection('references')}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <BookOpen size={16} className="text-background" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Referências e Fontes</h3>
          </div>
          <div className={`transform transition-transform ${expandedSection === 'references' ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </button>

        {expandedSection === 'references' && (
          <div className="mt-6 space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Fontes essenciais para aprofundar conhecimentos em UX Design e Design Systems:
            </p>
            
            <div className="grid gap-4">
              {referenceLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0 ml-3" />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-2">📚 Leituras Complementares</h4>
              <ul className="text-sm text-indigo-700 dark:text-indigo-400 space-y-1">
                <li>• "Don't Make Me Think" - Steve Krug</li>
                <li>• "The Design of Everyday Things" - Don Norman</li>
                <li>• "Atomic Design" - Brad Frost</li>
                <li>• "Design Systems" - Alla Kholmatova</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Métricas e KPIs */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-purple-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Métricas de Sucesso UX</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Métricas de Tarefa</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Taxa de conclusão de tarefas</li>
              <li>• Tempo para completar tarefa</li>
              <li>• Taxa de erro</li>
              <li>• Cliques para conclusão</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Métricas de Engajamento</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Tempo na página</li>
              <li>• Taxa de retorno</li>
              <li>• Páginas por sessão</li>
              <li>• Taxa de conversão</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Métricas de Satisfação</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Net Promoter Score (NPS)</li>
              <li>• Customer Satisfaction (CSAT)</li>
              <li>• System Usability Scale (SUS)</li>
              <li>• Feedback qualitativo</li>
            </ul>
          </div>
        </div>
        {onNavigate && (
          <button
            onClick={() => onNavigate('ux-metrics')}
            className="flex items-center gap-2 mt-6 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Guia Completo de Métricas UX
            <ExternalLink size={14} />
          </button>
        )}
      </div>

      {/* Ferramentas Recomendadas */}
      <div className="bg-white dark:bg-black rounded-xl p-6 shadow-elevation-2 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">🛠️ Ferramentas Recomendadas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Design & Prototipação</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Figma</span>
                <span className="text-purple-600 font-medium">Recomendado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Sketch</span>
                <span className="text-gray-500">Alternativa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Adobe XD</span>
                <span className="text-gray-500">Alternativa</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-3">Testes & Analytics</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Hotjar</span>
                <span className="text-purple-600 font-medium">Heatmaps</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Google Analytics</span>
                <span className="text-purple-600 font-medium">Métricas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">UsabilityHub</span>
                <span className="text-gray-500">Testes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGuidelines;
